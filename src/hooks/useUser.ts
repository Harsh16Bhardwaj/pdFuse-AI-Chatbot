import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { User, AuthChangeEvent, Session } from '@supabase/supabase-js';

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } = { subscription: undefined } } =
      supabase.auth.onAuthStateChange(
        (_event: AuthChangeEvent, session: Session | null) => {
          setUser(session?.user ?? null);
        }
      );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Add login and register functions
  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const register = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  return { user, loading, login, register };
};

export default useUser;