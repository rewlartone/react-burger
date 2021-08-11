import React from "react";
import styles from "./forgot-password.module.css";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../services/auth";
import { useSelector } from "../../services/hooks";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPass: React.FC = () => {
  let auth = useAuth();
  const [form, setValue] = React.useState<{ email: string }>({ email: "" });
  const { forgotPassSuccess } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.user);

  type TE = React.ReactNode & {
    target: {
      name: string,
      value: string,
    },
  };
  const onChange = (e: TE): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const forgotPass = () => {
    auth.forgotPass(form);
  };
  if (user.email) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  if (forgotPassSuccess) {
    return (
      <Redirect
        to={{
          pathname: "/reset-password",
        }}
      />
    );
  }

  return (
    <div className={styles.forgotpass}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <Input
        type={"email"}
        placeholder={"Укажите e-mail"}
        onChange={onChange}
        value={form.email}
        name={"email"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
      />
      <Button type="primary" size="large" onClick={forgotPass}>
        Восстановить
      </Button>
      <p className="text text_type_main-default">
        {" "}
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default ForgotPass;
