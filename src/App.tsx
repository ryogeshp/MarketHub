import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Wishlist } from './components/Wishlist';
import { Orders } from './components/Orders';
import { Account } from './components/Account';
import { ProductDetail } from './components/ProductDetail';
import { Product } from './types';
import { CheckCircle } from 'lucide-react';

type Page = 'home' | 'cart' | 'checkout' | 'wishlist' | 'orders' | 'account' | 'success';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
  };

  const handleOrderComplete = () => {
    setCurrentPage('success');
    setTimeout(() => {
      setCurrentPage('home');
    }, 3000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onViewDetails={handleViewDetails} searchQuery={searchQuery} />;
      case 'cart':
        return <Cart onCheckout={handleCheckout} />;
      case 'checkout':
        return <Checkout onBack={() => setCurrentPage('cart')} onComplete={handleOrderComplete} />;
      case 'wishlist':
        return <Wishlist />;
      case 'orders':
        return <Orders />;
      case 'account':
        return <Account />;
      case 'success':
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <CheckCircle className="w-24 h-24 mx-auto text-green-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
              <p className="text-gray-600 mb-8">Thank you for your purchase. You will receive a confirmation email shortly.</p>
              <p className="text-sm text-gray-500">Redirecting to home...</p>
            </div>
          </div>
        );
      default:
        return <Home onViewDetails={handleViewDetails} searchQuery={searchQuery} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar
              onNavigate={setCurrentPage}
              currentPage={currentPage}
              onSearchChange={setSearchQuery}
              searchQuery={searchQuery}
            />
            {renderPage()}
            {selectedProduct && (
              <ProductDetail
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </div>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
