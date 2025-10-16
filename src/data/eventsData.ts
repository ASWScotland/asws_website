import { Event, PastEvent } from '../utils/eventManager';

// All events data - this will be automatically filtered by date
export const allUpcomingEvents: Event[] = [
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
    date: "February 15, 2025",
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
    description: "Our annual AGM followed by our prestigious awards ceremony recognising outstanding contributions to the African social work community.",
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
    description: "A crucial workshop in partnership with Unison Glasgow specifically for Black and ethnic minority social work and health social care workers facing discriminatory and bullying challenges in their workplace.",
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
  },
  {
    id: 6,
    title: "African Family Parenting & Scottish Child Protection System Simulation Series",
    date: "TBC",
    time: "TBC",
    location: "TBC",
    description: "Interactive workshops where African and ethnic minority parents engage in role-play scenarios covering parenting, discipline, schooling, and child protection. Experience firsthand how Scottish law and social services approach these situations to better align your parenting with Scotland's safeguarding framework.",
    type: "Training",
    status: "Coming Soon",
    capacity: 40,
    registered: 0,
    features: [
      "Interactive role-play scenarios",
      "Scottish law and social services perspective",
      "Cultural sensitivity training",
      "Expert facilitators and Q&A sessions",
      "Practical guidance and resources",
      "Safe learning environment",
      "Certificate of participation",
      "Follow-up support materials"
    ]
  },
  {
    id: 7,
    title: "African Social Workers Scotland: Annual Dinner & Dance",
    date: "November 15, 2025",
    time: "6:00 PM - 11:00 PM",
    location: "Bella-Rose Hall, 1005 Paisley Road West, Bellahouston, Glasgow G52 1EQ",
    description: "Join us for our signature annual celebration bringing together African social workers, students, families, and supporters across Scotland. An evening of recognition, cultural celebration, networking, and community building with traditional cuisine, live entertainment, and awards ceremony.",
    type: "Annual Event",
    status: "Save the Date",
    capacity: 150,
    registered: 0,
    features: [
      "Three-course traditional dinner",
      "Live music and cultural performances",
      "Annual excellence awards ceremony",
      "Professional networking opportunities",
      "Cultural fashion showcase",
      "Community recognition presentations",
      "Dancing and entertainment",
      "Photography and memories"
    ]
  },
  // Example of past events that should automatically move to past events
  {
    id: 8,
    title: "Winter Professional Development Workshop",
    date: "December 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Glasgow University",
    description: "Comprehensive workshop on professional development and career advancement for African social workers.",
    type: "Training",
    status: "Completed",
    capacity: 50,
    registered: 45,
    features: [
      "Career planning sessions",
      "CV and interview workshops",
      "Networking opportunities",
      "Professional mentorship matching"
    ]
  },
  {
    id: 9,
    title: "Community Christmas Celebration",
    date: "December 20, 2024",
    time: "3:00 PM - 8:00 PM",
    location: "Glasgow Community Centre",
    description: "Annual Christmas celebration bringing together African families and social work professionals across Scotland.",
    type: "Community Event",
    status: "Completed",
    capacity: 100,
    registered: 87,
    features: [
      "Traditional African and Scottish festivities",
      "Children's activities and entertainment",
      "Community dinner",
      "Cultural performances"
    ]
  }
];

export const staticPastEvents: PastEvent[] = [
  {
    id: 1,
    title: "African Social Workers Scotland In-person Migrant Event",
    date: "June 14, 2025",
    location: "UNISON Glasgow Office, 84 Bell St, Glasgow G1 1LQ",
    description: "A powerful in-person gathering bringing together African social workers and migrant workers to share experiences, voice concerns, and discuss practical ways for positive change. This collaborative event with UNISON Glasgow focused on building the strongest voice for migrant workers in Scotland while providing essential rights education and networking opportunities.",
    attendees: 40,
    type: "Advocacy & Rights",
    highlights: [
      "Shared personal experiences and challenges faced by migrant workers",
      "Voiced concerns about workplace discrimination and rights violations",
      "Discussed practical strategies for creating positive change",
      "Comprehensive rights education and legal awareness session",
      "Professional networking and community building",
      "Partnership strengthening with UNISON Glasgow",
      "Action planning for future advocacy initiatives"
    ],
    images: [
      "/Unison Migrat event.jpg"
    ]
  },
  {
    id: 2,
    title: "African Social Workers Scotland Annual Dinner Dance 2024",
    date: "Saturday 23rd November, 2024",
    location: "Mercure Glasgow City Hotel, 20 Ingram Street, Glasgow G1 1DQ",
    description: "Our signature annual celebration bringing together African social workers, students, families, and supporters across Scotland. An elegant evening starting at 6pm featuring formal/African attire, traditional cuisine, live entertainment, and community building. Friends & family were cordially invited to this special celebration.",
    attendees: 85,
    type: "Annual Event",
    highlights: [
      "Elegant dinner with food, drinks and traditional cuisine",
      "Music and dancing to beautiful music from around the world",
      "Professional networking opportunities across Scotland",
      "Friends & family cordially invited community gathering",
      "Evening entertainment and community bonding"
    ],
    images: [
      "/FB_IMG_1757245030967 copy.jpg"
    ]
  }
];