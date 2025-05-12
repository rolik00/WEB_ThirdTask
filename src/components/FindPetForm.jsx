import { useState } from 'react';
import { usePetStore } from '../hooks/usePetStore';

const FindPetsForm = () => {
  const { findPetsByStatus } = usePetStore();
  const [status, setStatus] = useState('available');

  const handleSubmit = (e) => {
    e.preventDefault();
    findPetsByStatus(status);
  };

  return (
    <div className="form">
      <h3>Найти питомцев по статусу</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchStatus">Статус:</label>
          <select
            id="searchStatus"
            name="searchStatus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>
        </div>
        <button type="submit">Найти</button>
      </form>
    </div>
  );
};

export default FindPetsForm;