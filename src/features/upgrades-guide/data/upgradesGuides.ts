import { UpgradeCategory } from "@/types/upgradesGuide";

export const upgradeCategories: UpgradeCategory[] = [
  {
    id: "tires-rims",
    title: "Tires & Rims",
    description: "Upgrades related to grip, traction and wheel setup.",
    guides: [
      {
        id: "tire-compounds",
        title: "Tire Compounds",
        description: "The tire compound determines how much grip your car generates on different surfaces and is one of the most influential upgrades in the game.",
        piCost: "Very High",
        benefits: [
          "Massively improves cornering grip",
          "Improves braking performance",
          "Improves acceleration traction",
          "Increases overall vehicle consistency"
        ],
        drawbacks: [
          "Consumes a large amount of PI",
          "May leave less PI available for power upgrades"
        ],
        whenToUse: [
          "Road racing builds",
          "Grip-focused setups",
          "Technical circuits"
        ],
        avoidWhen: [
          "Low-class power builds",
          "Drag-focused cars"
        ],
        tips: [
          "Often the strongest PI investment for road racing."
        ],
        tags: ["grip", "handling"]
      },
      {
        id: "tire-width",
        title: "Tire Width",
        description: "Wider tires increase the contact patch between the tire and the road, improving grip and stability.",
        piCost: "Medium",
        benefits: [
          "Improves cornering grip",
          "Improves launch traction",
          "Reduces wheelspin"
        ],
        drawbacks: [
          "Adds PI quickly",
          "Can limit power upgrades"
        ],
        whenToUse: [
          "High-power builds",
          "AWD conversions",
          "Road racing"
        ],
        avoidWhen: [
          "Extremely PI-limited classes"
        ],
        tips: [
          "Rear tire width usually provides the biggest benefit."
        ]
      },
      {
        id: "rim-size",
        title: "Rim Size",
        description: "Rim size changes the balance between tire sidewall flexibility and steering responsiveness.",
        piCost: "Low",
        benefits: [
          "Can improve steering response",
          "Allows fine-tuning vehicle feel"
        ],
        drawbacks: [
          "Usually provides small performance gains",
          "Can reduce ride compliance"
        ],
        whenToUse: [
          "Fine-tuning a build",
          "Competitive setups"
        ],
        avoidWhen: [
          "Early-stage builds"
        ],
        tips: [
          "Smaller rims generally favor grip while larger rims favor responsiveness."
        ]
      }
    ]
  },
  {
    id: "platform-handling",
    title: "Platform & Handling",
    description: "Upgrades related to suspension, weight and chassis.",
    guides: [
      {
        id: "weight-reduction",
        title: "Weight Reduction",
        description: "Weight Reduction shaves the biggest chunks of weight per PI.",
        piCost: "High",
        benefits: [
          "Improves acceleration",
          "Improves braking",
          "Improves cornering",
        ],
        drawbacks: [
          "Consumes a large amount of PI",
        ],
        whenToUse: [
          "Road builds",
          "Technical circuits",
          "Cars with excessive weight",
        ],
        avoidWhen: [
          "Power-limited classes",
          "Drag-focused builds",
        ],
        tips: [
          "Usually one of the most efficient upgrades in A and S1 class",
        ],
      },
      {
        id: "anti-roll-bars",
        title: "Anti-Roll Bars",
        description: "Unlocks anti-roll bar tuning and improves control of body roll during cornering.",
        piCost: "Low",
        benefits: [
          "Unlocks tuning options",
          "Improves handling balance",
          "Reduces body roll"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits"
        ],
        whenToUse: [
          "Road racing",
          "Circuit builds"
        ],
        avoidWhen: [
          "Drag racing"
        ],
        tips: [
          "A cheap upgrade that provides valuable tuning flexibility."
        ],
        unlocksTuning: true
      },
      {
        id: "springs-dampers",
        title: "Springs & Dampers",
        description: "Unlocks suspension tuning and allows precise control over weight transfer and chassis movement.",
        piCost: "Medium",
        benefits: [
          "Unlocks ride height tuning",
          "Unlocks spring tuning",
          "Improves setup flexibility"
        ],
        drawbacks: [
          "Requires tuning to fully benefit"
        ],
        whenToUse: [
          "Road racing",
          "Drift builds",
          "Rally builds"
        ],
        avoidWhen: [
          "Very low PI builds"
        ],
        tips: [
          "One of the most important upgrades for advanced tuning."
        ],
        unlocksTuning: true
      },
      {
        id: "brakes",
        title: "Race Brakes",
        description: "Improves braking performance and unlocks brake balance and pressure tuning.",
        piCost: "Medium",
        benefits: [
          "Shorter braking distances",
          "Unlocks brake tuning",
          "Improves corner entry control"
        ],
        drawbacks: [
          "Can be expensive in PI"
        ],
        whenToUse: [
          "Road racing",
          "Heavy vehicles"
        ],
        avoidWhen: [
          "Drag builds"
        ],
        tips: [
          "More useful on heavier cars than lightweight sports cars."
        ],
        unlocksTuning: true
      }
    ],
  },
  {
    id: "conversions",
    title: "Conversions & Body Kits",
    description: "Upgrades related to engine swap, drivetrain swap, aspiration types and body kits.",
    guides: [
      {
        id: "engine-swap",
        title: "Engine Swap",
        description: "Replaces the original engine with a different powerplant, dramatically changing performance characteristics.",
        piCost: "Very High",
        benefits: [
          "Access to more power",
          "Different powerband",
          "Greater upgrade potential"
        ],
        drawbacks: [
          "Consumes significant PI",
          "Can upset vehicle balance"
        ],
        whenToUse: [
          "Competitive builds",
          "Max-performance projects"
        ],
        avoidWhen: [
          "Purist builds"
        ],
        tips: [
          "Not every car benefits from an engine swap."
        ]
      },
      {
        id: "aspiration",
        title: "Aspiration Conversion",
        description: "Adds or changes forced induction systems such as turbochargers and superchargers.",
        piCost: "High",
        benefits: [
          "Large power gains",
          "Greater tuning potential"
        ],
        drawbacks: [
          "Can increase turbo lag",
          "Consumes significant PI"
        ],
        whenToUse: [
          "Power-focused builds"
        ],
        avoidWhen: [
          "Grip-limited builds"
        ],
        tips: [
          "Turbo conversions usually offer the largest power ceiling."
        ]
      },
      {
        id: "drivetrains",
        title: "Drivetrain Conversion",
        description: "Changes the driven wheels of the vehicle, such as converting RWD to AWD.",
        piCost: "High",
        benefits: [
          "Improves launch traction",
          "Improves stability",
          "Easier to drive"
        ],
        drawbacks: [
          "Adds weight",
          "Consumes valuable PI"
        ],
        whenToUse: [
          "Road racing",
          "High horsepower cars"
        ],
        avoidWhen: [
          "Drift builds",
          "Purist setups"
        ],
        tips: [
          "AWD swaps are extremely strong but not always optimal."
        ]
      },
      {
        id: "bodykit",
        title: "Body Kits",
        description:"Changes vehicle appearance and can alter weight, aero and handling characteristics.",
        piCost: "Low to Medium",
        benefits: [
          "Can reduce weight",
          "May improve aerodynamics"
        ],
        drawbacks: [
          "Benefits vary greatly by vehicle"
        ],
        whenToUse: [
          "Competitive builds",
          "Style-focused builds"
        ],
        avoidWhen: [
          "When PI is extremely limited"
        ],
        tips: [
          "Some body kits provide surprisingly strong performance gains."
        ]
      }
    ],
  },
  {
    id: "transmission-system",
    title: "Transmission System",
    description:"Upgrades related to transmission, clutch, driveline and differential.",
    guides: [
      {
        id: "transmission",
        title: "Transmission",
        description: "Transmission upgrades unlock gear ratio tuning, allowing you to adjust acceleration, top speed and power delivery.",
        piCost: "Medium",
        benefits: [
          "Unlocks gear ratio tuning",
          "Allows optimization for different tracks",
          "Improves acceleration or top speed depending on setup",
          "Can help keep the engine in its powerband"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits",
          "Provides limited gains with default settings"
        ],
        whenToUse: [
          "Circuit racing",
          "Competitive builds",
          "Cars with poor stock gearing",
          "Drag racing setups"
        ],
        avoidWhen: [
          "Beginner builds where PI is extremely limited"
        ],
        tips: [
          "One of the most valuable upgrades for advanced tuning.",
          "A properly tuned transmission can feel like a power upgrade without adding horsepower."
        ],
        unlocksTuning: true
      },
      {
        id: "clutch",
        title: "Clutch",
        description: "Clutch upgrades reduce gear shift times, helping the car spend less time between gears.",
        piCost: "Low",
        benefits: [
          "Faster gear changes",
          "Improves acceleration",
          "Provides performance gains with minimal PI cost"
        ],
        drawbacks: [
          "Benefits are less noticeable on casual driving",
          "Does not increase engine power"
        ],
        whenToUse: [
          "Road racing",
          "Drag racing",
          "High-performance builds"
        ],
        avoidWhen: [
          "Very low-class builds with severe PI restrictions"
        ],
        tips: [
          "Often one of the most PI-efficient upgrades in the transmission category.",
          "The benefit becomes more noticeable as vehicle power increases."
        ],
        unlocksTuning: true
      },
      {
        id: "driveline",
        title: "Driveline",
        description: "Driveline upgrades reduce drivetrain weight, improving vehicle responsiveness and acceleration.",
        piCost: "Low",
        benefits: [
          "Reduces drivetrain weight",
          "Improves acceleration",
          "Improves vehicle responsiveness",
          "Provides gains without altering handling balance"
        ],
        drawbacks: [
          "Performance gains are relatively small",
          "Less impactful than major grip or power upgrades"
        ],
        whenToUse: [
          "Road racing",
          "Track-focused builds",
          "Fine-tuning a nearly completed build"
        ],
        avoidWhen: [
          "Early-stage builds where larger upgrades are available"
        ],
        tips: [
          "A common upgrade when trying to maximize performance near a class limit.",
          "Works particularly well when combined with weight reduction."
        ]
      },
      {
        id: "differential",
        title: "Differential",
        description: "Differential upgrades unlock differential tuning, allowing precise control over how power is distributed to the driven wheels.",
        piCost: "Low",
        benefits: [
          "Unlocks differential tuning",
          "Improves traction management",
          "Allows better corner entry and exit behavior",
          "Essential for advanced tuning"
        ],
        drawbacks: [
          "Requires tuning knowledge",
          "Default settings may not provide significant improvements"
        ],
        whenToUse: [
          "Road racing",
          "Drifting",
          "Rally builds",
          "Competitive setups"
        ],
        avoidWhen: [
          "Simple beginner builds where tuning adjustments are not planned"
        ],
        tips: [
          "One of the most important upgrades for experienced tuners.",
          "Differential tuning can dramatically change how a car behaves under acceleration and braking.",
          "AWD, RWD and FWD vehicles often require very different differential settings."
        ],
        unlocksTuning: true,
        tags: ["tuning", "traction"]
      }
    ],
  },
  {
    id: "aero-bodyparts",
    title: "Aerodynamics & Body Parts",
    description:"Upgrades related to front bumpers, rear wings, side skirts and hood, aim for more downforce or pure styles.",
    guides: [
      {
        id: "front-bumpers",
        title: "Front Bumpers & Aero",
        description: "Front aero upgrades add adjustable front downforce, increasing front-end grip and improving turn-in response.",
        piCost: "Medium",
        unlocksTuning: true,
        benefits: [
          "Improves front-end grip",
          "Reduces understeer",
          "Improves turn-in response",
          "Unlocks front downforce tuning"
        ],
        drawbacks: [
          "Increases aerodynamic drag",
          "Can reduce top speed",
          "Consumes PI that could be used elsewhere"
        ],
        whenToUse: [
          "Circuit racing",
          "Technical tracks",
          "Cars with excessive understeer",
          "Grip-focused builds"
        ],
        avoidWhen: [
          "Drag builds",
          "Top-speed focused setups"
        ],
        tips: [
          "Front aero is often used to improve corner entry performance.",
          "Too much front downforce can make the rear feel unstable."
        ]
      },
      {
        id: "rear-wings",
        title: "Rear Wings & Aero",
        description: "Rear aero upgrades add adjustable rear downforce, improving stability and rear-end grip during cornering.",
        piCost: "Medium",
        unlocksTuning: true,
        benefits: [
          "Improves rear stability",
          "Improves corner exit traction",
          "Reduces oversteer",
          "Unlocks rear downforce tuning"
        ],
        drawbacks: [
          "Adds aerodynamic drag",
          "Reduces top speed",
          "Consumes PI"
        ],
        whenToUse: [
          "Road racing",
          "High-power RWD cars",
          "Technical circuits",
          "Grip-focused builds"
        ],
        avoidWhen: [
          "Drag racing",
          "Top-speed highway builds"
        ],
        tips: [
          "Rear aero is one of the easiest ways to stabilize a difficult car.",
          "Balance front and rear aero carefully to avoid handling issues."
        ],
        tags: ["aero", "stability"]
      },
      {
        id: "side-skirts",
        title: "Side Skirts",
        description: "Side skirts primarily affect appearance, though some vehicles may receive minor aerodynamic benefits.",
        piCost: "Low",
        benefits: [
          "Improves vehicle appearance",
          "May provide minor aerodynamic improvements on certain cars"
        ],
        drawbacks: [
          "Usually offers minimal performance gains",
          "Benefits vary greatly between vehicles"
        ],
        whenToUse: [
          "Style-focused builds",
          "Completionist builds",
          "When PI impact is minimal"
        ],
        avoidWhen: [
          "Highly optimized competitive builds with strict PI limits"
        ],
        tips: [
          "Most side skirts are chosen for aesthetics rather than performance.",
          "Performance impact is usually small compared to aero upgrades."
        ]
      },
      {
        id: "hood",
        title: "Hood Upgrades",
        description: "Hood upgrades can reduce weight and improve vehicle appearance, depending on the specific vehicle.",
        piCost: "Low",
        benefits: [
          "May reduce vehicle weight",
          "Can slightly improve handling",
          "Provides cosmetic customization"
        ],
        drawbacks: [
          "Performance gains are often small",
          "Benefits vary significantly by vehicle"
        ],
        whenToUse: [
          "Fine-tuning a build",
          "Reducing weight when close to a class limit",
          "Visual customization"
        ],
        avoidWhen: [
          "When larger performance upgrades are available"
        ],
        tips: [
          "Some lightweight hood options provide surprisingly efficient PI savings.",
          "Always compare the weight reduction against other available upgrades."
        ]
      }
    ],
  },
  {
    id: "engine",
    title: "Engine Parts",
    description:"Upgrades related to various engine parts.",
    guides: [
      {
        id: "intake",
        title: "Intake",
        description: "Intake upgrades improve airflow into the engine, providing a small but efficient increase in power.",
        piCost: "Low",
        benefits: [
          "Improves horsepower",
          "Usually offers good PI efficiency",
          "Works well in most builds"
        ],
        drawbacks: [
          "Power gains are relatively small"
        ],
        whenToUse: [
          "Low and mid-class builds",
          "Road racing",
          "General performance upgrades"
        ],
        avoidWhen: [
          "When larger power upgrades are available"
        ],
        tips: [
          "Often one of the first engine upgrades players install."
        ]
      },
      {
        id: "intake-manifold",
        title: "Intake Manifold & Throttle Body",
        description: "Improves airflow distribution and engine breathing, particularly at higher RPM.",
        piCost: "Medium",
        benefits: [
          "Improves high-RPM power",
          "Supports larger engine builds",
          "Works well with camshaft upgrades"
        ],
        drawbacks: [
          "Less noticeable on lower-powered vehicles"
        ],
        whenToUse: [
          "Naturally aspirated builds",
          "High-revving engines",
          "Track-focused setups"
        ],
        avoidWhen: [
          "PI-limited low-class builds"
        ],
        tips: [
          "Usually becomes more valuable as power levels increase."
        ]
      },
      {
        id: "fuel-system",
        title: "Fuel System",
        description: "Upgrades fuel delivery capacity, allowing the engine to support higher power levels.",
        piCost: "Medium",
        benefits: [
          "Provides solid horsepower gains",
          "Supports high-power builds",
          "Works well with forced induction"
        ],
        drawbacks: [
          "Can consume PI quickly"
        ],
        whenToUse: [
          "Turbo builds",
          "Supercharged builds",
          "High horsepower projects"
        ],
        avoidWhen: [
          "Low-class efficiency builds"
        ],
        tips: [
          "Becomes increasingly valuable as engine output rises."
        ]
      },
      {
        id: "ignition",
        title: "Ignition",
        description: "Improves combustion efficiency, providing reliable horsepower gains at a reasonable PI cost.",
        piCost: "Low",
        benefits: [
          "Good PI efficiency",
          "Adds horsepower",
          "Works well in most engine setups"
        ],
        drawbacks: [
          "Provides smaller gains than major engine upgrades"
        ],
        whenToUse: [
          "Any performance build",
          "Early-stage upgrades"
        ],
        avoidWhen: [
          "Rarely a bad choice"
        ],
        tips: [
          "Often considered one of the most efficient engine upgrades."
        ]
      },
      {
        id: "exhaust",
        title: "Exhaust",
        description: "Improves exhaust flow, increasing engine efficiency and overall power output.",
        piCost: "Low to Medium",
        benefits: [
          "Provides strong power gains",
          "Usually offers excellent PI efficiency",
          "Improves engine responsiveness"
        ],
        drawbacks: [
          "Limited gains compared to major engine upgrades"
        ],
        whenToUse: [
          "Almost every performance build",
          "Road racing",
          "Street builds"
        ],
        avoidWhen: [
          "Rarely worth skipping"
        ],
        tips: [
          "Often one of the best horsepower-per-PI upgrades available."
        ]
      },
      {
        id: "pistons-compression",
        title: "Pistons & Compression",
        description: "Increases engine compression and internal efficiency, resulting in significant power gains.",
        piCost: "High",
        benefits: [
          "Large horsepower increase",
          "Improves engine performance throughout the RPM range"
        ],
        drawbacks: [
          "Consumes a significant amount of PI"
        ],
        whenToUse: [
          "Competitive builds",
          "High-performance projects"
        ],
        avoidWhen: [
          "Low-class efficiency builds"
        ],
        tips: [
          "One of the strongest naturally aspirated power upgrades."
        ]
      },
      {
        id: "valves-valvetrain",
        title: "Valves & Valvetrain",
        description: "Improves airflow control at high RPM, increasing engine performance and rev potential.",
        piCost: "High",
        benefits: [
          "Strong horsepower gains",
          "Improves high-RPM performance",
          "Pairs well with camshaft upgrades"
        ],
        drawbacks: [
          "Can be expensive in PI"
        ],
        whenToUse: [
          "Track builds",
          "High-revving engines",
          "Competitive racing"
        ],
        avoidWhen: [
          "Torque-focused low-RPM builds"
        ],
        tips: [
          "Particularly effective on naturally aspirated engines."
        ]
      },
      {
        id: "displacement",
        title: "Displacement (Engine Block)",
        description: "Increases engine displacement, producing more torque and improving overall power output.",
        piCost: "Very High",
        benefits: [
          "Large torque increase",
          "Improves acceleration",
          "Boosts overall engine output"
        ],
        drawbacks: [
          "One of the most expensive engine upgrades in PI",
          "May push the vehicle into a higher class quickly"
        ],
        whenToUse: [
          "Power-focused builds",
          "Heavy vehicles",
          "Drag racing"
        ],
        avoidWhen: [
          "PI-limited grip builds"
        ],
        tips: [
          "Torque gains are often more noticeable than horsepower gains."
        ],
        tags: ["torque", "acceleration"]
      },
      {
        id: "camshaft",
        title: "Camshaft",
        description: "Changes valve timing characteristics, increasing engine power and improving performance at higher RPM.",
        piCost: "High",
        benefits: [
          "Strong horsepower gains",
          "Improves high-RPM power",
          "Excellent for racing builds"
        ],
        drawbacks: [
          "Consumes significant PI"
        ],
        whenToUse: [
          "Road racing",
          "Circuit builds",
          "High-performance engines"
        ],
        avoidWhen: [
          "Low-class builds focused on efficiency"
        ],
        tips: [
          "One of the most impactful power upgrades available."
        ],
        tags: ["horsepower", "high-rpm"]
      },
      {
        id: "oil-cooling",
        title: "Oil & Cooling",
        description: "Improves engine cooling and reliability while providing modest performance gains.",
        piCost: "Low",
        benefits: [
          "Small power increase",
          "Often offers reasonable PI efficiency"
        ],
        drawbacks: [
          "Provides limited gains compared to major engine upgrades"
        ],
        whenToUse: [
          "Fine-tuning a build",
          "Maximizing performance near a class limit"
        ],
        avoidWhen: [
          "Early-stage builds with larger upgrade opportunities"
        ],
        tips: [
          "Usually installed after higher-impact power upgrades."
        ]
      },
      {
        id: "flywheel",
        title: "Flywheel",
        description: "Reduces rotational mass, allowing the engine to gain and lose RPM more quickly.",
        piCost: "Low",
        benefits: [
          "Improves engine responsiveness",
          "Helps acceleration feel more immediate",
          "Generally inexpensive in PI"
        ],
        drawbacks: [
          "Does not directly increase horsepower",
          "Performance gains can be subtle"
        ],
        whenToUse: [
          "Road racing",
          "Track-focused builds",
          "Fine-tuning performance"
        ],
        avoidWhen: [
          "When larger upgrades are still available"
        ],
        tips: [
          "A small upgrade that contributes to a more responsive driving experience."
        ]
      }
    ],
  }
];