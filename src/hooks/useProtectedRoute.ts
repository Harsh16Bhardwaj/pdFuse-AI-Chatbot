import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { RootState } from '../redux/store';

export function useProtectedRoute() {
  const session = useSelector((state: RootState) => state.session.session);
  const loading = useSelector((state: RootState) => state.session.loading);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/auth');
    }
  }, [session, loading, router]);
}