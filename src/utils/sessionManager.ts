import { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const saveSession = (newSession) => {
    setSession(newSession);
    localStorage.setItem('session', JSON.stringify(newSession));
  };

  const clearSession = () => {
    setSession(null);
    localStorage.removeItem('session');
  };

  return (
    <SessionContext.Provider value={{ session, saveSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};