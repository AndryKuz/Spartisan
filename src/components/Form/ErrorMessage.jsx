import { GoAlert } from "react-icons/go";

const ErrorMessage = ({ error, className }) => {
  return (
    <div className={className}>
      {error && (
        <div>
          <div>
            <GoAlert />
          </div>
          <span>{error.message || "Error!"}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
