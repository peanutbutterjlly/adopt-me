import { useEffect, useState } from "react";

const localCache = {};

/**
 * Custom hook that fetches a list of breeds for a given animal and provides the list and status.
 *
 * @param {string} animal - The animal for which to fetch the breeds.
 * @return {Array} An array containing the breedList and status.
 * - `breedList` (Array): The list of breeds for the given animal.
 * - `status` (string): The status of the breed list fetching process ('unloaded', 'loading', 'loaded').
 */
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');


  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    /**
     * Asynchronously requests a list of breeds for a given animal from the server.
     *
     * @return {Promise<void>} - A promise that resolves when the breed list is fetched and set.
     */
    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
