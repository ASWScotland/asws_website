import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Calendar, MessageSquare, Star, Shield, Award, Heart, ArrowRight, User, Briefcase, GraduationCap, Building } from 'lucide-react';

const JoinCommunity: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    location: '',
    interests: [] as string[],
    motivation: '',
    howHeard: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const professionOptions = [
    'Qualified Social Worker',
    'Social Work Student',
    'Senior Social Worker',
    'Team Manager',
    'Practice Educator',
    'Social Work Academic',
    'Other Social Care Professional'
  ];

  const experienceOptions = [
    'Student/New Graduate',
    '1-2 years',
    '3-5 years',
    '6-10 years',
    '10+ years'
  ];

  const locationOptions = [
    'Glasgow',
    'Edinburgh',
    'Aberdeen',
    'Dundee',
    'Stirling',
    'Inverness',
    'Other Scottish City',
    'Rural Scotland'
  ];

  const interestOptions = [
    'Professional Networking',
    'Career Development',
    'Mentorship Program',
    'Cultural Competency Training',
    'Policy Advocacy',
    'Community Outreach',
    'Student Support',
    'Workplace Rights',
    'Research & Development',
    'Leadership Development'
  ];

  const howHeardOptions = [
    'Social Media',
    'Colleague Recommendation',
    'Professional Network',
    'University/College',
    'Workplace',
    'Community Event',
    'Online Search',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        profession: '',
        experience: '',
        location: '',
        interests: [],
        motivation: '',
        howHeard: ''
      });
    }, 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Community of social workers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-blue-300" />
            <span className="text-sm font-semibold">Join our Community</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Become Part of <span className="text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">Something Bigger</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Join Scotland's premier network of African social work professionals. 
            Connect, learn, grow, and make a lasting impact together.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Member Benefits</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Join ASWS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exclusive benefits and opportunities available to our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Professional Network",
                description: "Connect with 150+ African social work professionals across Scotland",
                color: "blue"
              },
              {
                icon: GraduationCap,
                title: "Exclusive Training",
                description: "Access specialized training programs and professional development opportunities",
                color: "green"
              },
              {
                icon: Shield,
                title: "Advocacy Support",
                description: "Get support with workplace issues and access to legal advocacy resources",
                color: "red"
              },
              {
                icon: Heart,
                title: "Mentorship Program",
                description: "Connect with experienced mentors or become a mentor to support others",
                color: "purple"
              },
              {
                icon: Calendar,
                title: "Exclusive Events",
                description: "Attend member-only events, workshops, and networking opportunities",
                color: "amber"
              },
              {
                icon: Award,
                title: "Career Advancement",
                description: "Access job opportunities, career guidance, and leadership development",
                color: "indigo"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 ${
                  benefit.color === 'blue' ? 'bg-blue-100' :
                  benefit.color === 'green' ? 'bg-green-100' :
                  benefit.color === 'red' ? 'bg-red-100' :
                  benefit.color === 'purple' ? 'bg-purple-100' :
                  benefit.color === 'amber' ? 'bg-amber-100' :
                  'bg-indigo-100'
                } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${
                    benefit.color === 'blue' ? 'text-blue-600' :
                    benefit.color === 'green' ? 'text-green-600' :
                    benefit.color === 'red' ? 'text-red-600' :
                    benefit.color === 'purple' ? 'text-purple-600' :
                    benefit.color === 'amber' ? 'text-amber-600' :
                    'text-indigo-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Join our Community Today
              </h2>
              <p className="text-xl text-gray-600">
                Complete the form below to become a member of ASWS
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to ASWS!</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Your membership application has been received. We'll review your application and get back to you within 48 hours.
                </p>
                <div className="bg-green-50 rounded-xl p-6 max-w-md mx-auto">
                  <h4 className="font-semibold text-green-800 mb-3">What happens next?</h4>
                  <ul className="text-green-700 text-sm space-y-2 text-left">
                    <li>✓ Application review within 48 hours</li>
                    <li>✓ Welcome email with member resources</li>
                    <li>✓ Invitation to upcoming events</li>
                    <li>✓ Access to member-only resources</li>
                  </ul>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+44 7xxx xxx xxx"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Professional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="profession" className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Role *
                      </label>
                      <select
                        id="profession"
                        name="profession"
                        required
                        value={formData.profession}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select your role</option>
                        {professionOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                        Experience Level *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select experience level</option>
                        {experienceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                        Location in Scotland *
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select your location</option>
                        {locationOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-blue-600" />
                    Areas of Interest
                  </h3>
                  <p className="text-gray-600 mb-4">Select all areas that interest you (optional)</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                        />
                        <span className="text-sm text-gray-700 font-medium">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                    Tell Us More
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                        Why do you want to join ASWS? *
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        required
                        rows={4}
                        value={formData.motivation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                        placeholder="Share your motivation for joining our community, your goals, or how you hope to contribute..."
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="howHeard" className="block text-sm font-semibold text-gray-700 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select an option</option>
                        {howHeardOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Join our Community
                    <Send className="ml-3 h-5 w-5" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to join our professional community. 
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join a Thriving Community</h2>
            <p className="text-xl text-gray-600">See what our members are saying about their experience</p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Joining ASWS was the best decision I made for my career. The support and networking opportunities have been invaluable.",
                author: "Sarah M.",
                role: "Senior Social Worker, Glasgow"
              },
              {
                quote: "The mentorship program helped me navigate challenges as a newly qualified social worker. I'm now mentoring others!",
                author: "David K.",
                role: "Social Worker, Edinburgh"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;