import React from 'react';
import Navigation from './Navigation';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      <main>
        {children}
      </main>
      
      {/* Enhanced Footer with Social Media */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/ASWS.jpg" 
                  alt="African Social Workers Scotland Logo"
                  className="w-12 h-12 rounded-xl shadow-lg mr-4 object-contain bg-white p-1"
                />
                <div>
                  <h3 className="text-xl font-bold">African Social Workers Scotland</h3>
                  <p className="text-gray-400 text-sm">Empowering professionals, strengthening communities</p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>33 Raeswood Road, Glasgow, G53 7HH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>info@aswscotland.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>+44 (0) 7549080793</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.facebook.com/groups/africansocialworkersscotland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    title="Join our Facebook group - African Social Workers Scotland (ASWS)"
                  >
                    <Facebook className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a
                    href="https://twitter.com/ASWSScotland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-sky-500 hover:bg-sky-600 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    title="Follow us on Twitter"
                  >
                    <Twitter className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a
                    href="https://linkedin.com/company/african-social-workers-scotland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-700 hover:bg-blue-800 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    title="Connect on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a
                    href="https://instagram.com/aswsscotland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Follow us for updates, events, and community news
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'About us', page: 'about' },
                  { label: 'Our cause', page: 'cause' },
                  { label: 'Events', page: 'events' },
                  { label: 'Resources', page: 'resources' },
                  { label: 'Contact us', page: 'contact' }
                ].map((link) => (
                  <li key={link.page}>
                    <button 
                      onClick={() => onNavigate(link.page)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block group flex items-center"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Get Involved */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
              <p className="text-gray-300 text-sm mb-6">
                Join our community of professionals dedicated to making a difference.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mb-6"
              >
                Join Our Community
              </button>
              
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 African Social Workers Scotland.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Made with ❤️ in Scotland</span>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => onNavigate('privacy')}
                    className="text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <button 
                    onClick={() => onNavigate('terms')}
                    className="text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    Terms of Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;