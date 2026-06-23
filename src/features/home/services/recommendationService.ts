import { Drivetrain, Category, CarClass } from "../types/types";
import { recommendations } from "@/features/home/data/recommendations";
import { Recommendation } from "@/types/recommendation";
import { getUpgradeSuggestions } from '../services/upgradeSugestionsService';
import { getDynamicTuningTips } from "./dynamicTuningTips";

interface RecommendationParams {
  currentClass: string;
  targetClass: string;
  drivetrain: string;
  category: string;
}

export function getRecommendation({
  currentClass,
  targetClass,
  drivetrain,
  category,
}: RecommendationParams): Recommendation | undefined {
  const recommendation = recommendations.find(
    rec =>
      rec.drivetrain === drivetrain &&
      rec.category === category
  );
  
  if (!recommendation) {
    return undefined;
  }

  const dynamicTips = getDynamicTuningTips({
    category: category as Category,
    drivetrain: drivetrain as Drivetrain,
    targetClass: targetClass as CarClass,
    priorities: recommendation.priorities,
    tuningTips: recommendation.tuningTips
  })
  const parsedDynamicTips = dynamicTips.map(tip => ({topic: tip.type, content: tip.text}))

  const upgradeSuggestions = getUpgradeSuggestions({
    currentClass: currentClass as CarClass,
    targetClass: targetClass as CarClass,
    category: category as Category,
    priorities: recommendation.priorities,
  });
  const parsedUpgradeSuggestions = upgradeSuggestions.map(suggestion => (suggestion.text));

  return {
    ...recommendation,

    tuningTips: [
      ...recommendation.tuningTips,
      ...parsedDynamicTips
    ],

    classUpgrade: `${currentClass} -> ${targetClass}`,

    upgradeNotes: [
      ...recommendation.upgradeNotes ?? [],
      ...parsedUpgradeSuggestions
    ]
    
  };
}