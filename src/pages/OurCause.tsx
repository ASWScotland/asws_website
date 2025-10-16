import React from 'react';
import { Shield, Users, BookOpen, Scale, Globe, Heart, Target, ArrowRight, CheckCircle, Star, Award, TrendingUp, Eye, MessageCircle, Share2 } from 'lucide-react';

interface OurCauseProps {
  onNavigate?: (page: string) => void;
}

const OurCause: React.FC<OurCauseProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Social workers advocating for change"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/70 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Target className="h-4 w-4 text-purple-300" />
            <span className="text-sm font-semibold">Our mission</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Our <span className="text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">cause</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Fighting for equality, justice, and professional excellence in social work practise 
            while supporting African communities across Scotland.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our mission statement</h2>
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
              "In recognition of the unique challenges faced by African social work practitioners, 
              students, as well as African children and families within the legal and social services 
              framework of Scotland, we pledge to work collaboratively to provide support, foster 
              understanding, and advocate for the rights of African social workers, students, children, 
              and families in Scotland."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Causes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">What we fight for</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our core causes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every initiative we undertake is driven by our commitment to these fundamental causes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Peer networking & professional development",
                description: "Skills sharing sessions, mentoring, and reflective practice circles that build confidence and cultural competence in day-to-day social work.",
                color: "blue"
              },
              {
                icon: BookOpen,
                title: "Community outreach & education",
                description: "Practical workshops for African families on navigating social services, rights and responsibilities, and safeguarding expectations, helping to build trust and improve engagement with services.",
                color: "green"
              },
              {
                icon: Shield,
                title: "Advocacy & voice",
                description: "Listening forums with partners to surface issues and co-produce practical improvements.",
                color: "purple"
              },
              {
                icon: Heart,
                title: "Connection & wellbeing",
                description: "Family-friendly socials that reduce isolation and strengthen support networks.",
                color: "amber"
              }
            ].map((cause, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${
                  cause.color === 'red' ? 'bg-red-100' :
                  cause.color === 'blue' ? 'bg-blue-100' :
                  cause.color === 'green' ? 'bg-green-100' :
                  cause.color === 'purple' ? 'bg-purple-100' :
                  cause.color === 'amber' ? 'bg-amber-100' :
                  'bg-indigo-100'
                } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cause.icon className={`h-8 w-8 ${
                    cause.color === 'red' ? 'text-red-600' :
                    cause.color === 'blue' ? 'text-blue-600' :
                    cause.color === 'green' ? 'text-green-600' :
                    cause.color === 'purple' ? 'text-purple-600' :
                    cause.color === 'amber' ? 'text-amber-600' :
                    'text-indigo-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{cause.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Real impact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stories of change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our community members showing the tangible impact of our advocacy and support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Workplace discrimination victory",
                description: "Through our partnership with UNISON, we successfully supported a social worker facing racial discrimination, resulting in policy changes and compensation.",
                impact: "Successful advocacy and support provided",
                image: "/Workplace discrimination victory copy.jpg",
                category: "Advocacy success"
              },
              {
                title: "Cultural competency training impact",
                description: "Our specialised training programme has equipped over 50 social workers with skills to better serve African families, improving service outcomes significantly.",
                impact: "Enhanced cultural competency skills delivered",
                image: "/Cultural competency training copy.jpg",
                category: "Professional development"
              },
              {
                title: "Student mentorship success",
                description: "Our mentorship programme has supported 50+ African social work students, successfully completing their studies and finding employment.",
                impact: "Successful mentorship and career support",
                image: "/Student mentorship success copy.jpg",
                category: "Education support"
              },
              {
                title: "Community family support",
                description: "Direct support to 30+ African families navigating social services, providing advocacy, translation, and cultural mediation services.",
                impact: "Families successfully supported with advocacy",
                image: "/Community family support copy.jpg",
                category: "Community impact"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {story.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>Impact story</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{story.description}</p>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">{story.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Join our cause
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-purple-100 max-w-3xl mx-auto">
            Every voice matters in our fight for equality and justice. 
            Together, we can create the change our profession and communities need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onNavigate?.('contact')}
              className="group bg-white text-purple-600 hover:bg-gray-50 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:-translate-y-1"
            >
              Become an advocate
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="group border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:border-white/50"
            >
              Support our campaigns
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCause;