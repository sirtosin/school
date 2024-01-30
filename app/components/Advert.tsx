import Image from "next/image";
import React from "react";
import app from "../asset/img/app.png";
import Button from "./Button";

interface AdvertCardProps {
  style: boolean;
  title: string;
  icon: JSX.Element;
}
export const Advert = ({ style, title, icon }: AdvertCardProps) => (
  <div
    className={
      style
        ? 'flex flex-col lg:flex-row mx-auto w-3/4 mt-10  lg:p-10'
        : 'flex flex-col lg:flex-row-reverse mx-auto w-3/4 mt-10  lg:p-10'
    }
  >
    <aside
      className={
        style
          ? 'w-full lg:w-1/2 justify-center lg:justify-start'
          : 'w-full lg:w-1/2 flex justify-center lg:justify-end '
      }
    >
      <Image className="w-full sm:w-1/2  object-contain" src={app} alt="" />
    </aside>
    <aside className="w-full lg:w-1/2 my-10">
      <h2 className="text-2xl lg:text-3xl font-semibold">{title}</h2>
      {[...Array(3)].fill('').map((i) => (
        <div className="flex space-x-3 my-1">
          <span>{icon} </span>
          <p className=" text-sm sm:text-base">
            Guident offers a spectrum of powerful tools designed to enhance
            school management, elevate teaching experiences, and foster
            parent-school collaboration
          </p>
        </div>
      ))}
      {style && (
        <Button title="Download Mobile App" style="bg-btnColor text-white" />
      )}
    </aside>
  </div>
)
