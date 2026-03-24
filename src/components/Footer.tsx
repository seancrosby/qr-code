import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8 text-center text-slate-400">
      <p className="text-sm">
        Generated using the{' '}
        <a 
          href="https://www.npmjs.com/package/qrcode" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white underline hover:text-gray-300 font-medium transition-colors"
        >
          qrcode
        </a>{' '}
        library
      </p>
    </footer>
  );
};

export default Footer;
