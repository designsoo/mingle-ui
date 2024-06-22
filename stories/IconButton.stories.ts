import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../src/components/IconButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    iconUrl: {
      control: 'text',
      description: 'icon 이미지 파일 경로',
    },
    iconAlt: {
      control: 'text',
      description: 'icon 이미지 alt',
    },
    iconSize: {
      control: 'number',
      description: 'icon 사이즈',
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

export const DefaultTheme: Story = {
  args: {
    iconUrl: '',
    iconAlt: 'emoji icon',
    iconSize: 20,
    variant: 'default',
  },
};

export const StrokeTheme: Story = {
  args: {
    iconUrl:
      'https://imagedelivery.net/gHftqKLNBQ-NOWw8XS0zUw/97270bfb-6b8d-47e8-1287-cb467772ce00/width=20,height=20',
    iconAlt: 'emoji icon',
    iconSize: 20,
    variant: 'stroke',
  },
};
