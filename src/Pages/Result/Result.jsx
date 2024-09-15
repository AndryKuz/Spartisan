import { useLocation } from 'react-router-dom';
import style from "./Result.module.scss";
import { ReactComponent as Success } from "assets/images/success.svg";
import { ReactComponent as Failure } from "assets/images/failure.svg";

export const dataResult = [
  "Your payment has been successful",
  "Your payment has not gone through",
  "Your booking has been successful",
];

const Result = () => {
  const location = useLocation();
  const { status } = location.state || {};

  
  const messageResult = () => {
    if (status === "booking") {
      return dataResult[2];
    } else if (status === 'paymentSucc') {
      return dataResult[0]; 
    } else if (status === 'paymentFalse') {
      return dataResult[1]; 
    }
    return ""; 
  };

  const isSuccess = status === 'paymentSucc' || status === 'booking';

  return (
    <div className={style.result}>
      <div>
        {isSuccess ? <Success /> : <Failure />}
        <h1>{messageResult()}</h1>
        <p>
          {isSuccess
            ? "We will contact you and consult in detail, answer all your questions."
            : "Unfortunately, the payment failed. Please try again or contact support."}
        </p>
      </div>
    </div>
  );
};

export default Result;
