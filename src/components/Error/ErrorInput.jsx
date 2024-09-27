

import { GoAlert } from "react-icons/go";

const ErrorInput = ({ error, className }) => {
  
  return (
    <div className={className}>
      {error && (
        <div>
          <GoAlert />
          <span>{error.message || "Error!"}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorInput;
