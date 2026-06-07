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
      "Lower front tire pressure for more grip",
      "Increase rear ARB to reduce understeer",
      "Avoid excessive aero in A-Class"
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
      "Tires",
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
    title: "Drift AWD Build",
    drivetrain: "AWD",
    category: "Drift",
    classUpgrade: "B -> A",
    description: "Focus on drift upgrades and weight reduction.",
    priorities: [
      "Drift Differential",
      "Tires",
      "Anti-Roll Bars",
      "Weight Reduction",
      "Power"
    ],
    tuningTips: [
      "Lower front tire pressure for more grip",
      "Increase rear ARB to reduce understeer",
      "Avoid excessive aero in A-Class"
    ]
  }
];