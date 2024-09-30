

import { GoAlert } from "react-icons/go";

const ErrorInput = ({ error}) => {
  
  return (
    <div style={{color:'red'}}>
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
