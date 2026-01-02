import { Meta, StoryObj } from "@storybook/nextjs";
import Badge from "../app/components/Badge";

const meta = {
  title: "Badge",
  component: Badge,
  args: {
    variant: "primary",
    children: "Badge",
    active: false,
    size: "lg",
  },
  argTypes: {
    variant: {
      control: "select",
      options : ['primary' , 'secondary']
    },
    size: {
      control: "select",
      options : ['sm' , 'md', 'lg']
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
