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
    <div className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-2xl shadow-xl w-full max-w-md border border-slate-700">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">QR Code Generator</h1>
      <div className="w-full mb-6 text-center">
        <label htmlFor="url-input" className="block text-sm font-medium text-slate-300 mb-2">
          Enter URL
        </label>
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition duration-200"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-[300px] w-full border-2 border-dashed border-slate-600 rounded-xl bg-slate-900">
        {qrCodeUrl ? (
          <div className="flex flex-col items-center">
            <img src={qrCodeUrl} alt="Generated QR Code" className="max-w-full h-auto rounded-lg shadow-sm" />
            <a 
              href={qrCodeUrl} 
              download="qrcode.png"
              className="mt-6 text-white underline hover:text-gray-300 transition duration-200 font-bold text-xl"
            >
              Download PNG
            </a>
          </div>
        ) : (
          <p className="text-slate-500 italic">Enter a URL to generate a QR code</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
