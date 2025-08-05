"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg prose-gray dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a dedicated software engineer with over 4 years of experience specializing in delivering 
              innovative solutions and driving team success. My journey in technology has taken me from 
              Sri Lanka to Canada, working with leading companies like Palo Alto Networks, where I&apos;ve 
              consistently delivered high-impact solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              My expertise spans software development, database design, and system architecture, with 
              proficiency in Java, Python, and JavaScript. I&apos;ve led end-to-end development of internal 
              applications, spearheaded FinTech projects, and managed IoT data middleware administration. 
              Currently pursuing an MBA in Entrepreneurship, I bring both technical excellence and business acumen.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              I thrive in collaborative environments, constantly stay ahead of industry trends, and am 
              committed to fostering innovation. With experience mentoring in 13 hackathons and participating 
              in 7 outreach programs, I&apos;m passionate about strengthening community engagement and sharing 
              knowledge with fellow developers.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I Do
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Full-Stack Web Development</li>
                  <li>• Software Development & Architecture</li>
                  <li>• Database Design & Optimization</li>
                  <li>• FinTech Solutions Development</li>
                  <li>• IoT Data Middleware Administration</li>
                  <li>• Technical Solutions & Consulting</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interests
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Entrepreneurship & Business Innovation</li>
                  <li>• Creativity and Innovation</li>
                  <li>• Technical Writing & Documentation</li>
                  <li>• Community Engagement & Mentoring</li>
                  <li>• DevOps & CI/CD Implementation</li>
                  <li>• Strategic Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
