import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    if (url) {
      QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      })
        .then((dataUrl) => {
          setQrCodeUrl(dataUrl);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setQrCodeUrl('');
    }
  }, [url]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#1e1e1e] rounded-xl shadow-xl w-[90%] max-w-[600px] border border-neutral-800 relative">
      <a 
        href="https://github.com/seancrosby/qr-code" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-white opacity-60 hover:opacity-100 transition-opacity"
        aria-label="GitHub Repository"
      >
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>

      <h1 className="text-5xl font-extrabold mb-6 text-[#646cff] text-center">QR Code Generator</h1>
      <div className="w-full mb-6 text-center">
        <label htmlFor="url-input" className="block text-sm font-medium text-neutral-400 mb-2">
          Enter URL
        </label>
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#2a2a2a] text-white placeholder-neutral-500 focus:ring-2 focus:ring-[#646cff] focus:border-transparent outline-none transition duration-200"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-[300px] w-full border-2 border-dashed border-neutral-700 rounded-xl bg-[#2a2a2a] p-4">
        {qrCodeUrl ? (
          <div className="flex flex-col items-center">
            <img src={qrCodeUrl} alt="Generated QR Code" className="w-[280px] h-auto rounded-lg shadow-sm" />
            <a 
              href={qrCodeUrl} 
              download="qrcode.png"
              className="mt-6 text-white underline hover:text-gray-300 transition duration-200 font-bold text-xl"
            >
              Download PNG
            </a>
          </div>
        ) : (
          <p className="text-neutral-500 italic text-center">Enter a URL to generate a QR code</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
