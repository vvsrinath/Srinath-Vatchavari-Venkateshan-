export type Discipline = {
  index: string;
  title: string;
  description: string;
  keywords: string[];
  art: "mechanical" | "materials" | "computation" | "blockchain" | "economics" | "innovation";
};

export const disciplines: Discipline[] = [
  {
    index: "01",
    title: "Mechanical & Automotive Engineering",
    description:
      "Vehicle dynamics, thermodynamics and the mathematics behind more efficient motion.",
    keywords: ["Vehicle dynamics", "Thermodynamics", "Fuel efficiency", "Telematics"],
    art: "mechanical",
  },
  {
    index: "02",
    title: "Scientific Research & Materials",
    description:
      "How materials behave, how experiments are designed and how observations become knowledge.",
    keywords: ["Lignin", "Bioenergy", "Experimental design", "Material behaviour"],
    art: "materials",
  },
  {
    index: "03",
    title: "Artificial Intelligence & Computational Science",
    description:
      "Using models and data to see patterns that are difficult to find by hand.",
    keywords: ["Modelling", "Data analysis", "Optimisation", "Scientific computing"],
    art: "computation",
  },
  {
    index: "04",
    title: "Emerging Technologies & Blockchain",
    description:
      "Decentralised systems as a way to rethink trust, ownership and coordination.",
    keywords: ["Decentralisation", "Protocols", "Hackathons", "Systems thinking"],
    art: "blockchain",
  },
  {
    index: "05",
    title: "Economics & Financial Systems",
    description:
      "How incentives, markets and constraints shape the decisions people actually make.",
    keywords: ["Incentives", "Markets", "Resource allocation", "Systems economics"],
    art: "economics",
  },
  {
    index: "06",
    title: "Entrepreneurship & Innovation",
    description:
      "Turning an observation into a proposal, a prototype and a path someone else can follow.",
    keywords: ["Problem framing", "Prototyping", "Validation", "Pitching"],
    art: "innovation",
  },
];

export type Recognition = {
  index: string;
  title: string;
  result: string;
  category: string;
  description: string;
};

export const recognition: Recognition[] = [
  {
    index: "01",
    title: "REGen Pavilion Challenge",
    result: "Top 50 Selection",
    category: "Research · Bioenergy",
    description:
      "Selected among the top 50 entries in a challenge centred on renewable energy, bioenergy and interdisciplinary research. The work examined lignin as a bio-additive for compression ignition engine fuel.",
  },
  {
    index: "02",
    title: "Blockchain Hackathon",
    result: "Competition Winner",
    category: "Innovation · Distributed systems",
    description:
      "Won hackathon competitions with a blockchain-based project, exploring how decentralised systems can support more open and reliable forms of coordination.",
  },
];

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  status: string;
  statusTone: "research" | "completed" | "concept";
  summary: string;
  detail: string[];
  topics: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "VEYLORA",
    subtitle:
      "An Intelligent Edge Computing Framework for Predictive Velocity Trajectory Optimisation in Connected Vehicles.",
    status: "Ongoing research",
    statusTone: "research",
    summary:
      "A framework that brings computation closer to the vehicle. VEYLORA explores how telematics data, edge computing and mathematical modelling can work together to predict velocity trajectories and reduce fuel use in connected vehicles.",
    detail: [
      "Edge computing: keep time-sensitive decisions near the vehicle instead of relying on a distant server.",
      "Mathematical modelling: turn driving conditions into a velocity trajectory that can be optimised.",
      "Telematics: connect the model to real vehicle data so the efficiency claim can be tested, not just assumed.",
      "The live dashboard is an offline-first, calculus-led fuel-consumption optimiser built around the same question: find the most efficient drive.",
    ],
    topics: [
      "Automotive engineering",
      "Edge computing",
      "Telematics",
      "Mathematical modelling",
      "Fuel efficiency",
    ],
    links: [
      {
        label: "Open dashboard",
        href: "https://veylora1.netlify.app/dashboard",
      },
      {
        label: "View repository",
        href: "https://github.com/vvsrinath/-Veylora-Kalasalingam-University-1St-Sem-Maths-Project-1-with-Research-",
      },
    ],
  },
  {
    index: "02",
    title: "Lignin-Based Biofuel Additive Research",
    subtitle: "Extraction, utilisation and experimental study of a bio-additive for diesel engines.",
    status: "Ongoing research · REGen selection",
    statusTone: "research",
    summary:
      "Investigating lignin extraction and its use as a bio-additive in compression ignition engine fuel. The question behind the work is practical: can a material stream usually treated as waste improve how an alternative fuel behaves?",
    detail: [
      "Study the extraction route and the characteristics of the resulting material.",
      "Examine how the additive changes combustion and performance in a compression ignition engine.",
      "Keep the experimental work connected to the wider bioenergy and waste-to-energy picture.",
    ],
    topics: ["Bioenergy", "Chemistry", "Alternative fuels", "Experimental research"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/vvsrinath/2026-REGen-Pavillion-Bioenergy-Waste-to-Energy-Extraction-and-Utilisation-of-Lignin-Bio-Additive-",
      },
    ],
  },
  {
    index: "03",
    title: "Blockchain-Based Innovation",
    subtitle: "A decentralised systems project developed for hackathon competitions.",
    status: "Completed · Hackathon project",
    statusTone: "completed",
    summary:
      "A blockchain-based project recognised with competition wins. The work treated decentralised systems as infrastructure rather than a buzzword: how records, trust and coordination can function without a single point of control.",
    detail: [
      "Frame a problem where shared records and trust actually matter.",
      "Prototype the decentralised logic and put it in front of a competition jury.",
      "Learn from the constraints of building something that has to work in a limited time.",
    ],
    topics: ["Blockchain", "Decentralised systems", "Technology innovation"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/vvsrinath/BlockSense-For-Euphoria-KARE-2026-HackFusion-",
      },
    ],
  },
  {
    index: "04",
    title: "ENG2MAT",
    subtitle:
      "English in, validated MATLAB out — entirely in the browser, even offline.",
    status: "Live tool",
    statusTone: "completed",
    summary:
      "ENG2MAT turns a plain-English description of a maths problem into validated MATLAB. It understands the prompt, checks it, calculates and visualises the result, then generates the code — in the browser, with offline support.",
    detail: [
      "Start from natural language instead of syntax; the tool interprets the problem before generating code.",
      "Validation, calculation and visualisation sit in the same flow so the output can be checked.",
      "Runs client-side, including offline, so the tool does not depend on a backend.",
    ],
    topics: ["Natural language processing", "MATLAB generation", "Scientific computing", "Offline-first web app"],
    links: [{ label: "Open Eng2MAT", href: "https://eng2mat.pages.dev/" }],
  },
  {
    index: "05",
    title: "FactoryOS AI",
    subtitle: "Privacy-first autonomous factory intelligence, without a cloud dependency.",
    status: "Live prototype",
    statusTone: "completed",
    summary:
      "FactoryOS AI is a privacy-first autonomous factory intelligence prototype. The deployed demo presents factory operations intelligence that works without sending data to the cloud.",
    detail: [
      "Keep operational data local rather than assuming a cloud pipeline.",
      "Explore how autonomous intelligence can support factory decision-making.",
      "Treat the deployed page as a prototype, not a claim of industrial deployment.",
    ],
    topics: ["Industrial AI", "Factory systems", "Privacy-first computing", "Edge intelligence"],
    links: [
      {
        label: "Open FactoryOS AI",
        href: "https://factory-os-ai-version-001vercel.vercel.app/",
      },
    ],
  },
  {
    index: "06",
    title: "Inspectra AI",
    subtitle: "AI-powered fabric and textile intelligence, from cotton grading to fibre composition.",
    status: "Prototype · Repository",
    statusTone: "research",
    summary:
      "Inspectra AI is an AI-powered fabric and textile intelligence platform. The repository describes work around USDA/BIS cotton grading, CSP analysis and machine-learning fibre composition.",
    detail: [
      "Connect textile quality questions to machine-learning analysis.",
      "Cover cotton grading standards and CSP analysis alongside fibre-composition modelling.",
      "The source is public as a research prototype; the repository description notes proprietary software.",
    ],
    topics: ["Textile intelligence", "Machine learning", "Cotton grading", "Fibre composition"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/vvsrinath/Inspectra-AI-Version-0.002",
      },
    ],
  },
  {
    index: "07",
    title: "SciVeyra",
    subtitle: "A local-first research workspace for discovery, analysis, figures, writing and integrity checks.",
    status: "Live tool",
    statusTone: "completed",
    summary:
      "SciVeyra is a free, local-first research workspace that brings discovery, analysis, figures, writing and integrity checks together, with an honest open-source tool directory.",
    detail: [
      "Support the research workflow from finding sources to checking integrity.",
      "Local-first design keeps work on the researcher's machine.",
      "The tool directory aims to state what each open-source tool actually does.",
    ],
    topics: ["Research tooling", "Local-first software", "Scientific writing", "Open-source directory"],
    links: [
      { label: "Open SciVeyra", href: "https://sciveyra.netlify.app/" },
      { label: "View repository", href: "https://github.com/vvsrinath/Sciveyra" },
    ],
  },
  {
    index: "08",
    title: "Swasthya Sathi",
    subtitle: "A digital healthcare access and referral platform concept for rural communities.",
    status: "Concept",
    statusTone: "concept",
    summary:
      "An idea for making the first step of getting care less confusing: finding the right facility, understanding a referral and keeping essential health information in one place that both patient and provider can use.",
    detail: [
      "Focus on the referral journey, where many rural patients lose time and clarity.",
      "Design for low-connectivity, shared-device use rather than assuming ideal conditions.",
      "Treat this as a concept: a problem frame and a direction, not a deployed product.",
    ],
    topics: ["Healthcare technology", "Social innovation", "Digital infrastructure"],
  },
  {
    index: "09",
    title: "TORQEC",
    subtitle: "A computational engineering library concept for vehicle performance optimisation.",
    status: "Concept · Under development",
    statusTone: "concept",
    summary:
      "A library concept that brings the mathematics used in vehicle performance work into reusable, checkable code. TORQEC is an exploration in scientific computing, not a released product.",
    detail: [
      "Collect recurring calculations into a form that can be reused and inspected.",
      "Connect engineering mathematics to the performance questions it is meant to answer.",
      "Build in small pieces, with correctness and clarity ahead of feature count.",
    ],
    topics: ["Scientific computing", "Mathematical modelling", "Computational engineering"],
  },
];

export type Principle = {
  index: string;
  title: string;
  explanation: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "High Curiosity",
    explanation:
      "I start with questions, not answers. The useful ones are often the questions that cross a subject boundary.",
  },
  {
    index: "02",
    title: "Fluid Learning",
    explanation:
      "I move between fields without treating the first one as a permanent label. New tools are part of the work.",
  },
  {
    index: "03",
    title: "Builder's Mindset",
    explanation:
      "An idea carries more weight once it has been made, tested or sketched in a form someone can respond to.",
  },
  {
    index: "04",
    title: "Research-Oriented Thinking",
    explanation:
      "Look for evidence, note what failed and keep the result honest even when it is not the answer you wanted.",
  },
  {
    index: "05",
    title: "Strong Work Ethic",
    explanation:
      "Long problems need steady attention. I would rather do the careful second pass than stop at the first result.",
  },
  {
    index: "06",
    title: "Interdisciplinary Perspective",
    explanation:
      "The most interesting solutions sit between disciplines, where one field's assumptions can be questioned by another.",
  },
];

export const opportunities: string[] = [
  "R&D Engineer Internships",
  "Engineering Research Internships",
  "Mechanical Engineering Internships",
  "Applied Research Opportunities",
  "Automotive Research Opportunities",
  "Emerging Technology Research Opportunities",
];
