import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-6">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-blue-300" />
            <span className="text-sm font-semibold">Data Protection</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-200">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    African Social Workers Scotland (ASWS) is committed to protecting your privacy and ensuring 
                    the security of your personal information. This Privacy Policy explains how we collect, use, 
                    store, and protect your personal data in accordance with the UK General Data Protection 
                    Regulation (UK GDPR) and the Data Protection Act 2018.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Controller */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-600" />
                Data Controller
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>African Social Workers Scotland (ASWS)</strong> is the data controller for the personal 
                  information we collect and process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>Email: info@aswscotland.org</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>Phone: +44 (0) 7549080793</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-blue-600" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information You Provide</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name, email address, and phone number</li>
                    <li>• Professional information (job title, employer, experience level)</li>
                    <li>• Educational background and qualifications</li>
                    <li>• Areas of interest and professional development needs</li>
                    <li>• Event registration and attendance information</li>
                    <li>• Membership application details</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect Automatically</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Website usage data and analytics</li>
                    <li>• IP address and browser information</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Device and operating system information</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sensitive Personal Data</h3>
                  <p className="text-gray-700">
                    We may collect information about your ethnic origin as this is relevant to our mission 
                    of supporting African social workers. This information is processed with your explicit 
                    consent and in accordance with our legitimate interests as a community organization.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-600" />
                How We Use Your Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Membership Services</h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Processing membership applications</li>
                    <li>• Providing member benefits and services</li>
                    <li>• Facilitating networking opportunities</li>
                    <li>• Matching mentors and mentees</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Events & Training</h3>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Event registration and management</li>
                    <li>• Sending event updates and reminders</li>
                    <li>• Providing training materials and certificates</li>
                    <li>• Collecting feedback and evaluations</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Communication</h3>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>• Sending newsletters and updates</li>
                    <li>• Responding to inquiries and requests</li>
                    <li>• Providing support and advocacy services</li>
                    <li>• Sharing relevant opportunities</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">Legal & Administrative</h3>
                  <ul className="space-y-2 text-amber-800 text-sm">
                    <li>• Complying with legal obligations</li>
                    <li>• Maintaining accurate records</li>
                    <li>• Protecting our legitimate interests</li>
                    <li>• Improving our services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-blue-600" />
                Legal Basis for Processing
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consent</h3>
                  <p className="text-gray-700">
                    Where you have given clear consent for us to process your personal data for specific purposes, 
                    such as receiving newsletters or participating in events.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Legitimate Interests</h3>
                  <p className="text-gray-700">
                    Where processing is necessary for our legitimate interests as a professional organization 
                    supporting African social workers, provided this does not override your rights and freedoms.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Obligation</h3>
                  <p className="text-gray-700">
                    Where we need to process your data to comply with legal requirements, such as health and 
                    safety regulations for events or financial record-keeping.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-600" />
                How We Share Your Information
              </h2>
              
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">We Do Not Sell Your Data</h3>
                    <p className="text-amber-800">
                      ASWS never sells, rents, or trades your personal information to third parties for 
                      commercial purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Partner Organizations</h3>
                  <p className="text-gray-700">
                    We may share limited information with trusted partner organizations (such as UNISON) 
                    when providing joint services or events, always with your consent.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p className="text-gray-700">
                    We use reputable third-party service providers for website hosting, email services, 
                    and event management. These providers are bound by strict data protection agreements.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose your information if required by law, court order, or to protect 
                    the rights and safety of our members and the public.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-blue-600" />
                Your Rights Under UK GDPR
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Right to Access</h3>
                    <p className="text-blue-800 text-sm">Request a copy of the personal data we hold about you</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Right to Rectification</h3>
                    <p className="text-green-800 text-sm">Request correction of inaccurate or incomplete data</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Right to Erasure</h3>
                    <p className="text-purple-800 text-sm">Request deletion of your personal data in certain circumstances</p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-900 mb-2">Right to Restrict Processing</h3>
                    <p className="text-amber-800 text-sm">Request limitation of how we process your data</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Right to Data Portability</h3>
                    <p className="text-red-800 text-sm">Request transfer of your data to another organization</p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">Right to Object</h3>
                    <p className="text-indigo-800 text-sm">Object to processing based on legitimate interests</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-900 mb-2">Right to Withdraw Consent</h3>
                    <p className="text-teal-800 text-sm">Withdraw consent for processing at any time</p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-pink-900 mb-2">Right to Complain</h3>
                    <p className="text-pink-800 text-sm">Lodge a complaint with the Information Commissioner's Office</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h3>
                <p className="text-gray-700 mb-4">
                  To exercise any of these rights, please contact us at:
                </p>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">info@aswscotland.org</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  We will respond to your request within one month of receipt.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-blue-600" />
                Data Security
              </h2>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal 
                  data against unauthorized access, alteration, disclosure, or destruction, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Secure encrypted connections (SSL/TLS)</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication measures</li>
                  <li>• Staff training on data protection</li>
                  <li>• Secure backup and recovery procedures</li>
                  <li>• Regular monitoring for security breaches</li>
                </ul>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Membership Data</h3>
                  <p className="text-gray-700">
                    We retain membership information for as long as you remain an active member, 
                    plus 3 years after membership ends for administrative purposes.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Data</h3>
                  <p className="text-gray-700">
                    Event registration and attendance data is retained for 2 years for evaluation 
                    and improvement purposes.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication Data</h3>
                  <p className="text-gray-700">
                    Email communications and correspondence are retained for 1 year unless longer 
                    retention is required for legal or administrative purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Website Analytics</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="text-gray-700 mb-4">
                  Our website uses cookies and similar technologies to improve your browsing experience 
                  and analyze website usage. We use:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Essential cookies:</strong> Required for website functionality</li>
                  <li>• <strong>Analytics cookies:</strong> To understand how visitors use our site</li>
                  <li>• <strong>Preference cookies:</strong> To remember your settings and preferences</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any significant changes by email or through 
                  our website. The "Last updated" date at the top of this policy indicates when it was 
                  last revised.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal data, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">info@aswscotland.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">+44 (0) 7549080793</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Information Commissioner's Office</h3>
                  <p className="text-gray-700 text-sm">
                    If you are not satisfied with our response to your data protection concerns, 
                    you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    Website: <a href="https://ico.org.uk" className="text-blue-600 hover:underline">ico.org.uk</a><br />
                    Phone: 0303 123 1113
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;