export interface Recommendation {
  title: string;
  description: string;
  priorities: string[];
  tuningTips: string[];
  drivetrain: string;
  category: string;
  currentClass?: string;
  targetClass?: string;
  classUpgrade?: string;
  upgradeNotes?: string[];
}