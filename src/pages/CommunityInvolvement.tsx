import React, { useState } from 'react';
import { Calendar, MapPin, Users, Camera, Clock, ArrowRight, Star, Heart, Award, Globe, ChevronLeft, ChevronRight, X, Shield, AlertTriangle, Handshake } from 'lucide-react';

const CommunityInvolvement: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const pastEvents = [
    {
      id: 1,
      title: "Annual Professional Development Conference 2024",
      date: "March 15, 2024",
      location: "University of Glasgow",
      description: "Our flagship annual conference brought together over 120 African social workers from across Scotland for a day of learning, networking, and professional development.",
      attendees: 120,
      type: "Conference",
      highlights: [
        "Keynote on Cultural Competency in Social Work",
        "Panel discussion on Career Advancement",
        "Networking lunch with industry leaders",
        "Workshop on Mental Health in African Communities"
      ],
      images: [
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      title: "Community Family Fun Day",
      date: "August 12, 2024",
      location: "Kelvingrove Park, Glasgow",
      description: "A wonderful day celebrating African culture and community spirit with families from across Scotland. Food, music, and activities for all ages.",
      attendees: 85,
      type: "Community Event",
      highlights: [
        "Traditional African music and dance performances",
        "Children's activities and face painting",
        "Cultural food stalls",
        "Information booths on social services"
      ],
      images: [
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      title: "Student Mentorship Launch Event",
      date: "September 20, 2024",
      location: "Edinburgh University",
      description: "Launch of our expanded mentorship program connecting experienced practitioners with social work students across Scottish universities.",
      attendees: 45,
      type: "Educational",
      highlights: [
        "Mentorship program overview presentation",
        "Speed networking sessions",
        "Student success stories",
        "Resource sharing workshop"
      ],
      images: [
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 4,
      title: "Cultural Competency Workshop Series",
      date: "October 5-7, 2024",
      location: "Various Locations",
      description: "Three-day intensive workshop series focusing on culturally appropriate social work practice with African families and communities.",
      attendees: 60,
      type: "Training",
      highlights: [
        "Interactive case study sessions",
        "Community elder presentations",
        "Best practice sharing",
        "Certification ceremony"
      ],
      images: [
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "New Year Networking Mixer",
      date: "January 25, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Glasgow City Centre",
      description: "Start the year right with our networking mixer. Connect with fellow professionals, share goals for 2025, and enjoy an evening of community building.",
      type: "Networking",
      status: "Registration Open",
      capacity: 80,
      registered: 34,
      features: [
        "Professional networking opportunities",
        "Light refreshments and drinks",
        "Goal-setting workshop",
        "Door prizes and giveaways"
      ]
    },
    {
      id: 2,
      title: "Mental Health First Aid Training",
      date: "February 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Edinburgh Training Centre",
      description: "Two-day certified Mental Health First Aid training specifically designed for social workers serving African communities.",
      type: "Training",
      status: "Early Bird Available",
      capacity: 25,
      registered: 18,
      features: [
        "Certified Mental Health First Aid qualification",
        "Cultural adaptation techniques",
        "Practical scenario training",
        "Resource toolkit included"
      ]
    },
    {
      id: 3,
      title: "Annual General Meeting & Awards Ceremony",
      date: "March 22, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "University of Strathclyde",
      description: "Our annual AGM followed by our prestigious awards ceremony recognizing outstanding contributions to the African social work community.",
      type: "Annual Event",
      status: "Save the Date",
      capacity: 150,
      registered: 0,
      features: [
        "Annual report presentation",
        "Board elections",
        "Excellence awards ceremony",
        "Celebration dinner"
      ]
    },
    {
      id: 4,
      title: "Community Outreach Day",
      date: "April 12, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Multiple Community Centers",
      description: "Join us for a day of community service and outreach across Glasgow and Edinburgh, providing information and support to African families.",
      type: "Community Service",
      status: "Volunteers Needed",
      capacity: 40,
      registered: 12,
      features: [
        "Information sessions for families",
        "Resource distribution",
        "Community needs assessment",
        "Volunteer appreciation lunch"
      ]
    },
    {
      id: 5,
      title: "Workplace Rights & Anti-Discrimination Workshop",
      date: "June 14, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Unison Glasgow Office, 84 Bell Street, Glasgow G1 1LQ",
      description: "A crucial workshop in partnership with Unison Glasgow specifically for Black and ethnic minority social work and health social care workers facing discriminatory and bullying challenges in their workplace. Learn your rights, access support, and connect with others who understand your experiences.",
      type: "Advocacy & Rights",
      status: "Priority Registration",
      capacity: 60,
      registered: 23,
      features: [
        "Know your workplace rights and legal protections",
        "Practical strategies for addressing discrimination and bullying",
        "Union representation and support services",
        "Peer support network building",
        "Case study discussions and role-playing exercises",
        "Resource pack with templates and contact information",
        "Follow-up support and mentoring opportunities",
        "Lunch and refreshments provided"
      ],
      partner: "Unison Glasgow",
      priority: true,
      specialNote: "This event is specifically designed for BME workers who have experienced or are currently experiencing workplace discrimination, bullying, or harassment. Safe space guaranteed."
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Conference': 'bg-blue-100 text-blue-800',
      'Community Event': 'bg-green-100 text-green-800',
      'Educational': 'bg-purple-100 text-purple-800',
      'Training': 'bg-amber-100 text-amber-800',
      'Networking': 'bg-indigo-100 text-indigo-800',
      'Annual Event': 'bg-red-100 text-red-800',
      'Community Service': 'bg-teal-100 text-teal-800',
      'Advocacy & Rights': 'bg-orange-100 text-orange-800'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colorMap: { [key: string]: string } = {
      'Registration Open': 'bg-green-100 text-green-800',
      'Early Bird Available': 'bg-blue-100 text-blue-800',
      'Save the Date': 'bg-amber-100 text-amber-800',
      'Volunteers Needed': 'bg-purple-100 text-purple-800',
      'Priority Registration': 'bg-red-100 text-red-800'
    };
    return colorMap[status] || 'bg-gray-100 text-gray-800';
  };

  const openImageModal = (imageSrc: string, galleryIndex: number) => {
    setSelectedImage(imageSrc);
    setCurrentGalleryIndex(galleryIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateGallery = (direction: 'prev' | 'next', images: string[]) => {
    if (direction === 'prev') {
      const newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : images.length - 1;
      setCurrentGalleryIndex(newIndex);
      setSelectedImage(images[newIndex]);
    } else {
      const newIndex = currentGalleryIndex < images.length - 1 ? currentGalleryIndex + 1 : 0;
      setCurrentGalleryIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  return (
    <div className="pt-6">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Community Impact</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Community <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">Involvement</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Discover our vibrant community events, professional development activities, and collaborative initiatives 
            that strengthen our network and serve the African community across Scotland.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Calendar, number: "25+", label: "Events This Year" },
              { icon: Users, number: "500+", label: "Total Attendees" },
              { icon: Globe, number: "15+", label: "Partner Organizations" },
              { icon: Award, number: "8", label: "Community Awards" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Event Highlight */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-600">Priority Event</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Workplace Rights & Anti-Discrimination Workshop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A crucial partnership event with Unison Glasgow addressing workplace discrimination and bullying faced by BME social workers
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-orange-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                    Advocacy & Rights
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                    Priority Registration
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Know Your Rights, Stand Together
                </h3>
                
                <div className="space-y-4 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-orange-500" />
                    <span className="font-medium">Saturday, June 14, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-green-500" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-purple-500 mt-0.5" />
                    <div>
                      <span className="font-medium">Unison Glasgow Office</span>
                      <br />
                      <span className="text-sm">84 Bell Street, Glasgow G1 1LQ</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Handshake className="h-5 w-5 mr-3 text-blue-500" />
                    <span className="font-medium">Partnership with Unison Glasgow</span>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-2">Safe Space Guarantee</h4>
                      <p className="text-orange-800 text-sm">
                        This event is specifically designed for BME workers who have experienced or are currently 
                        experiencing workplace discrimination, bullying, or harassment. We provide a confidential, 
                        supportive environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Registration Progress</span>
                    <span className="text-sm text-gray-500">23/60 registered</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(23 / 60) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">What You'll Learn & Receive:</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Know your workplace rights and legal protections",
                    "Practical strategies for addressing discrimination and bullying",
                    "Union representation and support services",
                    "Peer support network building",
                    "Case study discussions and role-playing exercises",
                    "Resource pack with templates and contact information",
                    "Follow-up support and mentoring opportunities",
                    "Lunch and refreshments provided"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Shield className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Register Now - Priority Access
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Registration is free. Limited spaces available for this important workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Event Gallery</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recent Community Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our recent activities and the amazing community we've built together
            </p>
          </div>

          <div className="space-y-12">
            {pastEvents.map((event, index) => (
              <div key={event.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Event Details */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    
                    <div className="flex items-center space-x-4 text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-2 text-gray-600">
                            <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Image Gallery */}
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-2 gap-4">
                      {event.images.map((image, imageIndex) => (
                        <div 
                          key={imageIndex} 
                          className="relative group cursor-pointer overflow-hidden rounded-xl"
                          onClick={() => openImageModal(image, imageIndex)}
                        >
                          <img 
                            src={image} 
                            alt={`${event.title} - Image ${imageIndex + 1}`}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Click on any image to view full gallery
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">What's Next</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at our upcoming events and be part of our growing community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                event.priority ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-100'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                
                {event.priority && (
                  <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-semibold text-orange-800">Priority Event</span>
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                    {event.location}
                  </div>
                  {event.partner && (
                    <div className="flex items-center">
                      <Handshake className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="font-medium">Partnership with {event.partner}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
                
                {event.specialNote && (
                  <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-amber-800 text-sm font-medium">{event.specialNote}</p>
                  </div>
                )}
                
                {/* Registration Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Registration Progress</span>
                    <span className="text-sm text-gray-500">{event.registered}/{event.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        event.priority 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                          : 'bg-gradient-to-r from-blue-500 to-green-500'
                      }`}
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Event Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-1">
                    {event.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          event.priority ? 'bg-orange-500' : 'bg-blue-500'
                        }`}></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg ${
                  event.priority
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white'
                }`}>
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Want to Get Involved?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Join our community events, volunteer for activities, or suggest new initiatives. 
            Together, we can make an even greater impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1">
              Join Our Next Event
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:border-white/50">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img 
              src={selectedImage} 
              alt="Event gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Navigation buttons would go here if we had the current event's images */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityInvolvement;