import Image from "next/image";
import { useRouter } from "next/router";
import useKeypress from "react-use-keypress";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import SharedModal from "./SharedModal";
import { useEffect } from "react";

export default function Carousel({
  index,
  currentPhoto
}) {

  const router = useRouter();
  const [, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id);
    router.push("/", undefined, { shallow: true });
  }

  function changePhotoId(newVal) {
    return newVal;
  }

  useKeypress("Escape", () => {
    closeModal();
  });

  useEffect(() => { 
    console.log("2. ", currentPhoto)

  }, [currentPhoto])
  
  if(!currentPhoto){
    return (
      <div>1. Loading...</div>
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        <Image
          src={currentPhoto.url.replace(".jpg", "m.jpg")}
          className="pointer-events-none h-full w-full"
          alt="blurred background"
          fill
          priority={true}
        />
      </button>
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  );
}
