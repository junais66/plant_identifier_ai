import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import icons for App Store and Google Play Store

export default function Navbar() {
  return (
    <nav className="bg-green-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Plant Identifier AI 🌿</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-green-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-green-200">About</Link>
          </li>
        </ul>

        
      </div>
    </nav>
  );
}
