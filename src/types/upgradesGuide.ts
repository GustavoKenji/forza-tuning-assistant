export interface UpgradeGuide {
  id: string;
  title: string;
  description: string;

  benefits?: string[];
  drawbacks?: string[];

  piCost?: string;

  whenToUse?: string[];
  avoidWhen?: string[];

  tips?: string[];
  unlocksTuning?: boolean;
  tags?: string[
  // 🏁 Grip
  // ⚡ Horsepower
  // 🔨 Torque
  // ✈️ Aero
  // ⚙️ Tuning
  // 🚀 Acceleration
  ];
}

export interface UpgradeCategory {
  id: string;
  title: string;
  description: string;
  guides: UpgradeGuide[];
}