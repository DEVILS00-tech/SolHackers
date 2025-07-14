
import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold">Power Together</span>
            </div>
            <p className="text-orange-light text-sm mb-4">
              Empowering communities through clean energy and smart choices. 
              Innovating for impact, sustainability, and smarter living.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About :</h3>
            <ul className="space-y-2 text-orange-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stories</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links :</h3>
            <ul className="space-y-2 text-orange-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Registered Office Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Registered Office Address:</h3>
            <div className="text-orange-light text-sm space-y-1">
              <p>The SolHackers Pvt. Ltd.</p>
              <p>123, Creative Heights,</p>
              <p>Innovation Street, Sector 21,</p>
              <p>New Delhi - 110001, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-light text-sm">© 2025 SolHackers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-orange-light hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-orange-light hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
