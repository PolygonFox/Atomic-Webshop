import * as React from 'react';

import Button, { IProps } from '.';

export default { title: 'Button' };

const Template = (args: IProps) => <Button {...args} />


export const Default = Template.bind({})
Default.args = {
  primary: false,
  label: 'Click me!'
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Click me!'
}
