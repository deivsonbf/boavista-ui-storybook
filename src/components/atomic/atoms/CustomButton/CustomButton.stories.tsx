import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from ".";
import { MdSearch, MdSend } from "react-icons/md";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Inputs/Button",
  component: CustomButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["startIcon", "endIcon", "style"],
      viewMode: "docs",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "contained", "neutral", "outlined"],
      description: "Button variant style",
    },
    onClick: {
      action: "clicked",
      description: "Button click event",
    },
    disabled: {
      control: "boolean",
      description: "Button disabled state",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Button size",
    }
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Text: Story = {
  args: {
    variant: "text",
    label: "Button",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    label: "Button",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    label: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Button",
  },
};

export const WithStartIcon: Story = {
  args: {
    variant: "contained",
    label: "Button",
    startIcon: <MdSend />,
  },
};

export const WithEndIcon: Story = {
  args: {
    variant: "contained",
    label: "Button",
    endIcon: <MdSearch />,
  },
};

export const WithEnd: Story = {
  args: {
    variant: "contained",
    label: "Button",
    endIcon: <MdSearch />,
  },
};
