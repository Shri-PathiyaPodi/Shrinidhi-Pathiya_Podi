import React from 'react';
import { Calendar, User, ArrowRight, Heart, Leaf, Star } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ancient Wisdom of Pirandai: Nature's Bone Strengthener",
      excerpt: "Discover how this traditional herb has been used for centuries to support bone health and why it's more relevant today than ever.",
      image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "December 15, 2024",
      author: "Shrinidhi Team",
      category: "Traditional Medicine",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Postpartum Nutrition: Traditional Recipes for Modern Mothers",
      excerpt: "Learn about time-tested ingredients and recipes that support new mothers during their recovery journey.",
      image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "December 10, 2024",
      author: "Shrinidhi Team",
      category: "Maternal Health",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Murungai Keerai: The Miracle Leaves in Your Kitchen",
      excerpt: "Explore the incredible nutritional benefits of drumstick leaves and how to incorporate them into your daily diet.",
      image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "December 5, 2024",
      author: "Shrinidhi Team",
      category: "Nutrition",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Black Sesame Seeds: Small Seeds, Big Benefits",
      excerpt: "Uncover the nutritional powerhouse that is black sesame and why it's a staple in traditional Tamil cuisine.",
      image: "https://images.pexels.com/photos/4110009/pexels-photo-4110009.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "November 28, 2024",
      author: "Shrinidhi Team",
      category: "Superfoods",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Building Immunity Naturally: Traditional Tamil Remedies",
      excerpt: "Discover age-old Tamil remedies and ingredients that naturally boost your immune system and overall health.",
      image: "https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "November 20, 2024",
      author: "Shrinidhi Team",
      category: "Immunity",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Science Behind Traditional Food Combinations",
      excerpt: "Learn why our ancestors combined certain ingredients and how modern science validates these traditional practices.",
      image: "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "November 15, 2024",
      author: "Shrinidhi Team",
      category: "Food Science",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "Traditional Medicine", count: 8, icon: <Leaf className="w-4 h-4" /> },
    { name: "Nutrition", count: 12, icon: <Heart className="w-4 h-4" /> },
    { name: "Maternal Health", count: 6, icon: <Star className="w-4 h-4" /> },
    { name: "Immunity", count: 5, icon: <Leaf className="w-4 h-4" /> },
    { name: "Food Science", count: 4, icon: <Star className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover traditional recipes, health tips, and the science behind our time-tested ingredients.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <div className="text-orange-600 mr-2">
                          {category.icon}
                        </div>
                        <span className="text-gray-700 group-hover:text-orange-600">
                          {category.name}
                        </span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest health tips and traditional recipes delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <button className="w-full bg-white text-orange-600 hover:bg-gray-100 py-2 rounded-lg font-semibold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;