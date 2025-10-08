import { ShoppingCart, Heart, User, Search, Menu, Package } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Navbar = ({ onNavigate, currentPage, onSearchChange, searchQuery }: NavbarProps) => {
  const { getTotalItems } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 group"
            >
              <Package className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                MarketHub
              </span>
            </button>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('orders')}
              className={`hidden md:flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'orders'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Package className="w-5 h-5" />
              <span className="font-medium">Orders</span>
            </button>

            <button
              onClick={() => onNavigate('wishlist')}
              className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart className={`w-6 h-6 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('account')}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 'account'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User className="w-6 h-6" />
            </button>

            <button className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </div>
    </nav>
  );
};
