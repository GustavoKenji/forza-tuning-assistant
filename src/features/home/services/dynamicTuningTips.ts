// tips by terrain category
const ROAD_TIPS = [
  "Focus on reducing understeer before adding more power.",
  "Monitor tire temperatures when increasing grip levels."
];
const RALLY_TIPS = [
  "Use softer suspension settings for better traction on loose surfaces.",
  "Prioritize stability over aggressive rotation."
];
const CROSS_COUNTRY_TIPS = [
  "Increase suspension travel to improve landings.",
  "Avoid overly stiff springs on rough terrain."
];
const DRIFT_TIPS = [
  "Use high differential acceleration lock for consistent drifts.",
  "Adjust rear tire pressure to control slide initiation."
];

// tips by drivetrain
const FWD_TIPS = [
  "Reduce understeer before adding additional power upgrades.",
  "Focus on maximizing front-end grip."
];
const RWD_TIPS = [
  "Balance rear traction with rotation.",
  "Avoid excessive differential lock on technical circuits."
];
const AWD_TIPS = [
  "Tune differential settings to reduce corner-exit understeer.",
  "Adjust front-to-rear balance before increasing power."
];

// tips by car class
const S1_TIPS = [
  "Small tuning adjustments can have a noticeable impact on handling."
];
const S2_TIPS = [
  "Monitor high-speed stability carefully.",
  "Aero balance becomes increasingly important."
];
const R_TIPS = [
  "Optimize the setup for a specific track or discipline.",
  "Fine tuning is often more valuable than additional upgrades."
];

function getCategoryTips(category: string): string[] {
  switch(category) {
    case "Road":
      return ROAD_TIPS;

    case "Rally":
      return RALLY_TIPS;

    case "Cross-Country":
      return CROSS_COUNTRY_TIPS;

    case "Drift":
      return DRIFT_TIPS;

    default:
      return [];
  }
}

function getDrivetrainTips(drivetrain: string): string[] {
  switch(drivetrain) {
    case "AWD":
      return AWD_TIPS;

    case "RWD":
      return RWD_TIPS;

    case "FWD":
      return FWD_TIPS;

    default:
      return [];
  }
}

function getTargetClassTips(targetClass: string): string[] {
  switch(targetClass) {
    case "S1":
      return S1_TIPS;

    case "S2":
      return S2_TIPS;

    case "R":
      return R_TIPS;

    default:
      return [];
  }
}

export function getDynamicTuningTips(
  drivetrain: string,
  category: string,
  targetClass: string
) {
  return [
    ...getCategoryTips(category),
    ...getDrivetrainTips(drivetrain),
    ...getTargetClassTips(targetClass)
  ];
}