
export interface MemberCategory {
  yuva: number;
  mahila: number;
  kanya: number;
}

export interface LocationEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  image?: string;
}

export interface LocationGalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
}

export interface LocationFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Location {
  id: string;
  name: string;
  region: string;
  members: MemberCategory;
  events: LocationEvent[];
  gallery: LocationGalleryItem[];
  features: LocationFeature[];
  adminEmail?: string;
}

export const nepaleseLocations: Location[] = [
  {
    id: 'kathmandu',
    name: 'Kathmandu',
    region: 'Bagmati Province',
    members: { yuva: 450, mahila: 320, kanya: 180 },
    events: [
      {
        id: 'ktm-1',
        title: 'Business Summit 2024',
        date: '2024-03-15',
        description: 'Annual business networking event',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60'
      }
    ],
    gallery: [
      {
        id: 'ktm-g1',
        title: 'Community Gathering',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=60',
        category: 'Community',
        date: '2024-02-10'
      }
    ],
    features: [
      {
        id: 'ktm-f1',
        title: 'Business Hub',
        description: 'Central business networking center',
        icon: 'building'
      }
    ],
    adminEmail: 'admin.kathmandu@agrawal.org'
  },
  {
    id: 'pokhara',
    name: 'Pokhara',
    region: 'Gandaki Province',
    members: { yuva: 280, mahila: 190, kanya: 120 },
    events: [
      {
        id: 'pkr-1',
        title: 'Cultural Festival',
        date: '2024-04-20',
        description: 'Traditional cultural celebration',
        category: 'Cultural',
        image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=500&q=60'
      }
    ],
    gallery: [
      {
        id: 'pkr-g1',
        title: 'Lake Festival',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=500&q=60',
        category: 'Festival',
        date: '2024-03-25'
      }
    ],
    features: [
      {
        id: 'pkr-f1',
        title: 'Tourism Hub',
        description: 'Focus on tourism and hospitality',
        icon: 'mountain'
      }
    ],
    adminEmail: 'admin.pokhara@agrawal.org'
  },
  {
    id: 'lalitpur',
    name: 'Lalitpur',
    region: 'Bagmati Province',
    members: { yuva: 220, mahila: 160, kanya: 95 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'ltp-f1',
        title: 'Heritage Center',
        description: 'Preserving cultural heritage',
        icon: 'landmark'
      }
    ],
    adminEmail: 'admin.lalitpur@agrawal.org'
  },
  {
    id: 'bhaktapur',
    name: 'Bhaktapur',
    region: 'Bagmati Province',
    members: { yuva: 180, mahila: 140, kanya: 85 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'bkt-f1',
        title: 'Art & Craft Center',
        description: 'Traditional arts and crafts promotion',
        icon: 'palette'
      }
    ],
    adminEmail: 'admin.bhaktapur@agrawal.org'
  },
  {
    id: 'biratnagar',
    name: 'Biratnagar',
    region: 'Koshi Province',
    members: { yuva: 320, mahila: 240, kanya: 140 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'brt-f1',
        title: 'Industrial Hub',
        description: 'Focus on industrial development',
        icon: 'factory'
      }
    ],
    adminEmail: 'admin.biratnagar@agrawal.org'
  },
  {
    id: 'chitwan',
    name: 'Chitwan',
    region: 'Bagmati Province',
    members: { yuva: 260, mahila: 180, kanya: 110 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'ctw-f1',
        title: 'Eco-Tourism',
        description: 'Wildlife and eco-tourism focus',
        icon: 'trees'
      }
    ],
    adminEmail: 'admin.chitwan@agrawal.org'
  },
  {
    id: 'butwal',
    name: 'Butwal',
    region: 'Lumbini Province',
    members: { yuva: 200, mahila: 150, kanya: 90 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'btw-f1',
        title: 'Trade Center',
        description: 'Commercial trading hub',
        icon: 'store'
      }
    ],
    adminEmail: 'admin.butwal@agrawal.org'
  },
  {
    id: 'hetauda',
    name: 'Hetauda',
    region: 'Bagmati Province',
    members: { yuva: 150, mahila: 110, kanya: 70 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'htd-f1',
        title: 'Agriculture Hub',
        description: 'Agricultural development center',
        icon: 'wheat'
      }
    ],
    adminEmail: 'admin.hetauda@agrawal.org'
  },
  {
    id: 'janakpur',
    name: 'Janakpur',
    region: 'Madhesh Province',
    members: { yuva: 290, mahila: 200, kanya: 130 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'jnk-f1',
        title: 'Religious Center',
        description: 'Religious and cultural activities',
        icon: 'heart'
      }
    ],
    adminEmail: 'admin.janakpur@agrawal.org'
  },
  {
    id: 'nepalgunj',
    name: 'Nepalgunj',
    region: 'Lumbini Province',
    members: { yuva: 240, mahila: 170, kanya: 100 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'npg-f1',
        title: 'Border Trade',
        description: 'Cross-border trade facilitation',
        icon: 'globe'
      }
    ],
    adminEmail: 'admin.nepalgunj@agrawal.org'
  },
  {
    id: 'dharan',
    name: 'Dharan',
    region: 'Koshi Province',
    members: { yuva: 160, mahila: 120, kanya: 75 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'drn-f1',
        title: 'Education Hub',
        description: 'Educational institution support',
        icon: 'graduation-cap'
      }
    ],
    adminEmail: 'admin.dharan@agrawal.org'
  },
  {
    id: 'birgunj',
    name: 'Birgunj',
    region: 'Madhesh Province',
    members: { yuva: 310, mahila: 220, kanya: 135 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'brg-f1',
        title: 'Trade Gateway',
        description: 'Major trade and commerce center',
        icon: 'truck'
      }
    ],
    adminEmail: 'admin.birgunj@agrawal.org'
  },
  {
    id: 'ghorahi',
    name: 'Ghorahi',
    region: 'Lumbini Province',
    members: { yuva: 130, mahila: 95, kanya: 60 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'ghr-f1',
        title: 'Community Center',
        description: 'Local community development',
        icon: 'users'
      }
    ],
    adminEmail: 'admin.ghorahi@agrawal.org'
  },
  {
    id: 'itahari',
    name: 'Itahari',
    region: 'Koshi Province',
    members: { yuva: 180, mahila: 130, kanya: 80 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'ith-f1',
        title: 'Youth Center',
        description: 'Youth development programs',
        icon: 'star'
      }
    ],
    adminEmail: 'admin.itahari@agrawal.org'
  },
  {
    id: 'dhangadhi',
    name: 'Dhangadhi',
    region: 'Sudurpashchim Province',
    members: { yuva: 170, mahila: 125, kanya: 78 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'dhg-f1',
        title: 'Rural Development',
        description: 'Rural area development focus',
        icon: 'home'
      }
    ],
    adminEmail: 'admin.dhangadhi@agrawal.org'
  },
  {
    id: 'tulsipur',
    name: 'Tulsipur',
    region: 'Lumbini Province',
    members: { yuva: 120, mahila: 85, kanya: 55 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'tls-f1',
        title: 'Social Services',
        description: 'Community social services',
        icon: 'heart-handshake'
      }
    ],
    adminEmail: 'admin.tulsipur@agrawal.org'
  },
  {
    id: 'siddharthanagar',
    name: 'Siddharthanagar',
    region: 'Lumbini Province',
    members: { yuva: 190, mahila: 140, kanya: 85 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'sdn-f1',
        title: 'Spiritual Center',
        description: 'Spiritual and cultural activities',
        icon: 'flower'
      }
    ],
    adminEmail: 'admin.siddharthanagar@agrawal.org'
  },
  {
    id: 'kalaiya',
    name: 'Kalaiya',
    region: 'Madhesh Province',
    members: { yuva: 140, mahila: 100, kanya: 65 },
    events: [],
    gallery: [],
    features: [
      {
        id: 'kly-f1',
        title: 'Agricultural Trade',
        description: 'Agricultural product trading',
        icon: 'tractor'
      }
    ],
    adminEmail: 'admin.kalaiya@agrawal.org'
  }
];

export const getLocationById = (id: string): Location | undefined => {
  return nepaleseLocations.find(location => location.id === id);
};

export const getLocationsByRegion = (region: string): Location[] => {
  return nepaleseLocations.filter(location => location.region === region);
};
