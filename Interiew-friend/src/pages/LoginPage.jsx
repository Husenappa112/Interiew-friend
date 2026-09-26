import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiRequest } from '../service/api';

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      setLoading(true);
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      });

      localStorage.setItem('m-ai-user', JSON.stringify(data.user));
      localStorage.setItem('m-ai-token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Unable to log in. Make sure the API is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="glass-card auth-card">
        <p className="eyebrow">Welcome back</p>
        <h2>Login to your AI Career Workspace</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          {error && <p className="auth-error">{error}</p>}
          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="auth-footer">New here? <Link to="/signup">Create account</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
