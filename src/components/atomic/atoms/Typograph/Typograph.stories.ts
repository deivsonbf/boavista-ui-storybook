
import type { Meta, StoryObj } from '@storybook/react';
import Typograph from '.';

const meta = {
  title: 'Components/Data Display/Typograph',
  component: Typograph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['headline', 'subtitle', 'body', 'caption'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'neutral1', 'neutral2', 'default'],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    margin: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Typograph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example Text',
    variant: 'body',
    color: 'default',
    align: 'left',
    margin: false,
  },
};

export const Headline: Story = {
  args: {
    children: 'Headline Text',
    variant: 'headline',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'Subtitle Text',
    variant: 'subtitle',
  },
};

export const Body: Story = {
  args: {
    children: 'Body Text',
    variant: 'body',
  },
};

export const Caption: Story = {
  args: {
    children: 'Caption Text',
    variant: 'caption',
  },
};