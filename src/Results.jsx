import Pet from './Pet';

/**
 * Renders a list of pets based on the given array of pets. If the array is empty, it displays a message saying "No Pets Found".
 *
 * @param {Object} props - The props object containing the pets array.
 * @param {Array} props.pets - An array of pet objects.
 * @return {JSX.Element} - The rendered JSX element containing the list of pets.
 */
export default function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}
