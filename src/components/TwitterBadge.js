import React from "react"
import profile from "../images/profile.webp";

export default () => {
  return (
    <div className="mb-20 mt-8 flex flex-row items-center self-center">
      <img src={profile} className="h-24 w-24 rounded-full my-2" alt="profile pic oscar" />
      <div className="ml-3 max-w-md">
        <div>Created by <a href="https://www.twitter.com/ospfranco" className="text-blue-500 font-semibold">Oscar Franco</a></div>
        <p>Please consider <a href="https://github.com/sponsors/ospfranco" className="text-pink-500">sponsoring</a>, also star the project on <a href="https://github.com/ospfranco/tempomat" className="text-blue-500">github</a> so we can release it on homebrew!</p>
      </div>
    </div>
  )
}