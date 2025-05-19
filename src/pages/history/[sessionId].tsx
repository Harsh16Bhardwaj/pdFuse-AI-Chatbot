import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';
import SessionSummary from '../../components/SessionSummary';
import Loader from '../../components/Loader';

const HistoryPage = () => {
  const router = useRouter();
  const { sessionId } = router.query;
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessionData = async () => {
      if (!sessionId) return;

      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (error) {
        console.error('Error fetching session data:', error);
      } else {
        setSessionData(data);
      }
      setLoading(false);
    };

    fetchSessionData();
  }, [sessionId]);

  if (loading) {
    return <Loader />;
  }

  if (!sessionData) {
    return <div>No session found.</div>;
  }

  return (
    <div>
      <h1>Chat History</h1>
      <SessionSummary session={sessionData} />
    </div>
  );
};

export default HistoryPage;