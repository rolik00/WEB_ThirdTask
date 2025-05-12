import { useContext } from 'react';
import { PetContext } from '../context/PetContext';
import PetCard from './PetCard';

const PetList = () => {
  const { pets } = useContext(PetContext);

  if (pets.length === 0) return null;

  return (
    <div className="pets-list">
      <h2>Результаты:</h2>
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;