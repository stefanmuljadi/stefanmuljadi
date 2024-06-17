import getBase64ImageUrl from "./generateBlurPlaceholder";

let cachedResults;

export default async function getResults() {
  console.log(cachedResults)
  if (!cachedResults) {
    const getImages = async () => {
      try {
        // console.log(url)
        const rawImages = await fetch("/api/get-imgur").then((response) => response.json());
  
        let i = 0;
        const reducedResults = [];
      
        for (let rawImage of rawImages.data) {
          const result = {
            id: i,
            downloadUrl: rawImage.link,
            url: rawImage.link
          };
      
          const blurDataURL = await getBase64ImageUrl(result)
          console.log("here")
          result.blurDataURL = blurDataURL
          reducedResults.push(result);
          i++;
        }
        return reducedResults
      } catch (error) {
        console.log(error);
      }
    }
    cachedResults = getImages();
  } else {
    console.log("getCached")
  }
  return cachedResults;
}
