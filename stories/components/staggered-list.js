import React from "react";
import { motion } from "framer-motion";

const variants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  card: {
    initial: {
      opacity: 0,
      x: -50,
    },

    animate: {
      opacity: 1,
      x: 0,
    },
  },
};

const StaggeredList = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants.container}
      className="space-y-4"
    >
      {new Array(5).fill("").map((e, index) => {
        return <Card key={index} />;
      })}
    </motion.div>
  );
};

const Card = () => (
  <motion.div
    variants={variants.card}
    className="px-12 py-6 bg-white rounded-lg"
  >
    Hello World!
  </motion.div>
);

export default StaggeredList;
