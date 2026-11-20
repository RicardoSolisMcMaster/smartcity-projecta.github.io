
 // config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Ricardo Solis",
    program: "Bachelor of Technology - Automation Engineering Technology",
    university: "McMaster University, Canada",
    email: "ricardo.solis@smartcityengineering.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#14283F",
    heroText: "#FFFFFF",
    pageBg: "#F4F7FA",
    accent: "#00A6A6"
  },

  dividers: {
    dividerBg: "#203B55",
    dividerText: "#FFFFFF"
  },

  footer: {
    footerBg: "#14283F",
    footerText: "#FFFFFF",
    footerBorder: "#00A6A6",

    homeLinkText: "RoadwayVR",

    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",

    templateCreditLinkText:
      "Learn more at RoadwayVR.com",

    templateCreditUrl:
      "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "SUMO-Based Roadway Modelling and Speed-Density Assessment at Kipling Avenue and Dixon Road, Toronto: HDV/CAV Comparison and Signal-Timing Intervention",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "SUMO roadway simulation of the Kipling Avenue and Dixon Road intersection",
    videoCaption:
      "Project overview: GIS and NETEDIT roadway network → HDV baseline → 100% CAV comparison → 100% HDV signal-timing intervention → E61 speed-density results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Microscopic traffic simulation helps assess roadway geometry, vehicle interactions, and signal operations.",
      "Group 4 examines Kipling Avenue and Dixon Road in Toronto using the course-assigned GIS map.",
      "Stage A1 builds the digital network, while Stage A2 adds assumed traffic demand and signal control.",
      "One upstream four-lane edge, E61, provides consistent speed-density evidence across scenarios."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "The assigned intersection requires an integrated roadway network and 100% HDV traffic baseline for this study.",
      "The effect of a fully CAV fleet on edge E61 cannot be assumed from the HDV baseline.",
      "The effect of reallocating fixed-cycle signal green time on E61 must be tested.",
      "One-edge simulation results cannot establish intersection-wide benefits or justify field implementation."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Develop the Kipling-Dixon roadway-and-traffic model and characterize the 100% HDV baseline.",
      "Compare and explain E61 speed-density behaviour under 100% CAVs versus the HDV baseline.",
      "Implement and evaluate a fixed-cycle signal-timing intervention using E61 before-and-after evidence.",
      "Communicate the project methodology, scenario comparisons, and limitations through this website."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Study Area Selection (GIS)",
        text: "Select the assigned Kipling-Dixon intersection and its surrounding roads using the course GIS map.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Objective 1 - Road Network and HDV Baseline",
        text: "Build roads and junctions in NETEDIT, then configure 3,000 veh/h nominal demand and the HDV baseline in SUMO.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Objective 2 - Controlled 100% CAV Comparison",
        text: "Change the active vehicle type to CAV while keeping the network, nominal flows, and signal settings fixed.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Objective 3 - Signal Intervention and Results",
        text: "Change the HDV signal split from 27/3/27/3 s to 36/3/18/3 s and assess E61 results.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Study Area Selection (GIS)",
        bullets: [
          { text: "Identify the assigned Kipling Avenue-Dixon Road intersection in Toronto." },
          { text: "Use the course GIS image to trace major and local streets and junctions." },
          { text: "Use the GIS reference to establish the network layout before simulation." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Objective 1 - Network and HDV Baseline",
        bullets: [
          { text: "Build the roadway in NETEDIT with 328 directed non-internal edges and 214 junction records." },
          { text: "Configure 12 nominal traffic flows totalling 3,000 veh/h and a 60-second fixed signal cycle." },
          { text: "Establish the 100% HDV baseline and measure speed and density on four-lane edge E61." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Objective 2 - Controlled CAV Scenario",
        bullets: [
          { text: "Retain the same network, nominal demand, routes, and signal program as the HDV baseline." },
          { text: "Replace the HDV vehicle type with a 100% CAV type configured with CACC car following." },
          { text: "Compare E61 speed-density observations over 36 common 100-second intervals." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Objective 3 - Signal-Timing Intervention",
        bullets: [
          { text: "Keep HDVs and shift the signal split from 27/3/27/3 to 36/3/18/3 seconds." },
          { text: "Retain the baseline network and nominal traffic flows to isolate the timing change." },
          { text: "Compare E61 speed-density results and communicate the findings and limits online." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Discussion",
    subtitle:
      "Speed-density evidence for edge E61: HDV baseline versus 100% CAV and 100% HDV with a signal-timing change; 36 matched 100-second intervals.",

    charts: {
      left: {
        title: "Base Scenario - 100% Human-Driven Vehicles",
        src: "assets/img/image6.jpg",
        alt: "Speed-density diagram for the 100% HDV baseline on edge E61"
      },
      right: {
        title: "Scenario 1 - 100% Connected and Autonomous Vehicles",
        src: "assets/img/image7.jpg",
        alt: "Speed-density diagram for the 100% CAV scenario on edge E61"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "The 100% HDV baseline recorded 3.562 m/s mean interval speed and 63.077 veh/km mean edge density.",
      "The 100% CAV run recorded 3.576 m/s and 64.830 veh/km; matched-density differences were small and non-uniform.",
      "For the HDV intervention, Phase 0 gained 9 s and Phase 2 lost 9 s; the 60-second cycle stayed unchanged.",
      "On E61, intervention mean speed rose to 4.990 m/s (+40.1%) and density fell to 44.455 veh/km (-29.5%).",
      "The local outcome supports further testing, not an optimal-timing or intersection-wide benefit claim; field calibration is absent."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Ricardo Solis", role: "SUMO Road Network Development, Traffic Demand and Signal Configuration, HDV/CAV Scenario Development, Intervention Analysis, Results Visualization and Reporting" }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 - Smart Cities and Communities",
      "Institution: McMaster University",
      "Lab Instructor: Dr. Ahmad Mohammadi",
      "Tools: SUMO, NETEDIT, GIS imagery, edgeData analysis"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/RicardoSolisMcMaster/smartcity-projecta.github.io"
  }
};
