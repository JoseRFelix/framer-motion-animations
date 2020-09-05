import React from "react";

import SwitchComponent from "./components/switch";

export default {
  title: "Switch",
  component: SwitchComponent,
};

const Template = (args) => <SwitchComponent {...args} />;

export const Switch = Template.bind({});
