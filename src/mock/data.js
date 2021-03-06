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
  subtitle: 'Javascript Developer [...frontend, ...backend]',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: 'I can build customised websites & digital products to suit your individual needs ',
  para4: 'My Passions - Collaboration, Communication, Innovation, Coding & Problem Solving',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [  
  
  {
    id: nanoid(),
    img: 'netflix.png',
    title: 'Netflix Clone',
    info: 'React JS, React Hooks, Material UI, Firebase',
    info2: 'Functionalities - click on/off on movie thumbnails to watch movie trailers ',
    url: 'https://netflix-clone-4febb.web.app/', // if no repo, the button will not show up
    repo: 'https://github.com/ikzath/netflix-clone.git',
  },
  {
    id: nanoid(),
      img: 'mern.png',
      title: 'Restaurant Test App with CRUD functionality',
      info: 'React, Node JS, Express, Mongo-DB',
      info2: '',
      url: 'https://infinite-reef-45760.herokuapp.com/', // if no repo, the button will not show up
      repo: 'https://github.com/ikzath/RESTAURANT-MERN-STACK-APP',
  },
  {
    id: nanoid(),
    img: 'spacex.png',
    title: 'iMessage Clone React JS',
    info: 'React Hooks, Materiial UI, Redux, Firebase Auth & Firestore ',
    info2: 'Functionalities- gmail login, create new chatrooms, send instant messages...',
    url: 'https://i-message-clone-c739c.web.app/',
    repo: 'https://github.com/ikzath/iMessage-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wildfire-snap.png',
    title: 'React JS Wildfire Tracker',
    info: 'React Hooks, Google-React-Map API, NASA APi ',
    info2: 'Functionalities- click on fire icon to get wildfire details across the globe',
    url: '',
    repo: 'https://github.com/ikzath/WILDFIRE-TRACKER-NASA-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon-snap.png',
    title: 'Amazon Clone React JS, Firebase & Stripe JS (in progress)',
    info: 'React Context API, Material UI, Hooks Firebase Authentication',
    info2: 'Functionalities- add/delete to basket, total is updated, login or create new account with firebase authentication',
    url: 'https://clone-c369a.web.app/',
    repo: 'https://github.com/ikzath/Amazon-Clone-ReactJS-Firebase', // if no repo, the button will not show up
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
