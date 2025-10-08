import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

export const Orders = () => {
  const mockOrders = [
    {
      id: 'ORD-001',
      status: 'delivered',
      totalAmount: 299.99,
      trackingNumber: 'TRK123456789',
      createdAt: '2025-10-01',
      items: [
        {
          name: 'Premium Wireless Headphones',
          price: 299.99,
          quantity: 1,
          imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'ORD-002',
      status: 'shipped',
      totalAmount: 649.98,
      trackingNumber: 'TRK987654321',
      createdAt: '2025-10-05',
      items: [
        {
          name: 'Smart Fitness Watch Pro',
          price: 249.99,
          quantity: 1,
          imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Ergonomic Office Chair',
          price: 399.99,
          quantity: 1,
          imageUrl: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'shipped':
        return <Truck className="w-6 h-6 text-blue-600" />;
      case 'processing':
        return <Clock className="w-6 h-6 text-orange-600" />;
      default:
        return <Package className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (mockOrders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <Package className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <p className="font-semibold text-gray-900">Order {order.id}</p>
                    <p className="text-sm text-gray-600">Placed on {order.createdAt}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    ${order.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {order.trackingNumber && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Tracking Number: <span className="font-semibold text-gray-900">{order.trackingNumber}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between">
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Details
                </button>
                {order.status === 'delivered' && (
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    Write Review
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
