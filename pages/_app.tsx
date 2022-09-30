// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import FloatingWhatsApp from "react-floating-whatsapp";
import "setimmediate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <FloatingWhatsApp
        phoneNumber="+6281232916010"
        accountName="Azifa S."
        allowClickAway
        allowEsc
      />
    </>
  );
}

export default MyApp;
