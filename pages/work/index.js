import WorkSlider from "../../components/WorkSlider";
import Bulp from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const serviceContent = {
  title: "My work <span class='text-accent'>.</span>",
  content:
    "",
};

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/** text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2
              className="h2 xl:mt-12"
              dangerouslySetInnerHTML={{ __html: serviceContent.title }}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
            {/*
            <motion.p
              className="mb-4 masx-w-[400px] mx-auto lg:mx-0"
              dangerouslySetInnerHTML={{ __html: serviceContent.content }}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
          */}
          </div>
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/** slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulp />
    </div>
  );
};

export default Work;
