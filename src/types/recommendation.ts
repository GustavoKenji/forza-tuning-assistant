export interface Recommendation {
  title: string;
  description: string;
  priorities: string[];
  tuningTips: string[];
  classUpgrade?: string;
  drivetrain?: string;
  category?: string;
  currentClass?: string;
  targetClass?: string;
  // upgradeNotes?: string[];
}