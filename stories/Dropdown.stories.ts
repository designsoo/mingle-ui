import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../src/components/Dropdown';

const meta = {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    selectList: {
      control: 'object',
      description: '드롭다운에 표시될 항목들의 목록',
    },
    size: {
      control: 'select',
      options: ['md', 'sm'],
      description: '드롭다운의 크기',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumSize: Story = {
  args: {
    selectList: [
      { id: 0, value: 'Latest' },
      { id: 1, value: 'Oldest' },
    ],
    size: 'md',
    onClick: (id) => console.log(id),
  },
};

export const SmallSize: Story = {
  args: {
    selectList: [
      { id: 0, value: 'Latest' },
      { id: 1, value: 'Oldest' },
    ],
    size: 'sm',
    onClick: (id) => console.log(id),
  },
};
