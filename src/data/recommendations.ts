import { Recommendation } from "@/types/recommendation";

export const roadRecommendations: Recommendation[] = [
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
    ]
  }
];

export const driftRecommendations: Recommendation[] = [
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
    ]
  }
];