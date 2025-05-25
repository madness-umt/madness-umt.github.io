"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronRight, Users, MapPin, Sparkles, Star, User, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 text-purple-400 opacity-60"
        >
          <Sparkles size={40} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-10 text-pink-400 opacity-60"
        >
          <Star size={35} />
        </motion.div>

        {/* Title and Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 max-w-4xl"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Multiverse of Madness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
          >
            Discover a universe of diverse products crafted by passionate students
          </motion.p>
        </motion.div>

        {/* Navigation Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md space-y-4"
        >
          {/* Products with Subcategories */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <span className="text-xl font-semibold text-gray-800">Products</span>
              {isProductsOpen ? (
                <ChevronDown className="h-6 w-6 text-purple-600" />
              ) : (
                <ChevronRight className="h-6 w-6 text-purple-600" />
              )}
            </motion.button>

            <motion.div
              initial={false}
              animate={{
                height: isProductsOpen ? "auto" : 0,
                opacity: isProductsOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 ml-6 space-y-3">
                <Link href="/products/male">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
                  >
                    <User className="h-5 w-5 text-blue-600" />
                    <span className="text-lg font-medium text-gray-800">For Him</span>
                  </motion.div>
                </Link>

                <Link href="/products/female">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100"
                  >
                    <Heart className="h-5 w-5 text-pink-600" />
                    <span className="text-lg font-medium text-gray-800">For Her</span>
                  </motion.div>
                </Link>

                <Link href="/products/general">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
                  >
                    <Sparkles className="h-5 w-5 text-green-600" />
                    <span className="text-lg font-medium text-gray-800">General</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants}>
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <span className="text-xl font-semibold text-gray-800">About</span>
                <Users className="h-6 w-6 text-purple-600" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Find Us */}
          <motion.div variants={itemVariants}>
            <Link href="/find-us">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <span className="text-xl font-semibold text-gray-800">Find Us</span>
                <MapPin className="h-6 w-6 text-purple-600" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
