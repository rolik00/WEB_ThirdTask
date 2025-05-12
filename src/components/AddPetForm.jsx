import { useState, useContext } from 'react';
import { usePetStore } from '../hooks/usePetStore';

const AddPetForm = () => {
  const { addPet } = usePetStore();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    status: 'available'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.id || !formData.name) {
      return;
    }

    const petData = {
      id: parseInt(formData.id),
      category: {
        id: 0,
        name: "pets"
      },
      name: formData.name,
      photoUrls: [
        "https://example.com/pet.jpg"
      ],
      tags: [
        {
          id: 0,
          name: "tag1"
        }
      ],
      status: formData.status
    };

    addPet(petData);
  };

  return (
    <div className="form">
      <h3>Добавить нового питомца</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petId">ID:</label>
          <input 
            type="number" 
            id="petId" 
            name="petId"
            value={formData.id}
            onChange={(e) => setFormData({...formData, id: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="petName">Имя:</label>
          <input 
            type="text" 
            id="petName" 
            name="petName"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="petStatus">Статус:</label>
          <select 
            id="petStatus" 
            name="petStatus"
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
          >
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddPetForm;