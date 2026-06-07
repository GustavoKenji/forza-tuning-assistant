import { TuningGuide } from "@/types/tuningGuide";

export const tuningGuides: TuningGuide[] = [
  {
    id: "tire-pressure",
    title: "Tire Pressure",
    description: "Controls grip and steering response.",
    overview:
      "Tire pressure affects how much of the tire is in contact with the road. It directly influences grip, responsiveness and temperature.",
    effects: [
      "More grip with lower pressure",
      "More response with higher pressure"
    ],
    tips: [
      "Lower pressure for technical tracks",
      "Increase pressure if steering feels sluggish"
    ],
    mistakes: [
      "Using extremely low pressure",
      "Changing both front and rear equally without testing"
    ]
  },
  {
    id: "anti-roll-bas",
    title: "Anti-Roll Bars",
    description:
      "Controls weight transfer between wheels.",
    effects: [
      "Stiffer front ARB increases understeer",
      "Stiffer rear ARB increases rotation"
    ]
  },
  {
    id: "differential",
    title: "Differential",
    description:
      "Acceleration Lock of the wheels.",
    effects: [
      "Higher acceleration lock increases traction but can cause understeer",
      "Higher deceleration lock increases stability under braking but can cause oversteer"
    ]
  }
];