import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    districtName: '',
    role: '',
    studentCount: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'YOUR_SERVICE_ID' || 
          templateId === 'YOUR_TEMPLATE_ID' || 
          publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not configured. Please set up environment variables. See EMAILJS_SETUP.md')
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          school_name: formData.schoolName || 'Not provided',
          district_name: formData.districtName || 'Not provided',
          role: formData.role || 'Not provided',
          student_count: formData.studentCount || 'Not provided',
          message: formData.message,
          to_email: 'samuel.ben.tsui@gmail.com',
        },
        publicKey
      )

      setStatus('success')
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        schoolName: '',
        districtName: '',
        role: '',
        studentCount: '',
        message: '' 
      })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('error')
      // Show error message for 7 seconds to give user time to read
      setTimeout(() => setStatus('idle'), 7000)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Information</h2>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="your.email@school.edu"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="e.g., Principal, Transportation Director, Administrator"
          />
        </div>

        <div>
          <label htmlFor="schoolName" className="block text-sm font-semibold text-gray-700 mb-2">
            School Name
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Lincoln High School"
          />
        </div>

        <div>
          <label htmlFor="districtName" className="block text-sm font-semibold text-gray-700 mb-2">
            School District
          </label>
          <input
            type="text"
            id="districtName"
            name="districtName"
            value={formData.districtName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Springfield School District"
          />
        </div>

        <div>
          <label htmlFor="studentCount" className="block text-sm font-semibold text-gray-700 mb-2">
            Approximate Number of Students
          </label>
          <select
            id="studentCount"
            name="studentCount"
            value={formData.studentCount}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select range</option>
            <option value="Less than 500">Less than 500</option>
            <option value="500 - 1,000">500 - 1,000</option>
            <option value="1,000 - 2,500">1,000 - 2,500</option>
            <option value="2,500 - 5,000">2,500 - 5,000</option>
            <option value="5,000 - 10,000">5,000 - 10,000</option>
            <option value="More than 10,000">More than 10,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Tell us about your needs <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="What challenges are you facing with student transportation? How can SafeRoute help your school district?"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle size={20} />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Submit Request</span>
            </>
          )}
        </motion.button>

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-2 text-red-600 bg-red-50 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <AlertCircle size={20} />
              <span className="font-semibold">Failed to send message</span>
            </div>
            <p className="text-sm text-red-700">
              EmailJS is not configured yet. Please set up your EmailJS credentials in the .env file. 
              See EMAILJS_SETUP.md for instructions, or email us directly at{' '}
              <a href="mailto:samuel.ben.tsui@gmail.com" className="underline font-semibold">
                samuel.ben.tsui@gmail.com
              </a>
            </p>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
          >
            <CheckCircle size={20} />
            <span>Thank you! We'll be in touch within 24 hours to discuss how SafeRoute can help your school.</span>
          </motion.div>
        )}
      </div>
    </motion.form>
  )
}

export default ContactForm

