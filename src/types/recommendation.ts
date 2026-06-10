export interface Priority {
  id: string;
  name: string;
  explanation?: string;
  guideId?: string;
}

export interface Recommendation {
  title: string;
  description: string;
  priorities: Priority[];
  tuningTips: string[];
  drivetrain: string;
  category: string;
  currentClass?: string;
  targetClass?: string;
  classUpgrade?: string;
  upgradeNotes?: string[];
}