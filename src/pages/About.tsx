import React from 'react';
import { Heart, Leaf, Star, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
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

  const missions = [
    {
      icon: <Award className="w-6 h-6 text-orange-600" />,
      title: "Preserve Heritage",
      description: "Keeping traditional recipes alive for future generations"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      title: "Promote Health",
      description: "Supporting wellness through natural, nutritious food"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Serve with Love",
      description: "Every product is made with care and dedication"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover the tradition, passion, and authenticity behind every product we create at Shrinidhi Pathiya Podi.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It All Began</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Shrinidhi Pathiya Podi was born from a kitchen filled with love, tradition, and healing. 
                  What began as a mother's effort to prepare wholesome postpartum mixes and daily health 
                  powders for her family slowly turned into a brand loved by many.
                </p>
                <p>
                  When friends and relatives tasted these hand-roasted, home-ground podis and started 
                  asking for more — we realized we had something special. Recipes passed down through 
                  generations are now welcomed as everyday health staples.
                </p>
                <p>
                  Today, we are proud to be a trusted name in many households, serving not just food 
                  powders — but memories, care, and culture. Every product tells a story of heritage, 
                  health, and heart.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Indian family preparing healthy food"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Clock className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">எங்கள் பாரம்பரியம்</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ஶ்ரீநிதி பத்திய பொடி-இல், பாரம்பரிய சமையலின் சுவையும் சத்தும் நிறைந்த உணவுப் பொடிகளை 
              வீட்டிலேயே தயாரித்து வழங்குகிறோம். எங்கள் தயாரிப்புகள் சத்தானவை, பாதுகாப்பானவை, 
              மற்றும் பாரம்பரியத்தின் சுவையை கொண்டவை.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to crafting the final product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-lg opacity-80">These numbers reflect our commitment to quality and customer satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To bring back forgotten traditional food blends and make them a part of modern homes again. 
              We believe in preserving the ancient wisdom of our ancestors while making it accessible and 
              relevant for today's health-conscious families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {mission.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional spices and ingredients"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  At Shrinidhi Pathiya Podi, we specialize in making traditional food powders like 
                  Pirandai Podi, Murungai Keerai Podi, and Karuppu Ellu Idli Podi, all hand-prepared 
                  using age-old Brahmin recipes.
                </p>
                <p>
                  Our products are 100% natural, made at home, and free of preservatives or artificial 
                  additives. From postpartum health powders to immunity-boosting mixes, every product 
                  is crafted for your well-being.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Specialties:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Traditional Brahmin-style food powders</li>
                    <li>• Postpartum health and recovery mixes</li>
                    <li>• Immunity-boosting nutritional blends</li>
                    <li>• Daily health supplements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;