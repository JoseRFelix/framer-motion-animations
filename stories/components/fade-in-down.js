import React from "react";
import { motion } from "framer-motion";

const FadeInDown = () => {
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

export default FadeInDown;
