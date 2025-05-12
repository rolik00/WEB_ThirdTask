import { useContext } from 'react';
import { PetContext } from './context/PetContext';
import Toolbar from './components/Toolbar';
import AddPetForm from './components/AddPetForm';
import FindPetsForm from './components/FindPetForm';
import DeletePetForm from './components/DeletePetForm';
import Message from './components/Message';
import PetList from './components/PetList';

const App = () => {
  const { activeForm } = useContext(PetContext);

  return (
    <div className="app">
      <h1>Petstore API Client</h1>
      <Toolbar />

      {activeForm === 'add' && <AddPetForm />}
      {activeForm === 'find' && <FindPetsForm />}
      {activeForm === 'delete' && <DeletePetForm />}

      <Message />
      <PetList />
    </div>
  );
};

export default App;
