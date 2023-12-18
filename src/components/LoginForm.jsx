import {useInput, useLocale, useTheme} from '../hooks/customHooks.js';
import {Link} from 'react-router-dom';
import {func} from 'prop-types';

const LoginForm = ({login}) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const {textColor} = useTheme();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({email, password});
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
            {useLocale('Sign in to your account', 'Masuk ke akun Anda')}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${textColor}`}>
                {useLocale('Email address', 'Alamat email')}
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
                  {useLocale('Password', 'Kata sandi')}
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ${useLocale('Sign in', 'Masuk')}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {useLocale('Don\'t have an account?', 'Tidak memiliki akun?')}{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {useLocale('Register here', 'Daftar disini')}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

LoginForm.propTypes = {
  login: func.isRequired,
};

export default LoginForm;