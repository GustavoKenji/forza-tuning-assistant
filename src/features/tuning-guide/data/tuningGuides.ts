import { TuningGuide } from "@/types/tuningGuide";

export const tuningGuides: TuningGuide[] = [
  {
    id: "tire-pres",
    title: "Tire Pressure",
    description:
      "Controls grip and steering response.",
    effects: [
      "More grip with lower pressure",
      "More response with higher pressure"
    ]
  },
  {
    id: "arbs",
    title: "Anti-Roll Bars",
    description:
      "Controls weight transfer between wheels.",
    effects: [
      "Stiffer front ARB increases understeer",
      "Stiffer rear ARB increases rotation"
    ]
  },
  {
    id: "diff",
    title: "Differential",
    description:
      "Acceleration Lock of the wheels.",
    effects: [
      "Higher acceleration lock increases traction but can cause understeer",
      "Higher deceleration lock increases stability under braking but can cause oversteer"
    ]
  }
];