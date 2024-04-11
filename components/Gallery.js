import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";

const Gallery = ({ gambars }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const lastViewedPhotoRef = useRef(null);
  const getImages = async () => {
    try {
      // const response = await fetch('api/get-imgur');
      // let rawImages = await response.json();
      // console.log(rawImages);
      let rawImages = {
        data: [
          {
            "id": "0BXbGJc",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 13717,
            "views": 3,
            "bandwidth": 41151,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/0BXbGJc.jpg"
          },
          {
            "id": "BisWSnr",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 13859,
            "views": 3,
            "bandwidth": 41577,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/BisWSnr.jpg"
          },
          {
            "id": "dxIm93n",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 9826,
            "views": 3,
            "bandwidth": 29478,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/dxIm93n.jpg"
          },
          {
            "id": "lrtR4T1",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 8906,
            "views": 5,
            "bandwidth": 44530,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/lrtR4T1.jpg"
          },
          {
            "id": "dNyrEiF",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 12411,
            "views": 3,
            "bandwidth": 37233,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/dNyrEiF.jpg"
          },
          {
            "id": "9LW1NCI",
            "title": null,
            "description": null,
            "datetime": 1712812907,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 9252,
            "views": 3,
            "bandwidth": 27756,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/9LW1NCI.jpg"
          },
          {
            "id": "FH0VbVa",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 210,
            "height": 210,
            "size": 6639,
            "views": 5,
            "bandwidth": 33195,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/FH0VbVa.jpg"
          },
          {
            "id": "VBN5A89",
            "title": null,
            "description": null,
            "datetime": 1712812907,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 8607,
            "views": 3,
            "bandwidth": 25821,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/VBN5A89.jpg"
          },
          {
            "id": "eWudR89",
            "title": null,
            "description": null,
            "datetime": 1712812906,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 6390,
            "views": 3,
            "bandwidth": 19170,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/eWudR89.jpg"
          },
          {
            "id": "BjOg7r0",
            "title": null,
            "description": null,
            "datetime": 1712812907,
            "type": "image\/jpeg",
            "animated": false,
            "width": 317,
            "height": 210,
            "size": 9914,
            "views": 3,
            "bandwidth": 29742,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": null,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "link": "https:\/\/i.imgur.com\/BjOg7r0.jpg"
          }
        ],
        success: true,
        status: 200
      }

      let i = 0;
      const reducedResults = [];
    
      for (let rawImage of rawImages.data) {
        const result = {
          id: i,
          downloadUrl: rawImage.link,
          url: rawImage.link
        };
    
        const blurDataURL = await getBase64ImageUrl(rawImage)
        result.blurDataURL = blurDataURL
        reducedResults.push(result);
        i++;
      }
      return reducedResults
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back

    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
    getImages().then((res) => {
      setImages(res);
      console.log(res);
      setIsLoading(false);
    });
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

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
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, public_id, format, url, blurDataURL }) => (
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
                src={url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                unoptimized
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
  var headers = new Headers();
  headers.append("Authorization", `Client-ID ${process.env.IMGUR_CLIENTID}`);

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  fetch("https://api.imgur.com/3/album/k1TQbiN/images", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  let reducedResults = [
    {
      "id": "0BXbGJc",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 13717,
      "views": 3,
      "bandwidth": 41151,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/0BXbGJc.jpg"
    },
    {
      "id": "BisWSnr",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 13859,
      "views": 3,
      "bandwidth": 41577,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/BisWSnr.jpg"
    },
    {
      "id": "dxIm93n",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 9826,
      "views": 3,
      "bandwidth": 29478,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/dxIm93n.jpg"
    },
    {
      "id": "lrtR4T1",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 8906,
      "views": 5,
      "bandwidth": 44530,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/lrtR4T1.jpg"
    },
    {
      "id": "dNyrEiF",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 12411,
      "views": 3,
      "bandwidth": 37233,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/dNyrEiF.jpg"
    },
    {
      "id": "9LW1NCI",
      "title": null,
      "description": null,
      "datetime": 1712812907,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 9252,
      "views": 3,
      "bandwidth": 27756,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/9LW1NCI.jpg"
    },
    {
      "id": "FH0VbVa",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 210,
      "height": 210,
      "size": 6639,
      "views": 5,
      "bandwidth": 33195,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/FH0VbVa.jpg"
    },
    {
      "id": "VBN5A89",
      "title": null,
      "description": null,
      "datetime": 1712812907,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 8607,
      "views": 3,
      "bandwidth": 25821,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/VBN5A89.jpg"
    },
    {
      "id": "eWudR89",
      "title": null,
      "description": null,
      "datetime": 1712812906,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 6390,
      "views": 3,
      "bandwidth": 19170,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/eWudR89.jpg"
    },
    {
      "id": "BjOg7r0",
      "title": null,
      "description": null,
      "datetime": 1712812907,
      "type": "image\/jpeg",
      "animated": false,
      "width": 317,
      "height": 210,
      "size": 9914,
      "views": 3,
      "bandwidth": 29742,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": null,
      "is_ad": false,
      "in_most_viral": false,
      "has_sound": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "edited": "0",
      "in_gallery": false,
      "link": "https:\/\/i.imgur.com\/BjOg7r0.jpg"
    }
  ]

  return {
    props: {
      images: reducedResults
    },
  };
}