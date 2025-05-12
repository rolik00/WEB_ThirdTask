import { useState } from 'react';
import { usePetStore } from '../hooks/usePetStore';

const DeletePetForm = () => {
  const { deletePet } = usePetStore();
  const [petId, setPetId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!petId) return;
    deletePet(petId);
  };

  return (
    <div className="form">
      <h3>Удалить питомца</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="deleteId">ID питомца:</label>
          <input
            type="number"
            id="deleteId"
            name="deleteId"
            value={petId}
            onChange={(e) => setPetId(e.target.value)}
          />
        </div>
        <button type="submit">Удалить</button>
      </form>
    </div>
  );
};

export default DeletePetForm;