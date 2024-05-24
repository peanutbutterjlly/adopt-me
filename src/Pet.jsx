/**
 * Renders a Pet component with the given props.
 *
 * @param {Object} props - The props object containing the name, animal, breed, images, location, and id of the pet.
 * @return {React.JSX} - The rendered Pet component.
 */
export default function Pet(props) {
  const { name, animal, breed, images, location, id } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
