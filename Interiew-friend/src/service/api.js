const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export async function fetchOverview() {
  const response = await fetch(`${API_BASE_URL}/content/overview`);
  if (!response.ok) {
    throw new Error('Failed to load platform overview');
  }
  return response.json();
}

export async function fetchRoles() {
  const response = await fetch(`${API_BASE_URL}/content/roles`);
  if (!response.ok) {
    throw new Error('Failed to load roles');
  }
  return response.json();
}

export async function fetchOpportunities() {
  const response = await fetch(`${API_BASE_URL}/content/opportunities`);
  if (!response.ok) {
    throw new Error('Failed to load opportunities');
  }
  return response.json();
}
