import React from 'react';
import styles from './registration.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useSelector } from '../../services/hooks';
import { Redirect } from 'react-router-dom';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

const Registration: React.FC = () => {
  let auth = useAuth();
  const { user } = useSelector((store) => store.user);
  const [form, setValue] = React.useState<{ email: string; password: string; name: string;}>({
    email: '',
    password: '',
    name: '',
  });

type TE = React.ReactNode & {
	target: {
		name: string;
		value: string;
	}
}

  const onChange = (e: TE): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let register = (): void => {
      auth.register(form);
    }

  if (user.email) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }
  return (
    <div className={styles.registration}>
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={onChange}
        value={form.name}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />
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
      <Button onClick={register} type="primary" size="large">
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default">
        {' '}
        Уже зарегистрированны? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default Registration;
