
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Rao Muneeb
            </h3>
            <p className="text-gray-400 mb-4">
              Digital Marketer & GTM Operations Engineer helping B2B businesses 
              accelerate growth through strategic lead generation and optimized operations.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/447492991611" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:rao.muneeb@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rao-muneeb-34aa51340/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">B2B Lead Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GTM Operations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Performance Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campaign Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Rao Muneeb. All rights reserved. Built with passion for B2B growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
