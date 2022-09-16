import type { NextPage } from "next";
import Head from "next/head";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

// const _onReady = (event: { target: { pauseVideo: () => void } }) => {
//   // access to player in all event handlers via event.target
//   event.target.pauseVideo();
// };

const ProductComp = ({ title }: { title: string }) => {
  return (
    <div className="md:col-span-3 col-span-12 cursor-pointer mx-4 my-2">
      <Link href={"/product/" + title.toLowerCase()}>
        <div>
          <div className="flex justify-center text-xl font-semibold">
            {title}
          </div>
          <div className="mt-2 rounded-md">
            <Image
              src="/categories/tobacco1x1.jpg"
              width="20"
              height="20"
              layout="responsive"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const ValueComp = ({ title }: { title: string }) => {
  const [content, setContent] = useState(
    "We prioritize honesty in each and every duties to build trust from our direct customers to end-consumers all across the globe."
  );

  return (
    <div className="md:col-span-3 col-span-12 cursor-pointer mx-4 my-2">
      <div className="flex justify-center text-2xl font-bold mt-2">{title}</div>
      <div className="mt-2">
        <Image
          src="/categories/tobacco1x1.jpg"
          width="20"
          height="20"
          layout="responsive"
        />
      </div>
      <div className="text-xl mt-1 text-justify indent-4">
        We prioritize honesty in each and every duties to build trust from our
        direct customers to end-consumers all across the globe.
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  // const googleMap = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: "AIzaSyCbHev08CqaxIB7fgKEa7OUxqGLPjuxWCU",
  //     version: "weekly",
  //     libraries: ["places"],
  //   });

  //   const mapOptions = {
  //     center: {
  //       lat: 0,
  //       lng: 0,
  //     },
  //     zoom: 4,
  //   };
  //   loader
  //     .load()
  //     .then(() => {
  //       const google = window.google;

  //       if (googleMap.current) {
  //         new google.maps.Map(googleMap.current, mapOptions);
  //       }
  //     })
  //     .catch((e) => {
  //       console.log("Error ", e);
  //     });
  // }, []);

  return (
    <div>
      <Head>
        <title style={{ fontFamily: "serif" }}>Fortunasia</title>
        <meta name="description" content="For you, from Asia" />
        <link rel="icon" href="/fortunasia.ico" />
      </Head>
      <div id="banner" className="mt-8 h-fit">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoHeight
          autoplay={{ delay: 2000 }}
        >
          {/* Bg Logo Ver */}
          <SwiperSlide>
            <div id="welcome" className="grid md:grid-cols-10 mx-12">
              <div className="md:col-span-6 md:p-10">
                <p className="text-2xl md:text-3xl">Welcome to</p>
                <p className="text-4xl md:text-6xl text-green-600 font-semibold">
                  FORTUNASIA
                </p>
                <p className="text-2xl md:text-3xl pt-8">
                  {"Fulfilling the world's needs"}
                </p>
                <p className="text-2xl md:text-3xl">
                  of{" "}
                  <a className="font-semibold text-green-600">finest quality</a>{" "}
                  of agricultural products
                </p>
              </div>
              <div className="md:col-span-4 p-10">
                <Image src="/FarmingMan.png" width="1922" height="1501" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="aboutUs" className="grid md:grid-cols-10 mx-12">
              <div className="md:col-span-6 md:px-10">
                <p className="text-2xl md:text-3xl">About</p>
                <p className="text-4xl md:text-6xl text-green-600 font-semibold">
                  FORTUNASIA
                </p>
                <p className="text-2xl md:text-3xl pt-8">
                  At <a className="text-green-600">FORTUNASIA</a>, we supply
                  various kinds of Indonesian agriculture products with the
                  finest quality.
                </p>
                <p className="text-lg md:text-xl mt-8">
                  We work with hundreds of farmers from Sabang to Merauke to
                  cultivate sustainable farmland and produce highest quality of
                  products.
                </p>
                <p className="text-lg md:text-xl mt-1">
                  We are commited to contribute to our community by treating our
                  farmers with respect and sense of humanity.
                </p>
                <p className="text-lg md:text-xl mt-4">
                  By choosing <a className="text-green-600">FORTUNASIA</a>, you
                  are also participating in our mission to provide a life of
                  dignity to our farmers.
                </p>
              </div>
              <div className="md:col-span-4 p-10">
                <Image src="/FarmingMan.png" width="1922" height="1501" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mx-12 md:px-40">
        <div id="vision" className="mt-8">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold text-green-600">
            Our Vision
          </div>
          <div className="flex justify-center text-justify mt-4 text-xl md:text-3xl">
            To become a world-leading company in supplying the global demand for
            agricultural products.
          </div>
        </div>

        <div id="value" className="mt-8">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold text-green-600">
            Our Value
          </div>
          <div className="grid grid-cols-12 mt-4 text-xl md:text-3xl">
            <ValueComp title="TRUST" />
            <ValueComp title="QUALITY" />
            <ValueComp title="HUMANITY" />
            <ValueComp title="SUSTAINABILITY" />
          </div>
        </div>

        <div id="product" className="mt-8">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold text-green-600">
            Our Products
          </div>
          <div className="grid grid-cols-12 justify-center flex-row mt-4 md:mt-8 mx-8">
            <ProductComp title="Tobacco" />
            <ProductComp title="Moringa" />
            <ProductComp title="Clove" />
            <ProductComp title="Cinnamon" />
          </div>
        </div>
        <div id="reviews" className="mt-8">
          <div className="text-center text-2xl md:text-6xl font-semibold text-green-600">
            Testimonials/Comments
          </div>
          <div className="flex justify-center mt-4 text-xl md:text-3xl"></div>
        </div>

        <div id="faq" className="mt-8">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold text-green-600">
            FAQ
          </div>
          <div className="flex justify-center mt-4 text-xl md:text-3xl"></div>
        </div>

        {/* <div id="__next" style={{ height: 300 }}>
          <div id="map" ref={googleMap} />
        </div> */}
      </div>

      <div
        id="footer"
        className="grid md:grid-cols-10 py-10 bg-green-50 px-10 mt-12 md:mt-20"
      >
        <div className="md:col-span-6 flex flex-row align-center">
          <div className="w-8 h-8 md:w-12 md:h-12 pt-2 sm:w-10 md:mt-1">
            <Image
              src="/fortunasia.png"
              width="60"
              height="60"
              layout="responsive"
            />
          </div>
          <div className="text-4xl md:text-6xl font-bold ml-4">Fortunasia</div>
        </div>
        <div className="md:col-span-4 mt-4 md:m-0">
          <div id="contacts" className="md:text-2xl text-base font-bold">
            CONTACTS
          </div>
          <div className="font-semibold">PT. BUMITAMA FORTUNA ASIA</div>
          <div id="phone">
            <div className="font-semibold mt-2">Phone</div>
            <div>
              <div>0822-5722-2236</div>
              <div>0812-3946-1122</div>
            </div>
          </div>
          <div className="mt-1">info@fortunasia.com</div>
          <div className="mt-1">
            Pergudangan Osowilangun Permai blok D no. 24, Tambak Osowilangun,
            Kec. Benowo, Kota Surabaya, Jawa Timur 60191
          </div>
          <div id="icons" className="flex flex-row mt-2">
            <div className="mr-2">FB</div>
            <div className="mr-2">LI</div>
            <div className="mr-2">TL</div>
            <div className="mr-2">TW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
