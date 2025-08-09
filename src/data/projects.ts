const projects = [
  {
    slug: 'backlinksfusion-platform',
    title: 'BacklinksFusion Guest Posting Platform',
    summary: 'Built a fully automated guest post marketplace for SEO agencies and businesses.',
    content: 'We developed a scalable full-stack web platform using Next.js, MongoDB, and Tailwind CSS. It features real-time filtering, vendor dashboards, site listings with SEO metrics (DA, PA, DR), and secure order handling. The goal was to streamline link building through an e-commerce-like UX.',
    date: '2025-05-18',
    image: 'https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stdXBsb2FkcyIsICJrIjogInBlbmRpbmdfcGhvdG8vMzg0NDg2ODc2OS9tZWRpdW0uanBnIiwgImUiOiAxNzUyOTc2MzgxLCAibSI6IDB9LCAia2RINDk0cndQRSsyWG5JWVdVQXBKRmxwV2E0Il0=/3844868769_medium.jpg',
    skills: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    tools: ['Vercel', 'Figma', 'Ahrefs API', 'MongoDB Atlas'],
  },
  {
  slug: 'phoenix-agency-alpha',
  title: 'Phoenix Project Alpha – Predictive AI Analytics Dashboard',
  summary: 'Developed by Phoenix Creative Group, this advanced AI dashboard delivers real-time data insights and trend forecasting.',
  content: 'Phoenix Creative Group engineered an AI-powered analytics platform using React and a Python Flask backend. Designed for enterprise clients, it processes structured data to predict behavioral trends through machine learning models hosted on AWS Lambda. The project also features interactive visualizations using Chart.js and secure PostgreSQL data handling.',
  date: '2025-01-15',
  image: 'https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stdXBsb2FkcyIsICJrIjogInBlbmRpbmdfcGhvdG8vMzg0NDg3Mjc1NS9tZWRpdW0uanBnIiwgImUiOiAxNzUyOTc2ODU4LCAibSI6IDB9LCAiTTJ2RkZGVjRLTU9hNUo5TUxFek9xV1lxNHJzIl0=/3844872755_medium.jpg',
  skills: ['React', 'Python', 'Flask', 'Chart.js'],
  tools: ['AWS Lambda', 'Jupyter', 'PostgreSQL', 'Figma']
},
  {
    slug: 'saas-product',
    title: 'SaaS Product : ContentAI – AI-Powered Blog & SEO Writer',
    summary: 'A sleek mobile app for tracking expenses and managing personal finance goals.',
    content: 'We created a mobile-first experience with React Native, integrated with Plaid API for real-time banking data sync. The app uses Firebase for backend services and push notifications.',
    date: '2025-03-22',
    image: 'https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stdXBsb2FkcyIsICJrIjogInBlbmRpbmdfcGhvdG8vMzg0NDg3ODUwMS9tZWRpdW0uanBnIiwgImUiOiAxNzUyOTc3NzQyLCAibSI6IDB9LCAia0FOOXhSTkl4emZyR1NjTUV0LzFGcTFnbGNFIl0=/3844878501_medium.jpg',
    skills: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    tools: ['Plaid API', 'Figma', 'Expo'],
  },
  {
  slug: 'online-pharmacy',
  title: 'Project Gamma – Online Medicine Delivery Platform',
  summary: 'A fast and secure pharmacy e-commerce solution with smart prescription management and doorstep delivery, built with Next.js and GraphQL.',
  content: 'We developed a robust medicine ordering platform featuring real-time inventory updates, personalized health recommendations, and location-based delivery options. The platform uses GraphQL for fast data querying and Stripe for seamless online payments. A custom CMS enables pharma admins to easily manage product listings, categories, prescriptions, and customer orders. Built for scalability and HIPAA-compliance-ready, the system supports recurring medicine schedules and emergency orders.',
  date: '2023-05-10',
  image: 'https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stdXBsb2FkcyIsICJrIjogInBlbmRpbmdfcGhvdG8vMzg0NDg4MDQ2My9tZWRpdW0uanBnIiwgImUiOiAxNzUyOTc4MDE4LCAibSI6IDB9LCAiaXRZY2ZVNE9hd2svUWxOenNHcFFWcVpmZlVFIl0=/3844880463_medium.jpg',
  skills: ['Next.js', 'GraphQL', 'Tailwind CSS', 'Stripe API'],
  tools: ['Apollo Server', 'Vercel', 'Figma', 'Stripe'],
  },
  {
  slug: 'flutter-music-player',
  title: 'Project Delta – Cross-Platform Music Player App',
  summary: 'A sleek music streaming app built with Flutter for Android and iOS, offering offline playback, playlists, and modern UI.',
  content: 'We developed a high-performance Flutter music app supporting audio streaming, offline downloads, and dynamic playlist management. Built with Flutter and Dart, the app integrates Firebase for user auth and Firestore for storing track data and user preferences. It features a visually rich UI with animations, equalizer effects, and dark/light mode support. Audio playback is powered by just_audio and audio_service packages, ensuring smooth background play and notification controls. Designed for music startups targeting Gen-Z listeners with premium features and a subscription model.',
  date: '2024-07-01',
  image: 'https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stdXBsb2FkcyIsICJrIjogInBlbmRpbmdfcGhvdG8vMzg0NDg4NzczOS9tZWRpdW0uanBnIiwgImUiOiAxNzUyOTc5MDc5LCAibSI6IDB9LCAiYW81NWF4bEZsQUVRL1lWRjh5YTNUdmQ0TkYwIl0=/3844887739_medium.jpg',
  skills: ['Flutter', 'Dart', 'Firebase', 'just_audio'],
  tools: ['Firestore', 'Figma', 'audio_service', 'Firebase Auth'],
},
];

export default projects;
