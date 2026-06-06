import { roadRecommendations, driftRecommendations } from "@/data/recommendations";
import { Recommendation } from "@/types/recommendation";

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
  if (category === "Road") {
    return roadRecommendations.find(
      rec =>
        rec.drivetrain === drivetrain &&
        rec.category === category &&
        rec.classUpgrade === `${currentClass} -> ${targetClass}`
    );
  }

  if (category === "Drift") {
    return driftRecommendations.find(
      rec =>
        rec.drivetrain === drivetrain &&
        rec.category === category &&
        rec.classUpgrade === `${currentClass} -> ${targetClass}`
    );
  }

  return undefined;
}