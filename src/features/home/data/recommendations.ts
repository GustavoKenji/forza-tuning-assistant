import { Recommendation } from "@/types/recommendation";

export const recommendations: Recommendation[] = [
  {
    drivetrain: "AWD",
    category: "Road",
    title: "Balanced AWD Road Build",
    description: "Prioritize grip and stability upgrades before adding power. AWD builds benefit greatly from improved traction and balanced handling.",
    priorities: [
      {
        id: "sport-tires",
        name: "Sport Tires",
        guideId: "tire-compounds",
        benefits: [
          "Improves overall grip",
          "Improves braking performance",
          "Supports higher cornering speeds"
        ],
        drawbacks: [
          "Consumes a significant amount of PI"
        ],
        reasons: [
          "Tire upgrades provide the largest handling gains",
          "Essential for Road builds",
          "Works exceptionally well with AWD traction"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves acceleration",
          "Reduces braking distances",
          "Improves cornering responsiveness"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves every aspect of vehicle performance",
          "Often provides better overall gains than power upgrades"
        ]
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "anti-roll-bars",
        benefits: [
          "Reduces body roll",
          "Improves turn-in response"
        ],
        drawbacks: [
          "Incorrect tuning can increase understeer"
        ],
        reasons: [
          "Useful for balancing AWD handling",
          "Provides additional tuning flexibility"
        ]
      },
      {
        id: "race-suspension",
        name: "Race Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Unlocks advanced tuning options",
          "Improves chassis control"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Provides full suspension adjustability",
          "Allows fine-tuning for different tracks"
        ]
      },
      {
        id: "race-differential",
        name: "Race Differential",
        guideId: "differential",
        benefits: [
          "Improves power delivery",
          "Improves corner exit traction"
        ],
        drawbacks: [
          "Poor settings can create understeer or oversteer"
        ],
        reasons: [
          "AWD benefits heavily from differential tuning",
          "Helps optimize power distribution"
        ]
      }
    ],
    tuningTips: [
      "Run slightly softer rear anti-roll bars",
      "Use moderate differential lock values",
      "Increase front aero if understeer is present"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Road",
    title: "Responsive RWD Road Build",
    description: "Focus on front-end response, corner rotation and controlled power delivery. RWD builds reward precise throttle inputs and balanced handling.",
    priorities: [
      {
        id: "sport-tires",
        name: "Sport Tires",
        guideId: "tire-compounds",
        benefits: [
          "Improves overall grip",
          "Improves braking performance",
          "Supports higher cornering speeds"
        ],
        drawbacks: [
          "Consumes a significant amount of PI"
        ],
        reasons: [
          "Tire upgrades provide the largest handling gains",
          "Essential for Road builds",
          "Helps maintain traction and throttle control in RWD builds"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves acceleration",
          "Reduces braking distances",
          "Improves cornering responsiveness"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves every aspect of vehicle performance",
          "Often provides better overall gains than power upgrades"
        ]
      },
      {
        id: "race-suspension",
        name: "Race Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Unlocks advanced suspension tuning",
          "Allows more precise handling adjustments"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "One of the most important tuning upgrades in Forza",
          "Allows the vehicle to be adapted to different driving styles"
        ]
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "anti-roll-bars",
        benefits: [
          "Reduces body roll during cornering",
          "Improves turn-in response"
        ],
        drawbacks: [
          "Excessive stiffness can introduce understeer or oversteer"
        ],
        reasons: [
          "One of the most effective tools for adjusting corner rotation",
          "Helps balance understeer and oversteer characteristics"
        ]
      },
      {
        id: "race-differential",
        name: "Race Differential",
        guideId: "differential",
        benefits: [
          "Improves throttle control during corner exit",
          "Improves rear-wheel traction when applying power"
        ],
        drawbacks: [
          "Poor settings can create understeer or oversteer"
        ],
        reasons: [
          "Differential tuning plays a major role in RWD handling",
          "Helps balance traction, stability and corner rotation"
        ]
      }
    ],
    tuningTips: [
      "Avoid excessive rear tire pressure",
      "Reduce acceleration lock if the car becomes unstable on corner exit",
      "Maintain rear stability before adding power"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Road",
    title: "Agile FWD Road Build",
    description: "Focus on front-end grip, responsive turn-in and minimizing understeer. FWD builds perform best when maintaining momentum through corners.",
    priorities: [
      {
        id: "front-tire-width",
        name: "Front Tire Width",
        guideId: "tire-width",
        benefits: [
          "Improves front-end grip",
          "Reduces understeer during cornering",
          "Improves turn-in response"
        ],
        drawbacks: [
          "Wider tires increase PI cost"
        ],
        reasons: [
          "Front tires handle both steering and power delivery in FWD cars",
          "One of the most effective ways to reduce understeer",
          "Provides significant handling gains for Road builds"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves acceleration",
          "Reduces braking distances",
          "Improves cornering responsiveness"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves every aspect of vehicle performance",
          "Helps reduce the workload placed on the front tires"
        ]
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "anti-roll-bars",
        benefits: [
          "Reduces body roll during cornering",
          "Improves front-end responsiveness"
        ],
        drawbacks: [
          "Incorrect settings can introduce understeer or instability"
        ],
        reasons: [
          "One of the most effective tools for reducing understeer",
          "Helps improve front-end response and corner rotation"
        ]
      },
      {
        id: "race-suspension",
        name: "Race Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Unlocks advanced tuning options",
          "Allows more precise handling adjustments"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Helps fine-tune front-end grip and understeer",
          "Provides the flexibility needed to balance FWD handling"
        ]
      },
      {
        id: "race-differential",
        name: "Race Differential",
        guideId: "differential",
        benefits: [
          "Reduces wheelspin during acceleration",
          "Improves corner exit traction"
        ],
        drawbacks: [
          "Aggressive settings can increase understeer and reduce front-end grip"
        ],
        reasons: [
          "One of the most effective tools for reducing wheelspin",
          "Helps balance corner exit traction and front-end grip"
        ]
      }
    ],
    tuningTips: [
      "Reduce front anti-roll bar stiffness to help minimize understeer",
      "Increase rear rotation gradually to improve corner entry response",
      "Avoid excessive front tire pressure to preserve front-end grip"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Rally",
    title: "All Surface Rally Build",
    description: "Focus on maintaining traction, stability and control across dirt, gravel and paved sections.",
    priorities: [
      {
        id: "rally-tires",
        name: "Rally Tires",
        guideId: "tire-compounds",
        benefits: [
          "Improves traction on dirt and gravel",
          "Provides more consistent grip across mixed surfaces",
          "Increases vehicle stability on loose terrain"
        ],
        drawbacks: [
          "Can reduce performance on paved roads compared to road-focused compounds"
        ],
        reasons: [
          "Provides the largest traction gains on loose surfaces",
          "Essential for maintaining control across mixed terrain",
          "Improves driver confidence in changing conditions"
        ]
      },
      {
        id: "rally-suspension",
        name: "Rally Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Improves stability on rough terrain",
          "Helps maintain tire contact over bumps and jumps",
          "Unlocks advanced suspension tuning"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Essential for maintaining control on uneven surfaces",
          "Helps absorb bumps, jumps and terrain changes",
          "Provides the flexibility needed for different rally stages"
        ]
      },
      {
        id: "rally-differential",
        name: "Rally Differential",
        guideId: "differential",
        benefits: [
          "Improves traction on loose surfaces",
          "Provides more consistent power delivery",
          "Improves stability when accelerating out of corners"
        ],
        drawbacks: [
          "Poor settings can reduce stability and make the vehicle harder to control"
        ],
        reasons: [
          "AWD rally builds rely heavily on differential tuning for traction",
          "Helps maintain control on dirt, gravel and mixed surfaces",
          "Allows power delivery to be optimized for changing conditions"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves acceleration and braking performance",
          "Makes direction changes more responsive",
          "Helps the vehicle remain agile on technical stages"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves vehicle responsiveness across all terrain types",
          "Helps maintain momentum through technical sections",
          "Provides benefits in acceleration, braking and cornering"
        ]
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "anti-roll-bars",
        benefits: [
          "Reduces excessive body roll",
          "Improves vehicle balance during cornering",
          "Provides more predictable handling responses"
        ],
        drawbacks: [
          "Excessive stiffness can reduce grip on rough terrain"
        ],
        reasons: [
          "Helps balance stability and corner rotation",
          "Useful for adapting handling to different surface conditions",
          "Provides additional tuning flexibility without major PI cost"
        ]
      }
    ],
    tuningTips: [
      "Use softer springs to help the tires maintain contact with uneven terrain",
      "Lower tire pressures if the vehicle struggles for grip on dirt or gravel",
      "Prioritize traction and stability before investing heavily in power upgrades"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Rally",
    title: "Controlled RWD Rally Build",
    description: "Focus on throttle control, predictable rotation and maintaining momentum through loose-surface corners.",
    priorities: [
      {
        id: "rally-tires",
        name: "Rally Tires",
        guideId: "tire-compounds",
        benefits: [
          "Improves traction on dirt and gravel",
          "Provides more consistent grip across mixed surfaces",
          "Increases vehicle stability on loose terrain"
        ],
        drawbacks: [
          "Can reduce performance on paved roads compared to road-focused compounds"
        ],
        reasons: [
          "Provides the traction needed to control RWD power delivery",
          "Helps maintain predictable handling on loose surfaces",
          "Essential for carrying speed through rally stages"
        ]
      },
      {
        id: "rally-differential",
        name: "Rally Differential",
        guideId: "differential",
        benefits: [
          "Improves traction when applying power",
          "Provides more predictable corner exits",
          "Helps control wheelspin on loose surfaces"
        ],
        drawbacks: [
          "Poor settings can lead to excessive wheelspin and unstable handling"
        ],
        reasons: [
          "Differential tuning plays a major role in RWD rally handling",
          "Helps balance traction and corner rotation",
          "Essential for maintaining control under throttle"
        ]
      },
      {
        id: "rally-suspension",
        name: "Rally Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Improves stability on rough terrain",
          "Helps maintain tire contact over bumps and jumps",
          "Provides more predictable vehicle behavior"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Helps keep the vehicle stable while rotating through corners",
          "Allows handling to be tuned for different rally conditions",
          "Provides the control needed to maintain momentum on loose surfaces"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves acceleration and braking performance",
          "Makes direction changes more responsive",
          "Helps the vehicle remain agile on technical stages"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves vehicle responsiveness across all terrain types",
          "Helps maintain momentum through technical sections",
          "Supports smoother and more predictable corner rotation"
        ]
      },
      {
        id: "anti-roll-bars",
        name: "Anti-Roll Bars",
        guideId: "anti-roll-bars",
        benefits: [
          "Helps control body roll during cornering",
          "Improves rotation responsiveness",
          "Provides more predictable handling balance"
        ],
        drawbacks: [
          "Excessive stiffness can reduce grip on rough terrain"
        ],
        reasons: [
          "Helps fine-tune corner rotation on loose surfaces",
          "Useful for balancing stability and agility",
          "Allows handling characteristics to be adjusted without additional PI cost"
        ]
      }
    ],
    tuningTips: [
      "Keep acceleration lock moderate to avoid excessive wheelspin on corner exit",
      "Use softer suspension settings to maintain grip over bumps and terrain changes",
      "A predictable rally car is usually faster than an aggressive one"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Rally",
    title: "Momentum FWD Rally Build",
    description: "Designed to maximize front-end grip and carry speed through technical rally stages.",
    priorities: [
      {
        id: "rally-tires",
        name: "Rally Tires",
        guideId: "tire-compounds",
        benefits: [
          "Improves traction on dirt and gravel",
          "Provides more consistent grip across mixed surfaces",
          "Increases vehicle stability on loose terrain"
        ],
        drawbacks: [
          "Can reduce performance on paved roads compared to road-focused compounds"
        ],
        reasons: [
          "Provides the front-end grip needed for loose-surface cornering",
          "Helps reduce understeer on dirt and gravel",
          "Essential for maintaining momentum through rally stages"
        ]
      },
      {
        id: "front-tire-width",
        name: "Front Tire Width",
        guideId: "tire-width",
        benefits: [
          "Increases front-end grip on loose surfaces",
          "Improves cornering confidence",
          "Helps the vehicle maintain speed through corners"
        ],
        drawbacks: [
          "Wider tires can reduce PI available for other performance upgrades"
        ],
        reasons: [
          "Front-end grip is critical for FWD rally performance",
          "Helps reduce understeer on dirt and gravel",
          "Supports momentum-based driving through technical sections"
        ]
      },
      {
        id: "rally-suspension",
        name: "Rally Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Improves stability on rough terrain",
          "Helps maintain tire contact over bumps and jumps",
          "Provides more consistent front-end grip"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Helps maintain front-end grip on uneven surfaces",
          "Reduces the tendency to understeer on loose terrain",
          "Provides the control needed to carry momentum through corners"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves acceleration and braking performance",
          "Makes direction changes more responsive",
          "Reduces the load placed on the front tires"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves vehicle responsiveness across all terrain types",
          "Helps maintain momentum through technical sections",
          "Supports front-end grip by reducing overall vehicle weight"
        ]
      },
      {
        id: "rally-differential",
        name: "Rally Differential",
        guideId: "differential",
        benefits: [
          "Improves traction when accelerating on loose surfaces",
          "Reduces wheelspin during corner exit",
          "Provides more consistent power delivery"
        ],
        drawbacks: [
          "Aggressive settings can increase understeer and reduce cornering ability"
        ],
        reasons: [
          "Helps maximize traction without excessive wheelspin",
          "Allows traction and cornering balance to be fine-tuned",
          "Supports momentum-based driving on loose surfaces"
        ]
      }
    ],
    tuningTips: [
      "Prioritize front-end grip to maintain cornering speed on loose surfaces",
      "Increase rear stiffness gradually to help reduce understeer",
      "Maintaining momentum is usually more important than maximizing power"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Drift",
    title: "Easy RWD Drift Build",
    description: "Built for controlled slides, predictable transitions and beginner-friendly power levels.",
    priorities: [
      {
        id: "drift-differential",
        name: "Drift Differential",
        guideId: "differential",
        benefits: [
          "Provides more consistent rear-wheel lock",
          "Improves drift stability during throttle inputs",
          "Makes transitions more predictable"
        ],
        drawbacks: [
          "Incorrect settings can make drifts unstable or difficult to maintain"
        ],
        reasons: [
          "One of the most important upgrades for drift tuning",
          "Allows throttle response and drift behavior to be adjusted",
          "Essential for maintaining controlled and predictable slides"
        ]
      },
      {
        id: "drift-suspension",
        name: "Drift Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Unlocks advanced drift tuning options",
          "Improves transition responsiveness",
          "Provides greater control over vehicle balance"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Provides the adjustability needed for proper drift setups",
          "Helps fine-tune initiation, transitions and drift angle",
          "Essential for creating predictable handling characteristics"
        ]
      },
      {
        id: "drift-tires",
        name: "Drift Tires",
        guideId: "tire-compounds",
        benefits: [
          "Provides consistent grip during drifts",
          "Improves control at higher drift angles",
          "Makes slides easier to maintain"
        ],
        drawbacks: [
          "Higher grip levels may require additional power to maintain wheelspin"
        ],
        reasons: [
          "Designed specifically for drift-focused driving",
          "Provides predictable grip characteristics during slides",
          "Helps create a stable and beginner-friendly drift setup"
        ]
      },
      {
        id: "race-transmission",
        name: "Race Transmission",
        guideId: "transmission",
        benefits: [
          "Unlocks full gear ratio adjustment",
          "Helps keep the engine in its optimal power range",
          "Provides better control over drift speed"
        ],
        drawbacks: [
          "Poor gearing can make drifts difficult to maintain"
        ],
        reasons: [
          "Allows gearing to be matched to different drift tracks",
          "Helps maintain consistent wheelspin during drifts",
          "Provides more control than adding additional horsepower"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves vehicle responsiveness",
          "Makes transitions feel quicker and more predictable",
          "Reduces the effort required to initiate drifts"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Helps the vehicle react more quickly to steering and throttle inputs",
          "Improves weight transfer during drift transitions",
          "Supports a more responsive and beginner-friendly drift setup"
        ]
      }
    ],
    tuningTips: [
      "Use high acceleration lock to maintain consistent wheelspin",
      "Run higher rear tire pressure to make drift initiation easier",
      "Prioritize consistency over maximum drift angle"
    ],
    upgradeNotes: [
      "Recommended power range: 350-500 HP",
      "Lower power setups are easier to control and learn with",
      "Increase rear tire width only if excessive wheelspin becomes a problem"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Drift",
    title: "Stable AWD Drift Build",
    description: "Combines stability, traction and aggressive drift entries.",
    priorities: [
      {
        id: "drift-differential",
        name: "Drift Differential",
        guideId: "differential",
        benefits: [
          "Allows front and rear power delivery to be adjusted",
          "Improves drift stability during transitions",
          "Provides more predictable traction while sliding"
        ],
        drawbacks: [
          "Incorrect settings can reduce rotation or make the vehicle difficult to slide"
        ],
        reasons: [
          "One of the most important upgrades for AWD drift tuning",
          "Allows front and rear traction balance to be adjusted",
          "Essential for creating stable and predictable drift behavior"
        ]
      },
      {
        id: "drift-suspension",
        name: "Drift Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Unlocks advanced drift tuning options",
          "Improves stability during transitions",
          "Provides greater control over vehicle balance"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        reasons: [
          "Provides the adjustability needed for AWD drift setups",
          "Helps balance front-end grip and rear-end rotation",
          "Essential for creating stable and predictable transitions"
        ]
      },
      {
        id: "drift-tires",
        name: "Drift Tires",
        guideId: "tire-compounds",
        benefits: [
          "Provides predictable grip while drifting",
          "Improves stability during long slides",
          "Helps maintain control through transitions"
        ],
        drawbacks: [
          "Higher grip levels can reduce rotation if not balanced with differential tuning"
        ],
        reasons: [
          "Provides the consistent grip needed for AWD drift setups",
          "Helps maintain stability during aggressive drift entries",
          "Supports predictable and forgiving drift behavior"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves vehicle responsiveness",
          "Makes transitions quicker and easier to control",
          "Reduces the feeling of heaviness during drifts"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Helps offset the extra weight commonly found in AWD vehicles",
          "Improves responsiveness during drift transitions",
          "Supports a more agile and forgiving drift setup"
        ]
      },
      {
        id: "race-transmission",
        name: "Race Transmission",
        guideId: "transmission",
        benefits: [ 
          "Unlocks full gear ratio adjustment", 
          "Helps keep the engine in its optimal power range", 
          "Provides smoother control over drift speed and transitions"
        ],
        drawbacks: [ "Poor gearing can make drifts difficult to maintain" ],
        reasons: [ 
          "Allows gearing to be matched to different drift tracks", 
          "Helps maintain smooth and controllable power delivery", 
          "Supports stable transitions and consistent drift speed" 
        ]
      }
    ],
    tuningTips: [
      "Bias power toward the rear to improve rotation while drifting",
      "Use shorter gearing to keep the engine in its power band",
      "Avoid excessive front grip, as it can reduce drift rotation"
    ],
    upgradeNotes: [
      "AWD drift builds are generally easier to control than RWD setups",
      "Higher power levels are often required to sustain long drifts",
      "Front differential settings have a major impact on drift behavior"
    ]
  },
  {
    drivetrain: "AWD",
    category: "Cross-Country",
    title: "All-Terrain AWD Build",
    description: "Designed to maintain traction and stability across rough terrain, jumps and uneven surfaces.",
    priorities: [
      {
        id: "offroad-tires",
        name: "Off-Road Tires",
        guideId: "tire-compounds",
        benefits: [
          "Provides superior traction on loose and uneven surfaces",
          "Improves stability over rough terrain",
          "Maintains grip more effectively during jumps and landings"
        ],
        drawbacks: [
          "Offers less on-road performance than road-focused tire compounds"
        ],
        reasons: [
          "Provides the largest traction gains for Cross-Country builds",
          "Essential for maintaining control on rough terrain",
          "Supports stability during jumps, bumps and uneven surfaces"
        ]
      },
      {
        id: "offroad-suspension",
        name: "Off-Road Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Improves suspension travel over rough terrain",
          "Helps absorb bumps and jump landings",
          "Maintains tire contact on uneven surfaces"
        ],
        drawbacks: [
          "Can reduce on-road responsiveness compared to lower ride-height setups"
        ],
        reasons: [
          "Essential for handling jumps and rough terrain",
          "Helps maintain traction when surfaces become uneven",
          "Provides the stability needed for Cross-Country events"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves vehicle responsiveness",
          "Helps the vehicle recover more quickly after jumps and landings",
          "Reduces the effort required to change direction on rough terrain"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves agility without sacrificing off-road capability",
          "Helps maintain control across rough and uneven terrain",
          "Supports a more stable and responsive Cross-Country setup"
        ]
      },
      {
        id: "rally-differential",
        name: "Rally Differential",
        guideId: "differential",
        benefits: [
          "Improves traction on loose and uneven surfaces",
          "Provides more predictable power delivery",
          "Helps maintain stability during acceleration"
        ],
        drawbacks: [
          "Incorrect settings can reduce stability or traction on rough terrain"
        ],
        reasons: [
          "Helps distribute power more effectively across uneven terrain",
          "Improves traction when surfaces become loose or unpredictable",
          "Supports stable and controllable off-road handling"
        ]
      },
      {
        id: "tire-width",
        name: "Tire Width",
        guideId: "tire-width",
        benefits: [
          "Improves traction on loose surfaces",
          "Provides additional stability over rough terrain",
          "Helps maintain control during acceleration and landings"
        ],
        drawbacks: [
          "May provide smaller gains than tires or suspension upgrades for the same PI cost"
        ],
        reasons: [
          "Provides additional traction once the main off-road upgrades are installed",
          "Helps improve stability on uneven surfaces",
          "Supports a more confident and predictable Cross-Country setup"
        ]
      }
    ],
    tuningTips: [
      "Use softer springs to improve bump absorption and landing stability",
      "Run slightly lower tire pressures to improve traction on rough terrain",
      "Prioritize stability over top speed"
    ]
  },
  {
    drivetrain: "RWD",
    category: "Cross-Country",
    title: "RWD Cross-Country Build",
    description: "Focuses on rear-wheel-drive control while maintaining enough traction for rough terrain, jumps and uneven surfaces.",
    priorities: [
      {
        id: "offroad-tires",
        name: "Off-Road Tires",
        guideId: "tire-compounds",
        benefits: [
          "Provides superior traction on loose and uneven surfaces",
          "Improves stability over rough terrain",
          "Maintains grip more effectively during jumps and landings"
        ],
        drawbacks: [
          "Offers less on-road performance than road-focused tire compounds"
        ],
        reasons: [
          "Provides the largest traction gains for Cross-Country builds, especially with RWD",
          "Essential for maintaining control on rough terrain",
          "Supports stability during jumps, bumps and uneven surfaces"
        ]
      },
      {
        id: "offroad-suspension",
        name: "Off-Road Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Improves suspension travel over rough terrain",
          "Helps absorb bumps and jump landings",
          "Maintains tire contact on uneven surfaces"
        ],
        drawbacks: [
          "Can reduce on-road responsiveness compared to lower ride-height setups"
        ],
        reasons: [
          "Essential for handling jumps and rough terrain",
          "Helps maintain traction when surfaces become uneven",
          "Provides the stability needed for Cross-Country events"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves vehicle responsiveness",
          "Helps the vehicle recover more quickly after jumps and landings",
          "Reduces the effort required to change direction on rough terrain"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves agility without sacrificing off-road capability",
          "Helps maintain control across rough and uneven terrain",
          "Supports a more agile and controllable RWD setup"
        ]
      },
      {
        id: "rally-differential",
        name: "Rally Differential",
        guideId: "differential",
        benefits: [
          "Improves traction on loose surfaces",
          "Provides more predictable throttle response",
          "Helps maintain stability during acceleration"
        ],
        drawbacks: [
          "Incorrect settings can reduce traction or make the vehicle unstable on rough terrain"
        ],
        reasons: [
          "Helps maximize rear-wheel traction on loose surfaces",
          "Improves throttle control when exiting corners",
          "Supports stable and predictable off-road handling"
        ]
      },
      {
        id: "tire-width",
        name: "Tire Width",
        guideId: "tire-width",
        benefits: [
          "Improves traction on loose surfaces",
          "Provides additional stability over rough terrain",
          "Helps reduce excessive wheelspin during acceleration"
        ],
        drawbacks: [
          "May provide smaller gains than tires or suspension upgrades for the same PI cost"
        ],
        reasons: [
          "Provides additional traction once the main off-road upgrades are installed",
          "Helps improve rear-wheel stability on loose surfaces",
          "Supports more controllable power delivery in RWD builds"
        ]
      }
    ],
    tuningTips: [
      "Use softer springs to improve bump absorption and landing stability",
      "Run slightly lower tire pressures to improve traction on rough terrain",
      "Prioritize stability over top speed"
    ]
  },
  {
    drivetrain: "FWD",
    category: "Cross-Country",
    title: "Front Traction Offroad Build",
    description: "Built to maximize front-end grip and maintain stability over rough terrain, jumps and uneven surfaces.",
    priorities: [
      {
        id: "offroad-tires",
        name: "Off-Road Tires",
        guideId: "tire-compounds",
        benefits: [
          "Provides superior traction on loose and uneven surfaces",
          "Improves stability over rough terrain",
          "Maintains grip more effectively during jumps and landings"
        ],
        drawbacks: [
          "Offers less on-road performance than road-focused tire compounds"
        ],
        reasons: [
          "Provides the largest traction gains for Cross-Country builds",
          "Essential for maintaining control on rough terrain",
          "Supports stability during jumps, bumps and uneven surfaces"
        ]
      },
      {
        id: "front-tire-width",
        name: "Front Tire Width",
        guideId: "tire-width",
        benefits: [
          "Improves front-end traction on loose surfaces",
          "Helps reduce understeer during cornering",
          "Provides more consistent steering response on rough terrain"
        ],
        drawbacks: [
          "May provide smaller gains than tires or suspension upgrades for the same PI cost"
        ],
        reasons: [
          "Provides additional front-end traction once the main off-road upgrades are installed",
          "Helps improve steering control on loose and uneven surfaces",
          "Supports a more predictable and stable FWD off-road setup"
        ]
      },
      {
        id: "offroad-suspension",
        name: "Off-Road Suspension",
        guideId: "springs-dampers",
        benefits: [
          "Improves suspension travel over rough terrain",
          "Helps absorb bumps and jump landings",
          "Maintains tire contact on uneven surfaces"
        ],
        drawbacks: [
          "Can reduce on-road responsiveness compared to lower ride-height setups"
        ],
        reasons: [
          "Essential for handling jumps and rough terrain",
          "Helps maintain traction when surfaces become uneven",
          "Provides the stability needed for Cross-Country events"
        ]
      },
      {
        id: "weight-reduction",
        name: "Weight Reduction",
        guideId: "weight-reduction",
        benefits: [
          "Improves vehicle responsiveness",
          "Helps the vehicle recover more quickly after jumps and landings",
          "Reduces the effort required to change direction on rough terrain"
        ],
        drawbacks: [
          "Higher stages can consume a significant amount of PI"
        ],
        reasons: [
          "Improves agility without sacrificing off-road capability",
          "Helps maintain control across rough and uneven terrain",
          "Supports a more stable and responsive Cross-Country setup"
        ]
      },
      {
        id: "rally-differential",
        name: "Rally Differential",
        guideId: "differential"
      }      
    ],
    tuningTips: [
      "Use softer springs to improve bump absorption and landing stability",
      "Run slightly lower tire pressures to improve traction on rough terrain",
      "Prioritize front-end traction over aggressive rotation"
    ]
  }
];