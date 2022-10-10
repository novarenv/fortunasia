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
import { useEffect, useMemo, useRef, useState } from "react";
import { mail } from "./api/mail";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";

// import Map from "./map";

// const _onReady = (event: { target: { pauseVideo: () => void } }) => {
//   // access to player in all event handlers via event.target
//   event.target.pauseVideo();
// };

const ValueComp = ({ title, img }: { title: string; img: string }) => {
  const [content, setContent] = useState(
    "We prioritize honesty in each and every duties to build trust from our direct customers to end-consumers all across the globe."
  );

  return (
    <div className="grid md:grid-cols-12 grid-flow-row md:col-span-3 col-span-12 mr-8 my-2">
      <div className="flex md:col-span-4 lg:col-span-3 items-center md:mx-2 lg:mx-0 justify-center">
        <div className="w-32 h-32 md:w-24 md:h-24 lg:w-40 lg:h-40 mt-2 md:mt-0 md:p-8">
          <Image src={img} width="100" height="100" layout="responsive" />
        </div>
      </div>
      <div className="md:col-span-8 lg:col-span-9">
        <div className="flex pt-4 md:pt-0 text-2xl font-bold text-white">
          {title}
        </div>
        <div className="text-xl mt-1 text-justify text-white">
          We prioritize honesty in each and every duties to build trust from our
          direct customers to end-consumers all across the globe.
        </div>
      </div>
    </div>
  );
};

function Map() {
  const center = useMemo(() => ({ lat: -7.2224645, lng: 112.6568938 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDo5e7_f22WLnOEp2YePCvUrI_7ARVTuyo",
  });

  if (!isLoaded) return <div>Loading..</div>;
  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="w-72 h-72 md:w-96 md:h-96 mt-8 md:m-0"
      // mapContainerStyle={{ width: "280px", height: "280px" }}
    >
      <Marker
        position={center}
        title={"The marker`s title will appear as a tooltip."}
        key={1}
      />
    </GoogleMap>
  );
}

const Home: NextPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDo5e7_f22WLnOEp2YePCvUrI_7ARVTuyo",
  });

  // if (!isLoaded) return <div>Loading...</div>;
  // return <Map />;

  return (
    <div>
      <Head>
        <title style={{ fontFamily: "serif" }}>Fortunasia</title>
        <meta name="description" content="For you, from Asia" />
        <link rel="icon" href="/fortunasia.ico" />
      </Head>
      <div id="banner" className="h-fit">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 2000 }}
        >
          {/* Bg Logo Ver */}
          <SwiperSlide>
            <div
              className="flex justify-center items-center bg-[url('/bgLeaves.jpg')] bg-cover bg-center"
              style={{ height: 1000 }}
            >
              <div>
                <div className="text-center text-2xl md:text-3xl text-gray-100">
                  Welcome to
                </div>
                <div className="text-center text-2xl md:text-9xl text-white font-bold tracking-widest">
                  FORTUNASIA
                </div>
                <div className="text-center text-2xl md:text-3xl md:mt-2 text-gray-100">
                  INTERNATIONAL TRADE
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="flex px-20 items-center bg-[url('/fieldTop.jpg')] bg-cover bg-center"
              style={{ height: 1000 }}
            >
              <div>
                <div className="text-2xl md:text-9xl text-white font-semibold">
                  FORTUNASIA
                </div>
                <p className="text-2xl md:text-3xl pt-8 text-gray-100">
                  {"Fulfilling the world's needs"}
                </p>
                <p className="text-2xl md:text-3xl text-gray-100">
                  of{" "}
                  <a className="font-semibold text-gray-100">finest quality</a>{" "}
                  of agricultural products
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              id="aboutUs"
              className="flex px-20 items-center bg-[url('/farmer.jpg')] bg-cover bg-center"
              style={{ height: 1000 }}
            >
              <div>
                <div className="md:col-span-6 md:px-10">
                  <p className="text-2xl md:text-3xl text-gray-100">At</p>

                  <div className="text-2xl md:text-9xl text-white font-semibold">
                    FORTUNASIA,
                  </div>
                  <p className="text-2xl md:text-3xl pt-8 text-gray-100">
                    we supply various kinds of Indonesian agriculture products
                    with the finest quality.
                  </p>
                  <p className="text-lg md:text-xl mt-8 text-gray-100">
                    We work with hundreds of farmers from Sabang to Merauke to
                    cultivate sustainable farmland and produce{" "}
                    <a className="font-semibold text-gray-100">
                      highest quality
                    </a>
                    of products.
                  </p>
                  <p className="text-lg md:text-xl mt-1 text-gray-100">
                    We are commited to contribute to our community by treating
                    our farmers with respect and sense of humanity.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="flex justify-center items-center bg-[url('/fieldHill.jpg')] bg-cover bg-center"
              style={{ height: 1000 }}
            >
              <div>
                <div className="text-center text-2xl md:text-3xl text-gray-100">
                  By choosing
                </div>
                <div className="text-center text-2xl md:text-8xl text-white font-bold tracking-widest">
                  FORTUNASIA
                </div>
                <div className="text-center text-2xl md:text-2xl md:mt-2 text-gray-100">
                  you are also participating in our mission to provide
                </div>
                <div className="text-center text-2xl md:text-2xl md:mt-2 text-gray-100">
                  a life of dignity to our farmers.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div id="ours" className="grid md:grid-cols-12 flex-row bg-[#36442A]">
        <div className="md:col-span-2 md:w-full md:h-full h-60 grid bg-[url('/farmField.jpg')] bg-cover bg-center" />
        <div className="md:col-span-10 p-8 md:p-16">
          <div id="vision" className="mt-8">
            <div className="flex text-4xl md:text-6xl font-semibold text-white">
              Our Vision
            </div>
            <div className="flex text-justify mt-4 text-xl md:text-3xl text-white">
              To become a world-leading company in supplying the global demand
              for agricultural products.
            </div>
          </div>

          <div id="value" className="mt-8">
            <div className="flex text-4xl md:text-6xl font-semibold text-white">
              Our Value
            </div>
            <div className="grid grid-cols-6 mt-4 text-xl md:text-3xl">
              <ValueComp title="TRUST" img="/icons/trust.png" />
              <ValueComp title="QUALITY" img="/icons/quality.png" />
            </div>
            <div className="grid grid-cols-6 mt-4 text-xl md:text-3xl">
              <ValueComp title="HUMANITY" img="/icons/humanity.png" />
              <ValueComp
                title="SUSTAINABILITY"
                img="/icons/sustainability.png"
              />
            </div>
            {/* <div className="grid grid-cols-6 mt-4 text-xl md:text-3xl">
              <ValueComp title="ENVIRONMENT" img="/icons/environment.png" />
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div id="product">
          <div className="flex justify-center text-4xl md:text-6xl py-8 font-semibold md:pb-12 text-gray-200 bg-green-800">
            Our Products
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide className="translate-x-0">
              <div className="w-full relative h-full">
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/moringaTp.png"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-6xl md:text-9xl font-bold py-8 pr-16">
                    01
                  </div>
                </div>
                <div className="grid md:grid-cols-12 h-fit">
                  <div className="md:flex justify-center items-center col-span-2 hidden">
                    <div
                      className="text-center rotate-180 indent-12 text-4xl font-semibold tracking-widest pb-8"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8 md:p-0">
                    <div className="text-end font-bold text-5xl mb-4 md:mb-0 md:my-20 md:mr-16">
                      Moringa Oleifera
                    </div>
                    <div className="grid md:grid-cols-12">
                      <div className="md:col-span-8 text-justify text-xl md:text-3xl">
                        Moringa oleifera is a plant that can be consumed and
                        used as herbal medicine. We have selected the
                        <a className="font-semibold"> finest quality</a> of
                        Moringa in Indonesia
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Dried leaves, seeds
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : 6-12 months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="translate-x-0">
              <div className="w-full relative h-full">
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/coconutTp.png"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-6xl md:text-9xl font-bold py-8 pr-16">
                    02
                  </div>
                </div>
                <div className="grid md:grid-cols-12 h-fit">
                  <div className="md:flex justify-center items-center col-span-2 hidden">
                    <div
                      className="text-center rotate-180 indent-12 text-4xl font-semibold tracking-widest pb-8"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8 md:p-0">
                    <div className="text-end font-bold text-5xl mb-4 md:mb-0 md:my-20 md:mr-16">
                      Copra
                    </div>
                    <div className="grid md:grid-cols-12">
                      <div className="md:col-span-8 text-justify text-xl md:text-3xl">
                        Copra is one of the most important coconut derivative
                        products, because it is the raw material for making
                        coconut oil and its derivatives.Coconut oil is used as a
                        raw material for cosmetic products, industry (soap,
                        shampoo), medicine, biodiesel, chemical mixtures,
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Dried, half cut, white copra, black copra
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : 6 months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="translate-x-0">
              <div className="w-full relative h-full">
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/nutmegTp.png"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-6xl md:text-9xl font-bold py-8 pr-16">
                    03
                  </div>
                </div>
                <div className="grid md:grid-cols-12 h-fit">
                  <div className="md:flex justify-center items-center col-span-2 hidden">
                    <div
                      className="text-center rotate-180 indent-12 text-4xl font-semibold tracking-widest pb-8"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8 md:p-0">
                    <div className="text-end font-bold text-5xl mb-4 md:mb-0 md:my-20 md:mr-16">
                      Nutmeg
                    </div>
                    <div className="grid md:grid-cols-12">
                      <div className="md:col-span-8 text-justify text-xl md:text-3xl">
                        Nutmeg is a tree-shaped plant originating from the Banda
                        Islands, Maluku. As highly valued spices, nutmeg have
                        been important trading commodities. We have selected the
                        best quality nutmeg in several regions in Indonesia.
                        Some of the benefits of nutmeg is basic ingredients of
                        syrup and candy. As well as being the basic ingredient
                        of herbal oils.
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Long, whole, shelled or without, broken.
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : 2 years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="translate-x-0">
              <div className="w-full relative h-full">
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/cinnamonTp.png"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-6xl md:text-9xl font-bold py-8 pr-16">
                    04
                  </div>
                </div>
                <div className="grid md:grid-cols-12 h-fit">
                  <div className="md:flex justify-center items-center col-span-2 hidden">
                    <div
                      className="text-center rotate-180 indent-12 text-4xl font-semibold tracking-widest pb-8"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8 md:p-0">
                    <div className="text-end font-bold text-5xl mb-4 md:mb-0 md:my-20 md:mr-16">
                      Cinnamon
                    </div>
                    <div className="grid md:grid-cols-12">
                      <div className="md:col-span-8 text-justify text-xl md:text-3xl">
                        Cinnamon is a type of long-lived plant that produces
                        bark which is used as a spice (spices). Apart from being
                        used as a food spice, is also used as an antiseptic
                        because asiri has the power to kill microorganisms. In
                        addition, the oil can be used in industry as a mouthwash
                        and paste, soap fragrance freshener, detergent, lotion,
                        perfume and cream.
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Rolled, powder, and cut.
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : 2 years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="translate-x-0">
              <div className="w-full relative h-full">
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/cloveTp.png"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-6xl md:text-9xl font-bold py-8 pr-16">
                    05
                  </div>
                </div>
                <div className="grid md:grid-cols-12 h-fit">
                  <div className="md:flex justify-center items-center col-span-2 hidden">
                    <div
                      className="text-center rotate-180 indent-12 text-4xl font-semibold tracking-widest pb-8"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8 md:p-0">
                    <div className="text-end font-bold text-5xl mb-4 md:mb-0 md:my-20 md:mr-16">
                      Cloves
                    </div>
                    <div className="grid md:grid-cols-12">
                      <div className="md:col-span-8 text-justify text-xl md:text-3xl">
                        Cloves are the aromatic dried flower buds of a tree.
                        They are native to the Maluku islands in Indonesia and
                        used as a spice in cuisines all over the world.
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Whole cloves
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : 3-4 years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="translate-x-0">
              <div className="w-full relative h-full">
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/tobaccoTp.png"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-6xl md:text-9xl font-bold py-8 pr-16">
                    06
                  </div>
                </div>
                <div className="grid md:grid-cols-12 h-fit">
                  <div className="md:flex justify-center items-center col-span-2 hidden">
                    <div
                      className="text-center rotate-180 indent-12 text-4xl font-semibold tracking-widest pb-8"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8 md:p-0">
                    <div className="text-end font-bold text-5xl mb-4 md:mb-0 md:my-20 md:mr-16">
                      Tobacco
                    </div>
                    <div className="grid md:grid-cols-12">
                      <div className="md:col-span-8 text-justify text-xl md:text-3xl">
                        Tobacco is a group of plants whose leaves are commonly
                        used as raw materials for making cigarettes. Namely as
                        raw material for cigarettes and cigars. We have chosen
                        the finest quality tobacco from our farmers spread
                        across several regions in Indonesia.
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Rough cut and <a className="font-semibold">Shag</a>{" "}
                        (fine cut)
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 md:col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-8 md:col-span-10 text-xl">
                        : 3-4 years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div id="reviews" className="py-8 bg-green-600">
          <div className="text-center text-2xl md:text-6xl font-semibold text-white">
            Testimonials/Comments
          </div>
          <div className="flex justify-center mt-4 text-xl md:text-3xl"></div>
        </div> */}

        {/* <div id="faq" className="py-8 bg-green-800">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold text-white">
            FAQ
          </div>
          <div className="flex justify-center mt-4 text-xl md:text-3xl"></div>
        </div> */}
      </div>

      <div id="footer" className="relative w-full h-full">
        <div className="h-48 md:h-80 w-full bg-[url('/farmField.jpg')] bg-cover bg-center" />
        <div className="md:absolute md:top-64 md:left-48 bg-[#0D1B1B] sm:bg-transparent pl-10 pt-10 md:pt-0 md:pl-0">
          <div className="font-bold md:text-8xl text-6xl text-yellow-500 tracking-wider">
            CONTACT
          </div>
          <div className="font-semibold text-2xl md:text-4xl text-gray-100 tracking-widest pt-2 md:pt-1">
            Let's get in touch
          </div>
        </div>
        <div className="grid flex-row md:grid-cols-12 pt-12 md:pt-28 pb-12 bg-[#0D1B1B] px-10">
          <div className="md:col-span-4 flex flex-col align-center text-gray-200">
            <div className="w-60 h-12 md:w-80 md:h-24 sm:w-10 md:mt-1">
              <Image
                src="/fortunasiaHorWhite.png"
                width="128"
                height="36"
                layout="responsive"
              />
            </div>
            {/* <div className="text-4xl md:text-6xl font-bold ml-4">
              Fortunasia
            </div> */}

            <div className="font-semibold text-xl">
              PT. BUMITAMA FORTUNA ASIA
            </div>
            <div id="phone">
              <div className="font-semibold mt-2">Phone</div>
              <div>
                <div>+62812-3291-6010</div>
                <div>+62822-5722-2236</div>
                <div>+62812-3946-1122</div>
              </div>
            </div>
            <div className="mt-2">info@fortunasia.com</div>
            <div className="mt-2">
              Pergudangan Osowilangun Permai blok D no. 24, Tambak Osowilangun,
              Kec. Benowo, Kota Surabaya, Jawa Timur 60191
            </div>
            <div id="icons" className="flex flex-row mt-2">
              <div className="w-8 h-8 mt-2 mr-4">
                <Image
                  src="/icons/facebook.png"
                  width="60"
                  height="60"
                  layout="responsive"
                />
              </div>
              <div className="w-8 h-8 mt-2 mr-4">
                <Image
                  src="/icons/linkedIn.png"
                  width="60"
                  height="60"
                  layout="responsive"
                />
              </div>
              <div className="w-8 h-8 mt-2 mr-4">
                <Image
                  src="/icons/telegram.png"
                  width="60"
                  height="60"
                  layout="responsive"
                />
              </div>
              <div className="w-8 h-8 mt-2 mr-4">
                <Image
                  src="/icons/twitter.png"
                  width="60"
                  height="60"
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div id="__next" className="w-full h-full flex justify-center">
              {/* <div id="map" ref={googleMap} /> */}
              <Map />
            </div>
            {/* <GoogleMap zoom={10} center={{ lat: 0, lng: -80 }}></GoogleMap> */}
          </div>

          <div className="md:col-span-4 mt-4 md:m-0 text-gray-200">
            <form
              method="post"
              className="flex flex-col"
              onSubmit={(e) => {
                console.log("Inquiry");
                e.preventDefault();
                mail().catch(console.error);
              }}
            >
              <label htmlFor="first" className="font-semibold text-2xl">
                Email
              </label>
              <input
                type="text"
                id="first"
                name="first"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Please enter your email"
              />
              <label htmlFor="last" className="font-semibold text-2xl mt-2">
                Message
              </label>
              <textarea
                id="last"
                name="last"
                className="shadow appearance-none border rounded w-full py-2 px-3 h-44 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline-block align-top"
                placeholder="Plase give us your message"
              />
              <button
                type="submit"
                className="mt-8 bg-[#83BC75] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex text-2xl font-semi pl-8 py-4 bg-white tracking-widest">
          <div className="w-4 h-4 mr-1 mt-1">
            <Image
              src="/icons/copyright.png"
              width="60"
              height="60"
              layout="responsive"
            />
          </div>{" "}
          2022 Fortuna Asia. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Home;
