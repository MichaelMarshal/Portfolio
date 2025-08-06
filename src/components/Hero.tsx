"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/michaelmarshal",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/michaelmarshal",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:marshalmichael85@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="https://michaelmarshal.github.io/Portfolio/profile.jpeg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          MICHAEL MARSHAL
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Markham, Ontario, Canada
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Strategic Problem Solver | MBA Candidate | Tech Innovator | Analytical Thinker | Experienced Technical Solutions Specialist
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mt-4">
            As a dedicated software engineer with over 4 years of experience, I specialize in delivering innovative solutions and driving team success. My expertise spans software development, database design, and system architecture, with proficiency in Java, Python, and JavaScript. I thrive in collaborative environments, constantly stay ahead of industry trends, and am committed to fostering innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                aria-label={link.name}
              >
                <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
