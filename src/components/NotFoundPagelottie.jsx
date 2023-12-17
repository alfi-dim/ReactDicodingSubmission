import Lottie from 'lottie-react';
import NotFound404DarkAnimation from '../public/lottie/notfoundpagewhite.json';
import NotFound404LightAnimation from '../public/lottie/notfoundpage.json';
import {ThemeContext} from '../contexts/index.jsx';
import {useContext} from 'react';

const NotFoundPageLottie = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Lottie animationData={theme === 'dark' ? NotFound404DarkAnimation : NotFound404LightAnimation}
            loop={true}
            autoplay={true}
            style={
              {
                height: 200,
              }
            }/>
  );
};

export default NotFoundPageLottie;