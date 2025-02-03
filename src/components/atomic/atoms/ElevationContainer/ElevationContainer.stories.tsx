import type { Meta, StoryObj } from '@storybook/react';

import ElevationContainer from './';

const meta: Meta<typeof ElevationContainer> = {
  title: 'Components/Surfaces/ElevationContainer',
  component: ElevationContainer,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ["children"],
      viewMode: "docs",
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'modal', 'notification', 'box', 'warning', 'panel'],
      description: 'Variação do sombreamento do elemento',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do elemento',
    }
  },
};

export default meta;
type Story = StoryObj<typeof ElevationContainer>;

export const Card: Story = {
  args: {
    variant: 'card',
  },
};

export const Modal: Story = {
  args: {
    variant: 'modal',
  },
};

export const Notification: Story = {
  args: {
    variant: 'notification',
  },
};

export const Box: Story = {
  args: {
    variant: 'box',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const panel: Story = {
  args: {
    variant: 'panel',
  },
};