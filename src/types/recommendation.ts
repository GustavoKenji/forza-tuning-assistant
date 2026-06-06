export interface Recommendation {
  title: string;
  description: string;
  priorities: string[];
  classUpgrade?: string;
  drivetrain?: string;
  category?: string;
  currentClass?: string;
  targetClass?: string;
}