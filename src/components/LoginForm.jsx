'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/auth/action';
import InputText from './shared/InputText';
import FormButton from './shared/FormButton';

export default function LoginForm() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(asyncSetAuthUser(payload));
  };
  return (
    <form className="flex py-4 mx-auto max-w-md flex-col gap-4" onSubmit={handleSubmit}>
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
      <FormButton type="submit" label="Login" />
      <p>
        Don&apos;t have an account?
        {' '}
        <a href="/auth/register" className="text-blue-500">
          Register
        </a>
        {' '}
        here.
      </p>
    </form>
  );
}
