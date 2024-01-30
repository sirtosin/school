import React from 'react'
import { CardOne, CardThree, CardTwo } from '../asset/icons/services'

export default function Services() {
  return (
    <div className="bg-footer p-10">
      <h2 className="text-center pt-10 font-semibold text-white text-3xl sm:text-5xl mb-4">
        Our Comprehensive Services
      </h2>
      <div className="flex items-center justify-center  sm:justify-around mt-20 flex-wrap">
        <ServiceCard style="bg-[#FF6833]" icon={<CardOne />} />
        <ServiceCard style="bg-[#FAFAFA]" icon={<CardTwo />} />
        <ServiceCard style="bg-[#32BBFF]" icon={<CardThree />} />
      </div>
    </div>
  )
}

export const ServiceCard = ({ style, icon }: any) => (
  <div className={`${style} m-3 rounded w-[350px] 2xl:w-[400px] flex p-7 flex-col space-y-3 h-[550px]`}>
    <h2 className='font-semibold text-xl'>Lorem ipsum dolor sit.</h2>
    <p className='text-sm text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      veniam, sit perferendis iusto optio illum nam necessitatibus sunt incidunt
      nobis illo dolor quo exercitationem deleniti modi, sint unde animi rerum.
    </p>
    <p className='underline capitalize'>learn more</p>
<span>
  {icon}
</span>
  </div>
)
