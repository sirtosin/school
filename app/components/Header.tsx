'use client'
import React, { useState } from "react";
import { Logo } from "../asset/icons/logo";
import Button from "./Button";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function Header() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(prev =>  !prev)
  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
      <Link href="/">
        <Logo />
      </Link>
        <nav className="hidden lg:flex items-center space-x-10">
          <Link
            href="/about"
            className=" cursor-pointer text-[#1F1F1F66] hover:text-textColor"
          >
            About Us
          </Link>
          <p className=" cursor-pointer text-[#1F1F1F66] hover:text-textColor">
            Our Services
          </p>
          <Link
            href="/contact"
            className=" cursor-pointer text-[#1F1F1F66] hover:text-textColor"
          >
            Contact Us
          </Link>
        </nav>
        <nav className="hidden lg:flex items-center space-x-4">
          <p className=" cursor-pointer">Parents</p>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=kn.admin.guident"
          >
            <Button title="School Owners" style="bg-btnColor text-white" />
          </a>
        </nav>
      <span className="flex lg:hidden">
        {toggle ? (
          <XMarkIcon onClick={handleToggle} className="h-6 w-6 text-red-500" />
        ) : (
          <Bars3Icon onClick={handleToggle} className="h-6 w-6 text-[#000]" />
        )}
      </span>
      {/* mobile */}
      {toggle && (
        <div className="flex flex-col space-y-4 bg-white shadow-sm rounded p-5 lg:hidden absolute top-16 right-10 ">
          <nav className="flex space-y-4 flex-col">
            <Link
              href="/about"
              className=" cursor-pointer text-[#1F1F1F66] hover:text-textColor"
            >
              About Us
            </Link>
            <p className=" cursor-pointer text-[#1F1F1F66] hover:text-textColor">
              Our Services
            </p>
            <Link
              href="/contact"
              className=" cursor-pointer text-[#1F1F1F66] hover:text-textColor"
            >
              Contact Us
            </Link>
          </nav>
          <nav className="flex flex-col space-y-4">
            <p className=" cursor-pointer">Parents</p>{' '}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=kn.admin.guident"
            >
              <Button title="School Owners" style="bg-btnColor text-white" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
