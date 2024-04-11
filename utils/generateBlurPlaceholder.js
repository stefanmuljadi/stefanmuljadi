const cache = new Map();

export default async function getBase64ImageUrl(image) {
  let url = cache.get(image);
  if (url) {
    return url;
  }

  const link = image.link;

  const response = await fetch(link);
  const blob = await response.blob();
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const base64data = reader.result;
      cache.set(image, base64data);
      resolve(base64data);
    };

    reader.onerror = () => {
      reject(new Error('Error reading image file.'));
    };

    reader.readAsDataURL(blob);
  });
}
