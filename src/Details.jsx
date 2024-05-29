import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import fetchPet from './fetchPet';

function Details() {
  const { id } = useParams();
  const results = useQuery(['details', id], fetchPet);

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
        <button>Adopt {name}</button>
        <p>{description}</p>
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
