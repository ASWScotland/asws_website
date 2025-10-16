import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Award, Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Shield, Handshake, ExternalLink, Star, Heart, Globe, BookOpen, Briefcase, Video, FileText, TrendingUp, Eye, MessageCircle, Share2, Play, CheckCircle, Target, Zap } from 'lucide-react';
import { useEventManagement } from '../hooks/useEventManagement';
import Testimonials from '../components/Testimonials';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { upcomingEvents, getEventsThisWeek, getDaysUntilEvent } = useEventManagement();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPartner, setCurrentPartner] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Empowering African social workers & students",
      subtitle: "Building stronger communities together",
      description: "Supporting and advocating for African social workers and students across Scotland through professional development, community outreach, and cultural competence.",
      image: "/empowering african social workers copy.jpg",
      cta: "Join our community",
      ctaAction: () => onNavigate('contact')
    },
    {
      id: 2,
      title: "Professional development & training",
      subtitle: "Advancing your career in social work",
      description: "Access exclusive training programs, mentorship opportunities, and professional development resources designed specifically for African social workers and students in Scotland.",
      image: "/Professional development copy.jpg",
      cta: "Explore resources",
      ctaAction: () => onNavigate('resources')
    },
    {
      id: 3,
      title: "Advocacy & rights protection",
      subtitle: "Standing together against discrimination",
      description: "We advocate for workplace rights, fight discrimination, and provide support for African social workers and students facing challenges in their professional environment.",
      image: "/Advocacy and rights copy.jpg",
      cta: "Learn about our cause",
      ctaAction: () => onNavigate('cause')
    }
  ];

  // Partners data with actual logos
  const partners = [
    {
      id: 1,
      name: "UNISON",
      logo: (
        <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg">
          <div className="text-center">
            <div className="text-purple-700 font-bold text-lg leading-tight">UNISON</div>
            <div className="text-green-600 text-xs font-medium">the public service union</div>
          </div>
        </div>
      ),
      type: "Trade union partnership",
      description: "Supporting African social workers and students facing workplace discrimination and bullying challenges.",
      partnership: "Workplace rights & anti-discrimination support"
    },
    {
      id: 2,
      name: "Rise2Parent",
      logo: (
        <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg">
          <div className="text-center">
            <div className="text-blue-600 font-bold text-sm leading-tight">Rise2</div>
            <div className="text-green-600 font-bold text-sm leading-tight">Parent</div>
          </div>
        </div>
      ),
      type: "Parent support partnership",
      description: "Supporting parents and families through parenting programs and community initiatives.",
      partnership: "Family support & parenting programs"
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-rotate partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHeroSlide = heroSlides[currentSlide];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={currentHeroSlide.image}
            alt={currentHeroSlide.title}
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {currentHeroSlide.title}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 text-blue-200">
              {currentHeroSlide.subtitle}
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {currentHeroSlide.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={currentHeroSlide.ctaAction}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:-translate-y-1"
              >
                {currentHeroSlide.cta}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="group border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:border-white/50"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>


      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                <Heart className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Our mission</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering African social workers & students across Scotland
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are a dedicated community of qualified and student social workers of African descent, 
                united in our commitment to social justice, cultural competence, and community well-being.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Professional development and career advancement",
                  "Cultural competency training and resources",
                  "Advocacy for workplace rights and equality",
                  "Community outreach and family support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('about')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center group"
              >
                Learn more about us
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/ASWS_Unison Migrant event copy copy.jpg"
                alt="African social workers in professional meeting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">Community</p>
                    <p className="text-gray-600">United in service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Cause Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Our impact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Making a difference together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through advocacy, education, and community support, we're creating positive change 
              for African social workers and students and the communities they serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advocacy & rights",
                description: "Fighting workplace discrimination and ensuring equal opportunities for all African social workers and students.",
                color: "blue"
              },
              {
                icon: BookOpen,
                title: "Professional development",
                description: "Comprehensive training programs and mentorship opportunities for career advancement.",
                color: "green"
              },
              {
                icon: Heart,
                title: "Community support",
                description: "Supporting African families and communities through culturally competent social work practice.",
                color: "purple"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 ${
                  service.color === 'blue' ? 'bg-blue-100' :
                  service.color === 'green' ? 'bg-green-100' :
                  'bg-purple-100'
                } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${
                    service.color === 'blue' ? 'text-blue-600' :
                    service.color === 'green' ? 'text-green-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('cause')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto group"
            >
              Learn about our cause
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Handshake className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Partnerships</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stronger together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading organizations to amplify our impact and provide comprehensive support 
              to African social workers and students across Scotland.
            </p>
          </div>

          {/* Featured Partner */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                {partners[currentPartner].logo}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {partners[currentPartner].name}
              </h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">
                {partners[currentPartner].type}
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                {partners[currentPartner].description}
              </p>
              <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 text-sm font-medium text-green-700">
                <Handshake className="h-3 w-3" />
                <span>{partners[currentPartner].partnership}</span>
              </div>
            </div>

            {/* Partner Navigation */}
            <div className="flex justify-center space-x-2 mb-8">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartner(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPartner 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* All Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {partners.map((partner, index) => (
                <div 
                  key={partner.id}
                  className={`text-center p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    index === currentPartner 
                      ? 'bg-blue-50 border-2 border-blue-200 scale-105' 
                      : 'hover:bg-gray-50 border border-gray-200 hover:scale-105'
                  }`}
                  onClick={() => setCurrentPartner(index)}
                >
                  <div className="flex justify-center mb-3">
                    {partner.logo}
                  </div>
                  <p className="text-xs font-medium text-gray-700">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to make a difference?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Join Scotland's premier network of African social work professionals and students. 
            Together, we can create positive change in our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="group bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:-translate-y-1"
            >
              Join our community
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('resources')}
              className="group border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:border-white/50"
            >
              Explore resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;