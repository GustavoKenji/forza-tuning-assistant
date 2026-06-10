type PriorityMetadata = {
  explanation: string;
  guideId?: string;
};

const DEFAULT_PRIORITY_METADATA: PriorityMetadata = {
  explanation: "Recommended upgrade for this build."
};

const PRIORITY_METADATA: Record<string, PriorityMetadata> = {
  // Tires
  "road-tires": {
    explanation:
      "Provides a noticeable grip improvement over stock tires while keeping PI cost relatively low.",
    guideId: "tires"
  },

  "sport-tires": {
    explanation:
      "A balanced tire upgrade offering improved grip and responsiveness for most road builds.",
    guideId: "tires"
  },

  "semi-slick-tires": {
    explanation:
      "Excellent grip for high-performance road builds, especially in A and S1 class.",
    guideId: "tires"
  },

  "race-tires": {
    explanation:
      "Maximum dry grip available, ideal for competitive S1 and S2 builds.",
    guideId: "tires"
  },

  "rally-tires": {
    explanation:
      "Designed for mixed surfaces, providing consistent grip on both dirt and pavement.",
    guideId: "tires"
  },

  "offroad-tires": {
    explanation:
      "Maximizes traction on rough terrain, making them ideal for Cross Country builds.",
    guideId: "tires"
  },

  // Weight Reduction
  "weight-reduction": {
    explanation:
      "Improves acceleration, braking and cornering by reducing overall vehicle mass.",
    guideId: "weight-reduction"
  },

  // Differential
  "sport-differential": {
    explanation:
      "Provides better traction and power delivery while unlocking differential tuning options.",
    guideId: "differential"
  },

  "race-differential": {
    explanation:
      "Offers full tuning control over acceleration and deceleration lock settings.",
    guideId: "differential"
  },

  // Suspension
  "sport-suspension": {
    explanation:
      "Improves handling and responsiveness while keeping setup complexity low.",
    guideId: "suspension"
  },

  "race-suspension": {
    explanation:
      "Unlocks advanced tuning options for springs, damping and ride height.",
    guideId: "suspension"
  },

  "rally-suspension": {
    explanation:
      "Provides additional suspension travel and stability for dirt and off-road conditions.",
    guideId: "suspension"
  },

  // Power
  "street-engine-upgrades": {
    explanation:
      "Provides affordable horsepower gains while maintaining drivability.",
    guideId: "power"
  },

  "sport-engine-upgrades": {
    explanation:
      "Offers a strong balance between performance gains and PI efficiency.",
    guideId: "power"
  },

  "race-engine-upgrades": {
    explanation:
      "Maximizes horsepower and acceleration potential for high-performance builds.",
    guideId: "power"
  },

  // Aero
  "front-aero": {
    explanation:
      "Adds front-end grip and stability during high-speed cornering.",
    guideId: "aero"
  },

  "rear-aero": {
    explanation:
      "Improves rear stability and traction, especially in fast corners.",
    guideId: "aero"
  },

  "full-aero": {
    explanation:
      "Provides the greatest downforce potential and tuning flexibility.",
    guideId: "aero"
  },

  // Transmission
  "sport-transmission": {
    explanation:
      "Improves gear ratios and acceleration while keeping PI costs moderate.",
    guideId: "transmission"
  },

  "race-transmission": {
    explanation:
      "Unlocks full gear ratio tuning, allowing optimization for any track or event.",
    guideId: "transmission"
  },

  // Drivetrain
  "awd-conversion": {
    explanation:
      "Improves traction and launch performance, especially on dirt and mixed surfaces.",
    guideId: "drivetrain"
  },

  // Chassis
  "front-tire-width": {
    explanation:
      "Increases front grip and can help reduce understeer.",
    guideId: "tires"
  },

  "rear-tire-width": {
    explanation:
      "Provides additional rear traction and stability under acceleration.",
    guideId: "tires"
  }
};

export function getPriorityMetadata(
  priorityId: string
): PriorityMetadata {
  return (
    PRIORITY_METADATA[priorityId] ??
      DEFAULT_PRIORITY_METADATA
  );
}