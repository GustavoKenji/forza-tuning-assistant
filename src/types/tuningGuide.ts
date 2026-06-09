interface Adjustment {
  setting: string;
  increase: string[];
  decrease: string[];
};

interface commonSymptoms {
  symptom: string;
  possibleFixes: string[];
}; //future usage for common symptoms section in tuning guides

export interface TuningGuide {
  id: string;
  title: string;
  description: string;
  effects: string[];
  overview?: string;
  tips?: string[];
  mistakes?: string[];
  adjustments?: Adjustment[];
  commonSymptoms?: commonSymptoms[];
};