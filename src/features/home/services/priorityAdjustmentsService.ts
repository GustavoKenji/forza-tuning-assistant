// constants defining priority order for each class, and functions to adjust priorities based on target class
const A_CLASS_PRIORITY = [
  "Tires",
  "Weight Reduction"
];

const S1_PRIORITY = [
  "Tires",
  "Weight Reduction",
  "Power"
];

const S2_PRIORITY = [
  "Tires",
  "Power",
  "Weight Reduction",
  "Aero"
];

const R_PRIORITY = [
  "Power",
  "Tires",
  "Aero",
  "Weight Reduction"
];

function getTargetPriorities(targetClass: string): string[] {
  switch (targetClass) {
    case "A":
      return A_CLASS_PRIORITY;

    case "S1":
      return S1_PRIORITY;

    case "S2":
      return S2_PRIORITY;

    case "R":
      return R_PRIORITY;

    default:
      return [];
  }
}

function reorderPriorities(
  basePriorities: string[],
  priorityBoosts: string[]
): string[] {
  const boosted = basePriorities.filter(priority =>
    priorityBoosts.some(boost =>
      priority.toLowerCase().includes(boost.toLowerCase())
    )
  );

  const remaining = basePriorities.filter(priority =>
    !boosted.includes(priority)
  );

  return [...boosted, ...remaining];
}

export function getPriorityAdjustments(
  targetClass: string,
  priorities: string[]
): string[] {
  const priorityByClass = getTargetPriorities(targetClass);
  return reorderPriorities(priorities, priorityByClass); // return array with priorities reordered based on target class
}