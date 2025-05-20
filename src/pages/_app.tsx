// src/pages/_app.tsx
import { Provider } from "react-redux";
import { store } from "../redux/store/index";
import MainLayout from "@/layouts/mainLayout";
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSession, setLoading } from '../redux/slices/sessionSlice';
import { supabase } from '../lib/supabaseClient';

import "../styles/globals.css";

function SessionSync() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    supabase.auth.getSession().then(({ data }) => {
      dispatch(setSession(data.session));
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });

    return () => subscription?.subscription?.unsubscribe();
  }, [dispatch]);

  return null;
}

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  // Check if the page defines a getLayout function; otherwise, render the Component directly

  return (
    <Provider store={store}>
      <SessionSync />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
