import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import getResults from "../../utils/cachedImages";
import { useEffect, useState } from "react";

import { useParams } from 'next/navigation'

const Home = () => {
  const router = useRouter();
  const { photoId } = router.query;
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getImages =  () => {
    const rawImages = getResults().then((result) => {
      let image = result.find((img) => img.id == photoId)
      console.log(image)

      setCurrentPhoto(image)
    })
    setIsLoading(false);
  }

  useEffect(() => {
    if(!router.isReady){
      console.log(router)
      return
    }
    getImages()
  }, [photoId, router.isReady])
  
  if (isLoading) {
    return (
      <>
        <main className="mx-auto max-w-[1960px] p-4">Loading</main>
      </>
    )
  }

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={photoId} />
      </main>
    </>
  );
};

export default Home;

// export const getStaticProps = async (context) => {
//   const rawImages = await getResults();
//   console.log("AAAA", rawImages)
//   const currentPhoto = rawImages.find(
//     (img) => img.id === Number(context.params.photoId),
//   );

//   return {
//     props: {
//       currentPhoto: currentPhoto,
//     },
//   };
// };

// export async function getStaticPaths() {
//   const results = await fetch(process.env.URL + '/api/get-imgur').then((response) => response.json());

//   let fullPaths = [];
//   for (let i = 0; i < results.data.length; i++) {
//     fullPaths.push({ params: { photoId: i.toString() } });
//   }
//   console.log("AAAAAAAAAAAAAA");

//   return {
//     paths: fullPaths,
//     fallback: false,
//   };
// }
