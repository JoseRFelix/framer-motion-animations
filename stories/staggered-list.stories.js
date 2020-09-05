import React from "react";

import Staggered from "./components/staggered-list";

export default {
  title: "Staggered List",
  component: Staggered,
};

const Template = (args) => <Staggered {...args} />;

export const StaggeredList = Template.bind({});
