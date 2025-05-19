import React from 'react';
import AuthForm from '../components/AuthForm';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Chatbot App</h1>
      <AuthForm />
    </div>
  );
};

export default Home;