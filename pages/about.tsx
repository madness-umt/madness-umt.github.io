"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Users, Target, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-purple-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Our Universe
            </h1>
          </div>
          <p className="text-lg text-gray-600">Meet the passionate team behind Multiverse of Madness</p>
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
              className="flex items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Course Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                  Course Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Course Name</h4>
                    <p className="text-gray-600">Entrepreneurship and Business Development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Course Code</h4>
                    <p className="text-gray-600">BUS 301</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Instructor</h4>
                    <p className="text-gray-600">Dr. Sarah Johnson</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Semester</h4>
                    <p className="text-gray-600">Fall 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Project Objective</h4>
                    <p className="text-gray-600">
                      To create and manage a student-run business venture that demonstrates practical application of
                      entrepreneurial concepts, market research, product development, and customer service skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-600" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Alex Chen</h4>
                      <p className="text-purple-600 text-sm font-medium mb-2">Team Leader & Marketing</p>
                      <p className="text-gray-600 text-sm">
                        Business Administration Major, responsible for overall coordination and marketing strategies.
                      </p>
                    </div>

                    <div className="p-4 bg-pink-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Maria Rodriguez</h4>
                      <p className="text-pink-600 text-sm font-medium mb-2">Product Manager</p>
                      <p className="text-gray-600 text-sm">
                        Fashion Design Major, handles product selection and quality control for fashion items.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">David Kim</h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">Technology Coordinator</p>
                      <p className="text-gray-600 text-sm">
                        Computer Science Major, manages tech products and digital marketing efforts.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Emma Thompson</h4>
                      <p className="text-green-600 text-sm font-medium mb-2">Finance Manager</p>
                      <p className="text-gray-600 text-sm">
                        Accounting Major, handles budgeting, pricing, and financial planning.
                      </p>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">James Wilson</h4>
                      <p className="text-indigo-600 text-sm font-medium mb-2">Operations Manager</p>
                      <p className="text-gray-600 text-sm">
                        Supply Chain Management Major, oversees inventory and logistics.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Sophie Brown</h4>
                      <p className="text-yellow-600 text-sm font-medium mb-2">Customer Relations</p>
                      <p className="text-gray-600 text-sm">
                        Communications Major, manages customer service and social media presence.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Michael Davis</h4>
                      <p className="text-red-600 text-sm font-medium mb-2">Creative Director</p>
                      <p className="text-gray-600 text-sm">
                        Graphic Design Major, responsible for branding and visual merchandising.
                      </p>
                    </div>

                    <div className="p-4 bg-teal-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Lisa Zhang</h4>
                      <p className="text-teal-600 text-sm font-medium mb-2">Research Analyst</p>
                      <p className="text-gray-600 text-sm">
                        Marketing Major, conducts market research and competitor analysis.
                      </p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Ryan O'Connor</h4>
                      <p className="text-orange-600 text-sm font-medium mb-2">Sales Coordinator</p>
                      <p className="text-gray-600 text-sm">
                        Sales Management Major, handles sales strategies and customer acquisition.
                      </p>
                    </div>

                    <div className="p-4 bg-violet-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Priya Patel</h4>
                      <p className="text-violet-600 text-sm font-medium mb-2">Quality Assurance</p>
                      <p className="text-gray-600 text-sm">
                        Industrial Engineering Major, ensures product quality and process improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-100 to-pink-100 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Products</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-100 to-rose-100 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-pink-600 mb-2">10</div>
                <div className="text-gray-700 font-medium">Team Members</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Learning Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Target className="h-8 w-8 text-indigo-600" />
                  Learning Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Skills</h4>
                    <p className="text-gray-600">
                      Practical experience in entrepreneurship, market analysis, and business operations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Teamwork</h4>
                    <p className="text-gray-600">Collaborative project management and effective team communication</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Customer Service</h4>
                    <p className="text-gray-600">Direct interaction with customers and understanding market needs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Financial Management</h4>
                    <p className="text-gray-600">Budgeting, pricing strategies, and profit/loss analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
