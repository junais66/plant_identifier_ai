import { FC } from 'react';
import { FaLinkedin, FaEnvelope, FaApple, FaGooglePlay } from 'react-icons/fa'; // Import LinkedIn and Mail icons

export type Props = {
  className ?: string;
}
const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing accurate plant identification and information to help you take better care of your green friends. Discover more about our mission!.
            </p>
            
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-green-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-green-300">About</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            
         
            <p>
            <a  href="mailto:junais66@gmail.com" className="flex space-x-2 text-white hover:text-gray-300">
            <FaEnvelope />
            <span>junais66@gmail.com</span>
            </a>
            </p>
            <p>
            <a href="https://www.linkedin.com/in/mohdjunais/" target="_blank" rel="noopener noreferrer" className="flex space-x-2 text-white hover:text-gray-300">
            <FaLinkedin />
            <span>Connect with me on LinkedIn</span>
            </a>
            </p>
            <p className="text-gray-400">
            Abu Dhabi, United Arab Emirates
            </p>
       
          </div>
        </div>

            {/* App Store and Google Play Store Section */}
            <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-lg flex items-center gap-2 cursor-allowed"
          >
            <FaApple className="text-2xl"/>
            <span>App Store</span>
          </a>
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-lg flex items-center gap-2 cursor-allowed"
          >
            <FaGooglePlay className="text-2xl" />
            <span>Google Play</span>
          </a>
        </div>
    

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 Plant Identifier AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
