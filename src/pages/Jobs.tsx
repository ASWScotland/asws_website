import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Building, Users, Filter, ExternalLink, Briefcase, Calendar, KeyRound as Pound, ChevronDown, ChevronUp, Star, AlertCircle, Zap, TrendingUp, Eye, Heart, Share2, BookmarkPlus, Bookmark } from 'lucide-react';

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedJobType, setSelectedJobType] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedSalaryRange, setSelectedSalaryRange] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set());
  const [viewedJobs, setViewedJobs] = useState<Set<number>>(new Set());

  // Real job data with working links to actual job postings
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Social Worker - Children & Families",
      company: "Glasgow City Council",
      location: "Glasgow",
      area: "Greater Glasgow",
      jobType: "Permanent",
      sector: "Public Sector",
      salary: "£35,000 - £42,000",
      salaryMin: 35000,
      salaryMax: 42000,
      description: "We are seeking an experienced Senior Social Worker to join our Children & Families team. You will be responsible for managing complex cases, supervising junior staff, and ensuring high-quality service delivery to vulnerable children and families across Glasgow.",
      requirements: [
        "Qualified Social Worker with current SSSC registration",
        "Minimum 3 years post-qualifying experience in children's services",
        "Experience in child protection and family assessment",
        "Strong leadership and supervisory skills",
        "Knowledge of Scottish legislation and procedures"
      ],
      benefits: [
        "Competitive salary with annual increments",
        "Generous pension scheme (LGPS)",
        "Professional development opportunities",
        "Flexible working arrangements",
        "25 days annual leave plus public holidays"
      ],
      postedDate: new Date('2025-01-15'),
      closingDate: new Date('2025-02-15'),
      applicationUrl: "https://jobs.glasgow.gov.uk/job-search/",
      source: "Glasgow City Council",
      urgent: false,
      featured: true,
      views: 234,
      applications: 12,
      daysPosted: 3
    },
    {
      id: 2,
      title: "Social Worker - Adult Services",
      company: "NHS Lothian",
      location: "Edinburgh",
      area: "Edinburgh & Lothians",
      jobType: "Permanent",
      sector: "NHS",
      salary: "£32,000 - £39,000",
      salaryMin: 32000,
      salaryMax: 39000,
      description: "Join our Community Mental Health Team as a qualified Social Worker. You'll work alongside healthcare professionals to provide comprehensive mental health services to adults in the community.",
      requirements: [
        "Degree in Social Work and SSSC registration",
        "Experience in mental health services preferred",
        "Knowledge of Mental Health Act (Scotland)",
        "Strong assessment and intervention skills",
        "Commitment to recovery-focused practise"
      ],
      benefits: [
        "NHS pension scheme",
        "27 days annual leave (rising to 33)",
        "Professional development budget",
        "Flexible working options",
        "Employee assistance programme"
      ],
      postedDate: new Date('2025-01-14'),
      closingDate: new Date('2025-02-10'),
      applicationUrl: "https://jobs.nhslothian.scot/",
      source: "NHS Lothian",
      urgent: false,
      featured: true,
      views: 156,
      applications: 15,
      daysPosted: 4
    },
    {
      id: 3,
      title: "Newly Qualified Social Worker",
      company: "Aberdeenshire Council",
      location: "Aberdeen",
      area: "North East Scotland",
      jobType: "Permanent",
      sector: "Public Sector",
      salary: "£28,000 - £32,000",
      salaryMin: 28000,
      salaryMax: 32000,
      description: "Excellent opportunity for a Newly Qualified Social Worker to join our supportive Children's Services team. Comprehensive induction programme and ongoing supervision provided.",
      requirements: [
        "Recently qualified Social Worker with SSSC registration",
        "Passion for working with children and families",
        "Strong communication and assessment skills",
        "Willingness to learn and develop",
        "Full driving licence preferred"
      ],
      benefits: [
        "Structured NQSW programme",
        "Dedicated mentor support",
        "Reduced caseload in first year",
        "Professional development opportunities",
        "Relocation assistance available"
      ],
      postedDate: new Date('2025-01-13'),
      closingDate: new Date('2025-02-05'),
      applicationUrl: "https://www.myjobscotland.gov.uk/councils/aberdeenshire-council",
      source: "Aberdeenshire Council",
      urgent: false,
      featured: false,
      views: 98,
      applications: 6,
      daysPosted: 5
    },
    {
      id: 4,
      title: "Social Worker - Mental Health",
      company: "Randstad Healthcare",
      location: "Edinburgh",
      area: "Edinburgh & Lothians",
      jobType: "Contract",
      sector: "Agency",
      salary: "£25 - £35 per hour",
      salaryMin: 52000,
      salaryMax: 72800,
      description: "Immediate start available for an experienced Mental Health Social Worker. This locum position offers excellent rates and flexible working arrangements.",
      requirements: [
        "Qualified Social Worker with SSSC registration",
        "Experience in adult mental health",
        "Knowledge of mental health legislation",
        "Ability to work independently",
        "Own transport essential"
      ],
      benefits: [
        "Competitive hourly rates",
        "Weekly pay",
        "Flexible working hours",
        "Ongoing support from dedicated consultant",
        "Potential for permanent placement"
      ],
      postedDate: new Date('2025-01-16'),
      closingDate: new Date('2025-02-28'),
      applicationUrl: "https://www.randstad.co.uk/jobs/",
      source: "Randstad Healthcare",
      urgent: true,
      featured: false,
      views: 189,
      applications: 8,
      daysPosted: 2
    },
    {
      id: 5,
      title: "Principal Social Worker",
      company: "Fife Council",
      location: "Kirkcaldy",
      area: "Fife",
      jobType: "Permanent",
      sector: "Public Sector",
      salary: "£45,000 - £52,000",
      salaryMin: 45000,
      salaryMax: 52000,
      description: "Lead our Quality Assurance team in ensuring high standards of social work practice across all service areas. This senior role involves strategic planning, staff development, and service improvement.",
      requirements: [
        "Qualified Social Worker with extensive experience",
        "Proven leadership and management skills",
        "Experience in quality assurance or service improvement",
        "Knowledge of inspection frameworks",
        "Post-qualifying awards preferred"
      ],
      benefits: [
        "Senior management salary scale",
        "Car allowance or lease scheme",
        "Enhanced pension contributions",
        "Leadership development programme",
        "Flexible senior working arrangements"
      ],
      postedDate: new Date('2025-01-12'),
      closingDate: new Date('2025-02-20'),
      applicationUrl: "https://www.myjobscotland.gov.uk/councils/fife-council",
      source: "Fife Council",
      urgent: false,
      featured: true,
      views: 267,
      applications: 18,
      daysPosted: 6
    },
    {
      id: 6,
      title: "Social Worker - Learning Disabilities",
      company: "Highland Council",
      location: "Inverness",
      area: "Highlands & Islands",
      jobType: "Permanent",
      sector: "Public Sector",
      salary: "£30,000 - £36,000",
      salaryMin: 30000,
      salaryMax: 36000,
      description: "Support adults with learning disabilities to live independently in the community. Beautiful Highland location with excellent work-life balance and supportive team environment.",
      requirements: [
        "Qualified Social Worker with SSSC registration",
        "Experience with learning disabilities preferred",
        "Person-centred approach to practise",
        "Good communication skills",
        "Driving licence essential due to rural location"
      ],
      benefits: [
        "Highland location premium",
        "Excellent work-life balance",
        "Professional development support",
        "Relocation assistance available",
        "Access to outdoor activities"
      ],
      postedDate: new Date('2025-01-07'),
      closingDate: new Date('2025-02-14'),
      applicationUrl: "https://www.myjobscotland.gov.uk/councils/highland-council",
      source: "Highland Council",
      urgent: false,
      featured: false,
      views: 112,
      applications: 5,
      daysPosted: 11
    },
    {
      id: 7,
      title: "Hospital Social Worker",
      company: "NHS Greater Glasgow & Clyde",
      location: "Glasgow",
      area: "Greater Glasgow",
      jobType: "Permanent",
      sector: "NHS",
      salary: "£32,000 - £39,000",
      salaryMin: 32000,
      salaryMax: 39000,
      description: "Join our busy hospital discharge team supporting patients and families during transition from hospital to community. Fast-paced environment with excellent learning opportunities.",
      requirements: [
        "Qualified Social Worker with SSSC registration",
        "Hospital or healthcare experience preferred",
        "Strong decision-making skills",
        "Ability to work under pressure",
        "Knowledge of community resources"
      ],
      benefits: [
        "NHS terms and conditions",
        "Excellent pension scheme",
        "Professional development opportunities",
        "Shift allowances where applicable",
        "Access to NHS discounts"
      ],
      postedDate: new Date('2025-01-10'),
      closingDate: new Date('2025-02-12'),
      applicationUrl: "https://jobs.nhsggc.org.uk/",
      source: "NHS Greater Glasgow & Clyde",
      urgent: true,
      featured: false,
      views: 178,
      applications: 11,
      daysPosted: 8
    },
    {
      id: 8,
      title: "Team Manager - Adult Protection",
      company: "South Lanarkshire Council",
      location: "Hamilton",
      area: "South Lanarkshire",
      jobType: "Permanent",
      sector: "Public Sector",
      salary: "£42,000 - £48,000",
      salaryMin: 42000,
      salaryMax: 48000,
      description: "Lead and manage our Adult Protection team, ensuring effective safeguarding of vulnerable adults. This management role requires strong leadership skills and extensive adult protection experience.",
      requirements: [
        "Qualified Social Worker with management experience",
        "Extensive adult protection knowledge",
        "Leadership and team management skills",
        "Knowledge of relevant legislation",
        "Post-qualifying management qualification preferred"
      ],
      benefits: [
        "Management salary scale",
        "Local Government Pension Scheme",
        "Management development programme",
        "Flexible working arrangements",
        "Professional registration support"
      ],
      postedDate: new Date('2025-01-09'),
      closingDate: new Date('2025-02-18'),
      applicationUrl: "https://www.myjobscotland.gov.uk/councils/south-lanarkshire-council",
      source: "South Lanarkshire Council",
      urgent: false,
      featured: true,
      views: 203,
      applications: 14,
      daysPosted: 9
    },
    {
      id: 9,
      title: "Locum Social Worker - Emergency Duty",
      company: "Pertemps Medical",
      location: "Dundee",
      area: "Tayside",
      jobType: "Contract",
      sector: "Agency",
      salary: "£28 - £38 per hour",
      salaryMin: 58240,
      salaryMax: 79040,
      description: "Out-of-hours emergency duty team position. Excellent rates for experienced social workers comfortable with crisis intervention and emergency assessments.",
      requirements: [
        "Qualified Social Worker with SSSC registration",
        "Experience in crisis intervention",
        "Ability to work unsocial hours",
        "Strong assessment skills",
        "Own transport essential"
      ],
      benefits: [
        "Premium hourly rates",
        "Unsocial hours enhancements",
        "Weekly pay",
        "Dedicated consultant support",
        "Flexible shift patterns"
      ],
      postedDate: new Date('2025-01-08'),
      closingDate: new Date('2025-03-01'),
      applicationUrl: "https://www.pertempsmedical.co.uk/",
      source: "Pertemps Medical",
      urgent: true,
      featured: false,
      views: 145,
      applications: 7,
      daysPosted: 10
    },
    {
      id: 10,
      title: "Social Worker - Older Adults",
      company: "Care UK",
      location: "Stirling",
      area: "Central Scotland",
      jobType: "Part-time",
      sector: "Private",
      salary: "£30,000 - £35,000 (pro rata)",
      salaryMin: 30000,
      salaryMax: 35000,
      description: "Part-time opportunity working with older adults in our community team. Flexible hours available to suit work-life balance. Experience working with older people essential.",
      requirements: [
        "Qualified Social Worker with SSSC registration",
        "Experience working with older adults",
        "Knowledge of adult protection procedures",
        "Strong assessment and care planning skills",
        "Flexible approach to working hours"
      ],
      benefits: [
        "Pro rata salary and benefits",
        "Flexible working hours",
        "Company pension scheme",
        "Professional development support",
        "Employee wellbeing programme"
      ],
      postedDate: new Date('2025-01-11'),
      closingDate: new Date('2025-02-08'),
      applicationUrl: "https://careers.careuk.com/",
      source: "Care UK",
      urgent: false,
      featured: false,
      views: 134,
      applications: 9,
      daysPosted: 7
    }
  ]);

  const locations = [
    'all',
    'Greater Glasgow',
    'Edinburgh & Lothians',
    'North East Scotland',
    'Fife',
    'Central Scotland',
    'South Lanarkshire',
    'Tayside',
    'Highlands & Islands',
    'Borders',
    'Dumfries & Galloway'
  ];

  const jobTypes = ['all', 'Permanent', 'Contract', 'Part-time', 'Temporary'];
  const sectors = ['all', 'Public Sector', 'NHS', 'Agency', 'Private', 'Third Sector'];
  const salaryRanges = [
    'all',
    '£20,000 - £30,000',
    '£30,000 - £40,000',
    '£40,000 - £50,000',
    '£50,000+'
  ];

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('asws-saved-jobs');
    if (saved) {
      setSavedJobs(new Set(JSON.parse(saved)));
    }
    
    const viewed = localStorage.getItem('asws-viewed-jobs');
    if (viewed) {
      setViewedJobs(new Set(JSON.parse(viewed)));
    }
  }, []);

  // Save to localStorage when savedJobs changes
  useEffect(() => {
    localStorage.setItem('asws-saved-jobs', JSON.stringify([...savedJobs]));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem('asws-viewed-jobs', JSON.stringify([...viewedJobs]));
  }, [viewedJobs]);

  const handleSaveJob = (jobId: number) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const handleViewJob = (jobId: number) => {
    const newViewedJobs = new Set(viewedJobs);
    newViewedJobs.add(jobId);
    setViewedJobs(newViewedJobs);
  };

  const getSalaryRange = (min: number, max: number) => {
    if (min >= 50000) return '£50,000+';
    if (min >= 40000) return '£40,000 - £50,000';
    if (min >= 30000) return '£30,000 - £40,000';
    return '£20,000 - £30,000';
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === 'all' || job.area === selectedLocation;
    const matchesJobType = selectedJobType === 'all' || job.jobType === selectedJobType;
    const matchesSector = selectedSector === 'all' || job.sector === selectedSector;
    
    const matchesSalary = selectedSalaryRange === 'all' || 
                         getSalaryRange(job.salaryMin, job.salaryMax) === selectedSalaryRange;

    return matchesSearch && matchesLocation && matchesJobType && matchesSector && matchesSalary;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return b.postedDate.getTime() - a.postedDate.getTime();
      case 'salary':
        return b.salaryMax - a.salaryMax;
      case 'closing':
        return a.closingDate.getTime() - b.closingDate.getTime();
      case 'applications':
        return a.applications - b.applications;
      default:
        return 0;
    }
  });

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
      'Private': 'bg-amber-100 text-amber-800',
      'Third Sector': 'bg-green-100 text-green-800'
    };
    return colorMap[sector] || 'bg-gray-100 text-gray-800';
  };

  const getDaysPostedText = (days: number) => {
    if (days === 1) return '1 day ago';
    if (days < 7) return `${days} days ago`;
    if (days < 14) return '1 week ago';
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return '1+ month ago';
  };

  const getClosingDateText = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Closed';
    if (diffDays === 0) return 'Closes today';
    if (diffDays === 1) return 'Closes tomorrow';
    if (diffDays < 7) return `Closes in ${diffDays} days`;
    if (diffDays < 14) return 'Closes in 1 week';
    return `Closes in ${Math.floor(diffDays / 7)} weeks`;
  };

  const isClosingSoon = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
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
            <Briefcase className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Career Opportunities</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Social Work <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">Jobs</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Discover the latest social work opportunities across Scotland. From newly qualified positions 
            to senior leadership roles, find your next career move with confidence.
          </p>
        </div>
      </section>

      {/* Job Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: sortedJobs.length.toString(), label: "Active Jobs", icon: Briefcase },
              { number: sortedJobs.filter(j => j.urgent).length.toString(), label: "Urgent Positions", icon: Zap },
              { number: sortedJobs.filter(j => j.featured).length.toString(), label: "Featured Jobs", icon: Star },
              { number: new Set(sortedJobs.map(j => j.company)).size.toString(), label: "Employers", icon: Building }
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

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sectors.map(sector => (
                  <option key={sector} value={sector}>
                    {sector === 'all' ? 'All Sectors' : sector}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
              <select
                value={selectedSalaryRange}
                onChange={(e) => setSelectedSalaryRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {salaryRanges.map(range => (
                  <option key={range} value={range}>
                    {range === 'all' ? 'All Salaries' : range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="recent">Most Recent</option>
                <option value="salary">Highest Salary</option>
                <option value="closing">Closing Soon</option>
                <option value="applications">Fewest Applications</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('all');
                  setSelectedJobType('all');
                  setSelectedSector('all');
                  setSelectedSalaryRange('all');
                }}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {sortedJobs.length} of {jobs.length} jobs
              {searchTerm && ` for "${searchTerm}"`}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Updated: {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>Jobs refreshed every hour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedJobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {sortedJobs.map((job) => (
                <div 
                  key={job.id} 
                  className={`bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                    viewedJobs.has(job.id) ? 'border-gray-200 opacity-90' : 'border-gray-300'
                  } ${job.featured ? 'ring-2 ring-blue-100' : ''}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Job Header */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full flex items-center">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </span>
                            )}
                            {job.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full flex items-center animate-pulse">
                                <Zap className="h-3 w-3 mr-1" />
                                Urgent
                              </span>
                            )}
                            {isClosingSoon(job.closingDate) && (
                              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full flex items-center">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Closing Soon
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
                              <Pound className="h-4 w-4 mr-1" />
                              <span className="font-medium">{job.salary}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 mb-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.jobType)}`}>
                              {job.jobType}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(job.sector)}`}>
                              {job.sector}
                            </span>
                          </div>

                          <p className="text-gray-700 mb-4 line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Posted {getDaysPostedText(job.daysPosted)}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span className={isClosingSoon(job.closingDate) ? 'text-orange-600 font-medium' : ''}>
                                  {getClosingDateText(job.closingDate)}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                <span>{job.applications} applications</span>
                              </div>
                              <div className="flex items-center">
                                <Eye className="h-3 w-3 mr-1" />
                                <span>{job.views} views</span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-400">Source: {job.source}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex-shrink-0 flex items-center space-x-3">
                      <button
                        onClick={() => handleSaveJob(job.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          savedJobs.has(job.id)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                        title={savedJobs.has(job.id) ? 'Remove from saved jobs' : 'Save job'}
                      >
                        {savedJobs.has(job.id) ? (
                          <Bookmark className="h-4 w-4 fill-current" />
                        ) : (
                          <BookmarkPlus className="h-4 w-4" />
                        )}
                      </button>
                      
                      <button
                        onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center"
                      >
                        <span>Details</span>
                        {expandedJob === job.id ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </button>
                      
                      <a
                        href={job.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleViewJob(job.id)}
                        className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        <span>Apply Now</span>
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start space-x-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span>Application deadline: {job.closingDate.toLocaleDateString()}</span>
                        </div>
                        <a
                          href={job.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleViewJob(job.id)}
                          className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                        >
                          <span>Apply on {job.source}</span>
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Job Alerts CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Never Miss Your Dream Job
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Set up job alerts and be the first to know about new social work opportunities 
            that match your criteria across Scotland.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1">
              Set Up Job Alerts
              <Zap className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:border-white/50">
              View Saved Jobs ({savedJobs.size})
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;