import React from 'react';
import { Info, Users, Book, Star, MessageCircle, HelpCircle } from 'lucide-react';

const sections = [
  {
    title: 'About Us',
    icon: <Info className="w-8 h-8 text-blue-500" />,
    description: 'Learn about our mission, vision, and the team behind our website.',
    link: '#about'
  },
  {
    title: 'Our Community',
    icon: <Users className="w-8 h-8 text-green-500" />,
    description: 'Discover the vibrant community of users and how you can get involved.',
    link: '#community'
  },
  {
    title: 'Features',
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    description: 'Explore the key features that make our platform unique and powerful.',
    link: '#features'
  },
  {
    title: 'Resources',
    icon: <Book className="w-8 h-8 text-purple-500" />,
    description: 'Access guides, tutorials, and other helpful resources to get the most out of our site.',
    link: '#resources'
  },
  {
    title: 'FAQ',
    icon: <HelpCircle className="w-8 h-8 text-red-500" />,
    description: 'Find answers to commonly asked questions about our services and platform.',
    link: '#faq'
  },
  {
    title: 'Contact Us',
    icon: <MessageCircle className="w-8 h-8 text-indigo-500" />,
    description: 'Get in touch with our support team for any inquiries or assistance.',
    link: '#contact'
  }
];

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Our Website</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <p className="text-xl text-gray-600 mb-8">
            Welcome to our explore page! Here you can find everything you need to know about our website and its offerings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h2 className="ml-3 text-xl font-semibold text-gray-900">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <a 
                    href={section.link} 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;