import React from 'react';
import styles from './sign-in.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

function SignIn() {
  let auth = useAuth();
  const [form, setValue] = React.useState({ email: '', password: '' });
  const history = useHistory();
  let location = useLocation();

  const { user } = useSelector((store) => store.user);
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let login = React.useCallback(
    (e) => {
      e.preventDefault();
      auth.signIn(form);
    },
    [auth, form]
  );

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
