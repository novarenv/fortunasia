import { Loader } from "@googlemaps/js-api-loader";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

const Map: NextPage = () => {
  const [defaultCenter, setDefaultCenter] = useState({
    lat: 36.1774465,
    lng: -86.7042552,
  });
  const [markers, setMarkers] = useState([
    {
      lat: 36.157055,
      lng: -86.7696144,
    },
    {
      lat: 36.1521981,
      lng: -86.7801724,
    },
    {
      lat: 36.1577547,
      lng: -86.7785841,
    },
    {
      lat: 36.1400674,
      lng: -86.8382887,
    },
    {
      lat: 36.1059131,
      lng: -86.7906082,
    },
  ]);

  // const handleAttachGoogleMap = () => {
  //   const map = new google.maps.Map(document.getElementById("google-map"), {
  //     center: defaultCenter,
  //     zoom: 10,
  //   });

  //   setTimeout(() => {
  //     handleDrawMarkers();
  //   }, 2000);
  // };

  // const handleDrawMarkers = () => {
  //   markers.forEach((marker) => {
  //     new google.maps.Marker({
  //       position: marker,
  //       map: map,
  //     });
  //   });
  // };
  
  const googleMap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDo5e7_f22WLnOEp2YePCvUrI_7ARVTuyo",
      version: "weekly",
      libraries: ["places"],
    });

    let map;

    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 8,
    };
    loader
      .load()
      .then(() => {
        const google = window.google;

        console.log("Map");

        if (googleMap.current) {

          console.log("GMap");
          map = new google.maps.Map(googleMap.current, mapOptions);
        }
      })
      .catch((e) => {
        console.log("Error ", e);
      });
  }, []);

  return <div id="map" ref={googleMap} />;
};

export default Map;
