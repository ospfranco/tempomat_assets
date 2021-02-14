import React from "react";
import appleWhite from "../images/AppleWhite.svg";
import github from "../images/github.svg";
import heart from "../images/heart.svg";

export const DownloadButton = () => {
  return (
    <div className="flex flex-col md:flex-row self-center my-12">
      <a
        href="https://github.com/ospfranco/tempomat/releases"
        alt="Download link"
        className="rounded transition duration-200 bg-black hover:shadow-lg text-white w-52 text-center px-4 py-2 self-center m-2 flex justify-center items-center"
      >
        <img src={appleWhite} className="h-5 mr-3" alt="apple icon" /> Download
            </a>

      <a
        href="https://github.com/ospfranco/tempomat"
        alt="Download link"
        className="rounded bg-white px-4 py-2 transition duration-200 hover:shadow-lg m-2 hover:font-bold flex justify-center items-center"
      >
        <img src={github} className="mr-2 h-5" alt="github icon" />
        Source
      </a>

      <a
        href="https://github.com/sponsors/ospfranco"
        alt="Download link"
        className="rounded bg-white px-4 py-2 transition duration-200 hover:shadow-lg m-2 hover:font-semibold flex justify-center items-center"
      >
        <img src={heart} className="mr-2 h-4" alt="github icon" />
          Sponsor
      </a>
    </div>
  )
}