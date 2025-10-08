export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subCategory?: string;
  imageUrl: string;
  images?: string[];
  stock: number;
  brand: string;
  rating: number;
  reviewsCount: number;
  specifications?: Record<string, string>;
  tags?: string[];
  isFeatured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpfulCount: number;
  verifiedPurchase: boolean;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }>;
  trackingNumber?: string;
  createdAt: string;
}

export interface PriceAlert {
  id: string;
  productId: string;
  targetPrice: number;
  isActive: boolean;
}

export interface User {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
}
