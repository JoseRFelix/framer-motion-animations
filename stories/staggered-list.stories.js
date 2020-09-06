import React from "react";
import { motion } from "framer-motion";

export default {
  title: "Orchestration/Staggered list",
};

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

const Card = () => (
  <motion.div
    variants={variants.card}
    className="px-12 py-6 bg-white rounded-lg"
  >
    Hello World!
  </motion.div>
);

const Template = () => {
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

export const Main = Template.bind({});
