import { createContext, useState } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [activeForm, setActiveForm] = useState(null);

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 5000);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        message,
        showMessage,
        activeForm,
        setActiveForm
      }}
    >
      {children}
    </PetContext.Provider>
  );
};