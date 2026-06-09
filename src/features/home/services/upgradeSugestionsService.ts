export function getUpgradeSuggestions(
  currentClass: string,
  targetClass: string
): string[] {
  const upgrade = `${currentClass} -> ${targetClass}`;

  switch (upgrade) {
    case "D -> C":
      return [
        "Improve suspension for better handling",
        "Change tires for better grip",
        "Add lower-end engine upgrades"
      ];
    
    case "D -> B":
      return [
        "Focus on tire upgrades, for better grip",
        "Add moderate power increases",
        "Improve suspension for better handling"
      ];

    case "C -> B":
      return [
        "Prioritize tire upgrades",
        "Add moderate power increases",
        "Maintain balanced handling"
      ];

    case "C -> A":
      return [
        "Prioritize tire upgrades",
        "Add moderate power increases",
        "Maintain balanced handling"
      ];

    case "B -> A":
      return [
        "Prioritize tire upgrades",
        "Add moderate power increases",
        "Maintain balanced handling"
      ];

    case "B -> S1":
      return [
        "Focus on grip before horsepower",
        "Install sport suspension",
        "Consider aero upgrades"
      ];

    case "A -> S1":
      return [
        "Focus on grip before horsepower",
        "Install race suspension",
        "Consider aero upgrades"
      ];

    case "A -> S2":
      return [
        "Maximize tire performance",
        "Prioritize weight reduction",
        "Use advanced tuning components"
      ];

    case "S1 -> S2":
      return [
        "Maximize tire performance",
        "Prioritize weight reduction",
        "Use advanced tuning components"
      ];

    case "S1 -> R":
      return [
        "Focus on maximum grip and power",
        "Use top-tier tuning components",
        "Consider advanced aero upgrades"
      ];

    case "S2 -> R":
      return [
        "Focus on maximum grip and power",
        "Use top-tier tuning components",
        "Consider advanced aero upgrades"
      ];

    default:
      return [];
  }
}