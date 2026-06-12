import { UpgradeCategory } from "@/types/upgradesGuide";

export const upgradeCategories: UpgradeCategory[] = [
  {
    id: "tires-rims",
    title: "Tires & Rims",
    description: "Tire and wheel upgrades have a major impact on grip, traction and overall vehicle balance. Choosing the right combination can dramatically improve handling, braking and acceleration across different terrains.",
    guides: [
      {
        id: "tire-compounds",
        title: "Tire Compounds",
        description: "The tire compound determines how much grip your car generates on different surfaces and is one of the most influential upgrades in the game.",
        piCost: "Very High",
        benefits: [
          "Massively improves cornering grip",
          "Improves braking performance",
          "Improves traction under acceleration",
          "Increases overall vehicle consistency"
        ],
        drawbacks: [
          "Consumes a large amount of PI",
          "May leave less PI available for power upgrades"
        ],
        whenToUse: [
          "Build is lacking grip or handling",
          "Vehicle struggles to put power down",
          "The available compound matches the intended terrain",
          "Consistency is more important than outright power"
        ],
        avoidWhen: [
          "The PI cost prevents more important upgrades",
          "Straight-line performance is the main priority",
          "The compound does not match the intended terrain"
        ],
        tips: [
          "Matching the tire compound to the terrain usually provides the biggest gains.",
          "More grip allows the car to brake later, corner faster and accelerate earlier.",
          "Tire compounds are often one of the most impactful upgrades available.",
          "Higher grip is not always the best choice if it consumes too much PI."
        ],
        tags: ["Grip", "Handling"]
      },
      {
        id: "tire-width",
        title: "Tire Width",
        description: "Wider tires increase the contact patch between the tire and the surface, improving grip and stability.",
        piCost: "Medium",
        benefits: [
          "Improves cornering grip",
          "Improves traction during acceleration",
          "Reduces wheelspin"
        ],
        drawbacks: [
          "Can consume a significant amount of PI",
          "Can limit power upgrades"
        ],
        whenToUse: [
          "The vehicle struggles for traction",
          "Additional grip is needed",
          "Power upgrades are causing wheelspin",
          "The build has enough PI available"
        ],
        avoidWhen: [
          "Extremely PI-limited classes"
        ],
        tips: [
          "Rear tire width usually provides the biggest benefit.",
          "Wider rear tires are especially effective on high-power RWD builds."
        ],
        tags: ["Grip", "Traction"]
      },
      {
        id: "rim-size",
        title: "Rim Size",
        description: "Rim size changes the balance between tire sidewall flexibility and steering responsiveness.",
        piCost: "Low",
        benefits: [
          "Can improve steering response",
          "Allows fine-tuning vehicle feel",
          "May reduce tire sidewall flex"
        ],
        drawbacks: [
          "Usually provides small performance gains",
          "Can reduce ride compliance",
          "May increase PI with limited benefit"
        ],
        whenToUse: [
          "Fine-tuning a build",
          "Competitive setups",
          "Adjusting handling characteristics"
        ],
        avoidWhen: [
          "Early-stage builds"
        ],
        tips: [
          "Smaller rims generally favor grip while larger rims favor responsiveness.",
          "Rim size changes are usually most valuable after major upgrades are already installed."
        ],
        tags: ["Handling", "Response"]
      }
    ]
  },
  {
    id: "platform-handling",
    title: "Platform & Handling",
    description: "These upgrades affect how the vehicle transfers weight, responds to driver inputs and behaves through corners. They are essential for improving handling performance and unlocking advanced tuning options.",
    guides: [
      {
        id: "weight-reduction",
        title: "Weight Reduction",
        description: "Reduces vehicle weight, improving nearly every aspect of performance including acceleration, braking and cornering.",
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
          "Handling-focused builds",
          "Technical circuits",
          "Cars with excessive weight",
        ],
        avoidWhen: [
          "Power-limited classes",
          "Drag-focused builds",
        ],
        tips: [
          "Usually one of the most efficient upgrades in A and S1 class",
          "Weight reduction improves every phase of a corner, not just acceleration."
        ],
        tags: ["Acceleration", "Braking", "Cornering"]
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
          "Handling balance needs adjustment",
          "The vehicle exhibits understeer or oversteer",
          "Additional tuning flexibility is desired"
        ],
        avoidWhen: [
          "Drag racing"
        ],
        tips: [
          "A cheap upgrade that provides valuable tuning flexibility.",
          "Small tuning changes can have a significant impact on vehicle balance."
        ],
        unlocksTuning: true,
        tags: ["Tuning", "Handling"]
      },
      {
        id: "springs-dampers",
        title: "Springs & Dampers",
        description: "Unlocks suspension tuning and allows precise control over weight transfer and chassis movement.",
        piCost: "Medium",
        benefits: [
          "Unlocks ride height tuning",
          "Unlocks spring tuning",
          "Improves setup flexibility",
          "Improves control over weight transfer"
        ],
        drawbacks: [
          "Requires tuning to fully benefit"
        ],
        whenToUse: [
          "Suspension behavior needs adjustment",
          "Additional tuning flexibility is required",
          "Optimizing a specialized build"
        ],
        avoidWhen: [
          "Very low PI builds"
        ],
        tips: [
          "One of the most important upgrades for advanced tuning.",
          "Different racing disciplines often require very different suspension settings."
        ],
        unlocksTuning: true,
        tags: ["Tuning", "Handling"]
      },
      {
        id: "brakes",
        title: "Brakes",
        description: "Improves braking performance and unlocks brake balance and pressure tuning.",
        piCost: "Medium",
        benefits: [
          "Shorter braking distances",
          "Unlocks brake tuning",
          "Improves corner entry control",
          "Improves braking consistency"
        ],
        drawbacks: [
          "Can be expensive in PI"
        ],
        whenToUse: [
          "The vehicle struggles under braking",
          "Heavy vehicles"
        ],
        avoidWhen: [
          "Drag builds"
        ],
        tips: [
          "More useful on heavier cars than lightweight sports cars.",
          "Brake upgrades become more valuable as vehicle weight increases."
        ],
        unlocksTuning: true,
        tags: ["Braking", "Cornering", "Tuning"]
      }
    ],
  },
  {
    id: "conversions",
    title: "Conversions & Body Kits",
    description: "These upgrades can fundamentally change how a vehicle performs and feels to drive. Engine swaps, drivetrain conversions and body kits offer powerful ways to specialize a build for specific goals.",
    guides: [
      {
        id: "engine-swap",
        title: "Engine Swap",
        description: "Replaces the original engine with a different powerplant, dramatically changing performance characteristics.",
        piCost: "Very High",
        benefits: [
          "Access to more power",
          "Different powerband",
          "Greater upgrade potential",
          "Can improve power-to-weight efficiency"
        ],
        drawbacks: [
          "Consumes significant PI",
          "Can upset vehicle balance"
        ],
        whenToUse: [
          "The stock engine lacks competitive upgrade potential",
          "A different powerband better suits the build",
          "The target class benefits from a specific swap"
        ],
        avoidWhen: [
          "Purist builds",
          "Stock engine already performs well in the target class"
        ],
        tips: [
          "Not every car benefits from an engine swap.",
          "Always compare PI cost against upgrading the original engine."
        ],
        tags: ["Power", "Performance"]
      },
      {
        id: "aspiration",
        title: "Aspiration Conversion",
        description: "Adds or changes forced induction systems such as turbochargers and superchargers.",
        piCost: "High",
        benefits: [
          "Large power gains",
          "Greater tuning potential",
          "Can dramatically change engine behavior"
        ],
        drawbacks: [
          "Can increase turbo lag",
          "Consumes significant PI"
        ],
        whenToUse: [
          "Additional horsepower is needed",
          "The build has enough traction to support more power",
          "Power gains are prioritized over handling upgrades"
        ],
        avoidWhen: [
          "Grip-limited builds",
          "Traction is already a major issue"
        ],
        tips: [
          "Turbo conversions usually offer the largest power ceiling.",
          "More power is only useful if the car can effectively use it."
        ],
        tags: ["Power", "Horsepower"]
      },
      {
        id: "drivetrains",
        title: "Drivetrain Conversion",
        description: "Changes the driven wheels of the vehicle, such as converting RWD to AWD.",
        piCost: "High",
        benefits: [
          "Improves traction",
          "Improves stability",
          "Makes power easier to apply"
        ],
        drawbacks: [
          "Adds weight",
          "Consumes valuable PI"
        ],
        whenToUse: [
          "The vehicle struggles for traction",
          "High horsepower makes power difficult to control",
          "Consistency is more important than driving challenge"
        ],
        avoidWhen: [
          "Drift builds",
          "Purist setups",
          "Preserving original drivetrain character is important"
        ],
        tips: [
          "AWD swaps are extremely strong but not always optimal."
        ],
        tags: ["Traction", "Handling"]
      },
      {
        id: "bodykit",
        title: "Body Kits",
        description:"Changes vehicle appearance and can alter weight, aero and handling characteristics.",
        piCost: "Medium",
        benefits: [
          "May improve aerodynamics",
          "Can reduce weight",
          "May unlock additional performance options"
        ],
        drawbacks: [
          "Benefits vary greatly by vehicle",
          "Performance gains are not guaranteed"
        ],
        whenToUse: [
          "The body kit provides measurable performance gains",
          "Additional aero options are desired",
          "Visual customization is important"
        ],
        avoidWhen: [
          "When PI is extremely limited"
        ],
        tips: [
          "Some body kits provide surprisingly strong performance gains.",
          "Always compare the PI cost against other available upgrades."
        ],
        tags: ["Aero", "Appearance"]
      }
    ],
  },
  {
    id: "transmission-system",
    title: "Transmission System",
    description: "Transmission upgrades improve how power is delivered to the wheels. While some provide direct performance gains, others unlock valuable tuning options that help optimize acceleration, traction and drivability.",
    guides: [
      {
        id: "transmission",
        title: "Transmission",
        description: "Transmission upgrades unlock gear ratio tuning, allowing you to adjust acceleration, top speed and power delivery.",
        piCost: "Medium",
        benefits: [
          "Unlocks gear ratio tuning",
          "Allows optimization for different racing disciplines",
          "Improves acceleration or top speed depending on setup",
          "Can help keep the engine in its powerband"
        ],
        drawbacks: [
          "Requires tuning knowledge to maximize benefits",
          "Provides limited gains with default settings"
        ],
        whenToUse: [
          "The stock gearing does not suit the intended build",
          "Additional tuning flexibility is desired",
          "Acceleration and top speed need fine adjustment",
          "Keeping the engine in its powerband is important"
        ],
        avoidWhen: [
          "Beginner builds where PI is extremely limited"
        ],
        tips: [
          "One of the most valuable upgrades for advanced tuning.",
          "A properly tuned transmission can feel like a power upgrade without adding horsepower."
        ],
        unlocksTuning: true,
        tags: ["Tuning"]
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
          "Improving acceleration efficiency",
          "Reducing time lost during gear changes",
          "The build has available PI for small performance gains"
        ],
        avoidWhen: [
          "Very low-class builds with severe PI restrictions"
        ],
        tips: [
          "Often one of the most PI-efficient upgrades in the transmission category.",
          "The benefit becomes more noticeable as vehicle power increases."
        ],
        unlocksTuning: true,
        tags: ["Acceleration"]
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
          "Small performance gains are needed",
          "The build is nearing its class limit",
          "Additional responsiveness is desired"
        ],
        avoidWhen: [
          "Early-stage builds where larger upgrades are available"
        ],
        tips: [
          "A common upgrade when trying to maximize performance near a class limit.",
          "Works particularly well when combined with weight reduction."
        ],
        tags: ["Acceleration", "Response"]
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
          "Traction behavior needs adjustment",
          "The vehicle suffers from understeer or oversteer",
          "Additional tuning flexibility is required",
          "Optimizing a specialized build"
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
        tags: ["Tuning", "Traction"]
      }
    ],
  },
  {
    id: "aero-bodyparts",
    title: "Aerodynamics & Body Parts",
    description: "These upgrades influence aerodynamics, stability and visual customization. Proper aero setup can significantly improve cornering performance, but often comes with trade-offs in top speed and PI cost.",
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
          "Improves corner entry response",
          "Unlocks adjustable front downforce"
        ],
        drawbacks: [
          "Increases aerodynamic drag",
          "Can reduce top speed",
          "Consumes PI that could be used elsewhere"
        ],
        whenToUse: [
          "The vehicle struggles with understeer",
          "Additional front-end grip is needed",
          "Cornering performance is prioritized over top speed",
          "More front aero balance is desired"
        ],
        avoidWhen: [
          "Drag builds",
          "Top-speed focused setups"
        ],
        tips: [
          "Front aero is often used to improve corner entry performance.",
          "Too much front downforce can make the rear feel unstable."
        ],
        tags: ["Aero", "Handling", "Tuning"]
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
          "Unlocks adjustable rear downforce"
        ],
        drawbacks: [
          "Adds aerodynamic drag",
          "Reduces top speed",
          "Consumes PI"
        ],
        whenToUse: [
          "The rear of the car feels unstable",
          "Additional traction is needed when exiting corners",
          "The vehicle suffers from oversteer",
          "Cornering consistency is more important than top speed"
        ],
        avoidWhen: [
          "Drag racing",
          "Top-speed highway builds"
        ],
        tips: [
          "Rear aero is one of the easiest ways to stabilize a difficult car.",
          "Balance front and rear aero carefully to avoid handling issues."
        ],
        tags: ["Aero", "Handling", "Tuning"]
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
          "Visual customization is important",
          "The selected option has minimal PI impact",
          "Minor aerodynamic gains are available"
        ],
        avoidWhen: [
          "Highly optimized competitive builds with strict PI limits"
        ],
        tips: [
          "Most side skirts are chosen for aesthetics rather than performance.",
          "Performance impact is usually small compared to aero upgrades."
        ],
        tags: ["Appearance"]
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
          "Small weight savings are needed",
          "The build is close to a class limit",
          "Visual customization is desired",
          "Other major upgrades have already been installed"
        ],
        avoidWhen: [
          "When larger performance upgrades are available"
        ],
        tips: [
          "Some lightweight hood options provide surprisingly efficient PI savings.",
          "Always compare the weight reduction against other available upgrades."
        ],
        tags: ["Appearance"]
      }
    ],
  },
  {
    id: "engine",
    title: "Engine Parts",
    description: "While most engine upgrades increase power, choosing the right parts is about more than horsepower alone. Different upgrades excel at torque, high-RPM performance, responsiveness, PI efficiency or overall power output.",
    guides: [
      {
        id: "intake",
        title: "Intake",
        description: "Intake upgrades improve airflow into the engine, providing a small but efficient increase in power.",
        piCost: "Low",
        benefits: [
          "Adds a small amount of horsepower",
          "Usually offers good PI efficiency",
          "Works well in most builds"
        ],
        drawbacks: [
          "Power gains are relatively small"
        ],
        whenToUse: [
          "Additional horsepower is needed",
          "The build has limited PI available",
          "A cost-efficient power upgrade is desired"
        ],
        avoidWhen: [
          "When larger power upgrades are available"
        ],
        tips: [
          "Often one of the first engine upgrades players install."
        ],
        tags: ["Horsepower", "PI-efficient"]
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
          "Additional high-RPM power is desired",
          "The engine spends significant time near redline",
          "Supporting other airflow upgrades"
        ],
        avoidWhen: [
          "PI-limited low-class builds"
        ],
        tips: [
          "Usually becomes more valuable as power levels increase."
        ],
        tags: ["High-RPM"]
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
          "Large horsepower gains are desired",
          "Supporting other major power upgrades",
          "The build has sufficient traction for more power"
        ],
        avoidWhen: [
          "Low-class efficiency builds"
        ],
        tips: [
          "Becomes increasingly valuable as engine output rises."
        ],
        tags: ["Horsepower", "Power"]
      },
      {
        id: "ignition",
        title: "Ignition",
        description: "Improves combustion efficiency, providing reliable horsepower gains at a reasonable PI cost.",
        piCost: "Low",
        benefits: [
          "Good PI efficiency",
          "Adds a little bit of horsepower",
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
        ],
        tags: ["Horsepower", "PI-efficient"]
      },
      {
        id: "exhaust",
        title: "Exhaust",
        description: "Improves exhaust flow, increasing engine efficiency and overall power output.",
        piCost: "Medium",
        benefits: [
          "Provides strong power gains",
          "Usually offers excellent PI efficiency",
          "Improves engine responsiveness"
        ],
        drawbacks: [
          "Limited gains compared to major engine upgrades"
        ],
        whenToUse: [
          "Cost-efficient horsepower gains are desired",
          "The build has limited PI available",
          "Additional engine responsiveness is beneficial"
        ],
        avoidWhen: [
          "Rarely worth skipping"
        ],
        tips: [
          "Often one of the best horsepower-per-PI upgrades available."
        ],
        tags: ["Power", "PI-efficient"]
      },
      {
        id: "pistons-compression",
        title: "Pistons & Compression",
        description: "Increases engine compression and internal efficiency, resulting in significant power gains.",
        piCost: "High",
        benefits: [
          "Large horsepower increase",
          "Improves power across much of the RPM range"
        ],
        drawbacks: [
          "Consumes a significant amount of PI"
        ],
        whenToUse: [
          "Maximum engine output is desired",
          "The build has sufficient PI available",
          "Power gains are prioritized over efficiency"
        ],
        avoidWhen: [
          "Low-class efficiency builds"
        ],
        tips: [
          "One of the strongest naturally aspirated power upgrades."
        ],
        tags: ["Horsepower"]
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
          "Additional high-RPM power is desired",
          "The engine frequently operates near redline",
          "Supporting a racing-oriented setup"
        ],
        avoidWhen: [
          "Torque-focused low-RPM builds"
        ],
        tips: [
          "Particularly effective on naturally aspirated engines."
        ],
        tags: ["Horsepower", "High-RPM"]
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
          "Additional torque is needed",
          "Improving acceleration is a priority",
          "The vehicle benefits from stronger low-end power",
          "The build has enough PI available"
        ],
        avoidWhen: [
          "PI-limited grip builds"
        ],
        tips: [
          "Torque gains are often more noticeable than horsepower gains."
        ],
        tags: ["Torque", "Acceleration"]
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
          "Additional high-RPM power is desired",
          "Maximum engine performance is a priority",
          "The build favors horsepower over efficiency"
        ],
        avoidWhen: [
          "Low-class builds focused on efficiency"
        ],
        tips: [
          "One of the most impactful power upgrades available."
        ],
        tags: ["Horsepower", "High-rpm"]
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
        ],
        tags: ["Horsepower", "PI-efficient"]
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
          "Additional engine responsiveness is desired",
          "Improving acceleration feel is important",
          "Fine-tuning a nearly completed build"
        ],
        avoidWhen: [
          "When larger upgrades are still available"
        ],
        tips: [
          "A small upgrade that contributes to a more responsive driving experience."
        ],
        tags: ["Acceleration", "Response"]
      }
    ],
  }
];