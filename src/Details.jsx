import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdoptedPetContext from './AdoptedPetContext';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import fetchPet from './fetchPet';

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const results = useQuery(['details', id], fetchPet);
  const [showModal, setShowModal] = useState(false);
  const [, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  const { name, animal, breed, city, state, description } = pet;

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {name}</button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate('/');
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
