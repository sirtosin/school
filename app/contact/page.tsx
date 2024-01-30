"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Location, Mail, Phone } from "../asset/icons/social";
import Input from "../components/input";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="flex flex-col sm:flex-row sm:w-[80%] mx-auto p-5 sm:py-10">
        <div className="flex flex-col space-y-5 w-full sm:w-1/2">
          <b className="text-3xl sm:text-5xl ">
            Let's Connect and Transform Your Child or School Together!
          </b>
          <p className="text-[#333] text-sm sm:text-base">
            Ready to unlock a thriving learning environment with the power of
            Guident? We're eager to answer your questions and explore how our
            comprehensive school management app can empower your school to reach
            new heights.
          </p>
          <div className="flex flex-col space-y-5 text-sm sm:text-base">
            <span className="flex items-center space-x-4">
              <Location />
              <p>
                No 12 Idotun Road, Lekki Free Trade Zone, Ibeju-lekki, Lagos
                state, Nigeria.
              </p>
            </span>
            <span className="flex items-center space-x-4">
              <Phone />
              <p>07047489422</p>
            </span>
            <span className="flex items-center space-x-4">
              <Mail />
              <p>guident.team@gmail.com</p>
            </span>
          </div>
        </div>

        <form className="shadow bg-white rounded-lg  mt-10 sm:mt-0 flex flex-col space-y-5 p-4 ml-auto w-full sm:w-[40%] h-[400px]">
          <div className="flex items-center space-x-4">
            <Input
              label="First Name"
              placeholder=""
              onchange={() => {}}
              value=""
              type="text"
            />
            <Input
              label="Last Name"
              placeholder=""
              onchange={() => {}}
              value=""
              type="text"
            />
          </div>
          <Input
            label="Email Address"
            placeholder=""
            onchange={() => {}}
            value=""
            type="text"
          />
          <div className="flex flex-col space-y-3">
            <label className="font-semibold">message</label>
            <textarea
              placeholder=""
              className="border-[1px] outline-none border-[#D6D6D6] resize-none rounded-lg p-2"
              onChange={() => {}}
              value=""
            />
          </div>
          <input
            type="submit"
            className="bg-btnColor rounded-lg text-white p-2 "
            value="Submit"
          />
        </form>
      </div>
      <Footer />
    </div>
  )
}
