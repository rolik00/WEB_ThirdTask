import { useContext } from 'react';
import { PetContext } from '../context/PetContext';

const Message = () => {
  const { message } = useContext(PetContext);

  if (!message.text) return null;

  const messageStyles = {
    backgroundColor: message.type === 'error' ? '#ffebee' : '#e7f3fe',
    borderLeft: `6px solid ${message.type === 'error' ? '#f44336' : '#2196F3'}`
  };

  return (
    <div className="message" style={messageStyles}>
      {message.text}
    </div>
  );
};

export default Message;