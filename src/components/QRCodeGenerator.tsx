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
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">QR Code Generator</h1>
      <div className="w-full mb-6 text-center">
        <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter URL
        </label>
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-gray-900"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-[300px] w-full border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
        {qrCodeUrl ? (
          <div className="flex flex-col items-center">
            <img src={qrCodeUrl} alt="Generated QR Code" className="max-w-full h-auto rounded-lg shadow-sm" />
            <a 
              href={qrCodeUrl} 
              download="qrcode.png"
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Download PNG
            </a>
          </div>
        ) : (
          <p className="text-gray-400 italic">Enter a URL to generate a QR code</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
