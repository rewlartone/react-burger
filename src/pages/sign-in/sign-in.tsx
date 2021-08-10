import React from 'react';
import styles from './sign-in.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useSelector } from '../../services/hooks';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ILocation } from '../../services/types';

const SignIn: React.FC = () => {
  let auth = useAuth();
  const [form, setValue] = React.useState<{email: string; password: string}>({ email: '', password: '' });
  let location = useLocation<ILocation>();

  const { user }: { user: { email: string; name: string; } } = useSelector((store) => store.user);

  type TE = React.ReactNode & {
	target: {
		name: string;
		value: string;
	}
}

  const onChange = (e: TE) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let login = () => {
      auth.signIn(form);
    }

  if (user.email) {
    return <Redirect to={location.state?.from || '/'} />;
  }

  return (
    <div className={styles.signin}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <Input
        type={'email'}
        placeholder={'E-mail'}
        onChange={onChange}
        value={form.email}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />
      <PasswordInput
        onChange={onChange}
        value={form.password}
        name={'password'}
      />
      <Button type="primary" onClick={login} size="large">
        Войти
      </Button>
      <p className="text text_type_main-default">
        {' '}
        Вы - новый пользователь? <Link to="/register">Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default">
        {' '}
        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
      </p>
    </div>
  );
}

export default SignIn;
