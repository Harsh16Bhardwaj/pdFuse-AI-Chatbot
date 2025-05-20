import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo / Brand Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white">PDFuse</h2>
          <p className="text-sm mt-2 text-gray-500">
            Unlock insights. Empower your documents.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-transform transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-rose-400 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} PDFuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
