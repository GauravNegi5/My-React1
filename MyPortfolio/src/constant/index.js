import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    threejs,
    commerce,
    youtube,
    blog,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
  ];
  
  
  const projects = [
    {
      name: "E-Commerce Website",
      description:
        "Web-based platform that allows users to book, and buy shoes  from various providers, providing a convenient and efficient solution for shopping at their home and institute.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "java-script",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: commerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Youtube Clone",
      description:
        "Web application that enables users to watch videos online using internet, also can select videos according to category.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/",
    },
    {
      name: "Blog App",
      description:
        "A comprehensive picture posting platform that allows users to share their pictures with title, caption online. Also provide authentication like login, logout.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies,  projects };