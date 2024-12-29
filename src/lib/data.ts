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
      year: 2021-2022
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
      degree: "Ph.D. in Urban Planning",
      department: "Department of Urban Studies",
      university: "University Name",
      location: "City, Country",
      period: "2015-2020",
      description: "Focus on sustainable urban development",
      highlights: ["Outstanding Research Award"],
      thesis: "Smart Cities and Sustainable Development"
    },
    {
      period: "2013-2015",
      degree: "M.Sc.",
      department: "Environmental Engineering",
      university: "Seoul National University",
      location: "Seoul, South Korea",
      description: "Specialized in environmental impact assessment and urban sustainability",
      thesis: "Urban Environmental Systems Analysis"
    },
    {
      period: "2009-2013",
      degree: "B.Eng.",
      department: "Civil Engineering",
      university: "Korea University",
      location: "Seoul, South Korea",
      description: "Focus on urban infrastructure and planning",
      highlights: ["Graduated summa cum laude", "Presidential Scholar"]
    }
  ],
  skills: [
    {
      title: "Urban Analytics",
      area: "Research",
      tldr: "Expert in analyzing urban data patterns"
    },
    { title: "Data Analysis", area: "Technical", tldr: "Proficient in R, Python, and GIS software" },
    { title: "Urban Planning", area: "Domain", tldr: "Expertise in sustainable urban development" },
    { title: "Project Management", area: "Soft Skills", tldr: "Led multiple research projects and teams" }
  ]
}

export const publications = [
  {
    title: "Machine Learning Applications in Urban Planning",
    description: "A comprehensive review of how machine learning is transforming urban planning practices.",
    year: 2023,
    journal: "Journal of Urban Technology",
    link: "/publications/ml-urban-planning"
  },
  {
    title: "Sustainable Urban Development Patterns",
    description: "Analysis of sustainable development patterns in major metropolitan areas.",
    year: 2023,
    journal: "Sustainability Science",
    link: "/publications/sustainable-development"
  },
  {
    title: "Smart City Infrastructure Integration",
    description: "Framework for integrating smart technologies into existing city infrastructure.",
    year: 2022,
    journal: "Smart Cities Review",
    link: "/publications/smart-infrastructure"
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
    title: "Introduction to Urban Planning",
    years: "2023-Present",
    description: "Fundamental concepts and principles of urban planning for undergraduate students",
    materials: [
      { name: "Lecture Slides", url: "/materials/urban-planning-slides.pdf" },
      { name: "Course Notes", url: "/materials/urban-planning-notes.pdf" }
    ]
  },
  {
    title: "Sustainable City Development",
    years: "2023-Present",
    description: "Advanced concepts in sustainable urban development for graduate students",
    materials: [
      { name: "Course Materials", url: "/materials/sustainable-dev-materials.pdf" },
      { name: "Case Studies", url: "/materials/case-studies.pdf" }
    ]
  },
  {
    title: "Data Analytics for Urban Systems",
    years: "2023-Present",
    description: "Applied data analysis techniques for urban planning and systems",
    materials: [
      { name: "Analysis Templates", url: "/materials/analysis-templates.zip" },
      { name: "Dataset Examples", url: "/materials/datasets.zip" }
    ]
  }
]

export const blogArticles = [
  //link here means the link to that particular blog post/article
  {
    id: 1,
    title: "The Future of Smart Cities: Integrating IoT and AI",
    year: 2023,
    tldr: "Exploring how Internet of Things (IoT) and Artificial Intelligence (AI) are shaping the future of urban planning and city management.",
    link: "/blog/future-of-smart-cities"
  },
  {
    id: 2,
    title: "Sustainable Urban Mobility: Challenges and Solutions",
    year: 2023,
    tldr: "Analyzing current challenges in urban transportation and proposing innovative solutions for sustainable mobility.",
    link: "/blog/sustainable-urban-mobility"
  },
  {
    id: 3,
    title: "Green Building Technologies: A Path to Net-Zero Cities",
    year: 2022,
    tldr: "Examining cutting-edge green building technologies and their potential to create net-zero energy cities.",
    link: "/blog/green-building-technologies"
  }
]

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
export const YunheeAboutImage = "/public/images/yunhee-pp.jpg"


