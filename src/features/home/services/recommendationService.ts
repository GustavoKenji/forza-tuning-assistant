import { recommendations } from "@/features/home/data/recommendations";
import { Recommendation } from "@/types/recommendation";
import { getUpgradeSuggestions } from '../services/upgradeSugestionsService';
import { getPriorityAdjustments } from '../services/priorityAdjustmentsService';

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

  return {
    ...recommendation,

    priorities: getPriorityAdjustments(
      targetClass,
      recommendation.priorities
    ),

    classUpgrade: `${currentClass} -> ${targetClass}`,

    upgradeNotes: getUpgradeSuggestions(
      currentClass,
      targetClass
    )
  };
}