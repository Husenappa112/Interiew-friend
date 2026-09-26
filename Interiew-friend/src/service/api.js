// In development Vite forwards /api requests to the Express server. Deployments
// can override this with VITE_API_URL (for example, https://api.example.com/api).
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'The server could not complete your request.');
  }

  return data;
}

export async function fetchOverview() {
  return apiRequest('/content/overview');
}

export async function fetchRoles() {
  return apiRequest('/content/roles');
}

export async function fetchOpportunities() {
  return apiRequest('/content/opportunities');
}
