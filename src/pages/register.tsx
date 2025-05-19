import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        {error && <p className="text-red-500">{error}</p>}
        <AuthForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default Register;