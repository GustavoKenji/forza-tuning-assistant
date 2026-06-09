import { Recommendation } from "@/types/recommendation";

export const recommendations: Recommendation[] = [
  {
    title: "Road AWD Build",
    drivetrain: "AWD",
    category: "Road",
    classUpgrade: "B -> A",
    description:
      "Focus on grip and stability before adding power.",
    priorities: [
      "Tires",
      "Differential",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Lower front tire pressure for more grip",
      "Increase rear ARB to reduce understeer",
      "Avoid excessive aero in A-Class"
    ]
  },
  {
    title: "Road RWD Build",
    drivetrain: "RWD",
    category: "Road", 
    classUpgrade: "A -> S1",
    description:
      "Focus on grip and stability before adding power.",
    priorities: [
      "Tires",
      "Differential",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Lower front tire pressure for more grip",
      "Increase rear ARB to reduce understeer",
      "Avoid excessive aero in A-Class"
    ]
  },
  {
    title: "Road FWD Build",
    drivetrain: "FWD",
    category: "Road",
    classUpgrade: "B -> A",
    description:
      "Focus on grip and stability before adding power.",
    priorities: [
      "Tires",
      "Differential",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Prioritize grip before horsepower",
      "Avoid excessive downforce in lower classes",
      "Tune differential before adding power"
    ]
  },
  {
    title: "Drift RWD Build",
    drivetrain: "RWD",
    category: "Drift",
    classUpgrade: "B -> A",
    description: "Focus on drift upgrades and weight reduction.",
    priorities: [
      "Drift Differential",
      "Drift Tires",
      "Drift Suspension",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Use a locked rear differential for better drift control",
      "Keep front tire pressure higher",
      "Focus on controllable power delivery"
    ]
  },
  {
    title: "Drift AWD Build",
    drivetrain: "AWD",
    category: "Drift",
    classUpgrade: "B -> A",
    description: "Focus on drift upgrades and weight reduction.",
    priorities: [
      "Drift Differential",
      "Drift Tires",
      "Drift Suspension",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Lower front tire pressure for more grip",
      "Increase rear ARB to reduce understeer",
      "Avoid excessive aero in A-Class"
    ]
    // upgradeNotes: [
    //   "Start with street tires for better grip, best upgrade considering driveability and PI.",
    //   "Upgrade the differential to improve traction and to unlock tuning.",
    //   "Adjust anti-roll bars for better handling and to unlock tuning.",
    //   "Focus on weight reduction to improve acceleration and cornering, depending on you choice increases PI a lot.",
    //   "Add power upgrades last to top your PI for the class you want."
    // ]
  },
  {
    title: "Rally AWD Build",
    drivetrain: "AWD",
    category: "Rally",
    classUpgrade: "B -> A",
    description: "Focus on rally-specific upgrades and weight reduction.",
    priorities: [
      "Rally Tires",
      "Rally Differential",
      "Rally Suspension",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Softer suspension improves rough terrain grip",
      "AWD is usually easier to drive in rally, focus on traction",
      "Avoid extremely low ride heights for rally builds"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Road",
    title: "Balanced AWD Road Build",
    description: "Focus on maximizing grip and corner exit traction while maintaining predictable handling.",
    priorities: [
      "Sport Tires",
      "Weight Reduction",
      "Anti-Roll Bars",
      "Race Differential",
      "Suspension"
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
      "Tires",
      "Weight Reduction",
      "Suspension",
      "Differential",
      "Anti-Roll Bars"
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
      "Front Tire Width",
      "Weight Reduction",
      "Anti-Roll Bars",
      "Differential",
      "Suspension"
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
      "Rally Tires",
      "Suspension",
      "Differential",
      "Weight Reduction",
      "Transmission"
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
      "Rally Suspension",
      "Differential",
      "Tires",
      "Weight Reduction",
      "Transmission"
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
      "Rally Tires",
      "Weight Reduction",
      "Suspension",
      "Differential",
      "Transmission"
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
      "Power",
      "Differential",
      "Suspension",
      "Steering Angle",
      "Weight Reduction"
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
      "Power",
      "Differential",
      "Suspension",
      "Transmission",
      "Weight Reduction"
    ],
    tuningTips: [
      "Bias power toward the rear",
      "Use shorter gearing",
      "Avoid excessive front grip"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Cross Country",
    title: "All-Terrain AWD Build",
    description: "Designed to maintain traction and stability across rough terrain, jumps and uneven surfaces.",
    priorities: [
      "Offroad Tires",
      "Weight Reduction",
      "Rally Suspension",
      "Differential",
      "Transmission"
    ],
    tuningTips: [
      "Use softer springs to absorb landings",
      "Keep tire pressures slightly lower than road setups",
      "Prioritize stability over top speed"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Cross Country",
    title: "RWD Offroad Challenge Build",
    description: "Focuses on rear-wheel-drive control while maintaining enough traction for rough terrain.",
    priorities: [
      "Offroad Tires",
      "Rally Suspension",
      "Weight Reduction",
      "Differential",
      "Transmission"
    ],
    tuningTips: [
      "Keep acceleration lock moderate",
      "Avoid excessive rear stiffness",
      "Tune for predictable throttle response"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Cross Country",
    title: "Front Traction Offroad Build",
    description: "Built to maximize front-end grip and maintain stability over rough terrain.",
    priorities: [
      "Offroad Tires",
      "Weight Reduction",
      "Rally Suspension",
      "Differential",
      "Transmission"
    ],
    tuningTips: [
      "Prioritize front grip",
      "Use softer suspension settings",
      "Avoid excessive front tire pressure"
    ]
  }
];