import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Yurika Namba's Portfolio", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello.',
  name: "I'm Yurika,",
  subtitle: 'A London-Based Frontend Developer',
  cta: 'Want to know more?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_circle.png',
  paragraphOne:
    'I am a frontend developer based in London with a background in PPC advertising and digital marketing. I am proficient in HTML, CSS, JavaScript, Vue, Typescript and have experimented with other frameworks like React and React Native. ',
  paragraphTwo: 'I occasionally write posts about what I learn and you can read them',
  mediumLink: 'https://medium.com/@yurikanamba',
  paragraphThree: '   ',
  // paragraphTwo: "Strong: HTML, CSS, Javascript, React.js",
  // paragraphThree: "Experienced: Redux, PostgreSQL, GraphQL, Node.js, Express, FIrebase Storage, Firebase firestore, Firebase hosting, TDD, Agile, Flutter, Dart, three.js",
  resume: 'https://drive.google.com/file/d/1IDNTgVZ83PXLWTt47dpLoqE5HhBRtSgz/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'heylo.png',
    title: 'Gif Picker',
    info:
      'A component that renders a carousel of gifs using the giphy API and displays the gif that you picked. Used in production version of the Heylo webapp and mobile app.',
    info2: 'Technologies used: React Native',
    url: 'https://www.heylo.co/',
    repo: 'https://github.com/yurikanamba/heylogif', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dy_asset.png',
    title: 'Disposable Yurika',
    info: 'A responsive web application that showcases disposable photos taken by me.',
    info2: 'Made using HTML, CSS and React.js',
    url: 'http://disposableyurika.com/',
    repo: 'https://github.com/yurikanamba/DisposableYurika', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'photospherical_asset.png',
    title: 'Photospherical',
    info: 'A responsive web application for browsing and sharing spherical versions of photos.',
    info2: 'Technologies used: HTML, CSS (Bootstrap), Javascript, three.js, Firebase',
    url: 'https://photospherical-16cf2.web.app/',
    repo: 'https://github.com/yurikanamba/photospherical', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: 'Message Me',
  email: 'yurikanamba@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/NambaYurika',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yurikanamba/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yurikanamba',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/nurikayamba/',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@yurikanamba',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
