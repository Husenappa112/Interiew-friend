export const reviewResume = async (resume) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    atsScore: 86,

    strengths: [
      "Strong Java knowledge",
      "Good React projects",
      "Clean resume structure",
      "Relevant technical skills",
    ],

    weaknesses: [
      "Missing quantified achievements",
      "No certifications",
      "Limited system design experience",
    ],

    suggestions: [
      "Add GitHub profile",
      "Include LinkedIn profile",
      "Mention project impact with numbers",
      "Improve ATS keywords",
      "Add internships or freelance work",
    ],

    keywords: [
      "Java",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Docker",
      "Git",
      "SQL",
      "AWS",
    ],

    summary:
      "Your resume has a strong technical foundation with relevant projects and programming skills. To improve your chances in ATS screening and technical interviews, add measurable achievements, strengthen your project descriptions, and include more industry-standard keywords. Overall, your resume is well-structured and suitable for entry-level software engineering roles.",
  };
};