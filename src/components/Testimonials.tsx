import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, User, GraduationCap, Heart, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amara K.",
      role: "Senior Social Worker",
      organization: "Glasgow City Council",
      type: "practicing",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "ASWS has been instrumental in my professional development. The mentorship programme connected me with experienced colleagues who helped me navigate workplace challenges and advance my career. The cultural competency training has made me a better practitioner.",
      rating: 5,
      location: "Glasgow"
    },
    {
      id: 2,
      name: "David M.",
      role: "Social Work Student",
      organization: "University of Edinburgh",
      type: "student",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "As a final year student, ASWS provided me with invaluable support and networking opportunities. The student mentorship programme helped me secure my first placement and gave me confidence to enter the profession. I'm grateful for this community.",
      rating: 5,
      location: "Edinburgh"
    },
    {
      id: 3,
      name: "Grace O.",
      role: "Mother of three",
      organization: "Community member",
      type: "family",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "When my family faced challenges with social services, ASWS advocates provided culturally sensitive support that made all the difference. They understood our background and helped us navigate the system while preserving our dignity and family unity.",
      rating: 5,
      location: "Aberdeen"
    },
    {
      id: 4,
      name: "Emmanuel T.",
      role: "Recent immigrant",
      organization: "New to Scotland",
      type: "immigrant",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Arriving in Scotland was overwhelming, but ASWS connected me with social workers who understood my journey. They provided practical support and helped me understand my rights and available services. Their cultural understanding was invaluable.",
      rating: 5,
      location: "Dundee"
    },
    {
      id: 5,
      name: "Fatima A.",
      role: "Team Manager",
      organization: "NHS Lothian",
      type: "practicing",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "The leadership development programme through ASWS prepared me for my management role. The advocacy work they do has created positive changes in workplace policies that benefit all African professionals in social care.",
      rating: 5,
      location: "Edinburgh"
    },
    {
      id: 6,
      name: "Sarah L.",
      role: "Social Work Student",
      organization: "University of Strathclyde",
      type: "student",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "The student support network at ASWS has been amazing. From study groups to placement support, they've been there every step of my journey. The professional development workshops have given me skills beyond what I learn at university.",
      rating: 5,
      location: "Glasgow"
    },
    {
      id: 7,
      name: "Kwame B.",
      role: "Father and community advocate",
      organization: "Community member",
      type: "family",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "ASWS helped our family when we were struggling with housing issues. Their advocates understood our cultural needs and worked tirelessly to ensure our children remained in a stable environment. They truly care about African families.",
      rating: 5,
      location: "Glasgow"
    },
    {
      id: 8,
      name: "Aisha M.",
      role: "Newly arrived from Nigeria",
      organization: "Recent immigrant",
      type: "immigrant",
      image: "https://images.pexels.com/photos/3182465/pexels-photo-3182465.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Moving to Scotland with my children was scary, but ASWS made the transition smoother. They connected me with services, helped with school enrollment, and provided emotional support. I now volunteer to help other new arrivals.",
      rating: 5,
      location: "Edinburgh"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'practicing':
        return <User className="h-5 w-5 text-blue-600" />;
      case 'student':
        return <GraduationCap className="h-5 w-5 text-green-600" />;
      case 'family':
        return <Heart className="h-5 w-5 text-purple-600" />;
      case 'immigrant':
        return <Users className="h-5 w-5 text-amber-600" />;
      default:
        return <User className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'practicing':
        return 'Practicing social worker';
      case 'student':
        return 'Social work student';
      case 'family':
        return 'African family';
      case 'immigrant':
        return 'New to Scotland';
      default:
        return 'Community member';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'practicing':
        return 'bg-blue-100 text-blue-800';
      case 'student':
        return 'bg-green-100 text-green-800';
      case 'family':
        return 'bg-purple-100 text-purple-800';
      case 'immigrant':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Quote className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Community voices</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our community says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from practicing social workers, students, African families, and new immigrants 
            about their experiences with ASWS
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-12">
          <div className="absolute top-8 left-8">
            <Quote className="h-12 w-12 text-blue-200" />
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(current.type)}`}>
                {getTypeLabel(current.type)}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic max-w-4xl mx-auto">
              "{current.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={current.image} 
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900">{current.name}</h4>
                <p className="text-gray-600">{current.role}</p>
                <p className="text-sm text-gray-500">{current.organization}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;