"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Python, 
  Java, 
  JavaScript, 
  TypeScript, 
  PHP,
  HTML5,
  CSS3,
  React,
  FastAPI,
  NodeJs,
  Django,
  PostgreSQL,
  MongoDB,
  Redis,
  AWS,
  Docker,
  GitLab,
  Tensorflow,
  PyTorch,
  OpenAI,
  YouTube,
  Git
} from "developer-icons";

const skills = [
  { name: "Python", category: "Language", icon: Python },
  { name: "Java", category: "Language", icon: Java },
  { name: "JavaScript", category: "Language", icon: JavaScript },
  { name: "TypeScript", category: "Language", icon: TypeScript },
  { name: "PHP", category: "Language", icon: PHP },
  { name: "HTML", category: "Frontend", icon: HTML5 },
  { name: "CSS", category: "Frontend", icon: CSS3 },
  { name: "ReactJS", category: "Frontend", icon: React },
  { name: "FastAPI", category: "Backend", icon: FastAPI },
  { name: "NodeJS", category: "Backend", icon: NodeJs },
  { name: "Django", category: "Backend", icon: Django },
  { name: "PostgreSQL", category: "Database", icon: PostgreSQL },
  { name: "MongoDB", category: "Database", icon: MongoDB },
  { name: "Redis", category: "Database", icon: Redis },
  { name: "AWS", category: "Cloud", icon: AWS },
  { name: "Docker", category: "DevOps", icon: Docker },
  { name: "GitLab", category: "DevOps", icon: GitLab },
  { name: "Git", category: "DevOps", icon: Git },
  { name: "CI/CD", category: "DevOps" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "NLP", category: "AI/ML" },
  { name: "spaCy", category: "AI/ML", customIcon: "/images/spacy-icon.png" },
  { name: "TensorFlow", category: "AI/ML", icon: Tensorflow },
  { name: "PyTorch", category: "AI/ML", icon: PyTorch },
  { name: "OpenAI API", category: "AI/ML", icon: OpenAI },
  { name: "Ollama", category: "AI/ML" },
  { name: "YouTube API", category: "API", icon: YouTube },
  { name: "REST API", category: "API" },
  { name: "API Integration", category: "API" },
  { name: "Pathfinding Algorithms", category: "Algorithms" },
  { name: "A* Search", category: "Algorithms" },
  { name: "IoT Middleware", category: "Tools" },
  { name: "FinTech Solutions", category: "Domain" },
  { name: "Marketing AI", category: "Domain" },
  { name: "System Architecture", category: "Architecture" },
  { name: "Database Design", category: "Database" },
  { name: "Full-Stack Development", category: "Development" },
];

const categories = {
  Language: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Frontend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Backend: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Database: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  DevOps: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Cloud: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  Tools: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  Domain: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  Architecture: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Development: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  "AI/ML": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  API: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
  Algorithms: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300">
                    {skill.customIcon ? (
                      <Image 
                        src={skill.customIcon} 
                        alt={skill.name} 
                        width={32} 
                        height={32} 
                        className="rounded"
                      />
                    ) : skill.icon ? (
                      <skill.icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    ) : (
                      <span className="text-2xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white text-center">
                    {skill.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${categories[skill.category as keyof typeof categories]}`}>
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating responsive and interactive user interfaces with modern frameworks
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Backend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building scalable APIs and microservices with robust architecture
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                DevOps & Cloud
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deploying and managing applications with modern DevOps practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
