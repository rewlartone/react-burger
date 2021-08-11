import React from 'react';
import styles from './reset-password.module.css';
import { useAuth } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

const ResetPass: React.FC = () => {
  const [form, setValue] = React.useState<{password: string; token: string}>({ password: '', token: '' });
  let auth = useAuth();
  const { resetPassSuccess, forgotPassSuccess }: { resetPassSuccess: boolean; forgotPassSuccess: boolean; } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.user);
  
type TE = React.ReactNode & {
	target: {
		name: string;
		value: string;
	}
}
  const onChange = (e: TE): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const resetPass = (): void => {
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
      if (resetPassSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/login',
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
