import React from 'react';
import { Users, BookOpen, Scale, Globe, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-6">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About us</h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Learn about our journey, values, and commitment to the African social work community in Scotland
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  African Social Workers Scotland (ASWS) is a volunteer-led community group
                  of qualified and student social workers of African descent. We formed to address the
                  unique challenges our members, and the families they support, experience within Scotland's
                  social services context, including isolation, progression barriers, and gaps in cultural
                  understanding.
                </p>
                <p>
                  United by our commitment to social justice, cultural competence, and community wellbeing,
                  we came together to create a supportive network that addresses the specific needs of
                  African social workers, students, and the families we serve.
                </p>
                <p>
                  Our group serves as both a professional development platform and an advocacy body,
                  working tirelessly to create a more inclusive and supportive environment that aligns with
                  Scotland's social services laws, legislation, and policies.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/Our story copy.jpg"
                alt="Team collaboration meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social justice</h3>
              <p className="text-gray-600">
                We are committed to fighting for fairness, equality, and justice for all members 
                of our community, ensuring everyone has access to the support they need.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural competence</h3>
              <p className="text-gray-600">
                We understand and respect the diverse cultural backgrounds within our community, 
                ensuring culturally appropriate and sensitive service delivery.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community well-being</h3>
              <p className="text-gray-600">
                The health and prosperity of our community is at the heart of everything we do, 
                from individual support to broader advocacy efforts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in social work practise, continuously learning 
                and developing our skills to better serve our community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together, building strong partnerships within 
                our community and with other organisations that share our goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advocacy</h3>
              <p className="text-gray-600">
                We actively advocate for policies and practises that address the unique needs 
                and challenges faced by individuals of African descent in Scotland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our commitment</h2>
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Our commitment is to support, empower, and unite African social work practitioners and students,
                advance social justice and cultural competence, and contribute to better experiences and outcomes
                for Black & ethnic minority children & families across Scotland.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;