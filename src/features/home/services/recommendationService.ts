import { recommendations } from "@/features/home/data/recommendations";
import { Recommendation } from "@/types/recommendation";
import { getUpgradeSuggestions } from '../services/upgradeSugestionsService';
import { getPriorityAdjustments } from '../services/priorityAdjustmentsService';
import { getPriorityMetadata } from "./priorityExplanationService";

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

  const adjustedPriorities = getPriorityAdjustments(
    targetClass,
    recommendation.priorities
  );

  const prioritiesWithInfo = adjustedPriorities.map(priority => ({
    ...priority,
    ...getPriorityMetadata(priority.id)
  }));

  return {
    ...recommendation,

    priorities: prioritiesWithInfo,

    classUpgrade: `${currentClass} -> ${targetClass}`,

    upgradeNotes: getUpgradeSuggestions(
      currentClass,
      targetClass
    )
  };
}