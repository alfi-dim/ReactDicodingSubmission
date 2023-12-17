import {useTheme} from '../hooks/customHooks.js';

export default function Footer() {
  const {bgColor, textColor} = useTheme();
  return (
    <footer className={`flex-shrink-0 w-full border-t inset-x-0 bottom-0 border-gray-200 ${bgColor}`}>
      <div className="container mx-auto p-4">
        <div className={`flex items-center justify-center ${textColor}`}>
          <a
            href="https://www.linkedin.com/in/dimasalfiansyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            Dimas Alfiansyah
          </a>
          <span>|</span>
          <a
            href="https://idcamp.ioh.co.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            IDCamp 2023 ReactJS
          </a>
        </div>
      </div>
    </footer>
  );
}
