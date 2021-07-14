import React from 'react';
import styles from './forgot-password.module.css';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useSelector } from 'react-redux';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPass() {
  let auth = useAuth();
  const [form, setValue] = React.useState({ email: '' });
  const { forgotPassSuccess } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.user);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const forgotPass = () => {
    auth.forgotPass(form);
  };
  if (user.email) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }
  if (forgotPassSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password',
        }}
      />
    );
  }

  return (
    <div className={styles.forgotpass}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        onChange={onChange}
        icon={'undefined'}
        value={form.email}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />
      <Button type="primary" size="large" onClick={forgotPass}>
        Восстановить
      </Button>
      <p className="text text_type_main-default">
        {' '}
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default ForgotPass;
