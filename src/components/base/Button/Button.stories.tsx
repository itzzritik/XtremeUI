import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
    onClick: { control: false },
    size: {
      defaultValue: { summary: "default" },
    },
    iconPosition: {
      defaultValue: { summary: "left" },
    },
    iconType: {
      defaultValue: { summary: "light" },
    },
  },
  args: {
    disabled: false,
    loading: false,
    iconPosition: "left",
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    label: "Submit",
    size: "default",
  },
};
export const PrimaryWithIcon: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    label: "Download",
    size: "default",
    icon: "f33d",
  },
};
export const PrimaryDisabled: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    size: "default",
    label: "Send",
    icon: "e20a",
    iconType: "solid",
    disabled: true,
  },
};
export const PrimaryLoading: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    size: "default",
    icon: "f0ee",
    label: "Upload",
    loading: true,
  },
};
export const PrimaryIconButton: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    size: "default",
    icon: "f013",
  },
};
export const PrimaryIconButtonDisabled: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    size: "default",
    icon: "f07a",
    disabled: true,
  },
};
export const PrimaryIconButtonLoading: StoryObj<typeof meta> = {
  args: {
    type: "primary",
    size: "default",
    icon: "f011",
    loading: true,
  },
};
export const PrimaryDanger: StoryObj<typeof meta> = {
  args: {
    type: "primaryDanger",
    label: "Delete",
    size: "default",
    icon: "f2ed",
    iconType: "solid",
  },
};
export const Secondary: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    label: "Cancel",
    size: "default",
  },
};
export const SecondaryWithIcon: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    label: "Add to Favorites",
    size: "default",
    icon: "f005",
  },
};
export const SecondaryDisabled: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    size: "default",
    label: "Report",
    icon: "f188",
    disabled: true,
  },
};
export const SecondaryLoading: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    size: "default",
    label: "Extract",
    icon: "f1c6",
    loading: true,
  },
};
export const SecondaryIconButton: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    size: "default",
    icon: "f075",
  },
};
export const SecondaryIconButtonDisabled: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    size: "default",
    icon: "f084",
    disabled: true,
  },
};
export const SecondaryIconButtonLoading: StoryObj<typeof meta> = {
  args: {
    type: "secondary",
    size: "default",
    icon: "f021",
    loading: true,
  },
};
export const SecondaryDanger: StoryObj<typeof meta> = {
  args: {
    type: "secondaryDanger",
    label: "Block",
    size: "default",
    icon: "f05e",
  },
};
export const Link: StoryObj<typeof meta> = {
  args: {
    type: "link",
    label: "Click here",
    size: "default",
  },
};
export const LinkWithIcon: StoryObj<typeof meta> = {
  args: {
    type: "link",
    label: "hi@ritik.me",
    size: "default",
    icon: "f0e0",
  },
};
export const LinkDanger: StoryObj<typeof meta> = {
  args: {
    type: "linkDanger",
    label: "Remove post",
    size: "default",
  },
};
