import style from "./AddServicesToOrder.module.scss";
import CheckboxCustom from "common/Checkbox/Checkbox";
import { dataServices } from "./dataServices";

const AddServicesToOrder = () => {
  const firstList = dataServices.slice(0,4);
  const secondList = dataServices.slice(4,7);


  return (
    <div className={style.AddServicesToOrder}>
      <h3>Additional services</h3>
      <form className={style.form}>
        <div>
          {firstList.map((item) => (
            <CheckboxCustom key={item.id} children={item} />
          ))}
        </div>
        <div>
        {secondList.map((item) => (
            <CheckboxCustom key={item.id} children={item}/>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddServicesToOrder;
