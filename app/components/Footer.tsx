import React from "react";
import { data } from "../asset/constant";
import Button from "./Button";
import { Facebook, Instagram, Twitter } from "../asset/icons/social";

export default function Footer() {
  return (
    <footer className="bg-footer p-10 sm:h-[400px]">
      <div className="flex items-center justify-around pt-10 flex-wrap">
        {data.map((item) => (
          <div key={item.title} className="flex flex-col space-y-3 m-3">
            <h2 className="text-white">{item.title}</h2>
            {item.subtitle.map((info) => (
              <p key={info} className="text-white/20">
                {info}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col space-y-4 my-10">
        <Button title="Guident" style="bg-white !rounded" />
        <p className="text-white">
          {new Date().getFullYear()} &copy; Guident. All rights reserved.
        </p>
        <span className="flex items-center space-x-4 cursor-pointer">
          <a
            href="https://www.facebook.com/profile.php?id=100085155524341&mibextid=ZbWKwL"
            target="_blank"
          >
            <Facebook />
          </a>
          {/* <Twitter /> */}
          <a
            href="https://www.instagram.com/guidentapp?igsh=a2x0bWxxdDRlY2sw"
            target="_blank"
          >
            <Instagram />
          </a>
        </span>
      </div>
    </footer>
  )
}
