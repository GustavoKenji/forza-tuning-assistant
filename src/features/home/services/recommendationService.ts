import { recommendations } from "@/features/home/data/recommendations";
import { Recommendation } from "@/types/recommendation";

interface RecommendationParams {
  drivetrain: string;
  category: string;
}

export function getRecommendation({
  drivetrain,
  category,
}: RecommendationParams): Recommendation | undefined {
  return recommendations.find(
    rec =>
      rec.drivetrain === drivetrain &&
      rec.category === category
  );
}