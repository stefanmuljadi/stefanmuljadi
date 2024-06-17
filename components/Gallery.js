import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import getResults from "../utils/cachedImages";

const Gallery = () => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const lastViewedPhotoRef = useRef(null);


  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back

    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
    getResults().then((results) => {
      setImages(results)
      setIsLoading(false)
      console.log(images)
    });
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <main className="px-12 lg:px-24 py-16">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className='text-4xl lg:text-6xl font-allenoire pb-8 text-primary'>
          My Photos
        </div>
        {
          isLoading ?
          <div>Loading...</div>
          :
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images&& images.map(({ id, url, blurDataURL }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt=""
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataURL}
                src={url.replace(".jpg", "m.jpg")}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                optimized
              />
            </Link>
          ))}
        </div>
        }

      </main>
    </>
  );
};

export default Gallery;