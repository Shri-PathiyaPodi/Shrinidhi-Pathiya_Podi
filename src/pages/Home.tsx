import React from 'react';
import { Star, Heart, Leaf, Users, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919884039184?text=Hello! I would like to know more about your products.', '_blank');
  };

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Handmade",
      description: "Crafted with care in small batches"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Natural",
      description: "No preservatives or additives"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Traditional",
      description: "Time-honored recipes"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Wellness",
      description: "Health-focused formulations"
    }
  ];

  const stats = [
    { number: "15+", label: "Happy Customers" },
    { number: "2", label: "Years Kitchen Experience" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Authentic Flavors from 
                <span className="text-orange-600"> Tamil Nadu</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hand prepared, specially for your health. Authentic, hand-prepared Brahmin-style food powders and nutritional mixes made with love, tradition, and care in Chennai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </button>
                <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Products
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Indian spices and powders"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-orange-100 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">15+ Happy Customers</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to crafting the final product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover the tradition, passion, and authenticity behind every product
              </h2>
              <p className="text-xl mb-8 opacity-90">
                At Shrinidhi Pathiya Podi, we specialize in making traditional food powders like Pirandai Podi, Murungai Keerai Podi, and Karuppu Ellu Idli Podi, all hand-prepared using age-old Brahmin recipes.
              </p>
              <p className="text-lg mb-8 opacity-80">
                ஶ்ரீநிதி பத்திய பொடி-இல், பாரம்பரிய சமையலின் சுவையும் சத்தும் நிறைந்த உணவுப் பொடிகளை வீட்டிலேயே தயாரித்து வழங்குகிறோம்.
              </p>
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Our Story
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Indian family preparing healthy food"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey in Numbers</h2>
            <p className="text-lg text-gray-600">These numbers reflect our commitment to quality and customer satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Authentic Flavors?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing family of satisfied customers who trust us for their daily health and nutrition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;