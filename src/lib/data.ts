export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'Resume', href: '/resume' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export const theme = {
  colors: {
    primary: 'blue-600',
    secondary: 'yellow-400',
    background: {
      light: 'white',
      gradient: {
        from: 'blue-50',
        to: 'white'
      }
    },
    text: {
      primary: 'gray-900',
      secondary: 'slate-500',
      muted: 'slate-400',
      white: 'white',
      light: 'gray-200'
    },
    accent: {
      blue: {
        light: 'blue-100',
        DEFAULT: 'blue-600',
        hover: 'blue-700'
      },
      red: {
        DEFAULT: 'red-600'
      }
    },
    border: {
      DEFAULT: 'slate-400',
      hover: 'blue-600'
    }
  },
  spacing: {
    page: 'py-12',
    section: 'mb-8',
    element: 'mb-4',
    content: 'p-6'
  },
  layout: {
    maxWidth: '4xl',
    borderRadius: 'rounded-lg',
    shadow: 'shadow-lg'
  },
  header: {
    height: 'h-16',
    background: 'bg-white/90',
    blur: 'backdrop-blur-md',
    shadow: 'shadow-sm'
  }
}

export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  headerAnimation: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 }
  }
}

export const heroContent = {
  title: "Welcome to My Portfolio",
  subtitle: "Explore a curated collection of my research, projects, and professional contributions in transportation engineering, urban planning, sustainable mobility, and smart cities.",
  image: "https://i.imghippo.com/files/igJ8471bGk.jpeg",
  buttons: {
    primary: {
      text: "Learn More",
      href: "/about"
    },
    secondary: {
      text: "Publications",
      href: "/publications"
    }
  }
}

export const resumeData = {
  title: "Professional Experience and Projects",
  projects: [
    {
      name: "Advanced Detection and Control Systems for Virus Spread in Public Transportation",
      description: "Contributing to a multi-phase research initiative focused on designing and implementing advanced detection and control technologies to mitigate the spread of the MERS virus among public transportation users.",
      year: "2020-2021"
    },
    {
      name: "Improving Mobility for Transportation-Disadvantaged Populations",
      description: "Designated to play a pivotal role in developing innovative solutions to enhance mobility for transportation-disadvantaged groups.",
      year: 2021
    },
    {
      name: "AI-Driven Shared Vehicle Management System",
      description: "Aiming to develop a robust management system for autonomous shared vehicles, leveraging artificial intelligence and deep learning techniques.",
      year: "2021-2022"
    }
  ],
  areasOfInterest: [
    "Sustainable Urban Mobility",
    "Smart Cities and Urban Innovation",
    "Transportation Planning and Optimization",
    "Data Analytics and Data-Driven Decision-Making",
    "Accessibility, Sustainability, Inclusion, and Equity in Urban Mobility Design and Development"
  ],
  teaching: [
    {
      course: "Advanced Research and Analysis Methods",
      level: "Graduate"
    }
  ],
  languages: ["English", "French", "Arabic", "Korean"],
  publications: [
    {
      title: "Optimizing shared bike systems for economic gain: Integrating land use and retail",
      journal: "Journal of Transport Geography",
      year: "2024",
      link: "https://www.sciencedirect.com/science/article/pii/S0966692324001297?via%3Dihub"
    },
    {
      title: "Locating carbon neutral mobility hubs using artificial intelligence techniques",
      journal: "Scientific Reports",
      year: "2024",
      link: "https://www.nature.com/articles/s41598-024-62701-z"
    }
  ],
  experience: [
    {
      title: "Assistant Research Professor",
      company: "University Of Seoul",
      location: "Seoul, Korea Republic Of",
      period: "March 2024-Present",
      description: "Conducting research focused on urban mobility, transportation systems optimization, and sustainable smart city development.",
      highlights: [
        "Managing multidisciplinary research teams integrating machine learning and GIS for smart urban mobility planning solutions",
        "Authoring peer-reviewed publications on mobility hubs, equity in transportation, and public health integration",
        "Guiding graduate students on thesis topics related to different urban analytics, sustainable planning, and city development"
      ],
      projects: [
        "Urban Mobility Optimization Using AI and Deep Learning",
      ],

    },
    {
      title: "Research Fellow",
      company: "University Of Seoul",
      location: "Seoul, Korea Republic Of",
      period: "March 2019 - February 2024",
      description: "Conducted advanced research on sustainable mobility solutions and smart city initiatives.",
      highlights: [
        "Leading research on virus spread mitigation in public transportation, contributing to national safety protocols",
        "Publishing peer-reviewed articles and book chapters in journals such as Journal of Transport Geography"
      ],
      projects: [
        "Research on Detection and Control Technologies for MERS Virus Spread Routes: Focusing on Public Transportation Users",
        "Development of a System for Enhancing Mobility Convenience for Transportation-Disadvantaged Populations: Deep Learning Algorithm Construction and Travel Pattern Modeling (Phase 2)",
        "Development of an Autonomous Shared Vehicle Management System Using Artificial Intelligence and Deep Learning Techniques",
        "Advanced Study on Enhancing Mobility Convenience for Transportation-Disadvantaged Populations: Deep Learning Algorithm Construction and Travel Pattern Modeling",
        "Research on Detection and Control Technologies for MERS Virus Spread Routes: Focusing on Public Transportation Users (Advanced Study)",
        "Continuation of Research on Detection and Control Technologies for MERS Virus Spread Routes: Focusing on Public Transportation Users (Phase 2-1)",
        "Final Phase of Research on Detection and Control Technologies for MERS Virus Spread Routes: Focusing on Public Transportation Users (Phase 2-2)"
      ],

    },
    {
      title: "Transport Service Manager",
      company: "Casablanca-Settat Regional Government",
      location: "Casablanca, Morocco",
      period: "March 2017 – February 2019",
      description: "Managed regional transportation systems with a focus on sustainability, efficiency, and policy development.",
      highlights: [
        "Designed and implemented regional connectivity projects, improving public transit by 15%",
        "Created policy frameworks to support low-carbon mobility solutions across the region",
        "Collaborated with international experts to integrate modern transport technologies"
      ]
    },
    {
      title: "International Consultant",
      company: "Korea Land and Housing Corporation",
      location: "Seoul, South Korea",
      period: "January 2016 – August 2016",
      description: "Provided strategic guidance on smart city infrastructure and sustainable urban development for emerging cities.",
      highlights: [
        "Drafted feasibility studies for urban smart grid systems and transit-oriented developments",
        "Facilitated cross-sector collaboration between government, private industry, and academia",
        "Authored technical recommendations for infrastructure investment strategies"
      ]
    },
    {
      title: "Manager of Urban Mobility Service",
      company: "Casablanca Metropolitan City Government",
      location: "Casablanca, Morocco",
      period: "September 2011 – June 2015",
      description: "Directed the modernization of metropolitan transportation systems, focusing on sustainability and accessibility.",
      highlights: [
        "Introduced transit-oriented development strategies, reducing congestion by 20%",
        "Led environmental impact assessments for multimodal transit projects",
        "Partnered with international organizations to secure funding for mobility initiatives"
      ]
    }
  ],
  education: [
    {
      degree: "Ph.D. in Transportation Engineering and Smart Cities",
      department: "Department of Transportation Engineering",
      university: "University of Seoul",
      location: "Seoul, South Korea",
      period: "March 2019 – February 2024",
      description: "Advanced research on transportation systems optimization, sustainable urban mobility, and smart city frameworks, integrating data analytics and machine learning techniques.",
      highlights: [
        "Recipient of the Distinguished Paper Award (2024) for research on mobility hubs",
        "Awarded the Smart City Department Scholarship for academic excellence (2020)",
        "Published over 10 peer-reviewed articles on topics including equity in urban transit and public health integration"
      ],
      thesis: "A Planning Support System for a 15-Minute City"
    },
    {
      degree: "M.Sc. in Urban and Regional Development",
      department: "Department of Urban Planning",
      university: "University of Seoul",
      location: "Seoul, South Korea",
      period: "August 2015 – February 2017",
      description: "Focused on sustainable urban planning, transportation modeling, and regional growth strategies.",
      highlights: [
        "Recipient of the KOICA Scholarship (2015–2016) for outstanding academic performance",
        "Recognized for Distinguished Academic Achievement (2016)"
      ],
      thesis: "Enhancing the role of Grand Taxis in Casablanca, Morocco"
    },
    {
      degree: "M.Sc. in Telecommunications",
      department: "Institut National des Postes et Télécommunications",
      university: "Institut National des Postes et Télécommunications",
      location: "Rabat, Morocco",
      period: "September 2007 – June 2010",
      description: "Specialized in computational systems and network design, with applications in urban planning and technology integration.",
      highlights: [
        "Demonstrating excellence in engineering and technical applications"
      ],
      thesis: "Conceiving and Designing a Safe and Optimized Local Network for the Mohamed-6 Foundation"
    },
    {
      degree: "B.Sc. in Mathematics and Physics",
      department: "Preparatory Classes for Engineering Schools",
      university: "Classes Préparatoires des Grandes Écoles d’Ingénieur",
      location: "Marrakech, Morocco",
      period: "September 2004 – June 2007",
      description: "Developed a strong analytical foundation in mathematics and physics, preparing for advanced studies in engineering.",
      highlights: [
        "Ranked 380th out of more than 4,000 candidates in the national final two-year exam in Morocco"
      ]
    }
  ],
  skills: [
    {
        title: "Urban Analytics and Planning",
        area: "Research",
        tldr:"Expert in analyzing urban data patterns and modeling spatial phenomena using advanced statistical techniques",
    },
    {
        title: "Transportation Modeling and Simulation",
        area: "Technical",
        tldr: "Proficient in transportation modeling using software such as INRO’s EMME, Bentley CUBE, TransCAD, and PTV Visum/Vissim for urban mobility modeling and optimization"
    },
    {
       title: "Data Analysis and Machine Learning",
        area: "Technical",
        tldr: "Proficient in Python, R, SPSS, and STATA for predictive analytics and urban decision-making"
    },
    {
        title: "Geographic Information Systems (GIS)",
        area: "Technical",
        tldr: "Advanced skills in GIS platforms (ArcGIS Pro, QGIS, and CityEngine) for spatial analysis and urban planning projects"
    },
    {
        title: "Scientific Research and Publication",
        area: "Research",
        tldr: "Published over 10 peer-reviewed articles in transportation, urban studies, and sustainable mobility journals"
    },
    {
        title: "Project Management and Team Leadership",
        area: "Soft Skills",
        tldr: "Managed multi-phase projects in urban mobility and smart cities, coordinating diverse teams and achieving project goals"
    },
    {
        title: "Academic Mentorship and Knowledge Transfer",
        area: "Soft Skills",
        tldr: "Mentored graduate students and junior researchers, fostering their development in urban planning and analytics"
    },
    {
        title: "Public Speaking and Conference Presentations",
        area: "Soft Skills",
        tldr: "Presented research findings at international conferences, including sessions on sustainable mobility and urban equity"
    }
    ]
}

export const publications = [
  {
    title: "Optimizing shared bike systems for economic gain: Integrating land use and retail",
    journal: "Journal of Transport Geography",
    description: "The study focuses on optimizing shared-bike station locations in Seoul, emphasizing the role of cycling in promoting low-carbon mobility and economic revitalization. A unique approach was used, incorporating the retail activity index, land-use mix, transit proximity, and population and employment densities to determine optimal station locations",
    year: "2024",
    link: "https://www.sciencedirect.com/science/article/pii/S0966692324001297?via%3Dihub"
  },
  {
    title: "Locating carbon neutral mobility hubs using artificial intelligence techniques",
    journal: "Energy Sources, Part A: Recovery, Utilization, and Environmental Effects",
    description: "The study explores the use of Genetic Algorithms (GA) and the Ensemble methods like Random Forest Regressor and XGBoost for optimizing mobility hub locations while reducing travel time and carbon emissions",
    year: "2024",
    link: "https://www.nature.com/articles/s41598-024-62701-z"
  },
  {
    title: "The elasticity and efficiency of carbon reduction strategies in transportation",
    journal: "Energy Sources, Part A: Recovery, Utilization, and Environmental Effects",
    description: "The study focuses on evaluating the effectiveness of various transport carbon mitigation policies, addressing knowledge gaps and providing a comparative overview. A model using mixed-effects meta-regression and carbon elasticity was employed to assess policies like shared bikes, mobility hubs, low emission zones, congestion pricing, electric vehicles, and hydrogen vehicles",
    year: "2024",
    link: "https://www.tandfonline.com/doi/full/10.1080/15567036.2023.2276380"
  },
  {
    title: "A Planning Support System for Boosting Bikeability in Seoul",
    journal: "International Conference on Computers in Urban Planning and Urban Management",
    description: "The research discusses the development of a Planning Support System (PSS) aimed at improving the shared-bike system in Seoul, Korea, by using a bikeability index. The study identifies key global and local variables affecting the system's efficacy and develops change scenarios to enhance performance",
    year: "2023",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-31746-0_9"
  },
  {
    title: "Mining groups of factors influencing bus/minibus crash severities on poor pavement condition roads considering different lighting status",
    journal: "Traffic Injury Prevention",
    description: "The study uses data mining to identify crash-risk factors for bus/minibus crashes on poor roads under different lighting conditions: daylight, night with streetlights, and night without streetlight.",
    year: "2022",
    link: "https://www.tandfonline.com/doi/full/10.1080/15389588.2022.2066658"
  },
  {
    title: "Urban form and public transport design",
    journal: "Urban Form and Accessibility",
    description: "The study explores the relationship between urban form and public transport design, highlighting how city characteristics influence transport systems. And it discusses guidelines from authorities and researchers aimed at improving public transport services and promoting urban sustainability by enhancing access, walking, and biking ",
    year: "2021",
    link: "https://www.sciencedirect.com/science/article/abs/pii/B9780128198223000183?via%3Dihub"
  }
]
export const news = [
  {
    title: "Research Grant Awarded",
    description: "Received major funding for smart city research project...",
    link: "#"
  },
  {
    title: "Conference Presentation",
    description: "Presented findings at International Urban Planning Conference...",
    link: "#"
  },
  {
    title: "New Research Partnership",
    description: "Established collaboration with leading sustainability institute...",
    link: "#"
  }
];
export const teachingData = [
  {
    title: "Advanced Research and Analysis Methods",
    years: "2024",
    description: "Fundamental concepts and principles for conducting research for graduate students. Also possible practical methods to be implemented in a variety of research problems and questions.",
  },
 
]

export const blogArticles =    "Coming Soon"


//Please include the links to the different websites here
//Example: const blogLink = "https://www.example.com"
export const LinkToBlog = ""
export const LinkToCV = ""
export const LinkToTeaching = ""
export const LinkToPublications = ""
export const LinkToProjects = ""
export const LinkToContact = ""
export const LinkToNews = ""
export const AboutData = "As an Assistant Professor in the Department of Transportation Engineering at the University of Seoul, I am committed to advancing sustainable urban mobility and smart city development. My work bridges academic research and practical applications, driving impactful solutions in urban planning, transportation systems optimization, and environmental sustainability."
export const AcademicBackground = "With a Ph.D. in Transportation Engineering and Smart Cities, my academic journey has been dedicated to addressing complex urban challenges. By leveraging data analytics, machine learning, and GIS technologies, I have developed innovative frameworks that integrate sustainability and equity into urban and transportation planning."

//Include the image in the /public/images folder and name it as YunheeAboutImage.jpg. Then add it here as a string. Alternatively, if you have the image stored on the web, you can include the https:// link to the image between the string
export const YunheeAboutImage = "/images/yunhee-pp.jpg"


