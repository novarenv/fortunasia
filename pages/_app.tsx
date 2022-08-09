// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import FloatingWhatsApp from "react-floating-whatsapp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <FloatingWhatsApp
        phoneNumber="+6281239461122"
        accountName="Novaren V"
        allowClickAway
        allowEsc
      />
    </>
  );
}

export default MyApp;
