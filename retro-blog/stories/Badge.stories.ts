import { Meta, StoryObj } from "@storybook/nextjs";
import Badge from "../app/components/Badge";

const meta = {
  title: "Badge",
  component: Badge,
  args: {
    children: "Badge",
    active: false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};
