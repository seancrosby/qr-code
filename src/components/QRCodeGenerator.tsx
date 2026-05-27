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
    <div className="flex flex-col items-center justify-center p-16 bg-[#1e1e1e] rounded-xl shadow-xl w-[90%] max-w-[600px] border border-neutral-800 relative gap-y-12">
      <h1 className="text-8xl font-extrabold text-[#646cff] text-center">QR</h1>
      
      <div className="w-full text-center flex flex-col items-center mb-[50px]">
        <label htmlFor="url-input" className="block text-sm font-medium text-neutral-400 mb-4">
          Enter URL
        </label>
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full max-w-[calc(100%-50px)] px-4 py-3 rounded-lg border border-neutral-700 bg-white text-black placeholder-neutral-400 focus:ring-2 focus:ring-[#646cff] focus:border-transparent outline-none transition duration-200"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-[400px] w-full border-2 border-dashed border-neutral-700 rounded-xl bg-[#2a2a2a] py-20 px-4">
        {qrCodeUrl ? (
          <div className="flex flex-col items-center gap-y-10">
            <img src={qrCodeUrl} alt="Generated QR Code" className="w-[280px] h-auto rounded-lg shadow-sm" />
            <a 
              href={qrCodeUrl} 
              download="qrcode.png"
              className="text-white underline hover:text-gray-300 transition duration-200 font-bold text-xl"
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
