import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import Loader from '../components/Loader';

export default function Landing() {
  const router = useRouter();
  const session = useSelector((state: RootState) => state.session.session);
  const categories = [
    'Job Descriptions',
    'Coding Challenges',
    'Resume Insights',
    'Technical Interviews',
    'System Designs',
    'Study Guides',
  ];
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
      return;
    }
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [session, router]);

  const handleGetStarted = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins">
      <Head>
        <title>PDFuse - AI Document Companion</title>
        <meta name="description" content="Chat with your documents using AI" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Fullscreen Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600 via-black to-black opacity-50 blur-2xl"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-8xl font-extrabold drop-shadow-xl z-10"
        >
          PDFuse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl mt-6 z-10"
        >
          AI-powered insights for
          <AnimatePresence mode="wait">
            <motion.span
              key={currentCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="ml-2 text-indigo-400 underline decoration-dotted"
            >
              {categories[currentCategory]}
            </motion.span>
          </AnimatePresence>
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="mt-10 px-8 py-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl text-white text-lg z-10 hover:bg-opacity-20"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Fullscreen Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-12"
        >
          What You Can Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          {[
            {
              title: 'Practice Interview Questions',
              desc: 'AI-generated questions based on your job description PDFs.',
            },
            {
              title: 'Get Instant Hints & Feedback',
              desc: 'Not sure about your answer? Ask AI for a hint or code review.',
            },
            {
              title: 'Summarize Long Documents',
              desc: 'Turn bulky technical PDFs into digestible summaries in seconds.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-indigo-300 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Fullscreen Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-900 via-black to-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Built With Love + Power
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl text-gray-300"
        >
          PDFuse uses <span className="text-indigo-400 font-semibold">Gemini Pro</span> for intelligent document conversation, and <span className="text-teal-400 font-semibold">Supabase</span> to store and manage your sessions — all delivered via blazing-fast <span className="text-pink-400 font-semibold">Next.js</span> architecture.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="mt-10 px-8 py-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl text-white text-lg hover:bg-opacity-20"
        >
          Try It Now
        </motion.button>
      </section>
    </div>
  );
}
