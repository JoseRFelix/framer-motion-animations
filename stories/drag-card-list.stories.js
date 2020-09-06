import React from "react";

import DragCardListComponent from "./components/drag-card-list";

export default {
  title: "Drag/Card list",
  component: DragCardListComponent,
};

const Template = (args) => <DragCardListComponent {...args} />;

export const Main = Template.bind({});
