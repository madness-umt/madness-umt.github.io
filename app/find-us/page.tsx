"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, MapPin, Clock, Phone, Instagram, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function FindUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Find Us
            </h1>
          </div>
          <p className="text-lg text-gray-600">Visit our stall and experience the multiverse in person!</p>
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
              className="flex items-center gap-2 border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location & Hours */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p className="font-medium">University Campus</p>
                    <p>Student Activity Center</p>
                    <p>Stall #15, Ground Floor</p>
                    <p className="text-sm text-gray-500 mt-4">Near the main cafeteria and library entrance</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="h-6 w-6 text-green-600" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">*Hours may vary during exam periods and holidays</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Phone className="h-6 w-6 text-purple-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-600">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-600">multiverse@university.edu</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-pink-300 text-pink-700 hover:bg-pink-50"
                    >
                      <Instagram className="h-5 w-5" />
                      @multiverseofmadness
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-green-300 text-green-700 hover:bg-green-50"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Visit Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-100 to-pink-100">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Stall</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Come and explore our amazing collection of products. Our friendly team is always ready to help you find
                exactly what you're looking for! We're excited to meet you and share our passion for diverse, quality
                products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Get Directions
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  Call Us Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
