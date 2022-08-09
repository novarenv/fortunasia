import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Tobacco: NextPage = () => {
  const images = [];

  for (let i = 1; i <= 26; i++) {
    images.push({
      original: "/tobacco/p (" + i + ").jpg",
      thumbnail: "/tobacco/p (" + i + ").jpg",
    });
  }

  return (
    <>
      <ImageGallery items={images} />
      <>Tobacco</>
    </>
  );
};

export default Tobacco;
