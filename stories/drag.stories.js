import React from "react";

import DragComponent from "./components/drag";

export default {
  title: "Drag",
  component: DragComponent,
};

const Template = (args) => <DragComponent {...args} />;

export const Drag = Template.bind({});
