//**Libs */
import { create } from 'zustand';
import axios from "axios";

//**Types */
import type { RepositoryItem } from '@/common-types/RepositoryItemType';
import type { SortByOptions } from '@/common-types/SortType';
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
  setSortOption: (sort: SortByOptions) => void;
  setQuery: (query: string) => void;
  setSearchTypingResults: (results: RepositoryItem[]) => void;
  setSearchOnclickResults: (results: RepositoryItem[]) => void;
  setPage: (page: number) => void;
  executeSearch: ExecuteSearchArguments;
  executeSort: () => void;
}

import { API_URL } from "@/constants/api";

export const useSearchStore = create<SearchStore>((set, get) => ({
  query: '',
  totalCount: 0,
  searchTypingResults: [],
  searchOnclickResults: [],
  loading: false,
  error: '',
  page: 0,
  sortOption: 'default' as SortByOptions,
  setQuery: (query: string) => set({ query }),
  setPage: (page: number) => set({ page }),
  setSortOption: (sortOption: SortByOptions) => set({ sortOption }),
  setSearchTypingResults: (results: RepositoryItem[]) => set({ searchTypingResults: results }),
  setSearchOnclickResults: (results: RepositoryItem[]) => set({ searchOnclickResults: results }),
  executeSearch: (searchQuery, items_per_page = 5, page = 1) => {
    const typing: boolean = items_per_page === 5; 

    set({ error: '' });
    
    if (!searchQuery) {
      set({ searchTypingResults: [], loading: false });
      return;
    }
    if (!typing) set({ loading: true});
    
    axios
        .get(
          `${API_URL}/search/repositories?q=${searchQuery}&per_page=${items_per_page}&page=${page}`
        )
        .then((response) => {
          if (typing) {
            set({searchTypingResults: response.data.items || [], totalCount: response.data.total_count || 0});
          } else {
            set({searchOnclickResults: response.data.items || [], totalCount: response.data.total_count || 0, searchTypingResults: [], loading: false});  

            if (get().sortOption !== 'default') {
              get().executeSort();
            }
          }
        })
        .catch((error) => {
          set({searchOnclickResults: [], loading: false, error: error.message || 'Error fetching posts', page: 0});
        });
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