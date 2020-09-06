import React from "react";

import { motion } from "framer-motion";

export default {
  title: "Drag/Block",
};

const Template = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      className="px-12 py-6 bg-white rounded-lg"
    >
      Hello World!
    </motion.div>
  );
};

export const Main = Template.bind({});
