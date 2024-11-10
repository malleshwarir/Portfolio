import { Center } from "@react-three/drei";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    grafana,
    to,
    threejs,
   
  } from "../assets/";
  
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
      title: "Grafana/Data Visualization Specialist",
      icon: backend,
    },
    {
      title: "Systems Administrator",
      icon: mobile,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"grafana",
      icon: grafana,
    },
   
    
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "DRDO - Defence Research and Development Organisation (GTRE)",
      date: "Sep 2024 - Present",
      icon: "../src/assets/icon.png",  // Use forward slashes for the path
      iconBg: "#002147",
      icon_style_width :'60px',
      icon_style_height : '60px',
      icon_style_borderRadius : '50%', 

        // Dynamically set the size of the circle // Choose a color for your icon background
      points: [
        "Gaining hands-on experience in networking and data visualization with Grafana",
        "Assisting in the development and optimization of software systems",
        "Ensuring adherence to technical specifications in project contributions",
        "Participating in design, coding, debugging, and testing throughout the software development lifecycle"
      ],
    },
];

    // You can add more experiences here

  
  const projects = [
    {
      name: "To-Do List",
      description:
        "Web application designed to help users manage and organize tasks efficiently. It provides a user-friendly interface where users can add, mark as complete, and delete tasks.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: to,
      source_code_link: "https://malleshwarir.github.io/To-Do-List/",
    },]
    
  
  export { services, technologies, experiences, projects };