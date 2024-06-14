import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../src/components/IconButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    iconUrl: {
      control: 'text',
      description: 'IconButton의 path',
    },
    iconAlt: {
      control: 'text',
      description: 'IconButton의 alt',
    },
    variant: {
      control: 'select',
      description: 'IconButton의 variant(기본형: default)',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconUrl: '',
    iconAlt: 'emoji icon',
    variant: 'stroke',
  },
};
