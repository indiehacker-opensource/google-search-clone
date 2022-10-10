import Head from "next/head";
import Image from "next/image";

import { useRef } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Google</title>
        <meta
          name="GoogleSearch"
          content="A functional replica of Google's search page, you can use it for searches. Styled with Tailwind CSS to Rapidly build and look as close as possible to current google search page, the search results are pulled using Googles Programmable Search Engine and it was build using Next.js the react framework."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <form className="flex flex-col items-center pt-3 flex-grow w-4/5">
        <Image
          src="https://i.imgur.com/IZuI2H9.gif"
          height={207}
          width={700}
          priority
          alt=""
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          <button onClick={search} className="btn">
            Google Search
          </button>

          <button className="btn">
            <a href="https://www.google.com/doodles"> I&apos;m Feeling Lucky</a>
          </button>
        </div>

        <div className="flex link justify-center text-sm mt-7 pr-1 text-blue-700 items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
          <img src="google-account-security.png" className="h-5 px-1 "></img>{" "}
          <a href="https://myaccount.google.com/security-checkup">
            Take a 2 Minute Google Security Checkup.{" "}
          </a>
        </div>
      </form>

      <Footer />
    </div>
  );
}
