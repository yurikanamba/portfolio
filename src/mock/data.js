import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Yurika Namba's Portfolio", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello.",
  name: "I'm Yurika,",
  subtitle: "A Tokyo-Based Bilingual Software Developer",
  cta: 'Want to know more?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "I'm a bilingual software developer from Tokyo with a background in PPC advertising and digital marketing. I have experience building full stack applications using Node and Express, leveraging JavaScript frameworks like React and experimenting with mobile app development using Flutter and Dart. I am passionate about music, frontend development and creating beautiful UI and UX experiences.",
  paragraphTwo: "   ",
  paragraphThree: "   ",
  // paragraphTwo: "Strong: HTML, CSS, Javascript, React.js",
  // paragraphThree: "Experienced: Redux, PostgreSQL, GraphQL, Node.js, Express, FIrebase Storage, Firebase firestore, Firebase hosting, TDD, Agile, Flutter, Dart, three.js",
  resume: 'https://drive.google.com/file/d/1m5SUkJPIgLh2rwAFgn8jDG7VJmh7hRjE/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bgasset.png',
    title: 'BeerGarden',
    info: 'A mobile dating application where users’ photos are blurred. The more messages exchanged, the less blurry the photos become.',
    info2: 'Technologies used: Firebase, Flutter, Dart',
    url: 'https://play.google.com/store/apps/details?id=yurikanamba.lovealapp',
    repo: 'https://github.com/Team-Loveal/BeerGarden', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'playall_asset.png',
    title: 'Play.All(▶)',
    info: 'A web application where users can listen to and play music with other people live.',
    info2: 'Technologies used: Firebase, React.js, CSS, HTML, Spotify Web API, Spotify Web Playback SDK',
    url: 'https://playall.app/',
    repo: 'https://github.com/PlayAllApp/playdotall', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: 'skyra_asset.png',
    title: 'SKYRA',
    info: 'A responsive web application that sends users a COVID report, news, fortunes and more as a LINE message.',
    info2: 'Technologies used: React.js, HTML, CSS, LINE login API, LINE messaging API, News API, COVID-19 API, Dark Sky API, Aztro API, Dad Jokes API',
    url: 'https://cc12line.herokuapp.com/',
    repo: 'https://github.com/rogerrogerv/cc12line', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dy_asset.png',
    title: 'Disposable Yurika',
    info: 'A responsive web application that showcases disposable photos taken by Yurika.',
    info2: 'Made using HTML, CSS and React.js',
    url: 'http://disposableyurika.com/',
    repo: 'https://github.com/yurikanamba/DisposableYurika', // if no repo, the button will not show up
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
