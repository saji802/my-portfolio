"use client";

import { useState, useEffect } from "react"; // Add useEffect
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BsCodeSlash, BsGear } from "react-icons/bs";
import { FaDatabase, FaBook, FaGraduationCap, FaLanguage } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0); // New state for offset

  useEffect(() => {
    // Calculate offset only on the client side
    setScrollOffset(typeof window !== "undefined" ? -window.innerHeight / 2 + 50 : 0);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleStory = () => setIsStoryExpanded(!isStoryExpanded);
  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
      boxShadow: "0 10px 25px rgba(0, 255, 255, 0.2)",
    },
  };

  const navLinkVariants = {
    active: {
      scale: 1.2,
      color: "#00FFFF",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      color: "#E5E7EB",
      transition: { duration: 0.3 },
    },
  };

  const underlineVariants = {
    active: {
      width: "100%",
      opacity: 1,
      transition: { duration: 0.3 },
    },
    inactive: {
      width: "0%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const storyVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };


  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Salman Aji
          </h1>
          <div className="hidden md:flex space-x-6">
            {sections.map(({ id, label }) => (
              <motion.div
                key={id}
                className="relative"
                variants={navLinkVariants}
                animate={activeSection === id ? "active" : "inactive"}
              >
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  offset={scrollOffset} // Use dynamic offset
                  onSetActive={handleSetActive}
                  className="text-gray-200 hover:text-cyan-400 transition duration-300 font-medium cursor-pointer"
                >
                  {label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                    variants={underlineVariants}
                    animate={activeSection === id ? "active" : "inactive"}
                    whileHover="active"
                  />
                </ScrollLink>
              </motion.div>
            ))}
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-black/90">
            {sections.map(({ id, label }) => (
              <motion.div
                key={id}
                className="relative"
                variants={navLinkVariants}
                animate={activeSection === id ? "active" : "inactive"}
              >
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  offset={scrollOffset} // Use dynamic offset
                  onSetActive={handleSetActive}
                  className="block py-2 text-gray-200 hover:text-cyan-400 transition duration-200"
                  onClick={toggleMenu}
                >
                  {label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                    variants={underlineVariants}
                    animate={activeSection === id ? "active" : "inactive"}
                    whileHover="active"
                  />
                </ScrollLink>
              </motion.div>
            ))}
          </div>
        )}
      </nav>
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <Particles
          id="particles"
          init={particlesInit}
          options={{
            particles: {
              color: { value: "#00FFFF" },
              links: { color: "#00FFFF", enable: true, opacity: 0.3 },
              move: { enable: true, speed: 1.5 },
              size: { value: 2 },
              number: { value: 50 },
            },
            background: { color: { value: "transparent" } },
          }}
          className="absolute inset-0 -z-10"
        />
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Image
              src="/profile.jpg"
              width={220}
              height={220}
              className="rounded-full border-4 border-cyan-500 shadow-xl"
              alt="Salman Aji"
            />
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse" />
          </motion.div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
              Salman Aji
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              Computer Science & Applied Math @ Brown University
            </p>
            <TypeAnimation
              sequence={[
                "AI Innovator",
                2000,
                "Healthcare Tech Enthusiast",
                2000,
                "Social Justice Advocate",
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="mt-3 block text-cyan-400 text-lg md:text-xl font-semibold"
              repeat={Infinity}
            />
            <a
              href="/CV.pdf"
              className="mt-6 inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition shadow-lg hover:shadow-cyan-500/50"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">About Me</h2>
          <div className="text-lg leading-relaxed text-gray-200">
            <p>
              I’m Salman Aji, a Syrian first-generation student at Brown University pursuing dual B.Sc. degrees in
              Computer Science and Applied Mathematics (GPA: 4.0). As Syria’s 2022 National Valedictorian, I’m passionate
              about leveraging AI to solve challenges in healthcare, education, and social justice. My work spans
              AI-augmented database systems, multi-agent learning, and community-driven tech initiatives. With awards from
              the International Physics Olympiad and Mathematical Modeling Challenge, I aim to build bridges across
              disciplines and communities.
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={toggleStory}
                className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition shadow-lg hover:shadow-cyan-500/50"
              >
                {isStoryExpanded ? "Hide My Story" : "Learn More About My Story"}
              </button>
            </div>
            <motion.div
              variants={storyVariants}
              initial="hidden"
              animate={isStoryExpanded ? "visible" : "hidden"}
              className="mt-4 overflow-hidden"
            >
              <p className="text-lg leading-relaxed text-gray-200">
                Growing up in Syria, I witnessed firsthand the challenges of limited access to education and healthcare. These experiences fueled my drive to pursue a career in technology, where I could create solutions with global impact. At Brown, I’ve immersed myself in interdisciplinary projects, from developing AI tools for medical research to advocating for equitable tech policies. My journey as a first-generation student has taught me resilience and the importance of community, values I bring to every project and collaboration. Whether it’s mentoring peers or building AI-driven platforms, I’m committed to using technology as a force for positive change.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gray-900/50">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400">Incoming Research Assistant, VectraFlow Project</h3>
              <p className="text-sm text-gray-400">Brown University • May 2025 - Present</p>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
                <li>Awarded Brown’s UTRA to work on an AI-augmented database system processing 50,000+ patient records.</li>
                <li>Collaborate with Rhode Island Hospital to reduce cohort selection time by 90% using LLM-based operators.</li>
                <li>Manage AI agents for query correction and data transformation.</li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400">Head Teaching Assistant, AI Course</h3>
              <p className="text-sm text-gray-400">Brown University • Feb 2025 - Present</p>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
                <li>Led hiring of TAs from 200+ applicants and designed course materials for 200+ students.</li>
                <li>Facilitated weekly 2-hour lab sessions, debugging, and Q&A to enhance student learning.</li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400">Research Assistant, Inverse Multiagent Learning</h3>
              <p className="text-sm text-gray-400">Brown University • Nov 2024 - May 2025</p>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
                <li>Collaborated with Prof. Amy Greenwald on modeling Spanish electricity markets using Inverse Reinforcement Learning.</li>
                <li>Achieved 2.02x lower MSE compared to ARIMA, enhancing forecasting accuracy.</li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400">Data Analyst & Research Intern</h3>
              <p className="text-sm text-gray-400">HousingWorks RI • Feb 2024 - Aug 2024</p>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
                <li>Automated data scraping and analysis of U.S. Census datasets, reducing task time by 70%.</li>
                <li>Contributed to the 2024 Housing Fact Book, influencing Rhode Island’s housing policy.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/brunos-compass.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="Bruno’s Compass"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">Bruno’s Compass</h3>
                <motion.a
                  href="https://github.com/saji802/brunos-compass"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">Java, TypeScript, React, HTML, CSS, JUnit • Ongoing</p>
              <p className="mt-2 text-sm text-gray-200">
                Building a website for 1000+ international students at Brown with an AI chatbot trained on Brown-specific data to ease their U.S. transition.
              </p>
            </motion.div>
            
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/Blackjack_Assistant.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="Blackjack Assistant"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">Blackjack Assistant</h3>
                <motion.a
                  href="https://github.com/saji802/Blackjack_Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">Python, roboflow, OpenCV • March - May 2025</p>
              <p className="mt-2 text-sm text-gray-200">
              Developed a real-time Blackjack strategy assistant using a YOLOv8 model trained on 10,000 images to detect player and dealer hands. Employed DBSCAN to cluster hand combinations and applied reinforcement learning to recommend optimal actions (hit, stay, double, or split). Provides instant feedback based on the detected cards, enhancing decision-making in live gameplay.              </p>
            </motion.div>
                       
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/go-gameplay.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="Multi-Agent Framework for Go Gameplay"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">Multi-Agent Framework for Go Gameplay</h3>
                <motion.a
                  href="https://github.com/saji802/go-gameplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">Python • Sep - Dec 2024</p>
              <p className="mt-2 text-sm text-gray-200">
                Developed AI agents using MCTS, Q-learning, and deep learning, achieving an ELO rating of 1700 and winning a class-wide tournament against 65+ competitors.
              </p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/compact-os.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="Compact Operating System"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">Compact Operating System</h3>
                <motion.a
                  href="https://github.com/saji802/compact-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">C, C++, Git • Feb - Mar 2024</p>
              <p className="mt-2 text-sm text-gray-200">
                Built a small OS with process creation, system calls, and kernel-managed virtual memory using page tables.
              </p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/vocablo.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="Vocablo: Vocabulary Tracker Web App"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">Vocablo: Vocabulary Tracker Web App</h3>
                <motion.a
                  href="https://github.com/saji802/vocablo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">TypeScript, Firebase, Next.js, Playwright, Clerk • Jan - Feb 2024</p>
              <p className="mt-2 text-sm text-gray-200">
                Created an AI-powered language learning app for Spanish learners at Brown, featuring thematic word clustering and progress tracking.
              </p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/Attendance_Tracker.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="Attendance Tracker"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">Attendance Tracker</h3>
                <motion.a
                  href="https://github.com/saji802/Attendance-Trackerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">Python, OpenCV, Tkinter, SQLite • Jan - Feb 2024</p>
              <p className="mt-2 text-sm text-gray-200">
              Designed a Python-based Attendance Tracker using Tkinter for the UI and OpenCV for face recognition, streamlining attendance for clubs and small classes. Enabled real-time user registration and automated emailing of absent or late students. Stored attendance records in SQLite for reliable data management.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <Image
                src="/projects/GameHub.jpg"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt="GameHub"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-cyan-400">GameHub</h3>
                <motion.a
                  href="https://github.com/saji802/GameHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-sm text-gray-300">Java, JavaFx, SQLite• Nov - Dec 2023</p>
              <p className="mt-2 text-sm text-gray-200">
              Developed a Java-based Game Center app featuring Othello, Doodle Jump, and Tetris with custom graphics. Implemented Othello using Minimax with alpha-beta pruning, supporting three difficulty levels and human players. Built Tetris and Doodle Jump using JavaFX for mechanics and visuals. Created a leaderboard system with CSV files, enabling 25+ friends to compete for high scores.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
                  <BsCodeSlash size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Programming Languages</h3>
              </div>
              <p className="text-sm text-gray-200">
                Python, Java, C/C++, JavaScript, HTML/CSS, R, Racket
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
                  <BsGear size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Frameworks</h3>
              </div>
              <p className="text-sm text-gray-200">
                React, TypeScript, Playwright, Firebase, Next.js
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
                  <FaDatabase size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Databases</h3>
              </div>
              <p className="text-sm text-gray-200">
                SQLite, MongoDB, Firebase
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
                  <FaBook size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Libraries</h3>
              </div>
              <p className="text-sm text-gray-200">
                Numpy, Pandas, TensorFlow, PyTorch, Scikit-learn, OpenCV, CVXPY
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
                  <FaGraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Relevant College Courses</h3>
              </div>
              <p className="text-sm text-gray-200">
                Artificial Intelligence, Software Engineering, Computer Vision, Computer Systems, Machine learning, Deep Learning, Object Oriented Programming, Data Structures & Algorithms
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
                  <FaLanguage size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Languages</h3>
              </div>
              <p className="text-sm text-gray-200">
                English (Fluent), Arabic (Native), French (Intermediate)
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-cyan-400">Interests & Awards</h3>
            <p className="text-sm text-gray-200 mt-2">
              Interests: Linguistics, Social Justice, Music, Kayaking, AI Policy<br />
              Awards: National Valedictorian of Syria (2022), Honorable Mention in International Physics Olympiad, Honorable Mention in International Mathematical Modeling Challenge
            </p>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get in Touch!
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-300">Address</h3>
                <p className="text-gray-400">
                  Brown University<br />
                  69 Brown St<br />
                  Providence, RI 02912<br />
                  USA
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300">Email</h3>
                <p className="text-gray-400 border-b border-dashed border-gray-500 inline-block">
                  salman_aji@brown.edu
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300">Phone</h3>
                <p className="text-gray-400">+1 (401) 688-8211</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-6 md:mt-0">
              <motion.a
                href="https://github.com/saji802"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#00FFFF" }}
                className="text-gray-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/salman-aji1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#00FFFF" }}
                className="text-gray-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}