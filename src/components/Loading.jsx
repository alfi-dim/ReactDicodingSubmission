import Lottie from 'lottie-react';
import LoadingAnimation from '../public/lottie/loading.json';
import { useTheme } from '../hooks/customHooks.js';

const Loading = () => {
  const { textColor } = useTheme();
  return (
    <div className="loading py-6">
      <h2 className={`${textColor} text-xl font-bold`}>Loading your data...</h2>
      <Lottie
        animationData={LoadingAnimation}
        style={
          {
            height: 300
          }
        }
      />
    </div>
  );
};

export default Loading;