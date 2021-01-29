import { Logo, Icon } from "../assets";

export default {
  Careers: [
    {
      title: "Upwork",
      logo: Logo.Upwork,
      timeline: "Feb 2020 - Present",
      description: `Upwork, is an American freelancing platform 
      where enterprises and individuals connect in order to conduct business`,
      remark: `After Bosch, I started my Freelancer carrer and it is giving me pleasure`,
      activities: [
        "Develop front-end projects using React Framework",
        "Building websites using MEAN, MERN, MEVN stack", 
        "Troubleshooting and Refactoring existing projects",
        "Frameworks used : React, Angular, Vue, Express",
      ],
      techs: "HTML, Bootstrap, JS, TS, SQL, NoSQL",
    },
    {
      title: "Bosch",
      logo: Logo.Bosch,
      timeline: "Aug 2012 - Feb 2020",
      description: `A multinational technology company based in Germany,
        whose major business sector is web consulting`,
      remark: `A company I have been working for after having finished my service for the country.
        I was able to learn a lot about processes, new techs and best practices, and apply to my daily work.
        And prominently, I could utilize my English in daily communications and formal meetings.`,
      activities: [
        "Develop tools on top of the $1 to support an internal business unit",
        "Follow the Scrum framework's principles to engage in the software development process",
        "Define, apply and continously improve the software development process to adapt and overcome challenges",
        "Actively review and improve individual skills competency over the time",
        "Tools used: Visual Studio Code, Skype",
      ],
      techs: "HTML, CSS, Sass, JS, jQuery, ReactJS, $2, $3, $4, $5, $6",
      links: {
        $1: ["IBM ELM toolsuite", "https://jazz.net/products/elm/"],
        $2: ["DXL", "https://en.wikipedia.org/wiki/DOORS_Extension_Language"],
        $3: ["OSLC", "https://open-services.net/"],
        $4: ["OpenSocial", "https://en.wikipedia.org/wiki/OpenSocial"],
        $5: ["ag-Grid", "https://www.ag-grid.com/"],
        $6: [
          "vis-network",
          "https://visjs.github.io/vis-network/docs/network/",
        ],
      },
    },
  ],
  "Side Works": [
    {
      title: "Pela Case",
      logo: Logo.Pela,
      timeline: "2015 - 2016",
      description: `There at Pela they have a big, hairy audacious goal.  They want to create a waste free future`,
      remark: `Pela is one of my wonderful experience as a Fullstack developer.
        I was able to engage in my international environment,
        where I could communicate with 10 members of our team from various countries.`,
      activities: [
        "Develop $1's Front-end side",
        "Develop Server Side project",
        "Tools used: Slack, Jira, Crowdin, Google Docs",
        "Techs used: React, Saga, Material UI, Express, Socket.io",
      ],
      links: {
        $1: [
          "Pela Case",
          "https://pelacase.com/",
        ],
      },
    },
    {
      title: "Shaw",
      logo: Logo.ShawCa,
      timeline: "2016 - 2017",
      description: `Shaw is a leading Canadian telecommunications company focused on 
      connecting its customers to the world through a best-in-class, seamless connectivity experience.`,
      remark: `This is more or less one of my most successful product when I started to love web development.
      As a part of this website development team, I could learn and collaborate with the others to improve my coding skill.
      My favorite works: $1, $2.`,
      activities: [
        "Develop chatting service",
        "Complete overhaul of the website and 12% growth of customer rate was the result",
        "Tool used: VsCode",
      ],
      techs: "HTML, CSS, JS, React, Socket.io",
      links: {
        $1: ["Business Shaw", "https://business.shaw.ca"],
        $2: ["Bundle and Save", "https://business.shaw.ca/bundles"],
      },
    },
    {
      title: "Winport",
      logo: Icon("about"),
      timeline: "2020",
      description: "A window-styled, multi-theming portfolio",
      remark: `What you are seeing right now is my website portfolio.
      The core design is inspired by Microsoft's Windows, with icons provided by $1.
      Feel free to check out the source code I made publicly available on $2,
      and do not hesitate to put a star if you like it.`,
      techs: "HTML, Sass, JS, ReactJS, React Router",
      links: {
        $1: ["Freepik", "https://www.freepik.com/"],
        $2: ["Github", "https://github.com/Acoder-Ana"],
      },
    },
    {
      title: "Lucky Draw",
      logo: "",
      timeline: "2020",
      description: "A web tool for organizing lucky drawing events",
      remark: `A side project in collaboration with my colleague,
      this tool was built to support a customer organizing his special event.`,
      techs: "HTML, Bootstrap, ReactJS, React-i18n, Material UI",
    },
    {
      title: "Wikiu",
      logo: "",
      timeline: "2020",
      description: "A utility collection for Fandom wikis",
      remark: `Another side project in an attempt to build 
      my own React Admin Dashboard theme using React and Material UI.
      It is still in progress but if you are interested, feel free to check it on $2.
      `,
      techs: "HTML, CSS, JS, ReactJS, React Router, Apollo GraphQL, MediaWiki API",
      links: {
        $1: [
          "MediaWiki API",
          "https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api",
        ],
        $2: [
          "Github",
          "https://github.com/Acoder-Ana",
        ],
      },
    },
  ],
};
