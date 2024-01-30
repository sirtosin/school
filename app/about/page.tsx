import Image from "next/image";
import React from "react";
import about from "../asset/img/about.png";
import about1 from "../asset/img/about1.png";
import about2 from "../asset/img/about2.png";
import Line from "../asset/img/Line.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="w-[80%] mx-auto">
        <h2 className="text-5xl my-4">ABOUT US</h2>
        <hr className="w-full my-5" />
        <Image className="" src={about} alt="" />
        <Values
          style
          title="Our Mission"
          body="We ignite a shared journey of learning, empowering families, educators,
      and schools to unleash every child's potential. As pioneers in educational
      technology, we craft holistic solutions that nurture curiosity, spark
      connection, and streamline experiences for everyone involved. Together, we
      transcend traditional boundaries. Guident Edutech is more than just tools
      – it's a catalyst for collaboration, growth, and success. We envision a
      future where families, educators, and schools dance alongside each other,
      hand in hand, on a lifelong adventure of learning."
        />
        <div className="flex flex-col space-y-4 sm:space-x-10">
          <Image className="" src={about1} alt="" />
          <Image className="" src={about2} alt="" />
        </div>
        <Values
          style={false}
          title="Our Vision"
          body="We envision a world where families are actively engaged partners in their children's education, equipped with resources and insights to nurture their unique needs and celebrate their milestones. We see teachers empowered with innovative tools and personalized pathways to inspire every learner, unlock their talents, and guide them on a lifelong journey of discovery. Together, families, educators, and schools join hands to create vibrant learning communities where every child blossoms, driven by curiosity, collaboration, and a shared passion for learning."
        />
        <h2 className="text-3xl sm:text-5xl text-[#444444] mt-10">More about our services</h2>
        <Image className="" src={Line} alt="" />
        <MoreCard
          style={false}
          title="PARENT, Rekindle the Magic of Parenthood!"
          body="   Guident invites you to rekindle the magic of parenthood, offering an
      all-in-one tool to empower you on this breathtaking journey. It transcends
      typical checklists, providing personalized guidance to nurture your
      child's unique needs and celebrate their milestones with newfound
      confidence. Beyond problem-solving, Guident reignites joy in everyday
      moments, from crafting imaginative bedtime stories to embarking on playful
      learning adventures. As your co-pilot, it transforms mundane tasks into
      meaningful shared experiences, strengthening the precious bond of
      parenthood. Join us on this journey to embrace the transformative power of
      informed and confident parenting, rediscovering the joy of watching your
      child learn and grow."
        />
        <MoreCard
          style={false}
          title="PROPRIETOR, Bridging the Gap, Empowering Schools!"
          body="Guident's School Management App transforms educational environments, fostering unity among staff, students, and parents. Teachers benefit from streamlined workflows, personalized learning, and simplified progress tracking. Parents actively engage as informed partners, receiving updates and accessing curriculum details, building trust through transparent communication. In this collaborative ecosystem, everyone feels valued and supported, contributing to a vibrant school community. Join the educational revolution with Guident, where flourishing together is the ultimate goal."
        />
        <MoreCard
          style
          title="TEACHERS, Breathe Easy: Guident is Your Ally!"
          body="Stop juggling mountains of paperwork and chasing elusive connections. Guident is your all-in-one tool designed by teachers, for teachers. Streamline workflows, elevate your teaching methods, and forge stronger bonds with students and parents. Rediscover the joy of teaching, reclaim your time, and watch your classroom blossom. Guident – it's your teaching revolution, starting now."
        />
      </div>
      <Footer />
    </>
  );
}

interface Props {
  style: boolean;
  title: string;
  body: string;
}

export const Values = ({ style, title, body }: Props) => (
  <div
    className={
      style
        ? 'flex flex-col sm:flex-row justify-between my-4'
        : 'flex flex-col sm:flex-row-reverse justify-between my-4'
    }
  >
    <h1
      className={
        style
          ? 'text-[#22222266] w-full sm:w-1/2 text-3xl sm:text-5xl'
          : 'text-[#22222266] w-full sm:w-1/2 text-3xl sm:text-5xl sm:justify-end flex'
      }
    >
      {title}
    </h1>
    <p className="w-full sm:w-1/2 text-[#222] text-sm sm:text-base">{body}</p>
  </div>
)

interface MoreCardProp {
  style: boolean;
  title: string;
  body: string;
}
export const MoreCard = ({ body, title, style }: MoreCardProp) => (
  <div className="flex flex-col space-y-4 my-5">
    <h2 className="text-xl sm:text-3xl text-textColor">{title}</h2>
    <p className="text-[#222] text-sm sm:text-base">{body}</p>
    {!style && <hr />}
  </div>
);
