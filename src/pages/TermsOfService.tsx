import React from 'react';
import { FileText, Users, Shield, AlertTriangle, CheckCircle, Scale, Globe, Mail, Phone } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-6">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <FileText className="h-4 w-4 text-blue-300" />
            <span className="text-sm font-semibold">Legal Terms</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Terms and conditions for using our services and participating in our community
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
                <FileText className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Service ("Terms") govern your use of the African Social Workers Scotland 
                    (ASWS) website, services, and participation in our community activities. By accessing 
                    our website or participating in our services, you agree to be bound by these Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* About ASWS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-600" />
                About African Social Workers Scotland
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  African Social Workers Scotland (ASWS) is an unregistered club and society dedicated to 
                  supporting qualified and student social workers of African descent in Scotland. We provide:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Professional development and networking opportunities</li>
                  <li>• Advocacy and support services</li>
                  <li>• Cultural competency training and resources</li>
                  <li>• Community outreach and family support</li>
                  <li>• Educational workshops and events</li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>info@aswscotland.org</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>+44 (0) 7549080793</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Membership and Participation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-blue-600" />
                Membership and Participation
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h3>
                  <p className="text-gray-700 mb-3">
                    Membership is open to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Qualified social workers of African descent practicing in Scotland</li>
                    <li>• Students studying social work at Scottish institutions</li>
                    <li>• Supporters of our mission and values</li>
                    <li>• Individuals committed to our community standards</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Membership Responsibilities</h3>
                  <p className="text-gray-700 mb-3">
                    As a member or participant, you agree to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Provide accurate and truthful information</li>
                    <li>• Respect the confidentiality of other members</li>
                    <li>• Participate constructively in community activities</li>
                    <li>• Uphold professional standards and ethics</li>
                    <li>• Respect diversity and promote inclusion</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Voluntary Participation</h3>
                  <p className="text-gray-700">
                    As an unregistered club and society, participation in ASWS is entirely voluntary. 
                    We operate on a community basis with no formal membership fees, though some events 
                    or training sessions may have associated costs to cover expenses.
                  </p>
                </div>
              </div>
            </section>

            {/* Code of Conduct */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-blue-600" />
                Code of Conduct
              </h2>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Our Community Standards</h3>
                <p className="text-green-800">
                  ASWS is committed to providing a safe, respectful, and inclusive environment for all 
                  members and participants. We expect all community members to uphold these standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Respectful Communication</h4>
                    <p className="text-blue-800 text-sm">
                      Communicate respectfully and professionally in all interactions
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Confidentiality</h4>
                    <p className="text-green-800 text-sm">
                      Respect the privacy and confidentiality of other members
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Professional Ethics</h4>
                    <p className="text-purple-800 text-sm">
                      Maintain professional standards and ethical conduct
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Inclusive Behavior</h4>
                    <p className="text-amber-800 text-sm">
                      Promote diversity, equity, and inclusion in all activities
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Zero Tolerance</h4>
                    <p className="text-red-800 text-sm">
                      No discrimination, harassment, or abusive behavior
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Constructive Participation</h4>
                    <p className="text-indigo-800 text-sm">
                      Contribute positively to community discussions and activities
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prohibited Conduct */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Prohibited Conduct
              </h2>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <p className="text-gray-700 mb-4">
                  The following behaviors are strictly prohibited and may result in removal from 
                  our community:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Discrimination based on race, gender, religion, or other protected characteristics</li>
                    <li>• Harassment, bullying, or intimidation of any kind</li>
                    <li>• Sharing false or misleading information</li>
                    <li>• Violating confidentiality or privacy of others</li>
                    <li>• Disruptive or inappropriate behavior at events</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Unauthorized use of ASWS name or branding</li>
                    <li>• Commercial solicitation without permission</li>
                    <li>• Violation of professional codes of conduct</li>
                    <li>• Illegal activities or encouraging illegal behavior</li>
                    <li>• Misuse of member information or resources</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Events and Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-blue-600" />
                Events and Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Participation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Registration may be required for certain events</li>
                    <li>• Some events may have capacity limitations</li>
                    <li>• Cancellation policies apply to paid events</li>
                    <li>• Photography and recording may occur at public events</li>
                    <li>• Health and safety guidelines must be followed</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Training and Certification</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Certificates are issued upon successful completion of training programs</li>
                    <li>• Training materials are for personal use only</li>
                    <li>• Attendance requirements apply for certification</li>
                    <li>• CPD points may be available for relevant training</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advocacy support is provided on a best-effort basis</li>
                    <li>• We are not a substitute for professional legal advice</li>
                    <li>• Confidentiality is maintained within legal limits</li>
                    <li>• Referrals to appropriate services may be provided</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-blue-600" />
                Intellectual Property
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ASWS Content</h3>
                  <p className="text-gray-700">
                    All content on our website, including text, images, logos, and training materials, 
                    is owned by ASWS or used with permission. You may not reproduce, distribute, or 
                    use this content without written permission.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Generated Content</h3>
                  <p className="text-gray-700">
                    By sharing content with ASWS (such as testimonials, photos, or feedback), you grant 
                    us permission to use this content for promotional and educational purposes, while 
                    respecting your privacy and confidentiality preferences.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Content</h3>
                  <p className="text-gray-700">
                    We may provide links to third-party websites and resources. We are not responsible 
                    for the content, accuracy, or availability of these external resources.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-amber-600" />
                Limitation of Liability
              </h2>
              
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <p className="text-gray-700 mb-4">
                  <strong>Important Legal Notice:</strong> As an unregistered club and society operating 
                  on a voluntary basis, ASWS provides services and support to the best of our ability, 
                  but we cannot guarantee specific outcomes.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Provision</h3>
                    <p className="text-gray-700 text-sm">
                      Our services are provided "as is" without warranties of any kind. We strive to 
                      provide accurate information and quality services but cannot guarantee completeness 
                      or suitability for specific purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Advice</h3>
                    <p className="text-gray-700 text-sm">
                      ASWS does not provide legal, medical, or professional advice. Our support and 
                      advocacy services are informational and supportive in nature. Always consult 
                      qualified professionals for specific advice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Liability Limits</h3>
                    <p className="text-gray-700 text-sm">
                      To the fullest extent permitted by law, ASWS and its volunteers shall not be 
                      liable for any indirect, incidental, or consequential damages arising from 
                      your participation in our activities or use of our services.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-blue-600" />
                Data Protection and Privacy
              </h2>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our collection, use, and protection of your personal 
                  data is governed by our Privacy Policy, which complies with UK GDPR and the Data 
                  Protection Act 2018.
                </p>
                <p className="text-gray-700">
                  By using our services, you consent to the collection and use of your information 
                  as described in our Privacy Policy. Please review our Privacy Policy to understand 
                  how we handle your personal data.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-blue-600" />
                Dispute Resolution
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Internal Resolution</h3>
                  <p className="text-gray-700">
                    We encourage members to resolve disputes through direct communication and mediation. 
                    If you have concerns about another member's conduct or our services, please contact 
                    us at info@aswscotland.org.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                  <p className="text-gray-700">
                    These Terms are governed by the laws of Scotland and the United Kingdom. Any disputes 
                    that cannot be resolved through mediation will be subject to the jurisdiction of 
                    Scottish courts.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Enforcement</h3>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate participation of members who violate 
                    these Terms or engage in conduct harmful to our community. Decisions will be made 
                    fairly and with consideration of all circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>
              
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <p className="text-gray-700 mb-4">
                  We may update these Terms of Service from time to time to reflect changes in our 
                  services, legal requirements, or community standards. We will notify members of 
                  significant changes through:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Email notifications to registered members</li>
                  <li>• Announcements on our website</li>
                  <li>• Notices at community events</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Continued participation in ASWS activities after changes are announced constitutes 
                  acceptance of the updated Terms.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Voluntary Withdrawal</h3>
                  <p className="text-gray-700">
                    You may cease participation in ASWS activities at any time by contacting us or 
                    simply discontinuing your involvement. We will respect your decision and remove 
                    your information from our active communications as requested.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Involuntary Termination</h3>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate participation of individuals who 
                    violate these Terms, engage in harmful conduct, or act contrary to our community 
                    values. Such decisions will be made with careful consideration and due process.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Effect of Termination</h3>
                  <p className="text-gray-700">
                    Upon termination, your access to member-only services and events will cease. 
                    However, these Terms will continue to apply to any past activities and any 
                    ongoing obligations or liabilities.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service or need clarification 
                  about our policies, please contact us:
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
                
                <p className="text-sm text-gray-600 mt-4">
                  We aim to respond to all inquiries within 48 hours during business days.
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mb-12">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Acknowledgment</h2>
                <p className="text-green-800">
                  By participating in ASWS activities, using our website, or engaging with our services, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms 
                  of Service and our Privacy Policy.
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;