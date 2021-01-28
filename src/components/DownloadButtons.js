import React from "react";
import appleWhite from "../images/AppleWhite.svg";
import github from "../images/github.svg";

export const DownloadButton = () => {
  return (
    <div className="flex flex-col md:flex-row self-center my-12">
      <a
        href="https://github.com/ospfranco/tempomat/releases"
        alt="Download link"
        className="rounded transition duration-500 bg-black hover:bg-gray-700 text-white w-52 text-center px-4 py-2 self-center m-2 flex justify-center items-center"
        onclick="_paq.push(['trackEvent', 'get it']);"
      >
        <img src={appleWhite} className="h-5 mr-3" alt="apple icon" /> Download
            </a>

      <a
        href="https://github.com/ospfranco/tempomat/releases"
        alt="Download link"
        onclick="_paq.push(['trackEvent', 'source']);"
        className="rounded bg-white w-52 px-4 py-2 transition hover:bg-gray-200 m-2 flex justify-center"
      >
        <img src={github} className="mr-3 h-5" alt="github icon" />
              Source
          </a>

    </div>
  )
}