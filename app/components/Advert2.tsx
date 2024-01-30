import React from 'react'
import Button from './Button';
import Image from 'next/image';
import advert from "../asset/img/advert.png";

export default function Advert2() {
  return (
    <div className="bg-footer pt-10 sm:px-10">
      <div className="flex items-center justify-center space-y-4 flex-col my-4 ">
        <h2 className="text-3xl lg:text-6xl w-3/4 text-center text-white">
          A PRODUCT FOR EVERY FAMILY & EDUCATOR
        </h2>
        <p className="text-xs  text-white ">
          One solution, endless possibilities: for families & educators alike.
        </p>
        <Button title="Try for Free" style="bg-white" />
      </div>
      <div className=" flex items-center justify-center">
        <Image className="w-[90%] sm:w-[80%] object-contain" src={advert} alt="" />
      </div>
    </div>
  );
}
