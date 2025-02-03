import type { Meta, StoryObj } from '@storybook/react';
import Tag from './';

const meta: Meta<typeof Tag> = {
    title: 'Components/Data Display/Tag',
    component: Tag,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        variant: {
            control: 'select',
            options: ['success', 'error', 'warning', 'neutral', 'solid']
        },
        style: { control: 'object' }
    }
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        label: 'Default Tag'
    }
};

export const Success: Story = {
    args: {
        label: 'Success',
        variant: 'success'
    }
};

export const Error: Story = {
    args: {
        label: 'Error',
        variant: 'error'
    }
};

export const Warning: Story = {
    args: {
        label: 'Warning',
        variant: 'warning'
    }
};

export const Neutral: Story = {
    args: {
        label: 'Neutral',
        variant: 'neutral'
    }
};

export const Solid: Story = {
    args: {
        label: 'Solid',
        variant: 'solid'
    }
};
