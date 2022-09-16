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
    <div className="grid md:grid-cols-12 grid-flow-row md:col-span-3 col-span-12 mr-8 my-2">
      <div className="flex md:col-span-4 lg:col-span-3 items-center md:mx-2 lg:mx-0">
        <div className="md:w-24 md:h-24 lg:w-40 lg:h-40">
          <Image
            src="/categories/tobacco1x1.jpg"
            width="100"
            height="100"
            layout="responsive"
          />
        </div>
      </div>
      <div className="md:col-span-8 lg:col-span-9">
        <div className="flex text-2xl font-bold text-white">{title}</div>
        <div className="text-xl mt-1 text-justify text-white">
          We prioritize honesty in each and every duties to build trust from our
          direct customers to end-consumers all across the globe.
        </div>
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
              className="flex justify-center items-center bg-[url('/bgLeaves.jpg')]"
              style={{ width: 2000, height: 1000 }}
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
              className="flex px-20 items-center bg-[url('/bgLeaves.jpg')]"
              style={{ width: 2000, height: 1000 }}
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
              className="flex px-20 items-center bg-[url('/bgLeaves.jpg')]"
              style={{ width: 2000, height: 1000 }}
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
              className="flex justify-center items-center bg-[url('/bgLeaves.jpg')]"
              style={{ width: 2000, height: 1000 }}
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

      <div id="ours" className="grid md:grid-cols-12 flex-row bg-green-700">
        <div className="md:col-span-2 md:w-24 md:h-24 lg:w-full lg:h-full">
          <Image src="/categories/tobacco1x1.jpg" width="400" height="920" />
        </div>
        <div className="md:col-span-10 md:p-16">
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
              <ValueComp title="TRUST" />
              <ValueComp title="QUALITY" />
            </div>
            <div className="grid grid-cols-6 mt-4 text-xl md:text-3xl">
              <ValueComp title="HUMANITY" />
              <ValueComp title="SUSTAINABILITY" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="product" className="pt-8">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold md:mb-12 text-green-600">
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
            <SwiperSlide>
              <div className="w-full relative" style={{ height: 1000 }}>
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/tobacco1x1.jpg"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-9xl font-bold py-8 pr-16">
                    04
                  </div>
                </div>
                <div className="grid grid-cols-12 h-full">
                  <div className="flex justify-center items-center col-span-2">
                    <div
                      className="text-center rotate-180 text-4xl font-semibold tracking-widest"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="text-end font-bold text-5xl md:my-20 md:mr-16">
                      Moringa Oleifera
                    </div>
                    <div className="text-justify text-xl md:text-xl">
                      Moringa oleifera is a plant that can be consumed
                    </div>
                    <div className="text-justify text-xl md:text-xl">
                      and used as herbal medicine. We have selected the
                    </div>
                    <div className="text-justify text-xl md:text-xl">
                      <a className="font-semibold">finest quality</a> of Moringa
                      in Indonesia
                    </div>

                    <div className="grid grid-cols-12 mt-24">
                      <div className="col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-10 text-xl">
                        : Dried leaves, seeds
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-10 text-xl">: 6-12 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full relative" style={{ height: 1000 }}>
                <div className="md:fixed md:top-12 md:left-48">
                  <Image
                    src="/categories/tobacco1x1.jpg"
                    width="400"
                    height="280"
                  />
                </div>

                <div className="flex bg-green-800 justify-end">
                  <div className="text-white text-9xl font-bold py-8 pr-16">
                    05
                  </div>
                </div>
                <div className="grid grid-cols-12 h-full">
                  <div className="flex justify-center items-center col-span-2">
                    <div
                      className="text-center rotate-180 text-4xl font-semibold tracking-widest"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      DISCOVER OUR PRODUCTS
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="text-end font-bold text-5xl md:my-20 md:mr-16">
                      Moringa Oleifera
                    </div>
                    <div className="text-justify text-xl md:text-xl">
                      Moringa oleifera is a plant that can be consumed
                    </div>
                    <div className="text-justify text-xl md:text-xl">
                      and used as herbal medicine. We have selected the
                    </div>
                    <div className="text-justify text-xl md:text-xl">
                      <a className="font-semibold">finest quality</a> of Moringa
                      in Indonesia
                    </div>

                    <div className="grid grid-cols-12 mt-24">
                      <div className="col-span-2 text-xl font-semibold">
                        Forms
                      </div>
                      <div className="col-span-10 text-xl">
                        : Dried leaves, seeds
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-2 text-xl font-semibold">
                        Packaging Type
                      </div>
                      <div className="col-span-10 text-xl">
                        : Depending on request
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-2 text-xl font-semibold">
                        Self life
                      </div>
                      <div className="col-span-10 text-xl">: 6-12 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div id="reviews" className="py-8 bg-green-600">
          <div className="text-center text-2xl md:text-6xl font-semibold text-white">
            Testimonials/Comments
          </div>
          <div className="flex justify-center mt-4 text-xl md:text-3xl"></div>
        </div>

        <div id="faq" className="py-8">
          <div className="flex justify-center text-4xl md:text-6xl font-semibold text-green-600">
            FAQ
          </div>
          <div className="flex justify-center mt-4 text-xl md:text-3xl"></div>
        </div>

        {/* <div id="__next" style={{ height: 300 }}>
          <div id="map" ref={googleMap} />
        </div> */}
      </div>

      <div id="footer" className="grid md:grid-cols-10 py-8 bg-green-50 px-10">
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
      <div className="text-2xl font-semi pl-8 pb-4 bg-green-50">
        C 2022 Fortuna Asia. All rights reserved
      </div>
    </div>
  );
};

export default Home;
