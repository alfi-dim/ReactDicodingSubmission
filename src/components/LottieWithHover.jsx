import Lottie from 'lottie-react';
import PropTypes from 'prop-types';

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
  animationData: PropTypes.object.isRequired,
  isHover: PropTypes.bool.isRequired,
};

export default LottieWithHover;