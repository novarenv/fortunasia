import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Head from "next/head";
import YouTube from "react-youtube";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import InstagramEmbed from "react-instagram-embed";
import Link from "next/link";
import Team from "../components/Team";
import Image from "next/image";
import styles from "./product.module.css";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Loader } from "@googlemaps/js-api-loader";

const _onReady = (event: { target: { pauseVideo: () => void } }) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

const Home: NextPage = () => {
  const googleMap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCbHev08CqaxIB7fgKEa7OUxqGLPjuxWCU",
      version: "weekly",
      libraries: ["places"],
    });

    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    };
    loader
      .load()
      .then(() => {
        const google = window.google;

        if (googleMap.current) {
          new google.maps.Map(googleMap.current, mapOptions);
        }
      })
      .catch((e) => {
        console.log("Error ", e);
      });
  }, []);

  return (
    <div>
      <Head>
        <title style={{ fontFamily: "serif" }}>Fortunasia</title>
        <meta name="description" content="For you, from Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid md:grid-cols-10">
        <div className="md:col-span-6 p-10 transition duration-500 ease-in-out">
          <p className="text-3xl ml-1 text-green-600">For You. From Asia</p>
          <p className="text-6xl pt-2">Best Product At Your Budget</p>
        </div>
        <div className="md:col-span-4 p-10">
          <Image src="/FarmingMan.png" width="1922" height="1501" />
        </div>
      </div>

      <div id="product" className="flex justify-center text-6xl">
        Our Products
      </div>
      <div>
        <Link href="/tobacco">
          <div className={styles.product + " flex justify-center w-10  "}>
            <a>Tobacco</a>
          </div>
        </Link>
        <div></div>
      </div>
      <div>
        <Link href="/tobacco">
          <div className={styles.product + " flex justify-center w-10  "}>
            <a>Moringa</a>
          </div>
        </Link>
        <div></div>
      </div>
      <div>
        <Link href="/tobacco">
          <div className={styles.product + " flex justify-center w-10  "}>
            <a>Clove</a>
          </div>
        </Link>
        <div></div>
      </div>

      <div className="flex justify-center text-6xl">Our Team</div>
      <div className="grid md:grid-cols-3 p-10 mt-4">
        <Team name="Callula Alma" />
        <Team name="Agfandio Kumara" />
        <Team name="Novaren Veraldo" />
      </div>
      <div className="grid overflow-x-auto md:grid-cols-2 p-10 mt-4">
        <Team name="Azifa Salsabila" />
        <Team name="David Gideon" />
      </div>
      

      <div id="__next" style={{ height: 300 }}>
        <div id="map" ref={googleMap} />
      </div>

      <div className="grid grid-cols-10 p-10 bg-green-50 px-20">
        <div className="col-span-6 flex align-middle">
          <div className="w-12 h-12 pt-2">
            <Image src="/jeg.png" width="60" height="60" layout="responsive" />
          </div>
          <div className="sm:text-6xl font-bold ml-4">Fortunasia</div>
        </div>
        <div className="col-span-4">Contact us</div>
      </div>
    </div>
  );
};

export default Home;
