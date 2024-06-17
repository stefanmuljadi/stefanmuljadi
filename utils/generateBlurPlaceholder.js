const cache = new Map();

export default async function getBase64ImageUrl(image) {
  const link = image.url.replace(".jpg", "s.jpg");
  let img = await fetch(link);
  img = await img.blob();
  let bitmap = await createImageBitmap(img);
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
  return canvas.toDataURL("image/png");
}



// console.log(image)
// let url = cache.get(image.id);
// if (url) {
//   return url;
// }
// const reader = new FileReader();
// const link = image.url.replace(".jpg", "s.jpg");
// const response = await fetch(link);
// const blob = await response.blob();
// return new Promise((resolve, reject) => {
//   reader.onload = () => {
//     const base64data = reader.result;
//     cache.set(image.id, base64data);
//     resolve(base64data);
//   };

//   reader.onerror = () => {
//     reject(new Error('Error reading image file.'));
//   };

//   reader.readAsDataURL(blob);
// });