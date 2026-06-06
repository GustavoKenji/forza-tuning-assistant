export interface Recommendation {
  title: string;
  description: string;
  priorities: string[];

  drivetrain?: string;
  category?: string;
  currentClass?: string;
  targetClass?: string;
}