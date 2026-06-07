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
  }
];