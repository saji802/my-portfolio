/* app/page.tsx */
"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'extracurriculars', label: 'Extracurriculars' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Salman Aji
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="hover:text-blue-400 transition font-medium"
                >
                  {section.label}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition"
                    onClick={toggleMenu}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Salman Aji
          </h2>
          <p className="mt-4 text-xl md:text-2xl">Computer Science & Applied Mathematics at Brown University</p>
          <p className="mt-2 text-lg">Crafting AI-Driven Solutions for Real-World Impact</p>
          <Link
            href="#contact"
            className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Let’s Connect
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="/profile.jpg"
                alt="Salman Aji"
                width={300}
                height={300}
                className="rounded-full shadow-lg border-4 border-blue-500"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg">
                I’m a junior at Brown University, pursuing dual degrees in <strong>Computer Science</strong> and <strong>Applied Mathematics</strong> with a perfect <strong>4.0/4.0 GPA</strong>. Hailing from Latakia, Syria, I graduated as the <strong>National Valedictorian</strong> among <strong>40,000</strong> students. My work focuses on harnessing AI and data science to tackle challenges in healthcare, education, and social justice. Recognized with awards like the <strong>UTRA</strong> and honors in the <strong>International Physics Olympiad</strong> and <strong>Mathematical Modeling Challenge</strong>, I’m driven to create impactful technology.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-8">
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Incoming Research Assistant, VectraFlow Project</h3>
              <p className="text-gray-400">Brown University, Providence, RI | <strong>May 2025 - Present</strong></p>
              <ul className="list-disc pl-5 mt-2">
                <li>Awarded Brown’s UTRA to work on an AI-augmented database for <strong>50,000+</strong> patient records.</li>
                <li>Partnering with Rhode Island Hospital to slash cohort selection time by <strong>90%</strong>.</li>
                <li>Managing LLM-based AI agents for query processing and data transformation.</li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Head Teaching Assistant, CS Department</h3>
              <p className="text-gray-400">Brown University, Providence, RI | <strong>February 2025 - Present</strong></p>
              <ul className="list-disc pl-5 mt-2">
                <li>Led TA hiring from <strong>200</strong> applicants for Brown’s new AI course.</li>
                <li>Guided <strong>200+</strong> students through weekly labs and debugging sessions.</li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Research Assistant, CS Department</h3>
              <p className="text-gray-400">Brown University, Providence, RI | <strong>November 2024 - May 2025</strong></p>
              <ul className="list-disc pl-5 mt-2">
                <li>Collaborated with Prof. Amy Greenwald on Inverse Reinforcement Learning for electricity markets.</li>
                <li>Achieved <strong>2.02x</strong> lower MSE than ARIMA models.</li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Data Analyst Intern, HousingWorks RI</h3>
              <p className="text-gray-400">Providence, RI | <strong>February 2024 - August 2024</strong></p>
              <ul className="list-disc pl-5 mt-2">
                <li>Automated data analysis with Python/R, cutting task time by <strong>70%</strong>.</li>
                <li>Contributed to the <strong>Housing Fact Book 2024</strong> for policy impact.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-800">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <Image
                src="/projects/brunos-compass.jpg"
                alt="Bruno’s Compass"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">Bruno’s Compass</h3>
              <p className="text-gray-400">Ongoing | Java, TypeScript, React, HTML, CSS, JUnit</p>
              <p>Building a website for <strong>1,000+</strong> international students with an AI chatbot for instant support.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <Image
                src="/projects/go-framework.jpg"
                alt="Multi-Agent Go"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">Multi-Agent Framework for Go</h3>
              <p className="text-gray-400"><strong>September - December 2024</strong> | Python</p>
              <p>Developed AI agents with MCTS and Q-learning, achieving an ELO of <strong>1700</strong> and winning against <strong>65+</strong> peers.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <Image
                src="/projects/vocablo.jpg"
                alt="Vocablo"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">Vocablo: Vocabulary Tracker</h3>
              <p className="text-gray-400"><strong>January - February 2024</strong> | TypeScript, Firebase, Next.js</p>
              <p>AI-powered web app for Spanish learners with thematic word clustering and progress tracking.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <Image
                src="/projects/compact-os.jpg"
                alt="Compact OS"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">Compact Operating System</h3>
              <p className="text-gray-400"><strong>February - March 2024</strong> | C, C++, Git</p>
              <p>Built an OS with process creation and virtual memory management using page tables.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="py-16 bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Extracurriculars</h2>
          <div className="space-y-8">
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Syria Script, Volunteer TA</h3>
              <p className="text-gray-400">Virtual | <strong>August 2024 - Present</strong></p>
              <p>Developed curriculum for <strong>100+</strong> refugee students and taught weekly programming sessions.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Bonner Community Fellowship</h3>
              <p className="text-gray-400">Providence, RI | <strong>September 2023 - Present</strong></p>
              <p>One of <strong>20</strong> fellows advancing social justice through CS education.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Full Stack at Brown, Lead Software Engineer</h3>
              <p className="text-gray-400">Providence, RI | <strong>October 2023 - Present</strong></p>
              <p>Mentored members and built apps for <strong>10+</strong> Brown and RISD clubs.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-800">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Technical Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Python', 'Java', 'C/C++', 'JavaScript', 'HTML/CSS', 'R', 'Racket', 'SQL', 'React', 'TypeScript', 'Playwright', 'Firebase', 'Next.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-600 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">Languages & Interests</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {['English (Fluent)', 'Arabic (Native)', 'French (Intermediate)', 'Linguistics', 'Social Justice', 'Music', 'Kayaking', 'AI Policy'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-purple-600 rounded-full text-sm">{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Salman Aji. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://linkedin.com/in/salman-aji1" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://github.com/saji802" className="hover:text-blue-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}