import React from "react";

import DragCardListComponent from "./components/drag-card-list";

export default {
  title: "Drag Card List",
  component: DragCardListComponent,
};

const Template = (args) => <DragCardListComponent {...args} />;

export const DragCardList = Template.bind({});
