import { useRouter } from "next/router";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const user = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.reload(); // Refresh to update UI
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full shadow-lg px-6 pl-3 py-3 flex items-center justify-between w-11/12 max-w-5xl"
    >
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <Image
          src="/logo-pdf.png"
          className="spin-infinite"
          width={40}
          height={40}
          alt="PDFuse Logo"
        />
        <h1 className="text-2xl font-semibold text-teal-400">PDFuse</h1>
      </div>

      {/* Center Nav Links */}
      <div className="hidden md:flex space-x-6 text-white font-medium">
        <button
          onClick={() => router.push("/chat")}
          className="hover:text-teal-300 transition"
        >
          Chat
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="hover:text-teal-300 transition"
        >
          Dashboard
        </button>
        <button
          onClick={() => router.push("/contact")}
          className="hover:text-teal-300 transition"
        >
          Contact
        </button>
      </div>

      {/* Right Side: Sign Up or Sign Out */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(45,212,191,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/register")}
            className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold px-4 py-2 rounded-full hover:from-teal-400 hover:to-indigo-400 transition"
          >
            Sign In
          </motion.button>
        ) : (
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 12px rgba(239,68,68,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignOut}
            className="bg-rose-600 hover:bg-rose-500 text-white font-medium px-4 py-2 rounded-full transition"
          >
            Sign Out
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
