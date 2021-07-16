import React from 'react';
import styles from './profile.module.css';
import Menu from '../../components/menu/menu.jsx';
import { useAuth } from '../../services/auth';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  EmailInput,
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  let auth = useAuth();

  const { user } = useSelector((store) => store.user);
  const [form, setValue] = React.useState({ email: '', name: '' });
  const [valuePass, setValuePass] = React.useState('password');
  const [isDisabledName, setIsDisabledName] = React.useState(true);
  const [isDisabledPass, setIsDisabledPass] = React.useState(true);
  const [isDisabledEmail, setIsDisabledEmail] = React.useState(true);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    auth.getUser();
  }, []);
  React.useEffect(() => {
    setValue({ email: user.email, name: user.name });
  }, [user]);

	const cancel = () => {
        setValue({ email: user.email, name: user.name });
  };
  const save = () => {
    auth.setData(form);
  };

  return (
    <>
      <Menu
        phrase={' В этом разделе вы можете изменить свои персональные данные'}
      />
      <div className={styles.edit}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={onChange}
          icon={'EditIcon'}
          value={form.name}
          name={'name'}
          error={false}
          disabled={isDisabledName}
          onIconClick={() => {
            setIsDisabledName(false);
          }}
          onBlur={() => {
            setIsDisabledName(true);
          }}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'email'}
          placeholder={'Email'}
          onChange={onChange}
          icon={'EditIcon'}
          value={form.email}
          name={'email'}
          error={false}
          disabled={isDisabledEmail}
          onIconClick={() => {
            setIsDisabledEmail(false);
          }}
          onBlur={() => {
            setIsDisabledEmail(true);
          }}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={(e) => setValuePass(e.target.value)}
          icon={'EditIcon'}
          value={valuePass}
          name={'name'}
          error={false}
          disabled={isDisabledPass}
          onIconClick={() => {
            setIsDisabledPass(false);
          }}
          onBlur={() => {
            setIsDisabledPass(true);
          }}
          errorText={'Ошибка'}
          size={'default'}
        />
		<Button type="primary" size="medium" onClick={cancel}>
			Отмена
		</Button>
		<Button type="primary" size="medium" onClick={save}>
			Сохранить
		</Button>
      </div>
    </>
  );
}

export default Profile;
