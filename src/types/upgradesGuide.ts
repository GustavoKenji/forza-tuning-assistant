interface Adjustment {
  setting: string;
  increase: string[];
  decrease: string[];
};

export interface UpgradesGuide {
  id: string;
  title: string;
  description: string;
  effects: string[];
  overview?: string;
  tips?: string[];
  mistakes?: string[];
  adjustments?: Adjustment[];
};