import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8 text-center text-gray-500">
      <p className="text-sm">
        Generated using the{' '}
        <a 
          href="https://www.npmjs.com/package/qrcode" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-medium"
        >
          qrcode
        </a>{' '}
        library
      </p>
    </footer>
  );
};

export default Footer;
