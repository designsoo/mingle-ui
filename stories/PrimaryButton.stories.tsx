import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../src/components/PrimaryButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  decorators: (Story) => (
    <div style={{ width: '787px', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'button의 size(기본형: md)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'stroke'],
      description: 'button의 variant(기본형: primary)',
    },
    children: {
      control: 'text',
      description: 'button의 text',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTheme: Story = {
  args: {
    size: 'md',
    children: 'Button',
    variant: 'primary',
    disabled: false,
  },
};

export const SecondaryTheme: Story = {
  args: {
    size: 'md',
    children: 'Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const StrokeTheme: Story = {
  args: {
    size: 'md',
    children: 'Button',
    variant: 'stroke',
    disabled: false,
  },
};

export const DisabledTheme: Story = {
  args: {
    size: 'md',
    children: 'Button',
    variant: 'stroke',
    disabled: true,
  },
};
