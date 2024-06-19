import "@/styles/globals.css";
import "@/styles/main.css";
import type { AppProps } from "next/app";
import { NextComponentType } from "next";
import NextNProgress from "nextjs-progressbar"
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer";
import CopyrightContent from "@/components/common/copyright/CopyrightContent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress
      color="grey"
      startPosition={0}
      stopDelayMs={200}
      height={3}
      showOnShallow={false}
      options={{ showSpinner: false }}
    />

    <Header />
    <div className="w-full max-w-[1180px] mx-auto">
        <main
          className={`w-full`}
        >
          <Component {...pageProps} />
        </main>
    </div>
    <Footer />
  </>

}
