import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website.
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ikzath Kalanthar',
  subtitle: 'Full-Stack Javascript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  para4: 'Dream of building some new pieces of revolutionary software integrating AI concepts',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'spacex.png',
    title: 'iMessage Clone React JS',
    info: 'React Hooks, Materiial UI, Redux, Firebase Auth & Firestore ',
    info2: '',
    url: 'https://i-message-clone-c739c.web.app/',
    repo: 'https://github.com/ikzath/iMessage-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wildfire-snap.png',
    title: 'React JS Wildfire Tracker',
    info: 'React Hooks, Google-React-Map API, NASA APi ',
    info2: '',
    url: '',
    repo: 'https://github.com/ikzath/WILDFIRE-TRACKER-NASA-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon-snap.png',
    title: 'Amazon Clone React JS, Firebase & Stripe JS (in progress)',
    info: 'React Context API, Material UI, Hooks Firebase Authentication',
    info2: '',
    url: 'https://clone-c369a.web.app/',
    repo: 'https://github.com/ikzath/Amazon-Clone-ReactJS-Firebase', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'pathway.png',
    title: 'An academic institutional website',
    info: 'HTML; CSS, JAVASCRIPT & JQuery',
    info2: '',
    url: 'https://www.pathwayinternational.com', // if no repo, the button will not show up
    repo: 'https://github.com/ikzath/pathway-international-college',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      // url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      // url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ikzath/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ikzath',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
