import { useEffect } from "react";

import {
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useXData } from "#components/context/useContext";

import { Navigation } from "../Navigation/Navigation";
import { SiderModal } from "../SiderModal/SiderModal";

import { Sider } from "./Sider";
import { ESiderModes, TSiderModes, TSiderProps } from "./types";

import type { Meta, StoryObj } from "@storybook/react";

const routeList = [
  { name: "Dashboard", href: "/dashboard", icon: "e323" },
  { name: "Teams", href: "/teams", icon: "e533" },
  { name: "Favorite", href: "/favorite", icon: "f762" },
  { name: "Wallet", href: "/wallet", icon: "f555" },
  { name: "Settings", href: "/settings", icon: "f013" },
];

const Renderer = (props: TSiderStoryProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setSiderMode } = useXData();

  useEffect(() => {
    if (pathname === "/") navigate(routeList[0]?.href);
  }, [navigate, pathname]);

  useEffect(() => {
    setSiderMode(props.siderMode);
  }, [setSiderMode, props.siderMode]);

  return (
    <Sider
      {...props}
      leftSider={
        <Navigation
          as={Link}
          hrefPropName="to"
          pathname={pathname}
          routes={routeList}
        >
          🎲 XtremeUI
        </Navigation>
      }
      rightSider={
        <SiderModal
          title="Demo Sider Modal"
          icon="f890"
          primaryButtonProps={{
            label: "Save",
          }}
          secondaryButtonProps={{
            label: "Cancel",
          }}
        />
      }
    />
  );
};

const ReactRouterDecorator = (props: TSiderStoryProps) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Renderer {...props} />} />
      </Routes>
    </MemoryRouter>
  );
};

const meta: Meta<typeof ReactRouterDecorator> = {
  title: "Layouts/Sider",
  component: ReactRouterDecorator,
  tags: [],
  argTypes: {
    className: { control: false },
    leftSider: { control: false },
    rightSider: { control: false },
    siderMode: {
      options: Object.values(ESiderModes),
      control: { type: "radio" },
    },
    showMiniLeftSider: { defaultValue: { summary: true } },
    showMiniRightSider: { defaultValue: { summary: false } },
  },
  args: {
    showMiniLeftSider: true,
    showMiniRightSider: false,
    siderMode: "left",
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {
  args: {},
};

type TSiderStoryProps = TSiderProps & {
  siderMode: TSiderModes;
};
