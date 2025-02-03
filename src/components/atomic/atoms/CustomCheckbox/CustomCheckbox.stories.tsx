import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckbox from ".";

const meta: Meta<typeof CustomCheckbox> = {
  title: "Components/Inputs/Checkbox",
  component: CustomCheckbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
        exclude: ["custom", "onChange", "checked", "value"],
    }
  },
  args: {
    label: "Getnet",
  },
  argTypes: {
    label: {
      control: "text",
    }
  }

};

export default meta

type Story = StoryObj<typeof CustomCheckbox>;

export const Default: Story = {};
