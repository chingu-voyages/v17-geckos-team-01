/**
 * @returns {string} An array of Api Keys
 */
function getKey(): string {
  const keysArray = process.env.KEYS_ARRAY;
  const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
  console.log(randomKey);
  return randomKey;
}

export default getKey;
