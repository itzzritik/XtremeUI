import { Lottie } from "./Lottie";

import type { Meta, StoryObj } from "@storybook/react";

// const req = await fetch('https://api.github.com/repos/itzzjarvis/Assets/contents/anim/lottie');
// const lottieAssetNames = (await req.json()).map((item) => item?.name);

const lottieRoot =
  "https://raw.githubusercontent.com/itzzjarvis/Assets/main/anim/lottie";
const lottieAssetNames = [
  "Space404",
  "SpaceAura",
  "SpaceEarth",
  "SpaceMars",
  "SpaceNeptune",
  "SpacePlanetRings",
  "SpaceRocketGo",
  "SpaceRocketWaves",
  "SpaceUranusHoop", // Size Issue
  "Spaceman404",
  "SpacemanCoder",
  "SpacemanConstellations",
  "SpacemanDj",
  "SpacemanFishing",
  "SpacemanHappy",
  "SpacemanMoonAlien", // Size Issue
  "SpacemanNo",
  "SpacemanReading",
  "SpacemanRocketBye",
  "SpacemanRocketFloating",
  "SpacemanRocketHi",
  "SpacemanSaturn",
  "SpacemanStar",
  "SpacemanStarMoon",
  "SpacemanVictory",
  "SpacemanYay",
  "Spaceship",
] as const;

const lottieAssets = lottieAssetNames?.reduce((acc, assetName) => {
  acc[assetName] = `${lottieRoot}/${assetName}.lottie`;
  return acc;
}, {} as LottieAsset);

const lottieAssetsLabels = lottieAssetNames?.reduce((acc, assetName) => {
  acc[assetName] = assetName;
  return acc;
}, {} as LottieAsset);

type LottieAsset = { [K in (typeof lottieAssetNames)[number]]: string };

const getRandomLottie = () =>
  lottieAssets[
    lottieAssetNames[Math.floor(Math.random() * lottieAssetNames.length)]
  ];

const meta = {
  title: "Components/Lottie",
  component: Lottie,
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
    controls: { defaultValue: { summary: false } },
    autoPlay: { defaultValue: { summary: true } },
    loop: { defaultValue: { summary: true } },
    size: {
      control: { type: "range", min: 32, max: 512, step: 16 },
      defaultValue: { summary: 320 },
    },
    speed: {
      control: { type: "range", min: 1, max: 5, step: 1 },
      defaultValue: { summary: 1 },
    },
    src: {
      options: Object.keys(lottieAssets),
      mapping: lottieAssets,
      control: {
        type: "select",
        labels: lottieAssetsLabels,
      },
    },
  },
  args: {
    controls: false,
    autoPlay: true,
    loop: true,
    size: 256,
    speed: 1,
  },
} satisfies Meta<typeof Lottie>;

export default meta;

export const SvgRenderer: StoryObj<typeof meta> = {
  args: {
    src: getRandomLottie(),
  },
};
