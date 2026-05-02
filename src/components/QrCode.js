import React, { useContext } from 'react';
import { InputContext } from '../App';

const QrCode = () => {
  const { response, loading, error } = useContext(InputContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
      {response ? (
        <div>
          <img className="w-48" src={response} alt="qrCode" />
          <a href={response} download="qrcode.png">
            <button className="bg-blue-400 text-white mt-2 px-4 py-1 w-full">
              Download
            </button>
          </a>
        </div>
      ) : (
        <div className="text-gray-500">Your QR Code will appear here...</div>
      )}
    </div>
  );
};

export default QrCode;