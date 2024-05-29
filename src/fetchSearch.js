/**
 * Fetches search results from the API based on the provided query key.
 *
 * @param {Object} queryKey - The query key containing the animal, breed, and location.
 * @param {string} queryKey.animal - The animal to search for.
 * @param {string} queryKey.breed - The breed to search for.
 * @param {string} queryKey.location - The location to search in.
 * @return {Promise<Object>} A promise that resolves to the search results in JSON format.
 * @throws {Error} If the API response is not OK.
 */
export default async function fetchSearch({ queryKey }) {
  const { animal, breed, location } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`pet search not ok: ${animal}, ${location}, ${breed}`);
  }

  return res.json();
}
