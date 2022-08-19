import Head from "next/head";
import Sidbar from "../components/Sldbar";
import Container from "../components/Container";
import React from "react";
export default function Home() {
  return (
    <div>
      <Head>
        <title> وب سایت شخصی محمدمهدی سنگتراشان</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main dir="rtl">
        <div className="flex flex-1 fixed   lg:w-52 clear-left top-0 right-0 ">
          <Sidbar />
        </div>
        <div className=" mr-16 lg:mr-52  ">
          <Container />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
