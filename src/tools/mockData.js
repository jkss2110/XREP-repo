
const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const tree = {
  '/Virtual': {
    path: '/Virtual',
    type: 'folder',
    isRoot: true,
    children: [],
  },
  '/Development': {
    path: '/Development',
    type: 'folder',
    isRoot: true,
    children: ['/BYD_COD'],
  },
  '/All': {
    path: '/All',
    type: 'folder',
    isRoot: true,
    children: [],
  },
  '/BYD_COD': {
    path: '/BYD_COD',
    type: 'folder',
    children: ['/BYD_COD/SalesOnDemand'],
  },
  '/BYD_COD/SalesOnDemand': {
    path: '/BYD_COD/SalesOnDemand',
    type: 'folder',
    children: ['/BYD_COD/SalesOnDemand/Account'],
  },
  '/BYD_COD/SalesOnDemand/Account': {
    path: '/BYD_COD/SalesOnDemand/Account',
    type: 'folder',
    children: ['/BYD_COD/SalesOnDemand/Account/UI'],
  },
  '/BYD_COD/SalesOnDemand/Account/UI/COD_Account_QV.QV.uicomponent': {
    path: '/BYD_COD/SalesOnDemand/Account/UI/COD_Account_QV.QV.uicomponent',
    type: 'file',
    content: 'Thanks for reading me.'
  },
  '/BYD_COD/SalesOnDemand/Account/UI/COD_Account_TI.TI.uicomponent': {
    path: '/BYD_COD/SalesOnDemand/Account/UI/COD_Account_TI.TI.uicomponent',
    type: 'file',
    content: 'Thanks for reading me.'
  },
  '/BYD_COD/SalesOnDemand/Account/UI': {
    path: '/BYD_COD/SalesOnDemand/Account/UI',
    type: 'folder',
    children: ['/BYD_COD/SalesOnDemand/Account/UI/COD_Account_QV.QV.uicomponent', '/BYD_COD/SalesOnDemand/Account/UI/COD_Account_TI.TI.uicomponent'],
  },
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  tree
};
