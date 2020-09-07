import React from "react";

import { motion, AnimatePresence } from "framer-motion";

export default {
  title: "Simple/Fade out up",
};

const Template = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {show && (
          <motion.div
            className="p-6 text-center bg-white rounded-md shadow-md"
            exit={{ opacity: 0, y: -50 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello World
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setShow((previous) => !previous)}
        className="w-56 px-4 py-4 text-white bg-gray-900 rounded-md shadow-md"
      >
        {show ? "Unmount component" : "Mount component"}
      </button>
    </div>
  );
};

export const main = Template.bind({});
