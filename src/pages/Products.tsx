import React from 'react';
import { Star, MessageCircle, Leaf, Heart } from 'lucide-react';

const Products: React.FC = () => {
  const handleWhatsApp = (productName: string) => {
    const message = `Hello! I'm interested in ordering ${productName}. Could you please provide more details?`;
    window.open(`https://wa.me/919884039184?text=${encodeURIComponent(message)}`, '_blank');
  };

  const products = [
    {
      id: 1,
      name: "Pirandai Podi",
      description: "Traditional bone health powder made from Pirandai (Cissus quadrangularis)",
      benefits: ["Strengthens bones", "Aids digestion", "Natural calcium source"],
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹250",
      weight: "100g"
    },
    {
      id: 2,
      name: "Murungai Keerai Podi",
      description: "Nutrient-rich drumstick leaves powder packed with vitamins and minerals",
      benefits: ["Rich in iron", "Boosts immunity", "Natural detox"],
      image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹200",
      weight: "100g"
    },
    {
      id: 3,
      name: "Karuppu Ellu Idli Podi",
      description: "Black sesame powder perfect for idli, dosa, and rice",
      benefits: ["Rich in calcium", "Healthy fats", "Traditional taste"],
      image: "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹180",
      weight: "150g"
    },
    {
      id: 4,
      name: "Postpartum Health Mix",
      description: "Special blend for new mothers with traditional herbs and nutrients",
      benefits: ["Postpartum recovery", "Energy boost", "Lactation support"],
      image: "https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹350",
      weight: "200g"
    },
    {
      id: 5,
      name: "Immunity Booster Mix",
      description: "Powerful blend of traditional herbs to strengthen your immune system",
      benefits: ["Boosts immunity", "Antioxidant rich", "Natural healing"],
      image: "https://images.pexels.com/photos/4198022/pexels-photo-4198022.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹300",
      weight: "150g"
    },
    {
      id: 6,
      name: "Digestive Health Podi",
      description: "Traditional spice blend to aid digestion and gut health",
      benefits: ["Aids digestion", "Reduces bloating", "Gut health"],
      image: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹220",
      weight: "100g"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover our range of authentic, hand-prepared traditional food powders and health mixes, 
            crafted with love using time-honored Brahmin recipes.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                      <div className="text-sm text-gray-500">{product.weight}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Heart className="w-4 h-4 text-red-500 mr-1" />
                      Health Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <Leaf className="w-3 h-3 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600">Every product is crafted with care and tradition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">No preservatives, artificial colors, or additives. Pure and natural ingredients only.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">Time-tested Brahmin recipes passed down through generations.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Hand-prepared in small batches to ensure freshness and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            We can prepare custom blends based on your specific health needs and preferences.
          </p>
          <button
            onClick={() => handleWhatsApp('custom order')}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Discuss Custom Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;