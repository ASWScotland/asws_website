import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'cause', label: 'Our cause' },
    { id: 'events', label: 'Events' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact us' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Made Much Bigger */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="relative mr-4">
              <img 
                src="/ASWS.jpg" 
                alt="African Social Workers Scotland Logo"
                className="w-20 h-20 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 object-contain bg-white p-1"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-wide" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                ASWS
              </h1>
              <p className="text-base font-medium text-gray-600 tracking-wider" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", letterSpacing: '0.5px' }}>
                African Social Workers Scotland
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative group tracking-wide ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", letterSpacing: '0.3px' }}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Updated Label */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wide"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", letterSpacing: '0.4px' }}
            >
              Join our community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 tracking-wide ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", letterSpacing: '0.3px' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('contact')}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-base transition-all duration-300 tracking-wide"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", letterSpacing: '0.4px' }}
              >
                Join our community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;