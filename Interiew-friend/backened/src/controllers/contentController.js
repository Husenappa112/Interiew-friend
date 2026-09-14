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

    if (!roles.length) {
      await prisma.roleTrack.createMany({
        data: defaultRoles,
        skipDuplicates: true,
      });
      roles = await prisma.roleTrack.findMany({
        orderBy: { createdAt: "asc" },
        select: {
          id: true,
          title: true,
          slug: true,
          overview: true,
          skills: true,
        },
      });
    }

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
