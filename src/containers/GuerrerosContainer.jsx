import GuerrerosForm from '../components/GuerrerosForm';
import GuerrerosView from '../components/GuerrerosView';
import { useState } from 'react';

function GuerrerosContainer() {
  const [guerreros, setGuerreros] = useState([]);

  const handleCreate = (guerrero) => {
    const nuevoGuerrero = {
      ...guerrero,
      id: crypto.randomUUID()
    };

    setGuerreros((anteriores) => [
      ...anteriores,
      nuevoGuerrero
    ]);
  };

  const handleDelete = (guerrero) => {
    setGuerreros((anteriores) =>
      anteriores.filter((g) => g.id !== guerrero.id)
    );
  };

  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-12">
          <GuerrerosForm
            onCreateGuerrero={handleCreate}
          />
        </div>

        <div className="col-12">
          <GuerrerosView
            guerreros={guerreros}
            onQuitar={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default GuerrerosContainer;










