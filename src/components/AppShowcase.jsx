import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Screenshots from public folder
const baseUrl = import.meta.env.BASE_URL
const screenshots = [
  `${baseUrl}Screenshots/Image20251227172136.png`,
  `${baseUrl}Screenshots/Image20251227172139.png`,
  `${baseUrl}Screenshots/Image20251227172141.png`,
  `${baseUrl}Screenshots/Image20251227172144.png`,
  `${baseUrl}Screenshots/Image20251227172146.png`,
  `${baseUrl}Screenshots/Image20251227172148.png`,
]

function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            See SafeRoute in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the app that's making school transportation safer and more reliable
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-sm mx-auto"
        >
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 mb-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="min-w-full flex items-center justify-center">
                  <img
                    src={screenshot}
                    alt={`SafeRoute App Screenshot ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator - Outside the carousel */}
          <div className="flex justify-center space-x-2 mb-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.safe_route&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Download Now on Google Play
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppShowcase

