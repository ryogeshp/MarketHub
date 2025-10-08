import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with active noise cancellation and 30-hour battery life. Premium comfort for all-day wear.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    subCategory: 'Audio',
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 45,
    brand: 'AudioMax',
    rating: 4.8,
    reviewsCount: 342,
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g',
      'Warranty': '2 years'
    },
    tags: ['wireless', 'noise-cancelling', 'premium'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Pro',
    description: 'Track your health and fitness with precision. Heart rate monitoring, GPS, sleep tracking, and 100+ workout modes.',
    price: 249.99,
    originalPrice: 349.99,
    category: 'Electronics',
    subCategory: 'Wearables',
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 78,
    brand: 'FitTech',
    rating: 4.6,
    reviewsCount: 589,
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, GPS, SpO2'
    },
    tags: ['fitness', 'smartwatch', 'health'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Ultra HD 4K Camera',
    description: 'Capture life in stunning 4K resolution. Professional-grade sensor with advanced image stabilization.',
    price: 899.99,
    category: 'Electronics',
    subCategory: 'Cameras',
    imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 23,
    brand: 'ProVision',
    rating: 4.9,
    reviewsCount: 234,
    specifications: {
      'Resolution': '4K 60fps',
      'Sensor': 'Full Frame CMOS',
      'ISO Range': '100-51200',
      'Storage': 'Dual SD slots'
    },
    tags: ['camera', '4k', 'photography'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic design with lumbar support and adjustable features for maximum comfort during long work sessions.',
    price: 449.99,
    originalPrice: 599.99,
    category: 'Furniture',
    subCategory: 'Office',
    imageUrl: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 34,
    brand: 'ComfortPro',
    rating: 4.7,
    reviewsCount: 456,
    specifications: {
      'Weight Capacity': '300 lbs',
      'Adjustments': 'Height, armrests, lumbar',
      'Material': 'Mesh back, fabric seat',
      'Warranty': '5 years'
    },
    tags: ['ergonomic', 'office', 'furniture'],
    isFeatured: false
  },
  {
    id: '5',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard with tactile switches. Perfect for gaming and typing with customizable macros.',
    price: 159.99,
    category: 'Electronics',
    subCategory: 'Gaming',
    imageUrl: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 67,
    brand: 'GameForce',
    rating: 4.5,
    reviewsCount: 891,
    specifications: {
      'Switch Type': 'Mechanical Cherry MX',
      'Backlighting': 'RGB per-key',
      'Connection': 'USB-C, Wireless',
      'Battery': '40 hours'
    },
    tags: ['gaming', 'keyboard', 'rgb'],
    isFeatured: false
  },
  {
    id: '6',
    name: 'Luxury Leather Backpack',
    description: 'Handcrafted genuine leather backpack with laptop compartment. Perfect blend of style and functionality.',
    price: 189.99,
    originalPrice: 249.99,
    category: 'Fashion',
    subCategory: 'Bags',
    imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 45,
    brand: 'LeatherCraft',
    rating: 4.8,
    reviewsCount: 178,
    specifications: {
      'Material': 'Genuine Leather',
      'Laptop Size': 'Up to 15.6"',
      'Dimensions': '18" x 12" x 6"',
      'Warranty': '2 years'
    },
    tags: ['leather', 'backpack', 'luxury'],
    isFeatured: false
  },
  {
    id: '7',
    name: 'Smart Home Hub',
    description: 'Control all your smart home devices from one place. Voice assistant compatible with Alexa and Google.',
    price: 129.99,
    category: 'Electronics',
    subCategory: 'Smart Home',
    imageUrl: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 89,
    brand: 'SmartLife',
    rating: 4.4,
    reviewsCount: 523,
    specifications: {
      'Compatibility': 'Alexa, Google, HomeKit',
      'Connectivity': 'WiFi, Zigbee, Z-Wave',
      'Range': 'Up to 150ft',
      'Warranty': '1 year'
    },
    tags: ['smart-home', 'automation', 'iot'],
    isFeatured: false
  },
  {
    id: '8',
    name: 'Professional Blender Set',
    description: 'High-powered blender with multiple attachments. Perfect for smoothies, soups, and food processing.',
    price: 199.99,
    originalPrice: 279.99,
    category: 'Home & Kitchen',
    subCategory: 'Appliances',
    imageUrl: 'https://images.pexels.com/photos/6663536/pexels-photo-6663536.jpeg?auto=compress&cs=tinysrgb&w=800',
    stock: 56,
    brand: 'ChefMaster',
    rating: 4.6,
    reviewsCount: 312,
    specifications: {
      'Power': '1500W',
      'Capacity': '64oz',
      'Speed Settings': '10 + Pulse',
      'Warranty': '3 years'
    },
    tags: ['kitchen', 'appliance', 'blender'],
    isFeatured: false
  }
];
