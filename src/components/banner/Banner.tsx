import SearchBlock from "@components/search-block/SearchBlock";

export const Banner = () => {
  return (
    <section role="banner" className="bg-gray-50 rounded-xl">
      <div className="p-8 md:p-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            This is application for searching repositories on GitHub
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Type here to search for repositories, or click on the
            <span className="text-teal-500 font-semibold"> Search </span>
            button to see the results. Then check the results below.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <SearchBlock />
        </div>
      </div>
    </section>
  );
};

export default Banner;
