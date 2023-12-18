import {useInput, useLocale, useTheme} from '../hooks/customHooks.js';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {func} from 'prop-types';

const RegisterForm = ({register}) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, setConfirmPasswordChange] = useState('');
  const {textColor} = useTheme();

  const onConfirmPasswordChange = (event) => {
    setConfirmPasswordChange(event.target.value);
    event.target.setCustomValidity('');
    if (event.target.value !== password) {
      event.target.setCustomValidity('Password does not match.');
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await register({name, email, password})
      .then(() => {
        toast.success('Register success', {
          position: 'top-right',
        });
      });
  };
  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight ${textColor}`}>
            {useLocale('Register Account', 'Daftar Akun')}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="name" className={`block text-sm font-medium leading-6 ${textColor}`}>
                {useLocale('Full Name', 'Nama Lengkap')}
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={onNameChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${textColor}`}>
                {useLocale('Email address', 'Alamat Email')}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${textColor}`}>
                  {useLocale('Password', 'Kata Sandi')}
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={onPasswordChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${textColor}`}>
                  {useLocale('Confirm Password', 'Konfirmasi Kata Sandi')}
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="confirm-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={confirmPassword}
                  onChange={onConfirmPasswordChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {useLocale('Sign Up', 'Daftar')}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {useLocale('Already have an account?', 'Sudah memiliki akun?')}{' '}
            <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {useLocale('Sign in here', 'Masuk disini')}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

RegisterForm.propTypes = {
  register: func.isRequired
};

export default RegisterForm;