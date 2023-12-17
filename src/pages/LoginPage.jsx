import LoginForm from '../components/LoginForm.jsx';
import {login} from '../utils/network-data.js';

const LoginPage = ({loginSuccess}) => {
  const onLoginHandler = async ({email, password}) => {
    const {error, data} = await login({email, password});
    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <main className="min-h-full text-white py-24 sm:py-6">
      <LoginForm login={onLoginHandler}/>
    </main>
  );
};

export default LoginPage;