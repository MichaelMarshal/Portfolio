"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Technical Solutions Specialist",
    company: "Palo Alto Networks",
    location: "Canada",
    period: "Nov 2022 - Nov 2023",
    description: [
      "Led the end-to-end development of internal applications, optimizing team workflows and increasing efficiency by 12%",
      "Developed and implemented specialized dashboards for sales operations, enhancing decision-making with real-time insights",
      "Managed solo projects using ReactJS and Django, ensuring timely delivery within budget",
      "Implemented CI/CD pipelines using GitLab, reducing development cycle times",
      "Ensured data integrity and reliability through extensive use of PostgreSQL"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "1 Billion Tech",
    location: "Sri Lanka",
    period: "Jan 2022 - Oct 2022",
    description: [
      "Spearheaded a FinTech project using ReactJS, NodeJS, and AWS, delivering robust solutions within tight timelines",
      "Developed comprehensive documentation for software development processes, enhancing future project management",
      "Integrated third-party APIs into existing systems, boosting project functionality and interoperability",
      "Collaborated with cross-functional teams to deliver high-quality software solutions"
    ]
  },
  {
    title: "Software Engineer",
    company: "Axiata Digital Labs",
    location: "Sri Lanka",
    period: "Jul 2019 - Jan 2022",
    description: [
      "Led multiple projects in IoT data middleware administration and open-source initiatives",
      "Analyzed user requirements and created detailed technical specifications for software development",
      "Developed full-stack solutions using Java, JavaScript, HTML, and CSS, ensuring robust performance",
      "Collaborated with diverse teams to deliver innovative technology solutions"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Dialog Axiata PLC",
    location: "Sri Lanka",
    period: "Jul 2017 - Jul 2018",
    description: [
      "Developed web applications, dashboards, tools, and APIs as a full-stack developer",
      "Contributed to DevOps initiatives, validating and documenting client approaches",
      "Mentored in 13 hackathons and participated in 7 outreach programs, strengthening community engagement",
      "Gained foundational experience in software development lifecycle and best practices"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software engineering and technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {experience.company}
                    </h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
