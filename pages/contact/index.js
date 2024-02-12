import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Link from "next/link";
import { ContactForm } from "../../components/ContactForm";

export const ContactContent = {
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
      path: "/cv.pdf",
      title: "My CV",
    },
  },
};

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
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
              <p className="text-lg">
                <Link
                  target="_blank"
                  href={ContactContent.info.CV.path}
                  className="text-accent font-medium"
                >
                  {ContactContent.info.CV.title}
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
            <ContactForm ContactContent={ContactContent} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
