import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_shrinidhi'; // You'll need to replace this
      const templateId = 'template_contact'; // You'll need to replace this
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@shrinidhipathiyapodi.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly via WhatsApp or phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919884039184?text=Hello! I would like to know more about your products.', '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      title: "Phone",
      details: "+91 98840 39184",
      subtitle: "Available 9 AM - 8 PM",
      action: () => window.open('tel:+919884039184')
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: "info@shrinidhipathiyapodi.com",
      subtitle: "We respond within 24 hours",
      action: () => window.open('mailto:info@shrinidhipathiyapodi.com')
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp",
      details: "+91 98840 39184",
      subtitle: "Quick orders & support",
      action: handleWhatsApp
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location",
      details: "Tamil Nadu, India",
      subtitle: "Shipping across India",
      action: () => {}
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Have questions about our products or want to place a custom order? We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    onClick={info.action}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700 font-medium">{info.details}</p>
                      <p className="text-sm text-gray-500">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl">
                <h3 className="font-bold text-lg mb-2">Need Quick Help?</h3>
                <p className="text-sm opacity-90 mb-4">
                  WhatsApp us for instant support and quick orders
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-green-700">{statusMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-700">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="health-consultation">Health Consultation</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your requirements, questions, or feedback..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Setup Instructions */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">📧 Email Service Setup Required</h3>
                <p className="text-sm text-blue-700 mb-2">
                  To enable direct email sending, you need to set up EmailJS:
                </p>
                <ol className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>1. Create a free account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline font-medium">emailjs.com</a></li>
                  <li>2. Set up an email service (Gmail, Outlook, etc.)</li>
                  <li>3. Create an email template</li>
                  <li>4. Replace the placeholder keys in the code with your actual EmailJS keys</li>
                </ol>
                <p className="text-xs text-blue-600 mt-2">
                  Until setup is complete, users can still contact you via WhatsApp or direct email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Monday - Saturday:</span> 9:00 AM - 8:00 PM</p>
                <p><span className="font-medium">Sunday:</span> 10:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-500 mt-4">
                  We typically respond to emails and messages within 24 hours during business days.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Instant Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For immediate assistance, product availability, or quick orders, WhatsApp is your best option.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Start WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;