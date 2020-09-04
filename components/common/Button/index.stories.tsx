import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { IProps } from '.'

export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    primary: false,
    label: 'Add to cart',
  },
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} as Meta

const Template: Story<IProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  primary: true,
}
