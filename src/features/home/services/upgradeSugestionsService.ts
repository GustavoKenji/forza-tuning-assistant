import { classes } from "../types/constants";
import { Priority } from "@/types/recommendation";
import { Category, CarClass } from "../types/types";

interface SuggestionsContext {
  currentClass: CarClass;  
  targetClass: CarClass;
  category: Category;
  priorities: Priority[];
}

interface UpgradeSuggestion {
  id: string;

  text: string;

  type:
    | "progression"
    | "pi-management"
    | "build-philosophy";

  currentClasses?: CarClass[];
  targetClasses?: CarClass[];
  classJumpSize?: string[];

  categories?: Category[];
  priorityIds?: string[];
}

interface ScoredSuggestion {
  suggestion: UpgradeSuggestion;
  score: number;
}

const UPGRADE_SUGGESTIONS: UpgradeSuggestion[] = [
  {
    id: "target-b-foundation",

    type: "progression",

    text:
      "At B class, efficient upgrades often provide better results than aggressive power increases. Building a balanced foundation early makes future class upgrades easier.",

    targetClasses: ["B"]
  },
  {
    id: "b-to-a-handling",

    type: "progression",

    text:
      "At A class, handling upgrades begin to provide more consistent lap-time improvements than equivalent power gains.",

    currentClasses: ["B"],
    targetClasses: ["A"]
  },
  {
    id: "a-to-s1-balance",

    type: "progression",

    text:
      "S1 builds typically require a balanced investment in grip, power, and weight reduction rather than focusing on a single upgrade category.",

    currentClasses: ["A"],
    targetClasses: ["S1"]
  },
  {
    id: "s1-to-s2-stability",

    type: "progression",

    text:
      "As vehicles approach S2 performance levels, maintaining stability becomes just as important as increasing raw speed.",

    currentClasses: ["S1"],
    targetClasses: ["S2"]
  },
  {
    id: "small-jump-efficiency",

    type: "pi-management",

    text:
      "Small class jumps are often best achieved through efficient upgrades rather than major component changes.",

    classJumpSize: ["small"]
  },
  {
    id: "medium-jump-balance",

    type: "pi-management",

    text:
      "Medium class jumps usually benefit from spreading PI across multiple systems instead of maximizing a single area.",

    classJumpSize: ["medium"]
  },
  {
    id: "large-jump-foundation",

    type: "pi-management",

    text:
      "Large class jumps often require establishing a strong handling foundation before investing heavily in horsepower.",

    classJumpSize: ["large"]
  },
  {
    id: "large-jump-power-trap",

    type: "pi-management",

    text:
      "Using most of your available PI on engine upgrades can create a vehicle that is difficult to control and slower overall.",

    classJumpSize: ["large"]
  },
  {
    id: "target-b-pi-efficiency",

    type: "pi-management",

    text:
      "At B class, small and efficient upgrades usually deliver more performance per PI than major component changes.",

    targetClasses: ["B"]
  },
  {
    id: "tires-pi-value",

    type: "build-philosophy",

    text:
      "Tire upgrades are often among the most efficient ways to convert PI into real-world performance gains.",

    priorityIds: ["sport-tires", "semi-slick-tires", "slick-tires"]
  },
  {
    id: "weight-reduction-pi",

    type: "build-philosophy",

    text:
      "Weight reduction improves acceleration, braking, and cornering simultaneously, making it one of the most versatile PI investments available.",

    priorityIds: ["weight-reduction"]
  },
  {
    id: "aero-pi-investment",

    type: "build-philosophy",

    text:
      "Aero upgrades generally become more valuable as vehicle speed increases and handling precision becomes more important.",

    priorityIds: ["front-aero", "rear-aero"]
  },
  {
    id: "differential-pi-efficiency",

    type: "build-philosophy",

    text:
      "Differential upgrades provide tuning flexibility without requiring large PI investments, making them valuable for fine-tuning vehicle behavior.",

    priorityIds: ["race-differential"]
  },
  {
    id: "road-pi-grip",

    type: "build-philosophy",

    text:
      "Road builds often achieve faster lap times by improving grip and consistency before pursuing major horsepower increases.",

    categories: ["Road"]
  },
  {
    id: "rally-pi-momentum",

    type: "build-philosophy",

    text:
      "On rally builds, maintaining momentum usually provides greater performance gains than maximizing top speed.",

    categories: ["Rally"]
  },
  {
    id: "drift-pi-control",

    type: "build-philosophy",

    text:
      "Additional horsepower is only valuable when the chassis remains predictable and easy to control during transitions.",

    categories: ["Drift"]
  },
  {
    id: "cross-country-pi-stability",

    type: "build-philosophy",

    text:
      "Cross-country builds generally benefit more from suspension and tire improvements than from aggressive engine upgrades.",

    categories: ["Cross-Country"]
  }
];

function getJumpSize(jumpSize: number): string {
  switch (jumpSize) {
    case 1:
      return "small";

    case 2:
      return "medium";

    default:
      return "large";
  }
}

function calculateSuggestionScore(
  suggestion: UpgradeSuggestion,
  classJumpSize: string,
  context: SuggestionsContext
): number {
  let score = 0;

  if (
    suggestion.categories?.includes(context.category)
  ) {
    score += 3;
  }

  if (
    suggestion.classJumpSize?.includes(classJumpSize)
  ) {
    score += 2;
  }

  if (
    suggestion.currentClasses?.includes(context.currentClass)
  ) {
    score += 1;
  }

  if (
    suggestion.targetClasses?.includes(context.targetClass)
  ) {
    score += 2;
  }

  const priorityIds = context.priorities.map(
    (priority) => priority.id
  );

  const hasMatchingPriority =
    suggestion.priorityIds?.some((id) =>
      priorityIds.includes(id)
    );

  if (hasMatchingPriority) {
    score += 2;
  }

  return score;
}

function getBestSuggestion(
  suggestions: ScoredSuggestion[]
): UpgradeSuggestion | null {
  if (suggestions.length === 0) {
    return null;
  }

  return suggestions.sort(
    (a, b) => b.score - a.score
  )[0].suggestion;
}

function selectSuggestions(
  context: SuggestionsContext
): UpgradeSuggestion[] {
  const currentIndex = classes.indexOf(context.currentClass);
  const targetIndex = classes.indexOf(context.targetClass);

  const jumpSize = targetIndex - currentIndex;
  const classJumpSize = getJumpSize(jumpSize);

  const scoredSuggestion = UPGRADE_SUGGESTIONS
    .map((suggestion) => ({
      suggestion,
      score: calculateSuggestionScore(suggestion, classJumpSize, context),
    }))
    .filter(({ score }) => score > 0);

  const progressionSuggestions = scoredSuggestion.filter(
    ({ suggestion }) => suggestion.type === "progression"
  );
  const piSuggestions = scoredSuggestion.filter(
    ({ suggestion }) => suggestion.type === "pi-management"
  );
  const philosophySuggestions = scoredSuggestion.filter(
    ({ suggestion }) => suggestion.type === "build-philosophy"
  );

  const selectedSuggestions = [
    getBestSuggestion(progressionSuggestions),
    getBestSuggestion(piSuggestions),
    getBestSuggestion(philosophySuggestions),
  ].filter((suggestion): suggestion is UpgradeSuggestion => suggestion !== null);

  return selectedSuggestions;
}

export function getUpgradeSuggestions(
  context: SuggestionsContext
): UpgradeSuggestion[] {
  return selectSuggestions(context);
}