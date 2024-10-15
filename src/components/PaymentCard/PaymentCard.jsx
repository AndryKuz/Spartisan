import { handleCheckout } from "stripeService";
import style from "./PaymentCard.module.scss";

const PaymentCard = () => {
  return (
    <div className="payment-card">
      <h2 className="payment-card__title">Оплата картой</h2>
      <input
        type="text"
        className="payment-card__input"
        placeholder="Номер карты"
      />
      <input
        type="text"
        className="payment-card__input"
        placeholder="Срок действия"
      />
      <input
        type="password"
        className="payment-card__input"
        placeholder="CVV"
      />
      <button className="payment-card__button" onClick={handleCheckout}>
        Оплатить
      </button>
    </div>
  );
};
export default PaymentCard;
