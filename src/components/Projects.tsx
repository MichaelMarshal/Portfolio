"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "NLP SMS Application",
    description: "A sample application created with Natural Language Processing and Ideamart's SMS API. Features intelligent text processing and automated SMS responses using Google NLP services.",
    image: "https://michaelmarshal.github.io/Portfolio/images/nlp-sms-icon.svg",
    technologies: ["PHP", "NLP", "SMS API", "Google APIs", "Natural Language Processing"],
    githubUrl: "https://github.com/MichaelMarshal/NLP",
    liveUrl: null,
    stars: 2,
    forks: 2,
    featured: true
  },
  {
    title: "React User Management App",
    description: "A personal project featuring comprehensive user management functionality built with React. Includes user authentication, profile management, and modern UI components.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project1.svg",
    technologies: ["React", "JavaScript", "User Management", "Frontend"],
    githubUrl: "https://github.com/MichaelMarshal/React-User-App",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: true
  },
  {
    title: "A* Pathfinding Algorithm",
    description: "Implementation of pathfinding algorithms using A* with Manhattan, Chebyshev, and Euclidean distance metrics. Demonstrates advanced algorithmic problem-solving techniques.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project5.svg",
    technologies: ["Java", "Algorithms", "A* Search", "Pathfinding", "Data Structures"],
    githubUrl: "https://github.com/MichaelMarshal/Algorithm-pathfinding-",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: true
  },
  {
    title: "Profiles REST API",
    description: "A comprehensive REST API for managing user profiles with full CRUD operations. Built with Python and designed for scalable profile management systems.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project4.svg",
    technologies: ["Python", "REST API", "Profile Management", "Backend"],
    githubUrl: "https://github.com/MichaelMarshal/Profiles-rest-api",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: false
  },
  {
    title: "Star Wars Name Generator",
    description: "A fun application that integrates Ideamart API with Star Wars API (SWAPI) to generate Star Wars character names and information through SMS interactions.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project5.svg",
    technologies: ["PHP", "API Integration", "SWAPI", "SMS API", "Entertainment"],
    githubUrl: "https://github.com/MichaelMarshal/StarwarsName",
    liveUrl: null,
    stars: 0,
    forks: 1,
    featured: false
  },
  {
    title: "Sample Database Project",
    description: "Database management and sample data project demonstrating database design principles, data modeling, and query optimization techniques.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project6.svg",
    technologies: ["Database", "Data Modeling", "SQL", "Backend"],
    githubUrl: "https://github.com/MichaelMarshal/sampleDb",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: false
  },
  {
    title: "AI-Powered Document Analyzer",
    description: "An intelligent document processing system using machine learning to extract, classify, and analyze text from various document formats. Features OCR, sentiment analysis, and automated categorization.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project2.svg",
    technologies: ["Python", "Machine Learning", "OCR", "NLP", "TensorFlow", "OpenAI API"],
    githubUrl: "https://github.com/MichaelMarshal/ai-document-analyzer",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: true,
    status: "Work in Progress"
  },
  {
    title: "Smart Recommendation Engine",
    description: "AI-driven recommendation system using collaborative filtering and deep learning algorithms. Provides personalized suggestions based on user behavior patterns and preferences.",
    image: "https://michaelmarshal.github.io/Portfolio/images/recommendation-icon.svg",
    technologies: ["Python", "Deep Learning", "Collaborative Filtering", "PyTorch", "Redis", "FastAPI"],
    githubUrl: "https://github.com/MichaelMarshal/smart-recommendation-engine",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: true,
    status: "Work in Progress"
  },
  {
    title: "Enterprise Dashboard Management System",
    description: "Comprehensive dashboard management platform for enterprise analytics and reporting. Features real-time data visualization, customizable widgets, and role-based access control. Currently in active development.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project3.svg",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "WebSocket"],
    githubUrl: "https://github.com/MichaelMarshal/dashboard-management",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: true,
    status: "Work in Progress"
  },
  {
    title: "YouTube Marketing AI",
    description: "Full-stack application for analyzing and improving YouTube product marketing. Features FastAPI backend with NLP-powered sentiment analysis, automated data ingestion, and AI-driven marketing suggestions using Ollama/OpenAI integration.",
    image: "https://michaelmarshal.github.io/Portfolio/images/project3.svg",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Docker", "spaCy", "Ollama", "YouTube API"],
    githubUrl: "https://github.com/MichaelMarshal/YoutubeMarketingAI",
    liveUrl: null,
    stars: 0,
    forks: 0,
    featured: true,
    status: "Work in Progress"
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My open source projects and contributions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-gray-800" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-800" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      {project.status && (
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {project.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {project.forks}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    {project.status && (
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
