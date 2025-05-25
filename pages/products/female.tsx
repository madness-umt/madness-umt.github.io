"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Heart } from "lucide-react"
import Link from "next/link"

export default function FemaleProductsPage() {
  const products = [
    "Floral Summer Dress",
    "Bohemian Accessories Set",
    "Elegant Handbag",
    "Statement Earrings",
    "Silk Scarf",
    "High Heels",
    "Makeup Kit",
    "Perfume Collection",
    "Jewelry Box",
    "Hair Accessories",
    "Nail Art Kit",
    "Skincare Set",
    "Fashion Sunglasses",
    "Clutch Purse",
    "Ankle Boots",
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-pink-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              For Her
            </h1>
          </div>
          <p className="text-lg text-gray-600">Discover our collection of products for women</p>
        </motion.div>

        {/* Home Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Link href="/">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-50"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Products List */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
            >
              <h3 className="text-xl font-semibold text-gray-800">{product}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
