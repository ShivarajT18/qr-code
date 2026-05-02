import React, { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import axios from 'axios';

// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: ""
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: { Authorization: 'Bearer 71efeef0-c049-11ef-92f0-336b5e3f2b67' }
  };

  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url
  };

  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    error,
    loading
  };

  return (
    <InputContext.Provider value={value}>
      <div className="bg-gradient-to-r from-indigo-500 h-screen pt-36 px2">
        <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
          <div className="md:grid md:grid-cols-3">
            <InputForm />
            <QrCode />
          </div>
        </div>
      </div>
    </InputContext.Provider>
  );
}

export default App;