import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import TabList from '../src/components/TabList';
import { fn } from '@storybook/test';

const TAB_LIST = [
  { id: 0, value: 'All' },
  { id: 1, value: 'Tab 1' },
  { id: 2, value: 'Tab 2' },
  { id: 3, value: 'Tab 3' },
  { id: 4, value: 'Tab 4' },
];

const meta = {
  title: 'TabList/TabList',
  component: TabList,
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
    tabList: {
      control: 'object',
      description: 'tab 리스트',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: 'tab 리스트 size(기본형: md)',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'lg',
    tabList: TAB_LIST,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    tabList: TAB_LIST,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    tabList: TAB_LIST,
  },
};
