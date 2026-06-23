import { TuningTips, Priority } from "@/types/recommendation";
import { Drivetrain, Category, CarClass } from "../types/types";

interface DynamicTipContext {
  category: Category;
  drivetrain: Drivetrain;
  targetClass: CarClass;

  priorities: Priority[];
  tuningTips: TuningTips[];
}

interface DynamicTip {
  id: string;

  text: string;

  type:
    | "handling"
    | "tuning"
    | "philosophy";

  categories?: Category[];
  drivetrains?: Drivetrain[];
  classes?: CarClass[];

  priorityIds?: string[];
  guideIds?: string[];
}

interface ScoredTip {
  tip: DynamicTip;
  score: number;
}

const DYNAMIC_TIPS: DynamicTip[] = [
  {
    id: "road-corner-speed",
    text: "Road builds are usually faster when they maintain corner speed rather than maximizing straight-line acceleration.",
    type: "philosophy",
    categories: ["Road"]
  },
  {
    id: "rally-momentum",
    text: "On loose surfaces, maintaining momentum is often more valuable than adding additional horsepower.",
    type: "philosophy",
    categories: ["Rally"]
  },
  {
    id: "drift-balance",
    text: "A predictable drift car is usually easier to score consistently than an extremely powerful one.",
    type: "philosophy",
    categories: ["Drift"]
  },
  {
    id: "cross-country-stability",
    text: "Cross-country builds benefit more from stability and terrain compliance than outright cornering grip.",
    type: "philosophy",
    categories: ["Cross-Country"]
  },
  {
    id: "race-diff-road-awd",
    text: "AWD road builds often gain more from differential tuning than from major suspension changes.",
    type: "tuning",
    categories: ["Road"],
    drivetrains: ["AWD"],
    priorityIds: ["race-differential"]
  },
  {
    id: "weight-reduction-balance",
    text: "Weight reduction improves every phase of a lap, making it one of the most efficient performance upgrades available.",
    type: "philosophy",
    priorityIds: ["weight-reduction"]
  },
  {
    id: "weight-reduction-responsiveness",
    text: "Reducing vehicle weight often makes the car more responsive and predictable, improving both acceleration and cornering performance.",
    type: "handling",
    priorityIds: ["weight-reduction"]
  },
  {
    id: "front-width-fwd",
    text: "Additional front grip can often improve lap times more than equivalent power gains on FWD builds.",
    type: "handling",
    drivetrains: ["FWD"],
    priorityIds: ["front-tire-width"]
  },
  {
    id: "race-suspension-balance",
    text: "Race suspension provides the flexibility needed to fine-tune vehicle balance, often solving handling issues that additional upgrades cannot.",
    type: "tuning",
    guideIds: ["suspension"]
  },
  {
    id: "tires-corner-speed",
    text: "Grip upgrades typically improve lap times by increasing cornering speed, braking performance, and driver confidence simultaneously.",
    type: "philosophy",
    guideIds: ["tires"]
  },
  {
    id: "s1-fine-tuning",
    text: "At S1 performance levels, small tuning adjustments often have a greater impact than additional upgrades.",
    type: "tuning",
    classes: ["S1"]
  },
  {
    id: "s2-stability",
    text: "High-speed stability becomes increasingly important as vehicles approach S2 performance levels.",
    type: "handling",
    classes: ["S2"]
  },
  {
    id: "road-awd-understeer",
    text: "As power increases, AWD road builds often develop corner-exit understeer before traction becomes a problem.",
    type: "handling",
    categories: ["Road"],
    drivetrains: ["AWD"]
  },
  {
    id: "road-rwd-traction",
    text: "Rear traction usually becomes the limiting factor on high-power RWD road builds.",
    type: "handling",
    categories: ["Road"],
    drivetrains: ["RWD"]
  },
  {
    id: "rally-awd-rotation",
    text: "Rally AWD builds often benefit from improving rotation rather than chasing additional grip.",
    type: "handling",
    categories: ["Rally"],
    drivetrains: ["AWD"]
  },
  {
    id: "road-fwd-front-grip",
    text: "FWD road builds usually benefit more from improving front-end grip than from pursuing aggressive power increases.",
    type: "handling",
    categories: ["Road"],
    drivetrains: ["FWD"]
  },
  {
    id: "drift-rwd-consistency",
    text: "Consistent drift angle and throttle control are often more valuable than maximizing peak wheelspin.",
    type: "philosophy",
    categories: ["Drift"],
    drivetrains: ["RWD"]
  },
  {
    id: "cross-country-awd-landings",
    text: "AWD cross-country builds should prioritize stable landings and terrain compliance before focusing on additional power.",
    type: "handling",
    categories: ["Cross-Country"],
    drivetrains: ["AWD"]
  }
];

function calculateTipScore(
  tip: DynamicTip,
  context: DynamicTipContext
): number {
  let score = 0;

  if (
    tip.categories?.includes(context.category)
  ) {
    score += 3;
  }

  if (
    tip.drivetrains?.includes(context.drivetrain)
  ) {
    score += 3;
  }

  if (
    tip.classes?.includes(context.targetClass)
  ) {
    score += 1;
  }

  const priorityIds = context.priorities.map(
    (priority) => priority.id
  );

  const hasMatchingPriority =
    tip.priorityIds?.some((id) =>
      priorityIds.includes(id)
    );

  if (hasMatchingPriority) {
    score += 2;
  }

  return score;
}

function getBestTip(
  tips: ScoredTip[]
): DynamicTip | null {
  if (tips.length === 0) {
    return null;
  }

  return tips.sort(
    (a, b) => b.score - a.score
  )[0].tip;
}

function selectDynamicTips(
  context: DynamicTipContext
): DynamicTip[] {
  const scoredTips = DYNAMIC_TIPS
    .map((tip) => ({
      tip,
      score: calculateTipScore(tip, context),
    }))
    .filter(({ score }) => score > 0);

  const philosophyTips = scoredTips.filter(
    ({ tip }) => tip.type === "philosophy"
  );
  const handlingTips = scoredTips.filter(
    ({ tip }) => tip.type === "handling"
  );
  const tuningTips = scoredTips.filter(
    ({ tip }) => tip.type === "tuning"
  );

  const selectedTips = [
    getBestTip(philosophyTips),
    getBestTip(handlingTips),
    getBestTip(tuningTips),
  ].filter((tip): tip is DynamicTip => tip !== null);

  return selectedTips;
}

export function getDynamicTuningTips(
  context: DynamicTipContext
): DynamicTip[] {
  return selectDynamicTips(context);
}