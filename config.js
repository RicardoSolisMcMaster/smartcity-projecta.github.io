
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
    projectTitle: "SUMO-Based Traffic Simulation and Analysis of Kipling Avenue and Dixon Road: Autonomous Vehicles and Signal Timing Optimization",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "SUMO roadway simulation of the Kipling Avenue and Dixon Road intersection",
    videoCaption:
      "Project overview: GIS road network → NETEDIT development → SUMO traffic simulation → HDV and CAV comparison → Signal timing intervention → Speed-Density results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Urban traffic congestion affects roadway efficiency and travel reliability.",
      "The study examines Kipling Avenue and Dixon Road in Toronto, Ontario.",
      "NETEDIT and SUMO enable digital road network development and traffic simulation.",
      "Speed-density analysis supports comparisons of vehicle behaviour and signal operations."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "A digital roadway and traffic baseline is needed to evaluate the selected intersection.",
      "The effects of autonomous vehicles on traffic performance require simulation.",
      "Existing signal timing may contribute to congestion on the selected approach.",
      "The effectiveness of a signal timing intervention must be evaluated."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Develop the Kipling-Dixon SUMO road network and characterize the 100% HDV baseline.",
      "Compare speed-density relationships for 100% HDVs and 100% CAVs on edge E61.",
      "Evaluate a signal timing intervention using speed-density results on edge E61.",
      "Present project methods and findings through an academic showcase website."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Study Area Selection",
        text: "Select the Kipling Avenue and Dixon Road intersection in Toronto using GIS imagery.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Road Network Development (NETEDIT)",
        text: "Model roads, lanes, junctions, turning movements, and traffic connections in NETEDIT.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Traffic Simulation and Scenario Development (SUMO)",
        text: "Simulate HDV and CAV traffic using consistent demand, routes, and signal settings.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Intervention and Results Analysis",
        text: "Modify signal timing and compare speed-density results across three scenarios on edge E61.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Study Area Selection",
        bullets: [
          { text: "Select Kipling Avenue and Dixon Road in Toronto as the study intersection." },
          { text: "Use the assigned GIS map to identify roads, junctions, and study boundaries." },
          { text: "Establish the roadway geometry reference for the SUMO network." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Road Network Development (NETEDIT)",
        bullets: [
          { text: "Import the GIS background and construct the road network in NETEDIT." },
          { text: "Configure major and local roads, lane counts, and turning lanes." },
          { text: "Verify junction geometry, lane connections, and permitted turning movements." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Traffic Simulation (SUMO)",
        bullets: [
          { text: "Configure traffic demand, vehicle routes, and traffic signal phases." },
          { text: "Simulate 100% HDV and 100% CAV scenarios under controlled conditions." },
          { text: "Extract speed and density data from the same upstream edge E61." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Signal Intervention and Results",
        bullets: [
          { text: "Reallocate signal green time while maintaining a 60-second cycle." },
          { text: "Simulate the intervention using 100% HDVs and unchanged traffic demand." },
          { text: "Compare speed-density diagrams and evaluate changes in roadway performance." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Discussion",
    subtitle:
      "SUMO speed-density analysis of edge E61 at Kipling Avenue and Dixon Road, comparing 100% HDVs, 100% CAVs, and a signal timing intervention.",

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
      "The HDV baseline recorded a mean speed of 3.562 m/s and density of 63.077 veh/km.",
      "The CAV scenario produced a similar mean speed of 3.576 m/s and density of 64.830 veh/km.",
      "Signal green time was reallocated from 27/3/27/3 s to 36/3/18/3 s within the same 60-second cycle.",
      "The intervention increased mean speed to 4.990 m/s and reduced density to 44.455 veh/km.",
      "The results suggest signal timing improved simulated performance, although field validation is still required."
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
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/RicardoSolisMcMaster/smartcity-projecta.github.io"
  }
};
