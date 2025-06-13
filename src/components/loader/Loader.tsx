interface LoaderProps {
  loading?: boolean;
}
const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return loading ? (
    <div className="absolute w-full h-full bg-teal-500/10">
      <div
        className="top-1/2 left-1/2 absolute animate-spin inline-block size-8 border-3 border-current border-t-transparent text-teal-600 rounded-full dark:text-teal-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : null;
};

export default Loader;
