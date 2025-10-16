import React, { useState } from 'react';
import { Calendar, MapPin, Users, Camera, Clock, ArrowRight, Star, Heart, Award, Globe, ChevronLeft, ChevronRight, X, Shield, AlertTriangle, Handshake, Filter, Search, Eye, MessageCircle, Share2 } from 'lucide-react';
import { useEventManagement } from '../hooks/useEventManagement';

const Events: React.FC = () => {
  const {
    upcomingEvents,
    pastEvents,
    getEventStatus,
    getDaysUntilEvent,
    isRegistrationOpen,
    lastUpdateTime,
    automaticallyMovedCount
  } = useEventManagement();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Gallery images featuring African professionals and community events
  const galleryImages = [
    {
      id: 4,
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Networking Event",
      description: "Professional networking and mentorship",
      category: "networking",
      date: "December 2023"
    },
    {
      id: 5,
      src: "/FB_IMG_1757244862859.jpg",
      description: "Elegant evening celebration with community members",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 6,
      src: "/FB_IMG_1757244847803.jpg",
      description: "Community members in beautiful traditional and formal wear",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 7,
      src: "/FB_IMG_1757244763461.jpg",
      description: "Celebrating African heritage through traditional clothing",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 8,
      src: "/FB_IMG_1757244748346.jpg",
      description: "Members enjoying traditional cuisine and fellowship",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 9,
      src: "/FB_IMG_1757244937706.jpg",
      title: "Annual Dinner Dance - Networking & Fellowship",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 10,
      src: "/FB_IMG_1757244957207.jpg",
      title: "Community Leadership Address",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 11,
      src: "/FB_IMG_1757244826834.jpg",
      title: "Annual Dinner Dance - Full Venue View",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 12,
      src: "/FB_IMG_1757244916786.jpg",
      title: "Community Celebration Dinner",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 13,
      src: "/FB_IMG_1757244715881.jpg",
      title: "Elegant Evening Celebration",
      category: "cultural",
      date: "November 2024"
    },
    {
      id: 14,
      src: "/ASWS_Unison Migrant event copy.jpg",
      description: "ASWS-Unison partnership event supporting migrant workers and addressing workplace rights",
      category: "advocacy",
      date: "June 2024"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'conference', label: 'Conferences' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'community', label: 'Community Events' },
    { id: 'networking', label: 'Networking' },
    { id: 'education', label: 'Education' },
    { id: 'cultural', label: 'Cultural Events' },
    { id: 'advocacy', label: 'Advocacy & Rights' }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = (image.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (image.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openImageModal = (imageSrc: string, galleryIndex: number) => {
    setSelectedImage(imageSrc);
    setCurrentGalleryIndex(galleryIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : filteredImages.length - 1;
      setCurrentGalleryIndex(newIndex);
      setSelectedImage(filteredImages[newIndex].src);
    } else {
      const newIndex = currentGalleryIndex < filteredImages.length - 1 ? currentGalleryIndex + 1 : 0;
      setCurrentGalleryIndex(newIndex);
      setSelectedImage(filteredImages[newIndex].src);
    }
  };

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
      'Priority Registration': 'bg-red-100 text-red-800',
      'Today': 'bg-green-100 text-green-800',
      'This Week': 'bg-blue-100 text-blue-800',
      'This Month': 'bg-purple-100 text-purple-800'
    };
    return colorMap[status] || 'bg-gray-100 text-gray-800';
  };

  const getDaysUntilText = (eventDate: string) => {
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return 'Date TBC';
    }
    const days = getDaysUntilEvent(eventDate);
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    if (days < 7) return `In ${days} days`;
    if (days < 14) return 'Next week';
    if (days < 30) return `In ${Math.floor(days / 7)} weeks`;
    return `In ${Math.floor(days / 30)} months`;
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
            <Calendar className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Community Events</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Events & <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">Gallery</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Discover our vibrant community events, professional development activities, and browse our photo gallery 
            showcasing the amazing work we do together across Scotland.
          </p>
          
          {/* Auto-update indicator */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            <Clock className="h-3 w-3 text-green-400" />
            <span>Events auto-updated: {lastUpdateTime.toLocaleTimeString()}</span>
            {automaticallyMovedCount > 0 && (
              <span className="ml-2 px-2 py-1 bg-green-400/20 rounded-full text-xs">
                {automaticallyMovedCount} events moved to past
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Photo Gallery</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Community in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through moments from our events, workshops, and community gatherings
            </p>
          </div>

          {/* Gallery Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 aspect-square"
                onClick={() => openImageModal(image.src, index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-xs opacity-90">{image.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">What's Next</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Events ({upcomingEvents.length})
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at our upcoming events and be part of our growing community
            </p>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming events</h3>
              <p className="text-gray-600">Check back soon for new events or contact us to suggest an event.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                  event.priority ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-100'
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(getEventStatus(event.date))}`}>
                      {getDaysUntilText(event.date)}
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
                  
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Past Events</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recent Community Events ({pastEvents.length})
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our recent activities and the amazing community we've built together
            </p>
          </div>

          <div className="space-y-12">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateGallery('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateGallery('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <img 
              src={selectedImage} 
              alt="Event gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 rounded-lg px-4 py-2">
              <p className="text-sm opacity-90">{filteredImages[currentGalleryIndex]?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;