import { CheckBox } from "@mui/icons-material";
import style from "./AddServicesToOrder.module.scss";

const AddServicesToOrder = () => {
  return (
    <div className={style.AddServicesToOrder}>
      <form>
        <CheckBox/>
        <CheckBox/>
        <CheckBox/>
      </form>
    </div>
  );
};

export default AddServicesToOrder;
