import React, { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, Download, Video, Users, Calendar, Search, Filter, Star, Clock, Tag, Globe, FileText, Headphones, Monitor, Heart, Share2, MessageCircle, TrendingUp, Eye, ThumbsUp, Copy, Check, Briefcase, MapPin, Building } from 'lucide-react';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('engagement'); // 'engagement', 'recent', 'popular'
  const [likedResources, setLikedResources] = useState<Set<number>>(new Set());
  const [copiedResourceId, setCopiedResourceId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('resources'); // 'resources' or 'jobs'

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'toolkits', label: 'Toolkits & Guides', icon: FileText },
    { id: 'webinars', label: 'Webinars & Videos', icon: Video },
    { id: 'podcasts', label: 'Podcasts', icon: Headphones },
    { id: 'blogs', label: 'Blogs & Articles', icon: Globe },
    { id: 'training', label: 'Training Programs', icon: Users },
    { id: 'advocacy', label: 'Advocacy Resources', icon: Monitor }
  ];

  const [resources, setResources] = useState([
    {
      id: 1,
      title: "IRISS - Enhancing Outcomes for BME Social Work Students",
      description: "Research and insights on enhancing outcomes for Black and minority ethnic social work students in Scotland, addressing barriers and promoting success.",
      category: 'toolkits',
      type: 'Research Report',
      url: 'https://www.iriss.org.uk/resources/reports/enhancing-outcomes-black-and-minority-ethnic-social-work-students-scotland',
      provider: 'IRISS (Institute for Research and Innovation in Social Services)',
      rating: 5,
      featured: true,
      tags: ['BME Students', 'Social Work Education', 'Scotland', 'Research'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-02-15'),
      likes: 47,
      shares: 23,
      views: 342,
      comments: 8,
      engagementScore: 420
    },
    {
      id: 2,
      title: "BASW Anti-Racism Resources",
      description: "Comprehensive anti-racism resources from BASW England including toolkits, training materials, supervision forms and policy guidance for social work practitioners.",
      category: 'blogs',
      type: 'Resource Hub',
      url: 'https://basw.co.uk/policy-and-practice/resources/anti-racism-resources-basw-england',
      provider: 'British Association of Social Workers (BASW)',
      rating: 5,
      featured: true,
      tags: ['Anti-Racism', 'Practice Development', 'BASW', 'Professional Standards'],
      publishedDate: 'Regularly Updated',
      dateAdded: new Date('2024-01-20'),
      likes: 89,
      shares: 45,
      views: 567,
      comments: 15,
      engagementScore: 716
    },
    {
      id: 3,
      title: "SCIE Safeguarding Children Resources",
      description: "Comprehensive safeguarding children resources, training and guidance including cultural competency considerations for protecting children from diverse backgrounds.",
      category: 'webinars',
      type: 'Resource Hub',
      url: 'https://www.scie.org.uk/safeguarding/children/',
      provider: 'Social Care Institute for Excellence (SCIE)',
      rating: 4,
      featured: false,
      tags: ['Child Protection', 'Cultural Competency', 'Diverse Families', 'Safeguarding'],
      publishedDate: 'Regularly Updated',
      dateAdded: new Date('2024-03-10'),
      likes: 34,
      shares: 18,
      views: 289,
      comments: 6,
      engagementScore: 347
    },
    {
      id: 4,
      title: "Research in Practice - Anti-Racist Social Work",
      description: "Evidence-based resources, training videos and guidance on promoting anti-racism and implementing anti-racist practice in social work across the UK.",
      category: 'advocacy',
      type: 'Training Resources',
      url: 'https://www.researchinpractice.org.uk/all/content-pages/videos/promoting-anti-racism-in-social-work/',
      provider: 'Research in Practice',
      rating: 5,
      featured: true,
      tags: ['Anti-Racism', 'Evidence-Based Practice', 'Training', 'UK Practice'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-03-25'),
      likes: 156,
      shares: 78,
      views: 892,
      comments: 24,
      engagementScore: 1150
    },
    {
      id: 5,
      title: "Equality and Diversity in Social Work",
      description: "Comprehensive guidance on equality, diversity and inclusion in social work practise, education and service delivery.",
      category: 'toolkits',
      type: 'Practise Guide',
      url: 'https://www.skillsforcare.org.uk/Developing-your-workforce/Care-topics/Equality-diversity-and-inclusion/Equality-diversity-and-inclusion.aspx',
      provider: 'Skills for Care',
      rating: 4,
      featured: false,
      tags: ['Equality', 'Diversity', 'Inclusion', 'Practise Standards'],
      publishedDate: 'December 2023',
      dateAdded: new Date('2023-12-15'),
      likes: 67,
      shares: 32,
      views: 445,
      comments: 11,
      engagementScore: 555
    },
    {
      id: 6,
      title: "Mental Health and Wellbeing Resources",
      description: "NHS Scotland resources on mental health support and culturally appropriate interventions for diverse communities.",
      category: 'training',
      type: 'Online Resources',
      url: 'https://www.nhsinform.scot/healthy-living/mental-wellbeing',
      provider: 'NHS Scotland',
      rating: 5,
      featured: true,
      tags: ['Mental Health', 'NHS Scotland', 'Cultural Interventions', 'Wellbeing'],
      publishedDate: 'November 2023',
      dateAdded: new Date('2023-11-20'),
      likes: 123,
      shares: 67,
      views: 734,
      comments: 19,
      engagementScore: 943
    },
    {
      id: 7,
      title: "Scottish Social Services Council (SSSC) Registration",
      description: "Official registration body for social workers in Scotland. Essential for all practicing social workers including registration, CPD requirements, and professional standards.",
      category: 'toolkits',
      type: 'Professional Registration',
      url: 'https://www.sssc.uk.com/',
      provider: 'Scottish Social Services Council',
      rating: 5,
      featured: true,
      tags: ['Professional Registration', 'CPD', 'Scotland', 'SSSC', 'Professional Standards'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-01-10'),
      likes: 234,
      shares: 89,
      views: 1245,
      comments: 34,
      engagementScore: 1602
    },
    {
      id: 8,
      title: "Race Equality Foundation Resources",
      description: "Comprehensive resources on race equality in health and social care, including research reports, briefings, and best practice guides for BME communities.",
      category: 'blogs',
      type: 'Research & Reports',
      url: 'https://raceequalityfoundation.org.uk/',
      provider: 'Race Equality Foundation',
      rating: 5,
      featured: true,
      tags: ['Race Equality', 'BME Communities', 'Health & Social Care', 'Research'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-02-05'),
      likes: 178,
      shares: 92,
      views: 876,
      comments: 28,
      engagementScore: 1174
    },
    {
      id: 9,
      title: "UNISON Scotland - Social Work Branch",
      description: "Trade union support for social workers in Scotland, including workplace rights, professional development, and advocacy for better working conditions.",
      category: 'advocacy',
      type: 'Trade Union',
      url: 'https://scotland.unison.org.uk/',
      provider: 'UNISON Scotland',
      rating: 5,
      featured: false,
      tags: ['Trade Union', 'Workplace Rights', 'Scotland', 'Professional Support'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-01-15'),
      likes: 145,
      shares: 67,
      views: 654,
      comments: 19,
      engagementScore: 885
    },
    {
      id: 10,
      title: "Community Care Magazine",
      description: "Leading publication for social care professionals with news, analysis, jobs, and professional development resources. Essential reading for social workers.",
      category: 'blogs',
      type: 'Professional Magazine',
      url: 'https://www.communitycare.co.uk/',
      provider: 'Community Care',
      rating: 4,
      featured: false,
      tags: ['Professional News', 'Social Care', 'Jobs', 'Professional Development'],
      publishedDate: 'Daily Updates',
      dateAdded: new Date('2024-01-20'),
      likes: 98,
      shares: 45,
      views: 567,
      comments: 15,
      engagementScore: 725
    },
    {
      id: 11,
      title: "Scottish Government - Social Services",
      description: "Official Scottish Government portal for social services including social work policy, legislation, workforce development and practice guidance for Scotland.",
      category: 'toolkits',
      type: 'Government Portal',
      url: 'https://www.gov.scot/policies/social-services/',
      provider: 'Scottish Government',
      rating: 5,
      featured: true,
      tags: ['Scottish Government', 'Policy', 'Legislation', 'Practice Framework'],
      publishedDate: 'Regularly Updated',
      dateAdded: new Date('2024-01-25'),
      likes: 189,
      shares: 78,
      views: 923,
      comments: 31,
      engagementScore: 1221
    },
    {
      id: 12,
      title: "Equality and Human Rights Commission Scotland",
      description: "Resources on equality, diversity, and human rights in Scotland, including guidance for professionals working with diverse communities.",
      category: 'advocacy',
      type: 'Human Rights Resources',
      url: 'https://www.equalityhumanrights.com/en/our-work-scotland',
      provider: 'Equality and Human Rights Commission',
      rating: 5,
      featured: false,
      tags: ['Human Rights', 'Equality', 'Scotland', 'Diversity', 'Legal Rights'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-02-10'),
      likes: 134,
      shares: 56,
      views: 678,
      comments: 22,
      engagementScore: 890
    },
    {
      id: 13,
      title: "Social Work Scotland",
      description: "Professional body representing social work services across Scotland, providing policy guidance, professional development, and advocacy for the profession.",
      category: 'advocacy',
      type: 'Professional Body',
      url: 'https://socialworkscotland.org/',
      provider: 'Social Work Scotland',
      rating: 4,
      featured: false,
      tags: ['Professional Body', 'Scotland', 'Policy', 'Professional Development'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-02-15'),
      likes: 112,
      shares: 43,
      views: 534,
      comments: 18,
      engagementScore: 707
    },
    {
      id: 14,
      title: "Mental Health Foundation Scotland",
      description: "Mental health resources and training specifically for Scotland, including culturally appropriate interventions and community mental health approaches.",
      category: 'training',
      type: 'Mental Health Resources',
      url: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/mental-health-scotland',
      provider: 'Mental Health Foundation',
      rating: 5,
      featured: false,
      tags: ['Mental Health', 'Scotland', 'Training', 'Community Health'],
      publishedDate: 'Regularly Updated',
      dateAdded: new Date('2024-02-20'),
      likes: 156,
      shares: 71,
      views: 789,
      comments: 25,
      engagementScore: 1041
    },
    {
      id: 15,
      title: "Care Inspectorate Scotland",
      description: "Official regulator of care services in Scotland, providing standards, inspection reports, and guidance for social care professionals.",
      category: 'toolkits',
      type: 'Regulatory Guidance',
      url: 'https://www.careinspectorate.com/',
      provider: 'Care Inspectorate',
      rating: 4,
      featured: false,
      tags: ['Regulation', 'Care Standards', 'Scotland', 'Inspection', 'Quality'],
      publishedDate: 'Ongoing',
      dateAdded: new Date('2024-03-01'),
      likes: 87,
      shares: 34,
      views: 456,
      comments: 12,
      engagementScore: 589
    }
  ]);

  // Job opportunities data
  const jobPortals = [
    {
      id: 1,
      title: "MyJobScotland",
      description: "Scotland's official public sector job portal. Search for social work positions across all Scottish local councils, NHS Scotland, and other public sector organizations.",
      url: "https://www.myjobscotland.gov.uk/",
      type: "Public Sector Portal",
      coverage: "All Scottish Public Sector",
      featured: true,
      benefits: [
        "All Scottish council social work jobs",
        "NHS Scotland positions",
        "Direct application to employers",
        "Email job alerts available"
      ]
    },
    {
      id: 2,
      title: "Community Care Jobs",
      description: "Leading job board for social care professionals across the UK, with dedicated Scottish section. Features positions from councils, NHS, and private sector.",
      url: "https://jobs.communitycare.co.uk/",
      type: "Specialist Job Board",
      coverage: "UK-wide with Scottish focus",
      featured: true,
      benefits: [
        "Specialist social care focus",
        "Council and private sector jobs",
        "Career advice and resources",
        "Salary guidance tools"
      ]
    },
    {
      id: 3,
      title: "NHS Scotland Jobs",
      description: "Official NHS Scotland recruitment portal for health and social care positions, including hospital social workers and community mental health roles.",
      url: "https://www.jobs.scot.nhs.uk/",
      type: "NHS Portal",
      coverage: "NHS Scotland",
      featured: true,
      benefits: [
        "NHS terms and conditions",
        "Excellent pension scheme",
        "Professional development opportunities",
        "Flexible working options"
      ]
    },
    {
      id: 4,
      title: "Indeed UK - Social Work Scotland",
      description: "Large job aggregator with comprehensive Scottish social work positions from councils, agencies, and private sector employers.",
      url: "https://uk.indeed.com/jobs?q=social+worker&l=Scotland",
      type: "Job Aggregator",
      coverage: "All sectors in Scotland",
      featured: false,
      benefits: [
        "Wide range of employers",
        "Agency and permanent roles",
        "Salary insights",
        "Company reviews"
      ]
    },
    {
      id: 5,
      title: "Reed - Social Work Scotland",
      description: "Major UK recruitment site with dedicated social work section, featuring Scottish council positions and agency work.",
      url: "https://www.reed.co.uk/jobs/social-work-jobs-in-scotland",
      type: "Recruitment Portal",
      coverage: "Scotland-wide",
      featured: false,
      benefits: [
        "Council and agency positions",
        "CV upload and matching",
        "Career advice",
        "Interview preparation"
      ]
    }
  ];

  // Load liked resources from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem('asws-liked-resources');
    if (savedLikes) {
      setLikedResources(new Set(JSON.parse(savedLikes)));
    }
  }, []);

  // Save liked resources to localStorage
  useEffect(() => {
    localStorage.setItem('asws-liked-resources', JSON.stringify([...likedResources]));
  }, [likedResources]);

  const handleLike = (resourceId: number) => {
    const newLikedResources = new Set(likedResources);
    const resource = resources.find(r => r.id === resourceId);
    
    if (newLikedResources.has(resourceId)) {
      newLikedResources.delete(resourceId);
      if (resource) {
        resource.likes -= 1;
        resource.engagementScore -= 1;
      }
    } else {
      newLikedResources.add(resourceId);
      if (resource) {
        resource.likes += 1;
        resource.engagementScore += 1;
      }
    }
    
    setLikedResources(newLikedResources);
    setResources([...resources]);
  };

  const handleShare = async (resource: any) => {
    const shareData = {
      title: resource.title,
      text: resource.description,
      url: window.location.href + '#resource-' + resource.id
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${resource.title}\n${resource.description}\n${shareData.url}`);
        setCopiedResourceId(resource.id);
        setTimeout(() => setCopiedResourceId(null), 2000);
      }
      
      const updatedResources = resources.map(r => 
        r.id === resource.id 
          ? { ...r, shares: r.shares + 1, engagementScore: r.engagementScore + 2 }
          : r
      );
      setResources(updatedResources);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const getSortedResources = (resourceList: any[]) => {
    switch (sortBy) {
      case 'engagement':
        return [...resourceList].sort((a, b) => b.engagementScore - a.engagementScore);
      case 'recent':
        return [...resourceList].sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
      case 'popular':
        return [...resourceList].sort((a, b) => b.likes - a.likes);
      default:
        return resourceList;
    }
  };

  const filteredResources = getSortedResources(
    resources.filter(resource => {
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
  );

  const filteredJobs = jobPortals.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    if (type.includes('PDF') || type.includes('Guide')) return FileText;
    if (type.includes('Video') || type.includes('Webinar')) return Video;
    if (type.includes('Podcast')) return Headphones;
    if (type.includes('Article') || type.includes('Blog')) return Globe;
    if (type.includes('Course') || type.includes('Training')) return Users;
    return BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'toolkits': 'bg-blue-100 text-blue-800',
      'webinars': 'bg-purple-100 text-purple-800',
      'podcasts': 'bg-green-100 text-green-800',
      'blogs': 'bg-amber-100 text-amber-800',
      'training': 'bg-red-100 text-red-800',
      'advocacy': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  const getJobTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Permanent': 'bg-green-100 text-green-800',
      'Contract': 'bg-blue-100 text-blue-800',
      'Part-time': 'bg-purple-100 text-purple-800',
      'Temporary': 'bg-amber-100 text-amber-800'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  const getSectorColor = (sector: string) => {
    const colorMap: { [key: string]: string } = {
      'Public Sector': 'bg-blue-100 text-blue-800',
      'NHS': 'bg-red-100 text-red-800',
      'Agency': 'bg-purple-100 text-purple-800',
      'Private': 'bg-amber-100 text-amber-800'
    };
    return colorMap[sector] || 'bg-gray-100 text-gray-800';
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
            <BookOpen className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Professional Development</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Resources & <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">Jobs</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Access professional development resources, job opportunities, and essential tools 
            for your social work practice in Scotland.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'resources'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BookOpen className="h-4 w-4 inline mr-2" />
                Professional Resources
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'jobs'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="h-4 w-4 inline mr-2" />
                Job Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={activeTab === 'resources' ? "Search resources..." : "Search jobs..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {activeTab === 'resources' && (
              <>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="engagement">Most Engaging</option>
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Liked</option>
                  </select>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="hidden sm:inline">{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content Area */}
      {activeTab === 'resources' ? (
        /* Resources Content */
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Professional Resources ({filteredResources.length})
                </h2>
                <p className="text-gray-600">
                  {selectedCategory === 'all' ? 'Showing all resources' : `Filtered by ${categories.find(c => c.id === selectedCategory)?.label}`}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {filteredResources.map((resource) => {
                const TypeIcon = getTypeIcon(resource.type);
                
                return (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TypeIcon className="h-6 w-6 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {resource.title}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                                {resource.type}
                              </span>
                              {resource.featured && (
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{resource.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                              <span className="font-medium">{resource.provider}</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{resource.publishedDate}</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-3 w-3" />
                                  <span>{resource.views} views</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="h-3 w-3" />
                                  <span>{resource.comments} comments</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {[...Array(resource.rating)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {resource.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 flex items-center space-x-3">
                        <button
                          onClick={() => handleLike(resource.id)}
                          className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                            likedResources.has(resource.id)
                              ? 'bg-red-100 text-red-600'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedResources.has(resource.id) ? 'fill-current' : ''}`} />
                          <span>{resource.likes}</span>
                        </button>
                        
                        <button
                          onClick={() => handleShare(resource)}
                          className="flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        >
                          {copiedResourceId === resource.id ? (
                            <>
                              <Check className="h-4 w-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="h-4 w-4" />
                              <span>{resource.shares}</span>
                            </>
                          )}
                        </button>
                        
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 group-hover:shadow-lg"
                        >
                          <span>Access Resource</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>
      ) : (
        /* Jobs Content */
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Job Opportunities ({filteredJobs.length})
                </h2>
                <p className="text-gray-600">Latest social work positions across Scotland</p>
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full flex items-center">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </span>
                            )}
                            {job.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                Urgent
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{job.postedDate}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 mb-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.jobType)}`}>
                              {job.jobType}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(job.sector)}`}>
                              {job.sector}
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              {job.salary}
                            </span>
                          </div>

                          <p className="text-gray-700 mb-4">{job.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 flex items-center space-x-3">
                      <a
                        href={job.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 group-hover:shadow-lg"
                      >
                        <span>Apply Now</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your search terms or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Submit Resource/Job CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {activeTab === 'resources' ? 'Know of a Great Resource?' : 'Looking for More Job Opportunities?'}
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            {activeTab === 'resources' 
              ? 'Help us build the most comprehensive resource library for BME social workers in Scotland.'
              : 'Set up job alerts and get notified about new social work positions across Scotland.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1">
              {activeTab === 'resources' ? 'Submit a Resource' : 'Set Up Job Alerts'}
              <ExternalLink className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:border-white/50">
              {activeTab === 'resources' ? 'Request a Resource' : 'Career Guidance'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;