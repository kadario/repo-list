//**Libs */
import { create } from 'zustand';
import axios from "axios";

//**Types */
import type { RepositoryItem, SearchResults } from '@common-types/RepositoryItemType';
import type { SortByOptions } from '@common-types/SortType';
interface ExecuteSearchArguments {
  (searchQuery: string, 
  items_per_page?: number, 
  page?: number): void;
}

interface SearchStore {
  query: string;
  searchTypingResults: RepositoryItem[];
  searchOnclickResults: RepositoryItem[];
  totalCount?: number;
  loading?: boolean;
  error?: string;
  page: number;
  sortOption: SortByOptions;
  cache: Map<string, SearchResults>;
  setSortOption: (sort: SortByOptions) => void;
  setQuery: (query: string) => void;
  setSearchTypingResults: (results: RepositoryItem[]) => void;
  setSearchOnclickResults: (results: RepositoryItem[]) => void;
  setPage: (page: number) => void;
  executeSearch: ExecuteSearchArguments;
  executeSort: () => void;
}

type initialSearchStore = Pick<SearchStore, 'query' | "searchTypingResults" | "searchOnclickResults" | "totalCount" | "loading" | "error" | "page" | "sortOption" | "cache">

import { API_URL } from "@/constants/api";

const initialState: initialSearchStore = {
  query: '',
  searchTypingResults: [],
  searchOnclickResults: [],
  totalCount: 0,
  loading: false,
  error: '',
  page: 0,
  sortOption: 'default' as SortByOptions,
  cache: new Map(),
};

const setData = (set: (object: Partial<SearchStore>) => void, get: () => SearchStore, data: SearchResults, typing: boolean) => {
  if (typing) {
    set({searchTypingResults: data.items || [], totalCount: data.total_count || 0});
  } else {
    set({searchOnclickResults: data.items || [], totalCount: data.total_count || 0, searchTypingResults: [], loading: false});  

    if (get().sortOption !== 'default') {
      get().executeSort();
    }
  }
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  ...initialState,
  setQuery: (query: string) => set({ query }),
  setPage: (page: number) => set({ page }),
  setSortOption: (sortOption: SortByOptions) => set({ sortOption }),
  setSearchTypingResults: (results: RepositoryItem[]) => set({ searchTypingResults: results }),
  setSearchOnclickResults: (results: RepositoryItem[]) => set({ searchOnclickResults: results }),
  executeSearch: (searchQuery, items_per_page = 5, page = 1) => {
    const typing: boolean = items_per_page === 5; 
    const apiUrl: string = `${API_URL}/search/repositories?q=${searchQuery}&per_page=${items_per_page}&page=${page}`;
    const cache: Map<string, SearchResults> = get().cache;

    set({ error: '' });
    
    if (!searchQuery) {
      set({ searchTypingResults: [], loading: false });
      return;
    }
    
    if (!typing) set({ loading: true});

    if (cache.get(apiUrl)) {
      setData(set, get, cache.get(apiUrl) as SearchResults, typing);
    } else {
      axios.get(apiUrl)
          .then((response) => {
            setData(set, get, response.data, typing);
            cache.set(apiUrl, response.data);
          })
          .catch((error) => {
            set({searchOnclickResults: [], loading: false, error: error.message || 'Error fetching posts', page: 0});
          });
    }
    
  },

  executeSort: () => {
    const sortedResults = [...get().searchOnclickResults];
    const sortOption = get().sortOption;
    
    switch (sortOption) {
      case 'stars-asc':
        sortedResults.sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;
      case 'stars-desc':
        sortedResults.sort((a, b) => a.stargazers_count - b.stargazers_count);
        break;
      case 'forks-asc':
        sortedResults.sort((a, b) => b.forks_count - a.forks_count);
        break;
      case 'forks-desc':
        sortedResults.sort((a, b) => a.forks_count - b.forks_count);
        break;
      case 'updated':
        sortedResults.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        break;
      case 'default':
        sortedResults.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        break;
      default:
        break;
    }

    set({ searchOnclickResults: sortedResults });
  }
}));