import { useContext } from 'react';
import { PetContext } from '../context/PetContext';

export const usePetStore = () => {
  const { setPets, showMessage } = useContext(PetContext);

  const addPet = async (petData) => {
    try {
      const response = await fetch('https://petstore.swagger.io/v2/pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      showMessage(`Питомец успешно добавлен!`, 'success');
      setPets([data]);
    } catch (error) {
      showMessage(`Ошибка при добавлении питомца: ${error.message}`, 'error');
    }
  };

  const findPetsByStatus = async (status) => {
    try {
      const response = await fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      showMessage(`Найдено ${data.length} питомцев со статусом ${status}`, 'success');
      setPets(data);
    } catch (error) {
      showMessage(`Ошибка при поиске питомцев: ${error.message}`, 'error');
      setPets([]);
    }
  };

  const deletePet = async (petId) => {
    try {
      const response = await fetch(`https://petstore.swagger.io/v2/pet/${petId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      showMessage(`Питомец с ID ${petId} успешно удален`, 'success');
      setPets([]);
    } catch (error) {
      showMessage(`Ошибка при удалении питомца: ${error.message}`, 'error');
    }
  };

  return { addPet, findPetsByStatus, deletePet };
};