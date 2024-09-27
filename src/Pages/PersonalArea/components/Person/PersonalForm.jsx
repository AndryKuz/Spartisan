import { useForm } from "react-hook-form";
import style from './PersonalForm.module.scss';

const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form>
      <div className={style.formWrapperPerson}>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="number" placeholder="phone" />
        </div>
        <div className={style.twoInput}>
          <input type="email" placeholder="email" />
          <input type="data" placeholder="data birthday" />
    
        </div>
        <div>
          <input type="password" placeholder="Old password"/>
          <input type="password" placeholder="New password"/>
          <input type="password" placeholder="New password again"/>
        </div>
      </div>
    </form>
  );
};

export default PersonalForm;
