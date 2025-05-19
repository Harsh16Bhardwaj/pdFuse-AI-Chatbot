import React from 'react';

interface SessionSummaryProps {
  sessionId: string;
  summary: string;
}

const SessionSummary: React.FC<SessionSummaryProps> = ({ sessionId, summary }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">Session Summary</h2>
      <p className="mt-2 text-gray-700">Session ID: {sessionId}</p>
      <div className="mt-4">
        <h3 className="font-medium">Summary:</h3>
        <p className="text-gray-600">{summary}</p>
      </div>
    </div>
  );
};

export default SessionSummary;