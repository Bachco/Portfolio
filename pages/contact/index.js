import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Link from "next/link";

const ContactContent = {
  title: "Let's <span class='text-accent'>connect.</span>",
  buttonText: "Let's talk",
  placeholders: {
    name: "name",
    subject: "subject",
    message: "message",
  },
  info: {
    name: "Jozef Bachorík",
    email: "jozefbachorik@gmail.com",
    address: "Bytča, Slovakia",
    phoneNumber: {
      text: "+421 948 918 183",
      link: "+421948918183",
    },
    CV: {
      path: "",
      title: "My CV",
    },
  },
};

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            {/** text */}
            <motion.h2
              className="h2 mb-12"
              dangerouslySetInnerHTML={{ __html: ContactContent.title }}
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
            {/** info */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>{ContactContent.info.name}</p>
              <p>{ContactContent.info.address}</p>
              <p>
                <Link
                  className="hover:text-accent transition-all duration-300"
                  href={`mailto:${ContactContent.info.email}`}
                >
                  {ContactContent.info.email}
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent transition-all duration-300"
                  href={`mailto:${ContactContent.info.phoneNumber.link}`}
                >
                  {ContactContent.info.phoneNumber.text}
                </Link>
              </p>
            </motion.div>
          </div>
          {/** form */}
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
              {/** group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder={ContactContent.placeholders.name}
                  className="input"
                />
                <input type="text" placeholder="email" className="input" />
              </div>
              <input
                type="text"
                placeholder={ContactContent.placeholders.subject}
                className="input"
              />
              <textarea
                placeholder={ContactContent.placeholders.message}
                className="textarea"
              />
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300
          flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {ContactContent.buttonText}
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
            transition-all duration-500 absolute text-[22px]"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
