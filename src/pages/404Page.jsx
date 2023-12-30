import {Link} from 'react-router-dom';
import NotFoundPageLottie from '../components/NotFoundPagelottie.jsx';
import {useLocale, useTheme} from '../hooks/customHooks.js';

const NotFoundPage = () => {
  const {textColor} = useTheme();
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div>
            <NotFoundPageLottie className={textColor}/>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {useLocale('Go back home', 'Kembali ke beranda')}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;