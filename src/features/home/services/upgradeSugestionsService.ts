import { classes } from "../types/constants";

const SMALL_JUMP = [
  "Focus on handling upgrades first",
  "Upgrade tires before adding power",
  "Maintain vehicle balance"
];

const MEDIUM_JUMP = [
  "Prioritize grip improvements",
  "Add moderate power increases",
  "Consider weight reduction"
];

const LARGE_JUMP = [
  "Maximize tire performance",
  "Upgrade suspension components",
  "Balance power with handling upgrades"
];

const TARGET_A = [
  "Maintain balanced handling",
  "Avoid excessive horsepower"
];

const TARGET_S1 = [
  "Focus on grip before horsepower",
  "Consider aero upgrades"
];

const TARGET_S2 = [
  "Prioritize weight reduction",
  "Use race-grade components"
];

const TARGET_R = [
  "Focus on maximum performance",
  "Use top-tier upgrades available"
];

function getJumpSuggestions(jumpSize: number): string[] {
  switch (jumpSize) {
    case 1:
      return SMALL_JUMP;

    case 2:
      return MEDIUM_JUMP;

    default:
      return LARGE_JUMP;
  }
}

function getTargetSuggestions(targetClass: string): string[] {
  switch (targetClass) {
    case "A":
      return TARGET_A;

    case "S1":
      return TARGET_S1;

    case "S2":
      return TARGET_S2;

    case "R":
      return TARGET_R;

    default:
      return [];
  }
}

export function getUpgradeSuggestions(
  currentClass: string,
  targetClass: string
): string[] {
  const currentIndex = classes.indexOf(currentClass);
  const targetIndex = classes.indexOf(targetClass);

  const jumpSize = targetIndex - currentIndex;

  return [
    ...getJumpSuggestions(jumpSize),
    ...getTargetSuggestions(targetClass)
  ];
}