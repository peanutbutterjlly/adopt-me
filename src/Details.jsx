import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  return <h2>Hi! id is {id}</h2>;
}
