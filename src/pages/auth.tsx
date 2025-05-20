import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '@/layouts/authLayout';
import { supabase } from '../lib/supabaseClient';

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(false);
  const [timer, setTimer] = useState(60);

  // Timer for Register button disable
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRegisterDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRegisterDisabled(false);
      setTimer(60);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRegisterDisabled, timer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setConfirmation(false);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        // TODO: Add react-hot-toast success notification
        router.push('/dashboard');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
          },
        });
        if (error) throw error;
        setConfirmation(true);
        setIsRegisterDisabled(true);
        // TODO: Add react-hot-toast success notification for email sent
      }
    } catch (err: any) {
      setError(err.message);
      // TODO: Add react-hot-toast error notification
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        key={isLogin ? 'login' : 'register'}
        initial={{ opacity: 0, x: isLogin ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isLogin ? 50 : -50 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 max-w-md w-full mx-auto p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="font-orbitron text-3xl font-bold mb-6 text-center tracking-wide">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        {error && (
          <p className="bg-red-900/70 text-red-300 px-4 py-2 rounded mb-4 text-center">
            {error}
          </p>
        )}
        {confirmation && (
          <div className="bg-emerald-900/70 text-emerald-300 px-4 py-2 rounded mb-4 text-center">
            <p>Registration successful!</p>
            <p>Please check your email to confirm your account.</p>
            <p className="mt-2">
              Once confirmed,{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setConfirmation(false);
                  setError('');
                }}
                className="text-teal-400 hover:text-blue-400 font-semibold"
              >
                log in
              </button>{' '}
              with your email and password.
            </p>
          </div>
        )}
        {!confirmation && (
          <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-100 focus:outline-none focus:border-teal-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-100 focus:outline-none focus:border-teal-400 transition"
            />
            <button
              type="submit"
              disabled={!isLogin && isRegisterDisabled}
              className={`bg-gradient-to-r from-teal-400 to-blue-500 text-black font-bold rounded py-3 mt-2 transition ${
                !isLogin && isRegisterDisabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-blue-500 hover:to-teal-400 hover:text-white'
              }`}
            >
              {isLogin ? 'Login' : isRegisterDisabled ? `Wait ${timer}s` : 'Register'}
            </button>
          </form>
        )}
        <div className="mt-6 text-center text-gray-400">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                  setConfirmation(false);
                }}
                className="text-teal-400 hover:text-blue-400 font-semibold transition"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                  setConfirmation(false);
                }}
                className="text-teal-400 hover:text-blue-400 font-semibold transition"
              >
                Login
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
Auth.getLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;