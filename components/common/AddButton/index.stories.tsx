import * as React from 'react';
import { Story, Meta } from '@storybook/react'

import Button, { IProps } from '.';

export default {
  title: 'atoms/Add Button',
  component: Button,
  args: {
    label: 'Add to cart',
    inputLabel: 'Amount to add'
  },
  argTypes: {
    onClick: {
      action: 'onClick'
    }
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'gray', value: '#eee' },
      ],
    },
  }
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({})

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  primary: true,
}