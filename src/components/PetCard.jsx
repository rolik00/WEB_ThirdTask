const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <p><strong>ID:</strong> {pet.id}</p>
      <p><strong>Имя:</strong> {pet.name}</p>
      <p><strong>Статус:</strong> {pet.status}</p>
    </div>
  );
};

export default PetCard;