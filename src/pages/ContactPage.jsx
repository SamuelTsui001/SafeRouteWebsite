import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Bring SafeRoute to Your School
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join schools across the country using SafeRoute to improve student transportation safety and communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form to learn how SafeRoute can help your school district improve bus tracking, 
                student safety, and parent communication. Our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:samuel.ben.tsui@gmail.com"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">samuel.ben.tsui@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:781-528-7806"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">781-528-7806</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md"
              >
                <div className="bg-primary/10 p-4 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Available</h3>
                  <p className="text-gray-600">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Why Schools Choose SafeRoute</h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Real-time bus tracking for parents and administrators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Improved student safety with check-in systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Instant notifications for delays and arrivals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Easy to implement and use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Dedicated support for school districts</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage



