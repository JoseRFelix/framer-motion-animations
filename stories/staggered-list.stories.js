import React from "react";

import Staggered from "./components/staggered-list";

export default {
  title: "Orchestration/Staggered list",
  component: Staggered,
};

const Template = (args) => <Staggered {...args} />;

export const Main = Template.bind({});
