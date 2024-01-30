'use client'
import React from 'react'
import Button from './Button'
import { GooglePlay } from '../asset/icons/googlePlay'
import downloads from '../asset/img/downloads.png'
import banner1 from '../asset/img/banner1.png'
import banner3 from '../asset/img/banner3.png'
import banner2 from '../asset/img/banner2.png'
import banner4 from '../asset/img/banner4.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default function Banner() {
  return (
    <div className="flex flex-col space-y-3 lg:flex-row m-10">
      <div className="w-full lg:!w-1/2 flex space-y-4 flex-col">
        <h1 className="text-5xl font-thin">EDUCATORS!</h1>
        <h3 className="text-4xl lg:text-5xl font-semibold ">
          Happy Parents, Engaged Students, Growing School.
        </h3>
        <p className="sm:text-justify text-sm sm:text-base">
          <b>
            Imagine soaring admissions, parent accolades, and learners
            improvement!
          </b>
          Guident isn't just a school management app; it's the rocket fuel your
          school needs. Streamline operations, ignite student success, and bask
          in the glow of happy parents.
        </p>
        <div className="flex items-center space-x-3">
          <Button
            title="Educators! Get Started"
            style="bg-btnColor text-white"
          />
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=kn.parent.guident"
          >
            <Button
              title="Get the School App"
              style="bg-white border-[1px] border-[#D7D7D7] text-[#FF7D33]"
              icon={<GooglePlay />}
            />
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Image className="w-10" src={downloads} alt="" />
          <p className="text-sm sm:text-base">10+ Schools Registered</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 justify-end flex space-x-3">
        <div className="w-full lg:w-1/3 flex flex-col space-y-2">
          <Image className="w-full  object-contain" src={banner1} alt="" />
          <Image className="w-full  object-contain" src={banner3} alt="" />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col space-y-2">
          <Image className="w-full  object-contain" src={banner2} alt="" />
          <Image className="w-full  object-contain" src={banner4} alt="" />
        </div>
      </div>
    </div>
  )
}

export const SwiperCard = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="w-full lg:!w-1/2 flex space-y-4 flex-col overflow-hidden">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={2}
        speed={2000}
        modules={[Autoplay]}
        effect="fade"
        className="swiper"
      >
        <SwiperSlide>
          <h1 className="text-5xl font-thin">EDUCATORS!</h1>
          <h3 className="text-4xl lg:text-5xl font-semibold ">
            Happy Parents, Engaged Students, Growing School.
          </h3>
          <p className="sm:text-justify text-sm sm:text-base">
            <b>
              Imagine soaring admissions, parent accolades, and learners
              improvement!
            </b>
            Guident isn't just a school management app; it's the rocket fuel
            your school needs. Streamline operations, ignite student success,
            and bask in the glow of happy parents.
          </p>
          <div className="flex items-center space-x-3">
            <Button
              title="Educators! Get Started"
              style="bg-btnColor text-white"
            />
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=kn.parent.guident"
            >
              <Button
                title="Get the School App"
                style="bg-white border-[1px] border-[#D7D7D7] text-[#FF7D33]"
                icon={<GooglePlay />}
              />
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Image className="w-10" src={downloads} alt="" />
            <p className="text-sm sm:text-base">10+ Schools Registered</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-5xl font-thin">PARENTS!</h1>
          <h3 className="text-4xl lg:text-5xl font-semibold ">
            Ditch the stress, embrace the joy of smarter parenting.
          </h3>
          <p className="sm:text-justify text-sm sm:text-base">
            <b>Rediscover the joy of watching your child learn and grow.</b>
            We believe technology can simplify communication and empower
            parents, leading to a more enjoyable and fulfilling parenting
            journey.
          </p>
          <div className="flex items-center space-x-3">
            <a target="_blank" href="https://parents.guident.tech/">
              <Button
                title="Parents! Get Started"
                style="bg-btnColor text-white"
              />
            </a>

            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=kn.parent.guident"
            >
              <Button
                title="Get the School App"
                style="bg-white border-[1px] border-[#D7D7D7] text-[#FF7D33]"
                icon={<GooglePlay />}
              />
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Image className="w-10" src={downloads} alt="" />
            <p className="text-sm sm:text-base">10+ Schools Registered</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
