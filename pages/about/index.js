import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import { SiNextdotjs, SiAdobephotoshop, SiPhp, SiJquery } from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <BiLogoTypescript key="typescript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiJquery key="jquery" />,
          <FaWordpress key="wordpress" />,
          <SiPhp key="php" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Webmax s.r.o./Identiq s.r.o.",
        stage: "2019 - 2024",
      },
      {
        title: "Web Developer - Poski.com s.r.o.",
        stage: "2018 - 2019",
      },
      {
        title: "Intern",
        stage: "2015 - 2016",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Certified Udemy - React, Nextjs, Typescript",
        stage: "2023",
      },
      {
        title:
          "University of Žilina - Faculty of Electrical Engineering and Information Technology",
        stage: "2013 - 2016",
      },
      {
        title: "Gymnasium Bytča",
        stage: "2004 - 2013",
      },
    ],
  },
];
const aboutContent = {
  title:
    "Capitaving <span class='text-accent'>stories</span> birth magnificent design.",
  content:
    "For over 7 years, I've been working as a frontend programmer. I primarily serve as an external contractor for companies, developing on their CMS systems, and undertaking private projects, mostly on the WordPress platform. I aspire to advance my skills in frontend programming, particularly focusing on opportunities involving reactive JavaScript frameworks such as ReactJs, Vue, and others, where I aim to enhance my expertise.",
  experience: [
    {
      text: "Years of experience",
      counterData: {
        start: 0,
        end: 7,
        duration: 5,
        specialChar: "+",
      },
    },
    {
      text: "Satisfied clients",
      counterData: {
        start: 0,
        end: 80,
        duration: 5,
        specialChar: "+",
      },
    },
    {
      text: "Lines of codes",
      counterData: {
        start: 0,
        end: 9999,
        duration: 5,
        specialChar: "+",
      },
    },
    {
      text: "Finished projects",
      counterData: {
        start: 0,
        end: 100,
        duration: 5,
        specialChar: "+",
      },
    },
  ],
};

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 xl:pt-36 xl:pb-36 pt-24 pb-20 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-20 xl:overflow-y-visible overflow-y-scroll xl:pb-0 pb-4">
        <div className="flex-1 flex flex-col justify-center">
          {/** text */}
          <motion.h2
            className="h2 z-20"
            dangerouslySetInnerHTML={{ __html: aboutContent.title }}
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          />
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-20"
            dangerouslySetInnerHTML={{ __html: aboutContent.content }}
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          />
          {/**counters */}
          <motion.div
            className="hidden md:flex md:max-w-lg xl:max-w-none mx-auto xl:mx-0 mb-0 md:mb-16 xl:mb-0"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-4">
              {/**experience */}
              {aboutContent.experience.map((expItem, expItemIndex) => (
                <div
                  key={expItemIndex}
                  className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 last-of-type:after:hidden "
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp
                      start={expItem.counterData.start}
                      end={expItem.counterData.end}
                      duration={expItem.counterData.duration}
                    />
                    {expItem.counterData.specialChar}
                  </div>
                  <div className="text-xs mx-auto xl:mx-0 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    {expItem.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/** info */}
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`cursor-pointer capitalize xl:text-lg relative 
                   after:h-[2px] after:absolute after:-bottom-1 after:left-0 hover:text-accent
                   transition-colors duration-300 after:transition-all after:duration-300
                  ${
                    index === itemIndex
                      ? "text-accent after:w-[100%] after:bg-accent"
                      : "after:bg-white after:w-8"
                  }`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  key={itemIndex} // Add key prop here
                >
                  <div className="mb-2 md:mb-0 font-light">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={icon.key} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
