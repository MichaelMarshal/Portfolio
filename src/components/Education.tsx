"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    field: "Technology, Innovation and Entrepreneurship",
    institution: "International Business University",
    location: "Canada",
    period: "Jan 2024 - Present",
    description: "Currently pursuing MBA with specialization in Entrepreneurship, focusing on business innovation and strategic problem-solving.",
    achievements: [
      "Developing expertise in business strategy and innovation",
      "Combining technical background with business acumen",
      "Focus on entrepreneurial ventures and startup ecosystems"
    ]
  },
  {
    degree: "Bachelor of Engineering (BEng)",
    field: "Software Engineering",
    institution: "University of Westminster",
    location: "London, UK",
    period: "Sep 2015 - Sep 2019",
    description: "Comprehensive software engineering program covering full-stack development, system design, and software architecture.",
    achievements: [
      "Strong foundation in software development principles",
      "Expertise in multiple programming languages and frameworks",
      "Capstone project in distributed systems"
    ]
  },
  {
    degree: "High School Diploma",
    field: "Business/Commerce, General",
    institution: "St. Joseph's College Colombo 10",
    location: "Colombo, Sri Lanka",
    period: "Jan 2001 - Aug 2015",
    description: "Completed secondary education with focus on business and commerce fundamentals.",
    achievements: [
      "Strong academic performance in business subjects",
      "Developed foundational analytical and problem-solving skills",
      "Active participation in extracurricular activities"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      {edu.field && (
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                          {edu.field}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 sm:text-right">
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                    {edu.institution}
                  </h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h5 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Beyond formal education, I&apos;m committed to lifelong learning through online courses,
              certifications, and staying updated with the latest technology trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">
                Introduction to Business
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full">
                Privileged Password Security
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded-full">
                Introduction to Generative AI
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full">
                Smart Contracts
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 rounded-full">
                Learning Path Specialization
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
