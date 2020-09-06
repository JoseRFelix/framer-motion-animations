import React from "react";

import DragBlockComponent from "./components/drag-block";

export default {
  title: "Drag Block",
  component: DragBlockComponent,
};

const Template = (args) => <DragBlockComponent {...args} />;

export const DragBlock = Template.bind({});
