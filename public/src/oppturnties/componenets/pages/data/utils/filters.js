// Search
export const searchOpportunities = (data, query = "") => {
  if (!query.trim()) return data;

  const keyword = query.toLowerCase();

  return data.filter((item) =>
    item.title.toLowerCase().includes(keyword) ||
    item.organization.toLowerCase().includes(keyword) ||
    item.location.toLowerCase().includes(keyword) ||
    item.category.toLowerCase().includes(keyword) ||
    item.skills?.some(skill =>
      skill.toLowerCase().includes(keyword)
    )
  );
};

// Category
export const filterByCategory = (data, category) => {
  if (!category || category === "All") return data;

  return data.filter(item => item.category === category);
};

// Mode
export const filterByMode = (data, mode) => {
  if (!mode || mode === "All") return data;

  return data.filter(item => item.mode === mode);
};

// Location
export const filterByLocation = (data, location) => {
  if (!location || location === "All") return data;

  return data.filter(item => item.location === location);
};

// Organization
export const filterByOrganization = (data, organization) => {
  if (!organization || organization === "All") return data;

  return data.filter(item => item.organization === organization);
};

// Difficulty
export const filterByDifficulty = (data, difficulty) => {
  if (!difficulty || difficulty === "All") return data;

  return data.filter(item => item.difficulty === difficulty);
};

// Skill
export const filterBySkill = (data, skill) => {
  if (!skill || skill === "All") return data;

  return data.filter(item =>
    item.skills?.includes(skill)
  );
};

// Deadline
export const sortByDeadline = (data) => {
  return [...data].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );
};

// Title
export const sortByTitle = (data) => {
  return [...data].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
};

// Organization
export const sortByOrganization = (data) => {
  return [...data].sort((a, b) =>
    a.organization.localeCompare(b.organization)
  );
};

// Combined Filter
export const applyFilters = (
  data,
  {
    search = "",
    category = "All",
    mode = "All",
    location = "All",
    organization = "All",
    difficulty = "All",
    skill = "All",
  }
) => {
  let result = [...data];

  result = searchOpportunities(result, search);
  result = filterByCategory(result, category);
  result = filterByMode(result, mode);
  result = filterByLocation(result, location);
  result = filterByOrganization(result, organization);
  result = filterByDifficulty(result, difficulty);
  result = filterBySkill(result, skill);

  return result;
};