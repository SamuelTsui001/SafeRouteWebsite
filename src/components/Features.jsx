import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, CheckCircle, Bell, Clock } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Bus Tracking',
    description: 'See exactly where your school bus is at any moment with live GPS tracking on an interactive map.',
  },
  {
    icon: CheckCircle,
    title: 'Check-In System',
    description: 'Easy check-in system that helps drivers and administrators keep track of student attendance.',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description: 'Get notified about bus delays, arrivals, and important updates to stay informed throughout the day.',
  },
  {
    icon: Clock,
    title: 'Estimated Time of Arrival',
    description: 'Know exactly when your bus will arrive with accurate ETA calculations based on real-time location data.',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <feature.icon className="text-primary" size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to stay connected with school transportation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features








