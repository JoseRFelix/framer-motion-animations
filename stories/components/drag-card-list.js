import React from "react";
import { motion } from "framer-motion";

function getSize() {
  return {
    innerWidth: window.innerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = React.useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  React.useEffect(() => {
    // A good idea would be to debounce this function
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

const STORYBOOK_PADDING = 16;

const DragCardList = () => {
  const windowDimensions = useWindowSize();
  const trackRef = React.useRef();
  const [trackWidth, setTrackWidth] = React.useState();

  const left = windowDimensions.innerWidth - trackWidth - STORYBOOK_PADDING;

  React.useEffect(() => {
    setTrackWidth(trackRef.current.clientWidth);
  }, [trackRef]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={{
          left,
          right: 0,
        }}
        style={{
          minWidth: "min-content",
        }}
        className="flex px-12 space-x-6 cursor-grab active:cursor-grabbing"
      >
        {new Array(20).fill("").map((e, i) => (
          <Card key={i} />
        ))}
      </motion.div>
    </div>
  );
};

const Card = () => (
  <div className="px-12 py-6 bg-white rounded-lg">Hello World!</div>
);

export default DragCardList;
