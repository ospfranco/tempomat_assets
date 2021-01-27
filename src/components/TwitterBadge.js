import React from "react"
import profile from "../images/profile.webp";

export default () => {
  return (
    <div className="mb-12 flex flex-row items-center self-center">
      <img src={profile} className="h-24 w-24 rounded-full my-2" alt="profile pic oscar" />
      <div className="ml-3">
        <div>Created by <span className="font-bold">Oscar Franco</span></div>
        <a href="https://www.twitter.com/ospfranco" className="text-blue-500">Follow me on Twitter!</a>
      </div>
    </div>
  )
}