import { TuningGuide } from "@/types/tuningGuide";

export const tuningGuides: TuningGuide[] = [
  {
    id: "tire-pressure",
    title: "Tire Pressure",
    description: "Controls tire grip, responsiveness and temperature.",
    overview:
      "Tire pressure changes the size of the tire contact patch. Lower pressures generally increase grip but reduce responsiveness, while higher pressures improve steering response at the cost of traction.",
    effects: [
      "Lower pressure increases mechanical grip",
      "Higher pressure improves steering response",
      "Lower pressure increases tire temperatures",
      "Higher pressure reduces rolling resistance",
      "Pressure affects braking performance and cornering balance"
    ],
    adjustments: [
      {
        setting: "Front Tire Pressure",
        increase: [
          "Sharper turn-in",
          "Faster steering response",
          "Reduced front tire temperatures",
          "Less front-end grip"
        ],
        decrease: [
          "More front grip",
          "Better braking grip",
          "Higher tire temperatures",
          "Slower steering response"
        ]
      },
      {
        setting: "Rear Tire Pressure",
        increase: [
          "More rear rotation",
          "Less rear grip",
          "Reduced tire temperatures",
          "Better top-speed efficiency"
        ],
        decrease: [
          "More rear traction",
          "Improved launch performance",
          "Greater stability",
          "Higher tire temperatures"
        ]
      }
    ],
    tips: [
      "Lower pressures help on technical circuits",
      "Raise pressure if the car feels lazy to respond",
      "Adjust front and rear independently"
    ],
    mistakes: [
      "Using minimum pressure on every build",
      "Making large pressure changes at once",
      "Ignoring temperature balance"
    ]
  },
  {
    id: "anti-roll-bars",
    title: "Anti-Roll Bars",
    description: "Controls body roll and cornering balance.",
    overview:
      "Anti-roll bars connect the left and right suspension. They control how weight transfers across the car during cornering and are one of the fastest ways to adjust understeer and oversteer.",
    effects: [
      "Stiffer bars reduce body roll",
      "Softer bars increase mechanical grip",
      "Front bar changes affect front grip balance",
      "Rear bar changes affect rotation and stability"
    ],
    adjustments: [
      {
        setting: "Front Anti-Roll Bar",
        increase: [
          "Sharper response",
          "Reduced body roll",
          "More understeer",
          "Less front grip in corners"
        ],
        decrease: [
          "More front grip",
          "Reduced understeer",
          "Better corner entry",
          "More body roll"
        ]
      },
      {
        setting: "Rear Anti-Roll Bar",
        increase: [
          "More rotation",
          "Improved corner exit rotation",
          "Less rear grip",
          "Increased oversteer tendency"
        ],
        decrease: [
          "More rear stability",
          "Greater rear grip",
          "Less oversteer",
          "Slower rotation"
        ]
      }
    ],
    tips: [
      "Use ARBs as your primary balance adjustment",
      "Small changes often make a noticeable difference",
      "Adjust one axle at a time"
    ],
    mistakes: [
      "Making front and rear stiffer together",
      "Using maximum stiffness",
      "Trying to solve every issue with ARBs"
    ]
  },
  {
    id: "differential",
    title: "Differential",
    description: "Controls how power and braking forces are shared between driven wheels.",

    overview:
      "Differential settings determine how strongly the driven wheels are locked together during acceleration and braking. These settings have a major impact on traction, stability and cornering behavior.",

    effects: [
      "Higher acceleration lock increases traction",
      "Higher acceleration lock can increase understeer",
      "Higher deceleration lock improves stability",
      "Lower deceleration lock improves rotation",
      "AWD center balance affects front-to-rear power delivery"
    ],

    adjustments: [
      {
        setting: "Acceleration Lock",
        increase: [
          "More traction on corner exit",
          "Better launches",
          "Improved power delivery",
          "More understeer under throttle"
        ],
        decrease: [
          "More corner rotation",
          "Better turn-in",
          "Reduced understeer",
          "Greater chance of wheelspin"
        ]
      },
      {
        setting: "Deceleration Lock",
        increase: [
          "More stability while braking",
          "Safer corner entry",
          "Less rotation",
          "Reduced lift-off oversteer"
        ],
        decrease: [
          "Improved corner entry rotation",
          "Better agility",
          "More responsiveness",
          "Less braking stability"
        ]
      }
    ],

    tips: [
      "Tune acceleration before deceleration",
      "Use lower lock values on technical circuits",
      "Increase lock if traction is a problem"
    ],

    mistakes: [
      "Using maximum acceleration lock",
      "Ignoring deceleration settings",
      "Changing multiple differential values simultaneously"
    ]
  },
  {
    id: "alignment",
    title: "Alignment",
    description: "Controls tire angles and stability.",
    overview:
      "Alignment settings affect how the tires contact the road during cornering, acceleration and braking.",
    effects: [
      "More negative front camber improves front-end grip in corners",
      "Too much negative camber reduces braking performance",
      "More negative rear camber improves rear stability",
      "Front toe-out improves turn-in response",
      "Rear toe-in increases stability",
      "Higher caster improves straight-line stability and dynamic camber"
    ],
    tips: [
      "Use small camber adjustments before making large changes",
      "Add slight front toe-out if the car feels slow to turn",
      "Increase caster for better steering feel"
    ],
    mistakes: [
      "Using excessive negative camber",
      "Making large toe adjustments",
      "Ignoring tire temperature distribution"
    ]
  },
  {
    id: "springs",
    title: "Springs",
    description: "Controls suspension stiffness and weight transfer.",
    overview:
      "Spring stiffness affects how quickly the car transfers weight during acceleration, braking and cornering.",
    effects: [
      "Softer springs increase mechanical grip",
      "Stiffer springs improve responsiveness",
      "Softer front springs increase front grip",
      "Stiffer front springs increase understeer",
      "Softer rear springs improve traction",
      "Stiffer rear springs increase rotation"
    ],
    adjustments: [
      {
        setting: "Front Springs",
        increase: [
          "Sharper response",
          "Less body movement",
          "More understeer",
          "Reduced front grip"
        ],
        decrease: [
          "More front grip",
          "Better bump absorption",
          "Improved compliance",
          "Slower response"
        ]
      },
      {
        setting: "Rear Springs",
        increase: [
          "More rotation",
          "Less rear grip",
          "Sharper handling",
          "Greater oversteer tendency"
        ],
        decrease: [
          "More traction",
          "More rear stability",
          "Improved grip on rough surfaces",
          "Reduced rotation"
        ]
      }
    ],
    tips: [
      "Use softer springs on bumpy tracks",
      "Increase stiffness gradually",
      "Balance front and rear changes"
    ],
    mistakes: [
      "Using maximum stiffness everywhere",
      "Ignoring ride height adjustments",
      "Making large front and rear changes at once"
    ]
  },
  {
    id: "damping",
    title: "Damping",
    description: "Controls suspension movement speed.",
    overview:
      "Damping determines how quickly the suspension compresses and rebounds after weight transfer.",
    effects: [
      "Higher rebound slows suspension extension",
      "Higher bump slows suspension compression",
      "More front rebound can improve steering response",
      "More rear rebound can improve rear stability",
      "Too much damping reduces grip on uneven surfaces"
    ],
    adjustments: [
      {
        setting: "Front Rebound",
        increase: [
          "Sharper steering feel",
          "Faster weight transfer",
          "Improved response",
          "Can reduce grip on bumps"
        ],
        decrease: [
          "More compliance",
          "Better bump absorption",
          "More grip on uneven surfaces"
        ]
      },
      {
        setting: "Rear Rebound",
        increase: [
          "More rear stability",
          "Slower weight transfer",
          "Reduced oversteer"
        ],
        decrease: [
          "More rotation",
          "Improved agility",
          "Quicker rear weight transfer"
        ]
      },
      {
        setting: "Front Bump",
        increase: [
          "Reduced dive under braking",
          "Sharper response",
          "Less suspension travel"
        ],
        decrease: [
          "More front grip",
          "Better curb absorption",
          "More compliance"
        ]
      },
      {
        setting: "Rear Bump",
        increase: [
          "More rear support",
          "Reduced squat under acceleration"
        ],
        decrease: [
          "Improved traction",
          "Better grip over bumps"
        ]
      }
    ],
    tips: [
      "Adjust rebound before bump",
      "Use small increments",
      "Test over curbs and bumps"
    ],
    mistakes: [
      "Setting bump equal to rebound",
      "Using excessive damping",
      "Changing all values simultaneously"
    ]
  },
  {
    id: "aero",
    title: "Aero",
    description: "Controls downforce and top speed.",
    overview:
      "Aerodynamic settings balance cornering grip against maximum speed.",
    effects: [
      "More front downforce increases front grip",
      "More rear downforce increases rear stability",
      "Higher downforce improves cornering",
      "Higher downforce reduces top speed",
      "Lower downforce improves straight-line speed"
    ],
    adjustments: [
      {
        setting: "Front Downforce",
        increase: [
          "More front grip",
          "Better high-speed turn-in",
          "Greater cornering confidence",
          "Lower top speed"
        ],
        decrease: [
          "Higher top speed",
          "Less drag",
          "Reduced front grip"
        ]
      },
      {
        setting: "Rear Downforce",
        increase: [
          "More rear stability",
          "Better traction at speed",
          "Safer corner exits",
          "Lower top speed"
        ],
        decrease: [
          "Higher straight-line speed",
          "Less rear grip",
          "More rotation"
        ]
      }
    ],
    tips: [
      "Use more aero on technical tracks",
      "Reduce aero for speed-focused builds",
      "Balance front and rear adjustments"
    ],
    mistakes: [
      "Running maximum aero everywhere",
      "Ignoring track layout",
      "Adding front aero without adjusting rear aero"
    ]
  },
  {
    id: "gearing",
    title: "Gearing",
    description: "Controls acceleration and top speed.",
    overview:
      "Gear ratios determine how engine power is delivered to the wheels.",
    effects: [
      "Shorter gears improve acceleration",
      "Longer gears improve top speed",
      "Short final drive increases responsiveness",
      "Long final drive improves highway speed",
      "Proper gearing keeps the engine in its power band"
    ],
    adjustments: [
      {
        setting: "Final Drive",
        increase: [
          "Faster acceleration",
          "Higher RPM",
          "Reduced top speed"
        ],
        decrease: [
          "Higher top speed",
          "Lower RPM",
          "Slower acceleration"
        ]
      },
      {
        setting: "Individual Gears",
        increase: [
          "Shorter first gear for better launches",
          "Improved acceleration in lower gears"
        ],
        decrease: [
          "Longer first gear for higher top speed",
          "Reduced acceleration in lower gears"
        ]
      }
    ],
    tips: [
      "Tune final drive before individual gears",
      "Adjust gearing for track requirements",
      "Monitor RPM drop between shifts"
    ],
    mistakes: [
      "Using extremely short gearing",
      "Leaving large RPM gaps between gears",
      "Optimizing only for top speed"
    ]
  },
  {
    id: "brakes",
    title: "Brakes",
    description: "Controls brake balance and pressure.",
    overview:
      "Brake settings affect stopping distance, stability and corner entry behavior.",
    effects: [
      "More front bias increases stability",
      "More rear bias increases rotation under braking",
      "Higher pressure increases braking force",
      "Lower pressure improves modulation",
      "Rearward bias can help rotate the car into corners"
    ],
    adjustments: [
      {
        setting: "Brake Balance",
        increase: [
          "More front bias",
          "Greater braking stability",
          "Reduced rotation"
        ],
        decrease: [
          "More rear bias",
          "Improved corner entry rotation",
          "Greater risk of instability"
        ]
      },
      {
        setting: "Brake Pressure",
        increase: [
          "Stronger braking force",
          "Shorter stopping distances",
          "Easier wheel lockup"
        ],
        decrease: [
          "More brake modulation",
          "Smoother braking",
          "Less lockup risk"
        ]
      }
    ],
    tips: [
      "Use small balance adjustments",
      "Increase pressure gradually",
      "Test during heavy braking zones"
    ],
    mistakes: [
      "Using excessive rear bias",
      "Maxing brake pressure immediately",
      "Changing balance and pressure together"
    ]
  }
];