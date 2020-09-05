import React from "react";
import "../styles/index.css";

const Wrapper = ({ children }) => {
  const [showComponent, setShowComponent] = React.useState(true);

  const restartAnimation = () => {
    setShowComponent(false);

    setTimeout(() => {
      setShowComponent(true);
    }, 50);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 space-y-12 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
      {showComponent ? children : <div />}

      <button
        onClick={restartAnimation}
        className="absolute top-0 left-0 max-w-sm p-4 ml-12 text-white bg-gray-900 rounded-md"
      >
        Restart animation
      </button>
    </div>
  );
};

export const decorators = [
  (Story) => (
    <Wrapper>
      <Story />
    </Wrapper>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
