import { Recommendation } from "@/types/recommendation";

export const recommendations: Recommendation[] = [
  {
    drivetrain: "AWD",
    category: "Road",
    title: "Balanced AWD Road Build",
    description: "Focus on maximizing grip and corner exit traction while maintaining predictable handling.",
    priorities: [
      {
        id: "sport-tires",
        name: "Sport Tires",
        guideId: "tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight"
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "suspension"
      },
      {
        id: "race-differential",
        name: "Race Differential",
        guideId: "differential"
      },
      {
        id: "suspension",
        name: "Suspension",
        guideId: "suspension"
      }
    ],
    tuningTips: [
      "Run slightly softer rear anti-roll bars",
      "Use moderate differential lock values",
      "Increase front aero if understeer is present"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Road",
    title: "Corner Rotation Road Build",
    description: "Prioritize balance, cornering speed and throttle control.",
    priorities: [
      {
        id: "road-tires",
        name: "Road Tires",
        guideId: "tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight"
      },
      {
        id: "suspension",
        name: "Suspension",
        guideId: "suspension"
      },
      {
        id: "differential",
        name: "Differential",
        guideId: "differential"
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "suspension"
      }
    ],
    tuningTips: [
      "Avoid excessive rear tire pressure",
      "Use lower differential lock for technical circuits",
      "Maintain rear stability before adding power"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Road",
    title: "Front Grip Road Build",
    description: "Reduce understeer and maximize front-end grip.",
    priorities: [
      {
        id: "front-tire-width",
        name: "Front Tire Width",
        guideId: "tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight"
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "suspension"
      },
      {
        id: "differential",
        name: "Differential",
        guideId: "differential"
      },
      {
        id: "suspension",
        name: "Suspension",
        guideId: "suspension"
      }
    ],
    tuningTips: [
      "Soften front anti-roll bars",
      "Increase rear rotation carefully",
      "Avoid excessive front tire pressure"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Dirt",
    title: "All Surface Rally Build",
    description: "Designed for consistent grip across mixed terrain.",
    priorities: [
      {
        id: "rally-tires",
        name: "Rally Tires",
        guideId: "tires"
      },
      {
        id: "suspension",
        name: "Suspension",
        guideId: "suspension"
      },
      {
        id: "differential",
        name: "Differential",
        guideId: "differential"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight"
      },
      {
        id: "transmission",
        name: "Transmission",
        guideId: "transmission"
      }
    ],
    tuningTips: [
      "Use softer springs",
      "Reduce tire pressure slightly",
      "Prioritize traction over top speed"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Dirt",
    title: "Loose Surface RWD Build",
    description: "Focus on throttle control and predictable rotation.",
    priorities: [
      {
        id: "rally-suspension",
        name: "Rally Suspension",
        guideId: "suspension"
      },
      {
        id: "differential",
        name: "Differential",
        guideId: "differential"
      },
      {
        id: "tires",
        name: "Tires",
        guideId: "tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight"
      },
      {
        id: "transmission",
        name: "Transmission",
        guideId: "transmission"
      }
    ],
    tuningTips: [
      "Keep acceleration lock moderate",
      "Avoid overly stiff suspension",
      "Tune for stability first"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Dirt",
    title: "Stable Rally FWD Build",
    description: "Prioritize stability and front-end traction.",
    priorities: [
      {
        id: "rally-tires",
        name: "Rally Tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction"
      },
      {
        id: "suspension",
        name: "Suspension"
      },
      {
        id: "differential",
        name: "Differential"
      },
      {
        id: "transmission",
        name: "Transmission"
      }
    ],
    tuningTips: [
      "Maintain front grip",
      "Avoid excessive rear stiffness",
      "Use shorter gearing"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Drift",
    title: "Traditional Drift Build",
    description: "Built for controlled slides and predictable transitions.",
    priorities: [
      {
        id: "power",
        name: "Power"
      },
      {
        id: "differential",
        name: "Differential"
      },
      {
        id: "suspension",
        name: "Suspension"
      },
      {
        id: "steering-angle",
        name: "Steering Angle"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction"
      }
    ],
    tuningTips: [
      "Use high acceleration lock",
      "Run higher rear tire pressure",
      "Prioritize consistency over peak angle"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Drift",
    title: "AWD Drift Build",
    description: "Combines stability with aggressive drift entries.",
    priorities: [
      {
        id: "power",
        name: "Power"
      },
      {
        id: "differential",
        name: "Differential"
      },
      {
        id: "suspension",
        name: "Suspension"
      },
      {
        id: "transmission",
        name: "Transmission"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction"
      }
    ],
    tuningTips: [
      "Bias power toward the rear",
      "Use shorter gearing",
      "Avoid excessive front grip"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Cross-Country",
    title: "All-Terrain AWD Build",
    description: "Designed to maintain traction and stability across rough terrain, jumps and uneven surfaces.",
    priorities: [
      {
        id: "offroad-tires",
        name: "Offroad Tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction"
      },
      {
        id: "rally-suspension",
        name: "Rally Suspension"
      },
      {
        id: "differential",
        name: "Differential"
      },
      {
        id: "transmission",
        name: "Transmission"
      }
    ],
    tuningTips: [
      "Use softer springs to absorb landings",
      "Keep tire pressures slightly lower than road setups",
      "Prioritize stability over top speed"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Cross-Country",
    title: "RWD Offroad Challenge Build",
    description: "Focuses on rear-wheel-drive control while maintaining enough traction for rough terrain.",
    priorities: [
      {
        id: "offroad-tires",
        name: "Offroad Tires"
      },
      {
        id: "rally-suspension",
        name: "Rally Suspension"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction"
      },
      {
        id: "differential",
        name: "Differential"
      },
      {
        id: "transmission",
        name: "Transmission"
      }
    ],
    tuningTips: [
      "Keep acceleration lock moderate",
      "Avoid excessive rear stiffness",
      "Tune for predictable throttle response"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Cross-Country",
    title: "Front Traction Offroad Build",
    description: "Built to maximize front-end grip and maintain stability over rough terrain.",
    priorities: [
      {
        id: "offroad-tires",
        name: "Offroad Tires"
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction"
      },
      {
        id: "rally-suspension",
        name: "Rally Suspension"
      },
      {
        id: "differential",
        name: "Differential"
      },
      {
        id: "transmission",
        name: "Transmission"
      }
    ],
    tuningTips: [
      "Prioritize front grip",
      "Use softer suspension settings",
      "Avoid excessive front tire pressure"
    ]
  }
];