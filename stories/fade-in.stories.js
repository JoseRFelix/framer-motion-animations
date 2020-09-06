import React from "react";

import FadeIn from "./components/fade-in-down";

export default {
  title: "Simple/Fade in down card",
  component: FadeIn,
};

const Template = (args) => <FadeIn {...args} />;

export const main = Template.bind({});
