import { useEffect, useState } from 'react';
import { useSessionContext } from '../hooks/useSessionContext';
import { PDFUpload } from '../components/PDFUpload';
import { ChatWindow } from '../components/ChatWindow';
import { SessionSummary } from '../components/SessionSummary';

const Dashboard = () => {
  const { session } = useSessionContext();
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (session) {
      // Fetch chat history or any other data related to the session
      // This is a placeholder for the actual data fetching logic
      const fetchChatHistory = async () => {
        // Example API call to fetch chat history
        const response = await fetch('/api/chat/history');
        const data = await response.json();
        setChatHistory(data);
      };

      fetchChatHistory();
    }
  }, [session]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <PDFUpload />
      <ChatWindow chatHistory={chatHistory} />
      <SessionSummary chatHistory={chatHistory} />
    </div>
  );
};

export default Dashboard;