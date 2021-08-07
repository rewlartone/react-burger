import React from 'react';
import styles from './registration.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Registration() {
  let auth = useAuth();
  const { user } = useSelector((store) => store.user);
  const [form, setValue] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  let register = React.useCallback(
    (e) => {
      e.preventDefault();
      auth.register(form);
    },
    [auth, form]
  );

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
        icon={'undefined'}
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
        icon={'undefined'}
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
