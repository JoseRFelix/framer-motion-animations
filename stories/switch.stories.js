import React from "react";
import { motion } from "framer-motion";

export default {
  title: "Layout/Switch",
};

const Template = () => {
  const [isOn, setIsOn] = React.useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      style={{
        width: "6rem",
        padding: "0.25rem",
        display: "flex",
        background: isOn ? "#48bb78" : "rgba(203, 213, 224, 0.5)",
        borderRadius: 9999,
        cursor: "pointer",
        justifyContent: isOn && "flex-end",
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        style={{
          width: "3rem",
          height: "3rem",
          background: "white",
          borderRadius: "100%",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      ></motion.div>
    </div>
  );
};

export const Main = Template.bind({});
