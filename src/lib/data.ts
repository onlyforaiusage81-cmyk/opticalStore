// Placeholder imagery: curated stock photos served from /public/images, standing in
// for a commissioned studio shoot. Swap these files for real photography of Indian
// models before launch (keep the same filenames and no code changes are needed).

export const siteConfig = {
  name: "Vision Optics",
  since: "2010",
  tagline: "See the World, In Style.",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  email: "hello@visionoptics.in",
  address: {
    line1: "Shop No. 4, Wagholi Main Road, Near Phulgaon Chowk",
    line2: "Wagholi, Pune – 412207, Maharashtra",
    pincode: "412207",
  },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "21:00", label: "Mon – Sat" },
    { days: ["Sunday"], opens: "11:00", closes: "19:00", label: "Sunday" },
  ],
  mapEmbedSrc: "https://www.google.com/maps?q=Wagholi,Pune,Maharashtra&output=embed",
  googleReviewUrl: "https://g.page/r/visionoptics-wagholi/review",
  social: {
    instagram: "https://instagram.com/visionoptics.wagholi",
    facebook: "https://facebook.com/visionoptics.wagholi",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Eyewear", href: "#eyewear", mega: "eyewear" },
  { label: "Collections", href: "#collections", mega: "collections" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const megaMenu = {
  eyewear: {
    columns: [
      {
        heading: "Shop by wearer",
        links: ["Men's Eyewear", "Women's Eyewear", "Kids' Eyewear", "Unisex Frames"],
      },
      {
        heading: "Shop by type",
        links: ["Eyeglasses", "Sunglasses", "Computer Glasses", "Contact Lenses"],
      },
    ],
    image: "/images/product-heritage-round.jpg",
    imageCaption: "The Heritage Round, in warm tortoise",
  },
  collections: {
    columns: [
      {
        heading: "Curated edits",
        links: ["New Arrivals", "Premium Titanium", "Classic Acetate", "Sport & Active"],
      },
      {
        heading: "By occasion",
        links: ["Office Edit", "Campus Edit", "Wedding Edit", "Travel Edit"],
      },
    ],
    image: "/images/product-meridian-cateye.jpg",
    imageCaption: "The Meridian Collection",
  },
};

export const features = [
  {
    icon: "Eye",
    title: "Free Eye Testing",
    description: "Comprehensive vision checks by certified optometrists, on the house.",
  },
  {
    icon: "Gem",
    title: "Premium Frames",
    description: "Hand-picked acetate and titanium frames from India and abroad.",
  },
  {
    icon: "ShieldCheck",
    title: "Blue Light Protection",
    description: "Every lens available with advanced blue-light and UV coating.",
  },
  {
    icon: "Truck",
    title: "Same Day Delivery",
    description: "Order by noon, collect your ready pair by evening — in Wagholi.",
  },
];

export const categories = [
  {
    id: "men",
    title: "Men",
    subtitle: "Bold frames for the boardroom and beyond",
    image: "/images/category-men.jpg",
    href: "#collections",
  },
  {
    id: "women",
    title: "Women",
    subtitle: "Editorial silhouettes with everyday ease",
    image: "/images/category-women.jpg",
    href: "#collections",
  },
  {
    id: "kids",
    title: "Kids",
    subtitle: "Durable, playful frames built for recess",
    image: "/images/category-kids.jpg",
    href: "#collections",
  },
];

export const products = [
  {
    id: "p1",
    name: "The Heritage Round",
    category: "Men · Acetate",
    price: 4200,
    offerPrice: 2999,
    image: "/images/product-heritage-round.jpg",
    tag: "Bestseller",
  },
  {
    id: "p2",
    name: "The Meridian Cat-Eye",
    category: "Women · Acetate",
    price: 3800,
    offerPrice: 2699,
    image: "/images/product-meridian-cateye.jpg",
    tag: "New",
  },
  {
    id: "p3",
    name: "The Clubmaster Classic",
    category: "Unisex · Metal",
    price: 5200,
    offerPrice: 3999,
    image: "/images/product-clubmaster.jpg",
    tag: "Bestseller",
  },
  {
    id: "p4",
    name: "The Riviera Sun",
    category: "Women · Sunglasses",
    price: 4600,
    offerPrice: 3299,
    image: "/images/product-riviera-sun.jpg",
    tag: "New",
  },
  {
    id: "p5",
    name: "The Voyager Aviator",
    category: "Men · Sunglasses",
    price: 5400,
    offerPrice: 3799,
    image: "/images/product-voyager-aviator.jpg",
    tag: "Limited",
  },
  {
    id: "p6",
    name: "The Study Blue-Cut",
    category: "Unisex · Computer Glasses",
    price: 2800,
    offerPrice: 1999,
    image: "/images/product-study-bluecut.jpg",
    tag: "Popular",
  },
  {
    id: "p7",
    name: "The Featherlight Titanium",
    category: "Men · Titanium",
    price: 6800,
    offerPrice: 4999,
    image: "/images/product-featherlight.jpg",
    tag: "Premium",
  },
  {
    id: "p8",
    name: "The Junior Explorer",
    category: "Kids · Flex Frame",
    price: 2400,
    offerPrice: 1699,
    image: "/images/product-junior-explorer.jpg",
    tag: "Durable",
  },
  {
    id: "p9",
    name: "The Atelier Oval",
    category: "Women · Titanium",
    price: 5600,
    offerPrice: 4199,
    image: "/images/product-atelier-oval.jpg",
    tag: "New",
  },
];

export const brands = [
  { name: "Ray-Ban", logo: "/images/brands/ray-ban.trimmed.png" },
  { name: "Oakley", logo: "/images/brands/oakley.trimmed.png" },
  { name: "Vogue", logo: "/images/brands/vogue.trimmed.png" },
  { name: "Titan Eye+", logo: "/images/brands/titan-eye.trimmed.png" },
  { name: "Fastrack", logo: "/images/brands/fastrack.trimmed.png" },
  { name: "Carrera", logo: "/images/brands/carrera.trimmed.png" },
  { name: "Police", logo: "/images/brands/police.trimmed.png" },
  { name: "Tommy Hilfiger", logo: "/images/brands/tommy-hilfiger.trimmed.png" },
];

export const whyChooseUs = [
  {
    icon: "Stethoscope",
    title: "Experienced Optometrists",
    description: "Over 15 years of combined clinical experience across our in-house team.",
  },
  {
    icon: "ScanEye",
    title: "Latest Eye Testing Equipment",
    description: "Digital refraction, retinal imaging, and precision fitting tools.",
  },
  {
    icon: "LayoutGrid",
    title: "Wide Collection",
    description: "Over 2,000 frames across 30+ brands, refreshed every season.",
  },
  {
    icon: "Sparkles",
    title: "Affordable Luxury",
    description: "Designer quality, transparent pricing, and honest recommendations.",
  },
];

export const services = [
  {
    icon: "Eye",
    title: "Eye Testing",
    description: "Precision vision assessments for every age group, always free.",
  },
  {
    icon: "Monitor",
    title: "Computer Vision Check",
    description: "Specialised screening for screen strain, dryness, and fatigue.",
  },
  {
    icon: "RefreshCcw",
    title: "Lens Replacement",
    description: "Swap into new lenses within your existing favourite frame.",
  },
  {
    icon: "Wrench",
    title: "Frame Repair",
    description: "On-site adjustments, tightening, and structural repairs.",
  },
  {
    icon: "CircleDot",
    title: "Contact Lens Fitting",
    description: "Guided fitting for daily, monthly, and toric lenses.",
  },
  {
    icon: "Home",
    title: "Home Eye Checkup",
    description: "Our optometrist visits you — ideal for seniors and families.",
  },
];

export const testimonials = [
  {
    name: "Aarav Deshmukh",
    role: "Software Engineer, Wagholi",
    quote:
      "The team spent real time understanding my prescription and face shape. Three months on, these are the most comfortable glasses I've owned.",
    image: "/images/person-aarav.jpg",
    rating: 5,
  },
  {
    name: "Priya Kulkarni",
    role: "College Student",
    quote:
      "Same-day delivery saved me before my exams. The staff also helped me pick frames that actually suit my face — small thing, huge difference.",
    image: "/images/person-priya.jpg",
    rating: 5,
  },
  {
    name: "Rohan Bhosale",
    role: "Marketing Manager",
    quote:
      "Booked an eye test on a Sunday evening without any hassle. The blue-light lenses have genuinely reduced my end-of-day headaches.",
    image: "/images/person-rohan.jpg",
    rating: 5,
  },
  {
    name: "Sanika Joshi",
    role: "Homemaker",
    quote:
      "Got my father's eyes checked at home through their home checkup service. Patient, thorough, and kind with an elderly patient.",
    image: "/images/person-sanika.jpg",
    rating: 5,
  },
  {
    name: "Devendra Patil",
    role: "College Student",
    quote:
      "Wide range of frames that actually feel current — not the stock designs you see everywhere else in Wagholi.",
    image: "/images/person-devendra.jpg",
    rating: 5,
  },
  {
    name: "Neha Wagh",
    role: "Working Professional",
    quote:
      "My daughter's first pair of glasses, and the staff made the whole visit feel easy for her. She actually likes wearing them now.",
    image: "/images/person-neha.jpg",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do you offer a free eye test at Vision Optics?",
    answer:
      "Yes. Every visit includes a complimentary vision assessment by our in-house optometrist, with no obligation to purchase.",
  },
  {
    question: "How long does it take to get new glasses ready?",
    answer:
      "Most single-vision orders are ready the same day if placed before noon. Progressive and specialised lenses typically take 2–3 days.",
  },
  {
    question: "Do you fit contact lenses as well as glasses?",
    answer:
      "Yes, we offer guided contact lens fittings for daily, monthly, and toric lenses, along with trial lenses before you commit.",
  },
  {
    question: "Can I get my frames repaired even if I didn't buy them here?",
    answer:
      "Absolutely. We service and repair frames from any brand or store — tightening, sizing, and structural fixes.",
  },
  {
    question: "Do you offer home eye checkups?",
    answer:
      "Yes, particularly for senior citizens and families. Book a slot and our optometrist will visit with portable testing equipment.",
  },
  {
    question: "Is Vision Optics open on Sundays?",
    answer:
      "Yes, we're open every day. Sunday hours are 11:00 AM to 7:00 PM; weekdays we're open 10:00 AM to 9:00 PM.",
  },
];

export const galleryImages = [
  { src: "/images/product-heritage-round.jpg", tall: true },
  { src: "/images/product-meridian-cateye.jpg", tall: false },
  { src: "/images/product-riviera-sun.jpg", tall: false },
  { src: "/images/product-clubmaster.jpg", tall: true },
  { src: "/images/product-voyager-aviator.jpg", tall: false },
  { src: "/images/product-featherlight.jpg", tall: true },
  { src: "/images/product-atelier-oval.jpg", tall: false },
  { src: "/images/product-junior-explorer.jpg", tall: false },
];

export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Eyewear", href: "#eyewear" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Book Eye Test", href: "#appointment" },
    { label: "Contact", href: "#contact" },
  ],
  collections: [
    { label: "Men's Eyewear", href: "#collections" },
    { label: "Women's Eyewear", href: "#collections" },
    { label: "Kids' Eyewear", href: "#collections" },
    { label: "Sunglasses", href: "#collections" },
    { label: "Computer Glasses", href: "#collections" },
  ],
};
