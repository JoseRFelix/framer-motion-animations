import React from "react";

import { motion } from "framer-motion";

export default {
  title: "Simple/Fade in down",
};

const Template = () => {
  return (
    <motion.div
      className="p-6 bg-white rounded-md shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Hello World
    </motion.div>
  );
};

export const main = Template.bind({});
