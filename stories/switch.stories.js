import React from "react";

import SwitchComponent from "./components/switch";

export default {
  title: "Layout/Switch",
  component: SwitchComponent,
};

const Template = (args) => <SwitchComponent {...args} />;

export const Main = Template.bind({});
