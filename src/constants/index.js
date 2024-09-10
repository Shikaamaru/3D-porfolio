import React from "react";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    nextjs,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    book1,
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
      title: "Full stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Coding Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    }
    ,
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    ,
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next js",
      icon: nextjs,
    }
    
  ];
 
  const experiences = [
    {  title: "React.js Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developed and maintained web applications using React.js, including a weather application with dynamic data integration.",
    "Collaborated with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality user interfaces.",
    "Implemented responsive design and ensured cross-browser compatibility for seamless user experiences across devices.",
    "Participated in code reviews, providing constructive feedback to improve code quality and performance."
      ],
    },
    
    {
      title: "Nextjs Developer",
  company_name: "",
  icon: nextjs,
  iconBg: "#E6DEDD",
  date: "",
  points: [
    "Developing and maintaining web applications using Next.js, NextAuth, and NextUI.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers."
  ]
    },
    {
      title: "Bachelor of Technology",
      company_name: "Netaji Subhas University of Technology",
      icon: figma,
      iconBg: "#383E56",
      date: "",
      points: [
        "CGPA : 7.97/10",
        
      ],
    },
    {
      title: "Schooling",
      company_name: "UP Kirana Seva samiti Vidyalaya",
      icon: figma,
      iconBg: "#383E56",
      date: "",
      points: [
        "Class XII : 83.75%",
        "Class X : 94%"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };