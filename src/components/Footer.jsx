import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

const logo = `${import.meta.env.BASE_URL}SafeRouteTransparent512.svg`

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="SafeRoute Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-display font-bold text-primary">
                SafeRoute
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Real-time school bus tracking for students, parents, and administrators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.safe_route&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} />
                <a 
                  href="mailto:samuel.ben.tsui@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  samuel.ben.tsui@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <a 
                  href="tel:781-528-7806"
                  className="hover:text-primary transition-colors"
                >
                  781-528-7806
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SafeRoute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

