/**
 * Fetches a pet from the API based on the provided query key.
 *
 * @param {Object} queryKey - The query key containing the ID of the pet to fetch.
 * @param {string} queryKey.id - The ID of the pet to fetch.
 * @return {Promise<Object>} A promise that resolves to the fetched pet data in JSON format.
 * @throws {Error} If the API response is not OK.
 */
export default async function fetchPet({ queryKey }) {
  const id = queryKey[1];
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
}
