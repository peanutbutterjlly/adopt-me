/**
 * Renders a Pet component with the given props.
 *
 * @param {Object} props - The props object containing the name, animal, and breed of the pet.
 * @return {React.JSX} - The rendered Pet component.
 */
export default function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
}
