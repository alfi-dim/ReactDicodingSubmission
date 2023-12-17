import Lottie from 'lottie-react';
import NotFoundAnimation from '../public/lottie/notenotfound.json';

const NotFoundNotesLottie = () => {
  return <Lottie
    style={
      {
        height: 300,
      }
    }
    animationData={NotFoundAnimation}

  />;
};

export default NotFoundNotesLottie;