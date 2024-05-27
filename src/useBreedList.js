import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

/**
 * Custom hook that fetches a list of breeds for a given animal and provides the list and status.
 *
 * @param {string} animal - The animal for which to fetch the breeds.
 * @return {Array} An array containing the breedList and status.
 * - `breedList` (Array): The list of breeds for the given animal.
 * - `status` (string): The status of the breed list fetching process ('unloaded', 'loading', 'loaded').
 */
export default function useBreedList(animal) {
  const results = useQuery(['breeds', animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status]
}
