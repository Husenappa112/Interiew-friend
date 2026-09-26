const prisma = require("../config/db");

const defaultRoles = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    overview: "Build modern user interfaces with React, accessibility, and performance in mind.",
    skills: ["React", "UI Systems", "Accessibility"],
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    overview: "Design reliable APIs, databases, and architecture for scalable products.",
    skills: ["Node.js", "Databases", "System Design"],
  },
  {
    title: "Java Engineer",
    slug: "java-engineer",
    overview: "Master OOP, Spring Boot, collections, and Java interview patterns.",
    skills: ["Java", "Spring Boot", "DSA"],
  },
  {
    title: "Python Engineer",
    slug: "python-engineer",
    overview: "Use Python for automation, analytics, and AI-driven workflows.",
    skills: ["Python", "Automation", "Data"],
  },
  {
    title: "Cloud Engineer",
    slug: "cloud-engineer",
    overview: "Learn cloud infrastructure, deployment, containers, and enterprise systems.",
    skills: ["AWS", "Azure", "Kubernetes"],
  },
  { title: "Full Stack Developer", slug: "full-stack-developer", overview: "Build complete web products from user interface to database.", skills: ["React", "Node.js", "PostgreSQL"] },
  { title: "DevOps Engineer", slug: "devops-engineer", overview: "Automate delivery, infrastructure, monitoring, and reliable releases.", skills: ["Docker", "CI/CD", "Linux"] },
  { title: "Data Analyst", slug: "data-analyst", overview: "Turn data into decisions with analysis, dashboards, and business communication.", skills: ["SQL", "Excel", "Power BI"] },
  { title: "Data Scientist", slug: "data-scientist", overview: "Use statistics and machine learning to solve real business problems.", skills: ["Python", "Statistics", "Machine Learning"] },
  { title: "Machine Learning Engineer", slug: "machine-learning-engineer", overview: "Build, evaluate, and deploy machine-learning systems.", skills: ["Python", "MLOps", "Deep Learning"] },
  { title: "Cybersecurity Analyst", slug: "cybersecurity-analyst", overview: "Protect systems through secure design, monitoring, and incident response.", skills: ["Networking", "Security", "Linux"] },
  { title: "QA Automation Engineer", slug: "qa-automation-engineer", overview: "Create dependable test systems that protect product quality.", skills: ["Testing", "Selenium", "APIs"] },
  { title: "Mobile App Developer", slug: "mobile-app-developer", overview: "Build accessible, fast experiences for Android and iOS users.", skills: ["Flutter", "React Native", "Android"] },
  { title: "UI/UX Designer", slug: "ui-ux-designer", overview: "Design intuitive user journeys backed by research and prototyping.", skills: ["Figma", "Research", "Prototyping"] },
];

const defaultOpportunities = [
  {
    title: "Google Summer of Code",
    type: "Open Source",
    company: "Google",
    location: "Remote",
  },
  {
    title: "MLH Fellowship",
    type: "Mentorship",
    company: "Major League Hacking",
    location: "Remote",
  },
  {
    title: "Microsoft Internship",
    type: "Internship",
    company: "Microsoft",
    location: "Hybrid",
  },
  {
    title: "Hackathon Weekly",
    type: "Competition",
    company: "Community",
    location: "Online",
  },
];

const getRoles = async (req, res) => {
  try {
    await Promise.all(defaultRoles.map((role) => prisma.roleTrack.upsert({
      where: { slug: role.slug },
      update: { title: role.title, overview: role.overview, skills: role.skills },
      create: role,
    })));
    let roles = await prisma.roleTrack.findMany({
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        title: true,
        slug: true,
        overview: true,
        skills: true,
      },
    });

    res.status(200).json({ success: true, roles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getOpportunities = async (req, res) => {
  try {
    res.status(200).json({ success: true, opportunities: defaultOpportunities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getOverview = async (req, res) => {
  try {
    const roles = await prisma.roleTrack.findMany({
      take: 6,
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        title: true,
        slug: true,
        overview: true,
        skills: true,
      },
    });

    res.status(200).json({
      success: true,
      roles: roles.length ? roles : defaultRoles,
      opportunities: defaultOpportunities,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getRoles,
  getOpportunities,
  getOverview,
};
