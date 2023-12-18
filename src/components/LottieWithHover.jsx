import Lottie from 'lottie-react';
import {object, bool} from 'prop-types';

const LottieWithHover = ({animationData, isHover}) => {
  console.log(animationData);
  return (
    <Lottie
      animationData={animationData}
      loop={isHover}
      autoplay={isHover}
      style={{
        height: 20,
      }}
    />
  );
};

LottieWithHover.propTypes = {
  animationData: object.isRequired,
  isHover: bool.isRequired,
};

export default LottieWithHover;