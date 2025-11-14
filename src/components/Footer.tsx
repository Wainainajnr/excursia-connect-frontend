import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-full">
                <Plane className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold">Excursia Connect</h3>
                <p className="text-xs text-background/80">epic travel. epic expectations.</p>
              </div>
            </div>
            <p className="text-sm text-background/70 mb-4">
              Your trusted partner for unforgettable travel experiences and seamless relocation services.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-sm text-background/70 hover:text-accent transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/relocation-offers" className="text-sm text-background/70 hover:text-accent transition-colors">
                  Relocation & Offers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-background/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Safari Tours</li>
              <li>Beach Vacations</li>
              <li>Wildlife Experiences</li>
              <li>Relocation Services</li>
              <li>Special Travel Packages</li>
              <li>Group Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-background/70">Spur Mall — 2nd Floor</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/70">0724415820</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/70">karibu@excursiaconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/70">
            &copy; {new Date().getFullYear()} Excursia Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
