import Lottie from 'lottie-react';

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

export default LottieWithHover;