import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurCause from './pages/OurCause';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const pageTitle = getPageTitle(currentPage);
    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getPageDescription(currentPage));
    }
  }, [currentPage]);

  const getPageTitle = (page: string): string => {
    const titles: Record<string, string> = {
      home: 'African Social Workers Scotland (ASWS) | Professional Community & Support Network',
      about: 'About Us | African Social Workers Scotland (ASWS)',
      cause: 'Our Cause | African Social Workers Scotland (ASWS)',
      events: 'Events & Workshops | African Social Workers Scotland (ASWS)',
      resources: 'Resources & Support | African Social Workers Scotland (ASWS)',
      contact: 'Contact Us | African Social Workers Scotland (ASWS)',
      privacy: 'Privacy Policy | African Social Workers Scotland (ASWS)',
      terms: 'Terms of Service | African Social Workers Scotland (ASWS)',
    };
    return titles[page] || titles.home;
  };

  const getPageDescription = (page: string): string => {
    const descriptions: Record<string, string> = {
      home: 'African Social Workers Scotland (ASWS) is a volunteer-led community supporting qualified and student social workers of African descent across Scotland. Join our network for professional development, mentorship, and advocacy.',
      about: 'Learn about African Social Workers Scotland, our mission, values, and commitment to supporting African social work professionals across Scotland.',
      cause: 'Discover the causes we champion including professional development, advocacy and rights, community and family support, and cultural competency training.',
      events: 'Join our upcoming events, workshops, and networking opportunities for African social work professionals in Scotland.',
      resources: 'Access professional development resources, training opportunities, and support services for African social workers in Scotland.',
      contact: 'Get in touch with African Social Workers Scotland. Contact us for membership, support, or partnership opportunities.',
      privacy: 'Read our privacy policy to understand how African Social Workers Scotland protects your personal information.',
      terms: 'Terms of service for using the African Social Workers Scotland website and services.',
    };
    return descriptions[page] || descriptions.home;
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'cause':
        return <OurCause onNavigate={handleNavigate} />;
      case 'events':
        return <Events />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;