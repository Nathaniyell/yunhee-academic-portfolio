const publications = [
    {
      id: 1,
      title: "The Future of Sustainable Urban Mobility",
      description: "A comprehensive analysis of urban mobility patterns and sustainable transportation solutions in modern cities.",
      journal: "Journal of Urban Planning",
      year: 2023,
      link: "#"
    },
    {
      id: 2,
      title: "Smart Grid Integration in Developing Cities",
      description: "Research exploring the implementation and challenges of smart grid systems in developing urban environments.",
      journal: "Sustainable Energy Review",
      year: 2022,
      link: "#"
    },
    {
      id: 3,
      title: "Green Spaces and Mental Health in Urban Areas",
      description: "Investigation into the relationship between urban green spaces and community mental health outcomes.",
      journal: "Environmental Psychology Today",
      year: 2021,
      link: "#"
    }
  ];
  
  const news = [
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
  
  

  const resumeData = {
    title: "Dr. Yunhee Lee",
    areasOfInterest: ["Urban Planning", "Sustainability", "Smart Cities", "Data Analytics"],
    education: [
      {
        period: "2015-2019",
        degree: "Ph.D.",
        department: "Urban Planning",
        university: "Example University",
        location: "City, Country",
        description: "Focus on sustainable urban development",
        thesis: "Smart City Development Framework"
      },
      {
        period: "2013-2015",
        degree: "M.S.",
        department: "Environmental Engineering",
        university: "Seoul National University",
        location: "Seoul, South Korea",
        description: "Specialized in environmental impact assessment and urban sustainability",
        thesis: "Urban Environmental Systems Analysis"
      },
      {
        period: "2009-2013",
        degree: "B.S.",
        department: "Civil Engineering",
        university: "Korea University",
        location: "Seoul, South Korea",
        description: "Focus on urban infrastructure and planning",
        highlights: ["Graduated summa cum laude", "Presidential Scholar"]
      }
    ],
    experience: [
      {
        period: "2019-Present",
        title: "Assistant Professor",
        company: "University Name",
        location: "City, Country",
        description: "Teaching and research in urban planning",
        highlights: ["Led research projects", "Published papers"]
      },
      {
        period: "2017-2019",
        title: "Research Fellow",
        company: "Urban Sustainability Institute",
        location: "Singapore",
        description: "Conducted research on smart city initiatives in Southeast Asia",
        highlights: [
          "Led a team of 5 researchers on smart city projects",
          "Secured $500K in research grants",
          "Published 4 peer-reviewed papers"
        ]
      },
      {
        period: "2015-2017",
        title: "Urban Planning Consultant",
        company: "City Planning Associates",
        location: "Seoul, South Korea",
        description: "Provided consulting services for sustainable urban development projects",
        highlights: [
          "Developed sustainability frameworks for 3 major cities",
          "Conducted environmental impact assessments",
          "Collaborated with international planning agencies"
        ]
      },
      {
        period: "2013-2015",
        title: "Graduate Research Assistant",
        company: "Seoul National University",
        location: "Seoul, South Korea",
        description: "Assisted in research projects related to urban environmental systems",
        highlights: [
          "Contributed to 2 major research projects",
          "Managed environmental data collection and analysis",
          "Presented at 3 international conferences"
        ]
      }
    ],
    projects: [
      { name: "Smart City Initiative", description: "Led a team in developing..." },
      { name: "Sustainable Urban Mobility", description: "Conducted research on..." },
      { name: "Green Building Assessment", description: "Developed a framework for..." }
    ],
    teaching: [
      { course: "Introduction to Urban Planning", level: "Undergraduate" },
      { course: "Sustainable City Development", level: "Graduate" },
      { course: "Data Analytics for Urban Systems", level: "Graduate" }
    ],
    languages: ["English (Fluent)", "Korean (Native)", "Spanish (Intermediate)"],
    publications: [
      { title: "The Future of Sustainable Urban Mobility", journal: "Journal of Urban Planning", year: 2023 },
      { title: "Smart Grid Integration in Developing Cities", journal: "Sustainable Energy Review", year: 2022 },
      { title: "Green Spaces and Mental Health in Urban Areas", journal: "Environmental Psychology Today", year: 2021 }
    ],
    skills: [
      { title: "Data Analysis", area: "Technical", tldr: "Proficient in R, Python, and GIS software" },
      { title: "Urban Planning", area: "Domain", tldr: "Expertise in sustainable urban development" },
      { title: "Project Management", area: "Soft Skills", tldr: "Led multiple research projects and teams" }
    ]
  }

  const teachingData = [
    {
      title: "Introduction to Urban Planning",
      years: "2023-Present",
      tldr: "Fundamental concepts and principles of urban planning for undergraduate students",
      materials: [
        { name: "Lecture Slides", url: "/materials/urban-planning-slides.pdf" },
        { name: "Course Notes", url: "/materials/urban-planning-notes.pdf" },
      ],
    },
    {
      title: "Sustainable City Development",
      years: "2023-Present",
      tldr: "Advanced concepts in sustainable urban development for graduate students",
      materials: [
        { name: "Course Materials", url: "/materials/sustainable-dev-materials.pdf" },
        { name: "Case Studies", url: "/materials/case-studies.pdf" },
      ],
    },
    {
      title: "Data Analytics for Urban Systems",
      years: "2023-Present",
      tldr: "Applied data analysis techniques for urban planning and systems",
      materials: [
        { name: "Analysis Templates", url: "/materials/analysis-templates.zip" },
        { name: "Dataset Examples", url: "/materials/datasets.zip" },
      ],
    },
  ];
  
const blogArticles = [
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
    },
    {
      id: 4,
      title: "Urban Data Analytics: Transforming City Planning",
      year: 2022,
      tldr: "How big data and analytics are revolutionizing urban planning and decision-making processes in modern cities.",
      link: "/blog/urban-data-analytics"
    },
    {
      id: 5,
      title: "The Role of Public Spaces in Post-Pandemic Cities",
      year: 2021,
      tldr: "Discussing the evolving importance and design of public spaces in urban areas following the COVID-19 pandemic.",
      link: "/blog/public-spaces-post-pandemic"
    },
    {
      id: 6,
      title: "Climate Resilience in Urban Planning: Strategies for Adaptation",
      year: 2021,
      tldr: "Exploring strategies and best practices for incorporating climate resilience into urban planning and development.",
      link: "/blog/climate-resilience-urban-planning"
    },
    {
      id: 7,
      title: "The Rise of 15-Minute Cities: Rethinking Urban Proximity",
      year: 2020,
      tldr: "Examining the concept of 15-minute cities and its potential to improve quality of life and sustainability in urban areas.",
      link: "/blog/15-minute-cities"
    },
    {
      id: 8,
      title: "Urban Agriculture: Feeding the Cities of Tomorrow",
      year: 2020,
      tldr: "Investigating the potential of urban agriculture to enhance food security and sustainability in growing urban populations.",
      link: "/blog/urban-agriculture"
    },
    {
      id: 9,
      title: "Smart Grids and Urban Energy Management",
      year: 2019,
      tldr: "Analyzing the implementation and benefits of smart grids in urban energy management and sustainability efforts.",
      link: "/blog/smart-grids-urban-energy"
    },
    {
      id: 10,
      title: "Inclusive Urban Design: Creating Cities for All",
      year: 2019,
      tldr: "Discussing principles and practices of inclusive urban design to create accessible and equitable cities for diverse populations.",
      link: "/blog/inclusive-urban-design"
    }
  ]
  export { publications, news, blogArticles, resumeData, teachingData };