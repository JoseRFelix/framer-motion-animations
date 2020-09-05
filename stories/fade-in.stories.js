import React from "react";

import FadeIn from "./components/fade-in-down";

export default {
  title: "Fade In Down Card",
  component: FadeIn,
};

const Template = (args) => <FadeIn {...args} />;

export const FadeInDown = Template.bind({});
