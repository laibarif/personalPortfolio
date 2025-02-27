import {
  uet,
  pgcLogo,
  cluboard,
  cash_flow,
  codex,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/113Q7b7MELlKYgFFVKehE7vIrlPTqAWeU/view?usp=sharing";
export const repoLink = "https://github.com/laibarif/personalPortfolio.git";

export const callToAction = "https://www.linkedin.com/in/laiba-arif-350b95258/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: uet,
    title: "University of Engineering & Technology, Lahore",
    degree: "Bachelor of Computer Science",
    duration: "November 2021 - May 2025",
    content1: "Courses Studied: PF, OOP, DSA, DB, DAA, AI, ML, CN, OS, SE, COAL, TAFL, CC",
    content2: "",
  },
  {
    id: "education-2",
    icon: pgcLogo,
    title: "Punjab College, City Campus",
    degree: "",
    duration: "August 2019 - June 2021",
    content1: "Studied ICS (Physics) at Punjab Group of Colleges, building a strong foundation in computer science and programming.",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethindia,
    event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "True Network's Winner, Polkadot's 1st Runner Up",
    content2: "Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article: "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    project: "https://devfolio.co/projects/khoj-3336",
    youtube: "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  {
    id: "a-2",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-3",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-4",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-5",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1: "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-6",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-7",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-8",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiRuby,
        name: "Ruby",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: FaGolang,
        name: "Go",
      },
      {
        id: "pl-5",
        icon: FaRust,
        name: "Rust",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {         
        id: "pl-11",
        icon: SiSolidity,
        name: "Solidity",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiRubyonrails,
        name: "Ruby on Rails",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-8",
        icon: SiDotnet,
        name: ".NET",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Neksogix, Austin",
    logo: iris,
    link: "https://www.neksogix.com/company",
    positions: [
      // {
      //   title: "Tech Lead",
      //   duration: "Apr 2023 - Apr 2024",
      //   content: [
      //     {
      //       text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
      //       link: "",
      //     },
      //     {
      //       text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
      //       link: "",
      //     },
      //   ],
      // },
      {
        title: "Web Lead",
        duration: "Nov 2024 - Present",
        content: [
          {
            text: "Led a web development team, overseeing multiple projects from planning to deployment while ensuring high-quality code and timely delivery.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer",
        duration: "Sep 2024 - Present",
        content: [
          {
            text: "Designed and developed dynamic websites with a custom UI, ensuring seamless backend integration, optimized performance, and a responsive user experience.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer Intern",
        duration: "Jun 2024 - Aug 2024",
        content: [
          {
            text: "Assisted in developing and optimizing responsive web applications.",
            link: "",
          },
        ],
      },
      {
        title: "Business Developer Intern",
        duration: "Jun 2024 - Oct 2024",
        content: [
          {
            text: "Identified growth opportunities and built client relationships to drive business expansion.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "TIERS Limited",
    logo: oracle,
    link: "https://www.linkedin.com/company/tiers-limited/posts/?feedView=all",
    positions: [
      {
        title: "Full Stack Web Development Intern",
        duration: "June 2023 – August 2023",
        content: [
          {
            text: "1. Developed Full-Stack Web Applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, ensuring seamless frontend-backend integration.",
            link: "",
          },
          {
            text: "2. Implemented Key Features, including payment gateway integration, email functionalities, and hosting on platforms like Netlify, 000webhost, and Glitch.com.",
            link: "",
          },
          {
            text: "3. Demonstrated Strong Problem-Solving & Collaboration Skills, successfully delivering high-quality projects while working in a fast-paced team environment.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "MLSA",
    logo: averlon,
    link: "",
    positions: [
      {
        title: "Microsoft Learn Student Ambassador",
        duration: "Sept 2023 - Oct 2024",
        content: [
          {
            text: "Served as a Microsoft Learn Student Ambassador, mentoring peers and organizing community-driven workshops.",
            link: ""
          },
          {
            text: "Led sessions on AI, cloud computing, and Microsoft technologies to help students enhance their technical skills.",
            link: ""
          }
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Comicify.ai",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-2",
    title: "GreenTrust",
    github: "https://github.com/mittal-parth/GreenTrust",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-3",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "Non-Teaching Recruitment Portal, NITK",
    github: "",
    link: "http://recruitment.nitk.ac.in/",
    image: recruitment,
    content:
      "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },
  {
    id: "project-6",
    title: "Career Development Centre, NITK Website",
    github: "",
    link: "http://cdc.nitk.ac.in/",
    image: cdc,
    content:
      "The official website of CDC, NITK with a custom built CMS.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-7",
    title: "Huntly",
    github: "",
    link: "https://devfolio.co/projects/huntly-b5a9",
    image: huntly,
    content:
      "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django Rest Framework"
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-3",
        icon: SiReplit,
        name: "Replit"
      },
      {
        id: "icon-4",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
    ],
  },
  {
    id: "project-8",
    title: "Cluboard",
    github: "https://github.com/mittal-parth/Cluboard",
    link: "",
    image: cluboard,
    content:
      "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-9",
    title: "Cash Flow Minimiser",
    github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
    link: "https://minimise-cash-flow.netlify.app/",
    image: cash_flow,
    content:
      "A React application to help users visualise and minimise cash flow among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      }
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Software Square",
    title: "Content Writer",
    duration: "March 2022 - Feb 2024",
    content: [
      {
        text: "Served Software Square as a Content Writer, the official CS department society at UET Lahore.",
        link: "https://www.linkedin.com/company/software-square/posts/?feedView=all",
      },
      {
        text: "Did Content Writting for ITEC’23, ITEC’24 and received a certificate of recognition from the CS department.",
        link: "https://www.linkedin.com/posts/software-square_a-heartfelt-thank-you-to-our-esteemed-activity-7176838946276925440-_bkg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-JAKwBtzK8VI0Hvsbgt8UVN3YPdh0KjDw",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Zimal UET Lahore",
    title: "Graphic Designer",
    duration: "Feb 2022 - Feb 2024",
    content: [
      {
        text: "Worked as a Graphic Designer at Zimal, UET Lahore’s renowned women’s society, from Aug 2022 to Feb 2025.",
        link: "https://www.linkedin.com/company/zimaluet/posts/?feedView=all",
      },
      {
        text: "Designed posters and digital content while collaborating in a hybrid work environment.",
        link: "https://www.linkedin.com/posts/zimaluet_zimalsociety-eidmubarak-eidulazha-activity-7208367760312004608-dwAU?utm_source=share&utm_medium=member_desktop&rcm=ACoAABylSogBwwwr7hguF3Meu-CJUhKcLe6FGbQ",
      },
    ],
    logo: genesis,
  },
  {
    id: 3,
    organisation: "SOFTEC'24",
    title: "Event Manager & Ambassador",
    duration: "23, 24, 25 Februry, 2024",
    content: [
      {
        text: "Managed and organized SOFTEC’24, Pakistan’s leading tech competition and exhibition, ensuring seamless event execution.",
        link: "https://www.linkedin.com/posts/laiba-arif-350b95258_campusambassador-fastdevs-techinnovation-activity-7101607550717980672-20Lh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-JAKwBtzK8VI0Hvsbgt8UVN3YPdh0KjDw",
      },
      {
        text: "Represented SOFTEC as an Ambassador, promoting participation and engagement from tech communities.",
        link: "https://www.linkedin.com/posts/activity-7167769734451453954-7osD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-JAKwBtzK8VI0Hvsbgt8UVN3YPdh0KjDw",
      },
    ],
    logo: ecell,
  },
  {
    id: 4,
    organisation: "Codex 2.0",
    title: "Event Manager & Organizer",
    duration: "March, 2024",
    content: [
      {
        text: "Managed and organized Codex 2.0, The most exhilarating coding competition of the year.",
        link: "https://www.linkedin.com/posts/software-square_codex2023-codingchallenge-techinnovation-ugcPost-7122477697653485569-KJks?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-JAKwBtzK8VI0Hvsbgt8UVN3YPdh0KjDw",
      },
      {
        text: "CODEX is more than just a coding competition; it's a celebration of innovation and received a certificate of recognition from the CS department.",
        link: "https://www.linkedin.com/in/laiba-arif-350b95258/overlay/1740655104903/single-media-viewer/?profileId=ACoAAD-JAKwBtzK8VI0Hvsbgt8UVN3YPdh0KjDw",
      },
    ],
    logo: codex,
  },
  {
    id: 5,
    organisation: "Software Square",
    title: "Event Organizer and Manager",
    content: [
      {
        text: "Organized and managed ITEC’23, ITEC’24 a flagship event of Software Square, UET Lahore, while also contributing as a Content Writer.",
        link: "https://www.linkedin.com/posts/laiba-arif-350b95258_computerscience-uet-itec2023-activity-7062443945145827329-a5-y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-JAKwBtzK8VI0Hvsbgt8UVN3YPdh0KjDw",
      },
      {
        text: "Assisted in social media management and content creation while collaborating in a hybrid work environment.",
        link: "https://www.linkedin.com/posts/software-square_the-closing-ceremony-of-itec24-was-honored-activity-7179794278515175425-rxEl?utm_source=share&utm_medium=member_desktop&rcm=ACoAABylSogBwwwr7hguF3Meu-CJUhKcLe6FGbQ",
      },
    ],
    logo: devfolio,
  },
  {
    id: 6,
    organisation: "Zimal UET Lahore",
    title: "Content Writer",
    duration: "Feb 2022 - Feb 2024",
    content: [
      {
        text: "Served Zimal also as a Content Writer, the official only women base scoiety in UET.",
        link: "https://www.linkedin.com/company/zimaluet/posts/?feedView=all",
      },
      {
        text: "Assisted in social media management and content creation while collaborating in a hybrid work environment.",
        link: "https://www.linkedin.com/posts/zimaluet_girlpower-strongwomen-equalityforall-activity-7191407828119535616-_dXx?utm_source=share&utm_medium=member_desktop&rcm=ACoAABylSogBwwwr7hguF3Meu-CJUhKcLe6FGbQ",
      },
    ],
    logo: genesis,
 },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/laiba-arif-350b95258/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/laibarif",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:laibaslatch@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Laiba Arif",
    githubUsername: 'laibarif',
    tagLine: "Full Stack Developer | Web Developer @Neksogix",
    intro: "A software engineer from Pakistan who enjoys turning complex problems into simple, efficient solutions through code."
}
