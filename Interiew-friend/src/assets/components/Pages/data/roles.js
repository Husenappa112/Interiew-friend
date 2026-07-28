import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaJava,
  FaPython,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaRobot
} from "react-icons/fa";

const roles = [

  {
    id:1,
    title:"Software Engineer",
    icon:<FaCode />,
    level:"Beginner",
    questions:320,
    description:"DSA, OOP, DBMS, OS, CN"
  },

  {
    id:2,
    title:"Frontend Developer",
    icon:<FaLaptopCode />,
    level:"Beginner",
    questions:270,
    description:"HTML CSS JavaScript React"
  },

  {
    id:3,
    title:"Backend Developer",
    icon:<FaServer />,
    level:"Intermediate",
    questions:290,
    description:"Node Express SQL MongoDB"
  },

  {
    id:4,
    title:"Full Stack Developer",
    icon:<FaLayerGroup />,
    level:"Intermediate",
    questions:340,
    description:"Frontend + Backend"
  },

  {
    id:5,
    title:"Java Developer",
    icon:<FaJava />,
    level:"Intermediate",
    questions:250,
    description:"Java Spring Boot"
  },

  {
    id:6,
    title:"Python Developer",
    icon:<FaPython />,
    level:"Intermediate",
    questions:260,
    description:"Python Django Flask"
  },

  {
    id:7,
    title:"Cloud Engineer",
    icon:<FaCloud />,
    level:"Advanced",
    questions:210,
    description:"AWS Azure GCP Docker"
  },

  {
    id:8,
    title:"Cyber Security",
    icon:<FaShieldAlt />,
    level:"Advanced",
    questions:300,
    description:"Networking Linux Security"
  },

  {
    id:9,
    title:"Data Analyst",
    icon:<FaDatabase />,
    level:"Intermediate",
    questions:220,
    description:"SQL Excel Power BI"
  },

  {
    id:10,
    title:"AI Engineer",
    icon:<FaRobot />,
    level:"Advanced",
    questions:280,
    description:"Machine Learning LLMs"
  }

];

export default roles;