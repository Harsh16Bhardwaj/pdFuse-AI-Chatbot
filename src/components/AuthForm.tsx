import { useState } from 'react';
import { useSessionContext } from '../hooks/useSessionContext';
import useUser from '../hooks/useUser';
import { useRouter } from 'next/router';
import AuthLayout from '@/layouts/authLayout';

const AuthForm = () => {
  const { user, login, register } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setConfirmation(false);

    try {
      if (isLogin) {
        await login(email, password);
        router.push('/dashboard');
      } else {
        await register(email, password);
        setConfirmation(true);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form-dark">
      <style jsx>{`
        .auth-form-dark {
          background: linear-gradient(135deg, #18181b 0%, #23272f 100%);
          color: #f3f4f6;
          font-family: 'Inter', 'Roboto', 'Segoe UI', Arial, sans-serif;
          max-width: 380px;
          margin: 60px auto;
          padding: 2.5rem 2rem 2rem 2rem;
          border-radius: 1.2rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        h2 {
          font-family: 'Orbitron', 'Inter', sans-serif;
          font-size: 2rem;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .error {
          color: #ff6b81;
          background: #2a1a1a;
          padding: 0.7rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        .confirmation {
          color: #38d9a9;
          background: #1a2a1a;
          padding: 0.7rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        input {
          background: #23272f;
          color: #f3f4f6;
          border: 1px solid #33364d;
          border-radius: 0.5rem;
          padding: 0.9rem 1rem;
          font-size: 1rem;
          transition: border 0.2s;
        }
        input:focus {
          border: 1.5px solid #38d9a9;
          outline: none;
        }
        button[type="submit"] {
          background: linear-gradient(90deg, #38d9a9 0%, #4f8cff 100%);
          color: #18181b;
          font-weight: 700;
          border: none;
          border-radius: 0.5rem;
          padding: 0.9rem 1rem;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          margin-top: 0.5rem;
        }
        button[type="submit"]:hover {
          background: linear-gradient(90deg, #4f8cff 0%, #38d9a9 100%);
          color: #fff;
        }
        .switch-mode {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 1rem;
        }
        .switch-mode button {
          background: none;
          color: #38d9a9;
          border: none;
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.5rem;
          font-size: 1rem;
          transition: color 0.2s;
        }
        .switch-mode button:hover {
          color: #4f8cff;
        }
      `}</style>
      <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
      {error && <p className="error">{error}</p>}
      {confirmation && (
        <p className="confirmation">
          Registration successful!<br />
          Please check your email to confirm your account before logging in.
        </p>
      )}
      {!confirmation && (
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
      )}
      <div className="switch-mode">
        {isLogin ? (
          <>
            Don&apos;t have an account?
            <button type="button" onClick={() => { setIsLogin(false); setError(''); setConfirmation(false); }}>
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?
            <button type="button" onClick={() => { setIsLogin(true); setError(''); setConfirmation(false); }}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
AuthForm.getLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;