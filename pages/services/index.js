import ServiceSlider from "../../components/ServiceSlider";
import Bulp from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const serviceContent = {
  title: "My services <span class='text-accent'>.</span>",
  content:
    "We'll elevate your visionary ideas to a new level. From branding strategies to graphic design, development, copywriting, and SEO. Together, we'll craft a stunning digital experience for your business.",
};

const Services = () => {
  return (
    <div className="h-full bg-primary/30 xl:pt-36 xl:pb-36 pt-24 pb-20 flex items-center">
      <Circles />
      <div className="container mx-auto h-full xl:overflow-y-visible overflow-y-scroll">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/** text */}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4">
            <motion.h2
              className="h2 xl:mt-8"
              dangerouslySetInnerHTML={{ __html: serviceContent.title }}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
            <motion.p
              className="mb-4 masx-w-[400px] mx-auto lg:mx-0"
              dangerouslySetInnerHTML={{ __html: serviceContent.content }}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
          </div>
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/** slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulp />
    </div>
  );
};

export default Services;
