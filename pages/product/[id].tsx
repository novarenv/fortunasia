import type { NextPage } from "next";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Tobacco: NextPage = () => {
  const images = [];
  const router = useRouter();
  const id = router.query.id as string;

  const clove = {
    title: "Clove",
  };

  const tobacco = {
    title: "Tobacco",
  };

  const cinnamon = {
    title: "Cinnamon",
  };

  const moringa = {
    title: "Moringa",
  };

  const [content, setContent] = useState({ title: id });

  useEffect(() => {
    console.log("Hmm?");
    switch (id) {
      case "clove":
        console.log("Hmm");
        setContent(clove);
        break;

      case "tobacco":
        setContent(tobacco);
        break;

      case "cinnamon":
        setContent(cinnamon);
        break;

      case "moringa":
        setContent(moringa);
        break;

      default:
        break;
    }
  }, [id]);

  console.log("Id", content.title);

  for (let i = 1; i <= 26; i++) {
    images.push({
      original: "/tobacco/p (" + i + ").jpg",
      thumbnail: "/tobacco/p (" + i + ").jpg",
    });
  }

  return (
    <div className="grid md:grid-cols-12 mt-12">
      <div className="md:col-span-6 md:mx-12">
        <ImageGallery items={images} />
      </div>
      <div className="md:col-span-6">
        <div className="text-2xl font-bold">{content.title}</div>
        <div id="desc" className="text-xl my-2">
          <div>
            <a className="font-bold">{content.title}</a> /Kilogram{" "}
            <a className="text-red-400">price</a>
          </div>
          <div className="mt-8">Product Details:</div>
          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-6">
              <div>Product Type</div>
              <div>Product Type</div>
              <div>Product Type</div>
            </div>
            <div className="col-span-6">
              <div>Chewing {content.title}</div>
              <div>Chewing {content.title}</div>
              <div>Chewing {content.title}</div>
            </div>
          </div>
          <div className="mt-4">We are manufacturers...</div>
          <div className="mt-4 text-blue-400">View Complete Detail</div>
        </div>
      </div>
    </div>
  );
};

export default Tobacco;
