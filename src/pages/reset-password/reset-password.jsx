import React from 'react';
import styles from './reset-password.module.css';
import { useAuth } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPass() {
  const [form, setValue] = React.useState({ password: '', token: '' });
  let auth = useAuth();
  const { resetPassSuccess, forgotPassSuccess } = useSelector(
    (store) => store.user
  );
  const { user } = useSelector((store) => store.user);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const resetPass = () => {
    auth.resetPass(form);
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
  if (!forgotPassSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/forgot-password',
        }}
      />
    );
  }
  if (resetPassSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    );
  }

  return (
    <div className={styles.resetpass}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <PasswordInput
        onChange={onChange}
        value={form.password}
        name={'password'}
      />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={onChange}
        icon={'undefined'}
        value={form.token}
        name={'token'}
        error={false}
        errorText={'Ошибка'}
      />
      <Button type="primary" onClick={resetPass} size="large">
        Сохранить
      </Button>
      <p className="text text_type_main-default">
        {' '}
        Вспомнили пароль? <a href="#">Войти</a>
      </p>
    </div>
  );
}

export default ResetPass;
