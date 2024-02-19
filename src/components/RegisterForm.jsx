import React from 'react';
import {
  Button,
} from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncRegisterUser } from '../states/users/action';
import InputText from './shared/InputText';

export default function RegisterForm() {
  const [fullname, onFullnameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: fullname,
      email,
      password,
    };

    dispatch(asyncRegisterUser(payload, navigate));
  };
  return (
    <form className="flex py-4 mx-auto max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <InputText
        onChange={onFullnameChange}
        name="fullname"
        label="Your Full Name"
        placeholder="Dimas Alfiansyah"
        value={fullname}
      />
      <InputText
        onChange={onEmailChange}
        name="email1"
        label="Your Email"
        placeholder="yourname@forum.app"
        value={email}
        type="email"
      />
      <InputText
        onChange={onPasswordChange}
        name="password1"
        label="Your Password"
        type="password"
        value={password}
      />
      <Button type="submit">Submit</Button>
      <p>
        Already have an account?
        {' '}
        <a href="/auth/login" className="text-blue-500">
          Login
        </a>
        {' '}
        here.
      </p>
    </form>
  );
}
