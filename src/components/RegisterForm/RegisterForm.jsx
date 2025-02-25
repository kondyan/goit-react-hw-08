import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("registration success");
      })
      .catch(() => {
        console.log("registration error");
      });
    //   заменить на toaster уведомления !!!!
    form.reset();
  };

  return (
    // <form
    //   className={css.registerForm}
    //   onSubmit={handleSubmit}
    //   autoComplete="off"
    // >
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button className={css.button} type="submit">
    //     Register
    //   </button>
    // </form>
    <form
      className={css.registerForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <p className={css.formTitle}>Create a new Account</p>
      <div className={css.inputContainer}>
        <input type="text" name="name" placeholder="Enter nickname" />
      </div>
      <div className={css.inputContainer}>
        <input type="email" name="email" placeholder="Enter email" />
        <span />
      </div>
      <div className={css.inputContainer}>
        <input type="password" name="password" placeholder="Enter password" />
      </div>
      <button className={css.submit} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
