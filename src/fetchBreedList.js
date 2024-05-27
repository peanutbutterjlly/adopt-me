/**
 * Fetches a list of breeds for a given animal from the API.
 *
 * @param {Object} queryKey - The query key containing the animal.
 * @param {string} queryKey.animal - The animal for which to fetch the breeds.
 * @return {Promise<Array>} A promise that resolves to an array of breeds for the given animal.
 * @throws {Error} If the API response is not OK or if the animal is falsy.
 */
export default async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];

  if (!animal) return [];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return res.json();
}
