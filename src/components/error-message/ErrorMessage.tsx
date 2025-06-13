import type { ErrorMessageType } from "@common-types/ErrorType";
// type ErrorMessageType = Error | null | undefined | string;

const ErrorMessage = ({ error }: { error: ErrorMessageType }) => {
  return error ? (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-4 rounded relative">
      <h3 className="font-bold">Error!</h3>
      <p className="block sm:inline">
        {typeof error === "string" ? error : error.message}
      </p>
    </div>
  ) : null;
};

export default ErrorMessage;
