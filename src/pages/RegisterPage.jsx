import {register} from '../utils/network-data.js';
import RegisterForm from '../components/RegisterForm.jsx';
import {func} from 'prop-types';

const RegisterPage = ({registerSuccess}) => {
  const onRegisterHandler = async ({name, email, password}) => {
    const {error, data} = await register({name, email, password});
    if (!error) {
      registerSuccess(data);
    }
  };
  return (
    <main className="min-h-full text-white py-24 sm:py-6">
      <RegisterForm register={onRegisterHandler}/>
    </main>
  );
};

RegisterPage.propTypes = {
  registerSuccess: func.isRequired,
};

export default RegisterPage;