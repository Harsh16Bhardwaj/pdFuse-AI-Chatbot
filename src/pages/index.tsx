import { useRouter } from "next/router";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FiSearch, FiBookOpen, FiRepeat } from "react-icons/fi";

import { FaRobot } from "react-icons/fa6";

import Loader from "../components/Loader";

export default function Landing() {
  const router = useRouter();
  const session = useSelector((state: RootState) => state.session.session);
  const loading = useSelector((state: RootState) => state.session.loading);
  const categories = [
    "Startup Pitches",
    "Portfolio Reviews",
    "Visa SOPs",
    "Job Descriptions",
    "Coding Challenges",
    "Resume Insights",
    "Technical Interviews",
    "System Designs",
    "Study Guides",
    "Research Papers",
  ];
  const [currentCategory, setCurrentCategory] = useState(0);
  const features = [
    {
      title: "AI-Powered Insights",
      desc: "Upload any PDF — get instant summaries, sentiment, keywords, and topic breakdowns with zero manual effort.",
      icon: <FiSearch size={32} className="text-teal-400" />,
      border: "border-teal-500",
    },
    {
      title: "Contextual Knowledge Extraction",
      desc: "Turn complex documents into clean, structured data for analysis, training sets, or decision-making.",
      icon: <FiBookOpen size={32} className="text-indigo-400" />,
      border: "border-indigo-500",
    },
    {
      title: "Reuse & Repurpose",
      desc: "Convert dense PDF content into usable formats — blog drafts, reports, study guides, or summaries — with a click.",
      icon: <FiRepeat size={32} className="text-rose-400" />,
      border: "border-rose-500",
    },
  ];

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
      return;
    }
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [session, router]);

  // if (loading) return <Loader />;

  const handleGetStarted = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins">
      <Head>
        <title>PDFuse - Make PDFs Talk Back</title>
        <meta
          name="description"
          content="Chat with your documents using AI-powered insights."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-800 to-indigo-800 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">PDFuse</h1>
          <div className="space-x-4">
            <button
              onClick={() => router.push("/")}
              className="hover:text-teal-300 transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-400 transition"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-600 via-black to-black opacity-60 blur-3xl"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-xl z-10"
        >
          Make <span className="">PDF's</span> Talk Back
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl mt-2 text-gray-300 z-10 max-w-2xl"
        >
          Practice, Learn, and Grow — Smarter.
        </motion.p> */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-md md:text-2xl mt-4 max-w-xl z-10 text-gray-200"
        >
          Insights for{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-teal-400 underline decoration-dotted glow"
            >
              {categories[currentCategory]}
            </motion.span>
          </AnimatePresence>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-md md:text-lg mt-4 max-w-xl z-10 text-gray-400"
        >
          Think beyond keywords. Think feedback, suggestions, and AI-powered
          mentorship tailored just for you.
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(45,212,191,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="mt-10 px-8 py-4 hover:bg-neutral-800 bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl text-white text-lg z-10 hover:bg-opacity-20 border border-teal-400"
        >
          Get Started
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute flex justify-center items-center bottom-10 text-gray-400 text-sm z-10 animate-pulse"
        >
          Chat with your documents...{" "}
          <FaRobot className="w-12 -ml-2 text-teal-700" />
        </motion.div>
      </section>

      {/* Section 2: What You Can Do */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-950">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
        >
          Your PDF, Your Playground
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-md md:text-lg text-gray-400 mb-14 max-w-2xl text-center"
        >
          PDFuse transforms static documents into interactive insight engines.
          Get structured knowledge, explore hidden patterns, and power your
          workflows with AI.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-6 border ${item.border} rounded-2xl bg-white/5 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Tech Stack & Power */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-indigo-900 via-black to-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-10"
        >
          Fast. Secure. Dev-friendly.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-3xl text-gray-300 px-20 mt-6"
        >
          PDFuse runs on{" "}
          <span className="text-teal-400 font-semibold">Gemini Pro</span> for
          intelligent document conversations,{" "}
          <span className="text-indigo-400 font-semibold">Supabase</span> for
          secure session management, and{" "}
          <span className="text-pink-400 font-semibold">Next.js</span> for
          blazing-fast performance.
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-md md:text-lg max-w-2xl text-gray-400 mt-6 italic border-l-4 border-teal-400 pl-4"
        >
          “From parsing to prompting, everything is built to help you grow
          faster.”
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 max-w-xl mt-4"
        >
          Secure session management, insights in seconds, and instant query
          feedback ensure your data is safe and your experience is seamless.
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(45,212,191,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="mt-10 px-8 py-4  bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl text-white text-lg hover:bg-opacity-20 border border-teal-400"
        >
          Try It Now
        </motion.button>
      </section>

      {/* Section 4: AI Companion */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-teal-400 underline underline-offset-8 decoration-dotted"
            >
              AI That Grows With You
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 mt-6 text-md md:text-lg italic border-l-4 border-teal-500 pl-6 py-4 mb-6"
            >
              PDFuse is your private, judgment-free PDF insights platform. It
              understands context, respects your pace, and supports your best
              self with intelligent, adaptive responses.
            </motion.blockquote>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base md:text-lg space-y-2 mb-8 list-disc list-inside"
            >
              <li>
                <span className="text-teal-300 font-medium">
                  Adaptive tone:
                </span>{" "}
                Beginner or Pro mode.
              </li>
              <li>
                <span className="text-teal-300 font-medium">Escalation:</span>{" "}
                “Let’s go deeper” prompts.
              </li>
            </motion.ul>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(45,212,191,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="px-8 py-4 text-white mt-4 bg-opacity-10 hover:bg-opacity-20 border border-teal-400 rounded-xl shadow-md transition-all backdrop-blur-lg"
            >
              Meet Your AI Friend
            </motion.button>
          </div>

          {/* Right: Chat Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl text-sm text-white space-y-4 max-w-md mx-auto"
          >
            <div className="space-y-3">
              <p className="bg-teal-700/30 p-4 rounded-xl self-start w-fit max-w-full">
                <strong>You:</strong> How does this job description align with
                my skills?
              </p>
              <p className="bg-indigo-700/30 p-4 rounded-xl self-end w-fit max-w-full">
                <strong>AI:</strong> You have experience in React and Node.js...
              </p>
              <p className="bg-teal-700/30 p-4 rounded-xl self-start w-fit max-w-full">
                <strong>You:</strong> What else can I do to improve my chances?
              </p>
              <p className="bg-indigo-700/30 p-4 rounded-xl self-end w-fit max-w-full">
                <strong>AI:</strong> Consider working on open-source projects...
              </p>
            </div>

            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-3 rounded-l-lg focus:outline-none cursor-not-allowed"
                disabled
              />
              <button
                disabled
                className="bg-teal-500 px-5 py-3 rounded-r-lg text-white font-medium hover:bg-teal-400 transition disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Real Use Cases */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          From Classrooms to Boardrooms
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl text-center"
        >
          PDFuse isn’t built for one — it’s built for every curious mind.{" "}
          <span className="text-teal-400">Future Scope</span>
        </motion.p>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-10 max-w-6xl">
          {[
            {
              title: "Job Hunters",
              desc: "Break down job descriptions, simulate mock rounds, and get honest feedback before your recruiter does.",
              icon: "💼",
            },
            {
              title: "Students",
              desc: "Turn dense study guides into quiz cards and visual summaries. Revise smarter, not longer.",
              icon: "🎓",
            },
            {
              title: "Professionals",
              desc: "Summarize stakeholder documents, convert briefs into bullet points, and verify technical writeups with AI.",
              icon: "💻",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(94,234,212,0.3)",
              }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl hover:shadow-teal-500/30 transition-all"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-teal-500/10 text-teal-300 text-3xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-teal-900 via-black to-indigo-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-600 via-transparent to-transparent opacity-30 blur-3xl"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 z-10"
        >
          Ready to Upgrade How You Learn?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl text-center z-10"
        >
          Every minute spent reading passively could be a chance to test
          yourself, challenge your thinking, and grow. Let AI meet you where you
          are — and take you further.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-md md:text-lg text-gray-400 mb-10 list-disc list-inside text-center z-10"
        >
          <li>No credit card required</li>
          <li>Free forever plan available</li>
          <li>Personalized sessions from day one</li>
        </motion.ul>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(45,212,191,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="px-10 py-5 bg-gradient-to-r from-teal-400 to-indigo-500 text-white font-semibold rounded-xl shadow-2xl text-lg hover:from-teal-300 hover:to-indigo-400 transition z-10 animate-pulse"
        >
          Start Your First Session
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-gray-500 text-sm z-10 animate-pulse"
        >
          ↑ AI typing...
        </motion.div>
      </section>
    </div>
  );
}
