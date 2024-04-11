let cachedResults;

export default async function getResults() {
  if (!cachedResults) {
    const fetchedResults = await fetch('api/get-imgur');
    let rawImages = await response.json();
    cachedResults = rawImages;
  }

  return cachedResults;
}
