import { useContext } from 'react';
import { PetContext } from '../context/PetContext';

const Toolbar = () => {
  const { setActiveForm } = useContext(PetContext);

  return (
    <div className="buttons">
      <button onClick={() => setActiveForm('add')}>Добавить нового животного</button>
      <button onClick={() => setActiveForm('find')}>Найти животных по статусу</button>
      <button onClick={() => setActiveForm('delete')}>Удалить животного</button>
    </div>
  );
};

export default Toolbar;