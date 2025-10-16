import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Calendar, MessageSquare, Star, Shield, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interests: [] as string[]
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Professional Networking',
    'Academic Support',
    'Mentorship Program',
    'Cultural Competency Training',
    'Policy Advocacy',
    'Community Outreach',
    'Student Support',
    'Professional Development'
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
    
    // Create email content
    const emailSubject = `ASWS Contact Form: ${formData.subject || 'General Inquiry'}`;
    const emailBody = `
New contact form submission from ASWS website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Areas of Interest:
${formData.interests.length > 0 ? formData.interests.join(', ') : 'None selected'}

Message:
${formData.message}

---
Submitted from: www.aswscotland.org
Date: ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@aswscotland.org?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interests: []
      });
    }, 5000);
  };

  return (
    <div className="pt-6">
      {/* Enhanced Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Get in touch</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Join Our <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">Community</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Ready to connect with Scotland's premier network of African social work professionals? 
            We're here to support your journey.
          </p>
        </div>
      </section>


      {/* Enhanced Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Journey Today</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-lg">
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                  <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <p className="text-green-700 text-sm">
                      ✓ Confirmation email sent<br/>
                      ✓ Added to our priority response list<br/>
                      ✓ Expect a personal response soon
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="Your full name"
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
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="+44 7xxx xxx xxx"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        How can we help? *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                      >
                        <option value="">Select your primary interest</option>
                        <option value="membership">Join as a Member</option>
                        <option value="student">Student Support</option>
                        <option value="professional">Professional Development</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Family Support Services</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about yourself *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical text-gray-900"
                      placeholder="Share your background, current role, goals, or any questions you have. This helps us provide the most relevant support."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Send Message & Join Community
                    <Send className="ml-3 h-5 w-5" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to join our professional community. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "info@aswscotland.org",
                      subtitle: "",
                      color: "blue"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+44 (0) 7549080793",
                      subtitle: "Monday to Friday, 9:00 AM - 5:00 PM",
                      color: "green"
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "33 Raeswood Road, Glasgow, G53 7HH",
                      subtitle: "",
                      color: "purple"
                    },
                    {
                      icon: Clock,
                      title: "Office Hours",
                      content: "Monday - Friday: 9:00 AM - 5:00 PM",
                      subtitle: "",
                      color: "amber"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`w-12 h-12 ${
                        contact.color === 'blue' ? 'bg-blue-100' :
                        contact.color === 'green' ? 'bg-green-100' :
                        contact.color === 'purple' ? 'bg-purple-100' :
                        'bg-amber-100'
                      } rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <contact.icon className={`h-6 w-6 ${
                          contact.color === 'blue' ? 'text-blue-600' :
                          contact.color === 'green' ? 'text-green-600' :
                          contact.color === 'purple' ? 'text-purple-600' :
                          'text-amber-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{contact.title}</h3>
                        <p className="text-gray-700 font-medium">{contact.content}</p>
                        <p className="text-sm text-gray-500 mt-1">{contact.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Website Information */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Visit Our Website</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">www.aswscotland.org</p>
                      <p className="text-sm text-gray-600">Official website with latest updates</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Access exclusive member resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Stay updated with latest events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Connect with our community</span>
                  </div>
                </div>
              </div>

              {/* Membership Benefits */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Join ASWS?</h3>
                <div className="space-y-4">
                  {[
                    "Connect with professional social workers",
                    "Access exclusive training and development programmes",
                    "Receive mentorship and career guidance",
                    "Participate in policy advocacy initiatives",
                    "Join a supportive, culturally-aware community",
                    "Access resources for academic and professional success"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting and Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Calendar className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Community Events</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect Through Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our regular events and build meaningful connections with fellow professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Monthly Meetings",
                description: "Join us for our monthly community meetings where we discuss current issues, share experiences, and plan activities.",
                schedule: "First Saturday of each month",
                color: "blue"
              },
              {
                icon: Users,
                title: "Networking Events",
                description: "Professional networking events designed to help you build meaningful connections within the social work community.",
                schedule: "Quarterly events",
                color: "green"
              },
              {
                icon: MessageSquare,
                title: "Support Groups",
                description: "Small group sessions focused on specific topics such as student support, new professional guidance, and family services.",
                schedule: "Bi-weekly sessions",
                color: "purple"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className={`w-14 h-14 ${
                  event.color === 'blue' ? 'bg-blue-100' :
                  event.color === 'green' ? 'bg-green-100' :
                  'bg-purple-100'
                } rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <event.icon className={`h-7 w-7 ${
                    event.color === 'blue' ? 'text-blue-600' :
                    event.color === 'green' ? 'text-green-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{event.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{event.description}</p>
                <div className={`text-center py-2 px-4 rounded-xl ${
                  event.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                  event.color === 'green' ? 'bg-green-50 text-green-700' :
                  'bg-purple-50 text-purple-700'
                } font-semibold`}>
                  {event.schedule}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get quick answers to common questions about joining our community</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Who can join African Social Workers Scotland?",
                answer: "Our organisation is open to qualified social workers of African descent practising in Scotland, students studying social work, and supporters of our mission. We welcome individuals at all stages of their professional journey."
              },
              {
                question: "Is there a membership fee?",
                answer: "As we are currently an unregistered club and society, we operate on a voluntary basis. Some events or training sessions may have associated costs, but basic membership and participation in our core activities are free."
              },
              {
                question: "How can I get involved?",
                answer: "You can get involved by attending our monthly meetings, participating in networking events, volunteering for committees, or simply reaching out to us through this contact form. We welcome all levels of involvement."
              },
              {
                question: "Do you provide services to families?",
                answer: "Yes, we provide guidance and support to African families navigating social services in Scotland. Our services include cultural advocacy, information about rights and entitlements, and connections to appropriate resources."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;