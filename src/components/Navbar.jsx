import React, { useState, useEffect } from "react";
import { Menu, X, Bell, Search, Home, Compass, Folder, Album } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  


  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Explore", icon: Compass, path: "/explore" },
    { name: "Projects", icon: Folder, path: "/dashboard" },
    { name: "Albums", icon: Album, path: "/dashboard" },
  ];

  return (
    <nav
      className={`w-full mb-3 sticky top-0 z-50 bg-white border-b-4 transition-all duration-500 ease-in-out
        
      `}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extrabold text-green-800 transition-all duration-300 hover:scale-105">
            Makerble
          </div>
          <div className="hidden md:block w-1/3 relative group">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 bg-gray-100 border-2 border-transparent rounded-full focus:outline-none focus:bg-white focus:border-green-500 transition-all duration-300"
            />
            <Search className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300" size={18} />
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name.toLowerCase()}
                to={item.path}
                className={`flex flex-col items-center space-y-1 group ${
                  activeItem === item.name ? "text-green-600" : "text-gray-600"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <div className="relative p-2 rounded-full group-hover:bg-green-100 transition-all duration-300">
                  <item.icon size={20} className="group-hover:scale-110 transition-all duration-300" />
                  <span className="absolute inset-0 rounded-full border-2 border-green-500 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                </div>
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-300 hover:bg-green-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-300 hover:ring-4 hover:ring-green-300 transition-all duration-300 overflow-hidden transform hover:scale-110">
              <img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none transition-colors duration-300 hover:text-green-800 p-2 hover:bg-green-100 rounded-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name.toLowerCase()}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-800 transition-colors duration-300"
            onClick={() => {
              setActiveItem(item.name);
              setIsOpen(false);
            }}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 bg-gray-100 border-2 border-transparent rounded-full focus:outline-none focus:bg-white focus:border-green-500 transition-all duration-300"
            />
            <Search className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;