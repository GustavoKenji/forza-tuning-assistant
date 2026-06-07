import { recommendations } from "@/data/recommendations";
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
  return recommendations.find(
    rec =>
      rec.drivetrain === drivetrain &&
      rec.category === category &&
      rec.classUpgrade === `${currentClass} -> ${targetClass}`
  );
}