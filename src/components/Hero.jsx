import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6"
            >
              Track Your School Bus in
              <span className="text-primary block mt-2">Real-Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              SafeRoute helps students, parents, and administrators stay connected with real-time bus tracking, check-in systems, and instant notifications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            >
              <a
                href="https://apps.apple.com/us/app/safe-route/id6758110091"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={24} />
                <span>Download on the App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safe_route&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={24} />
                <span>Get it on Google Play</span>
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-sm text-gray-500 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full inline-block border border-gray-200"
            >
              Test the app using student school code <span className="font-semibold text-gray-800">STU123</span> and driver school code <span className="font-semibold text-gray-800">DRV456</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero






