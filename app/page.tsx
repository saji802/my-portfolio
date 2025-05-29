"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Heart, Sparkles, Coffee, Palette, Code, Lightbulb, Star, Zap, Smile, Camera } from 'lucide-react';
import { loadFull } from "tsparticles";
import { BsCodeSlash, BsGear } from "react-icons/bs";
import { FaDatabase, FaBook, FaGraduationCap, FaLanguage } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";


const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
      3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
      -.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
      3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
      0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 
      3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 
      3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176 
      .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 
      5.625-5.475 5.92.42.36.81 1.096.81 2.22 
      0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 
      C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

  const YouTubeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a2.951 2.951 0 0 0-2.077-2.088C19.505 3.5 
        12 3.5 12 3.5s-7.505 0-9.421.598A2.951 2.951 0 0 0 
        .502 6.186C0 8.11 0 12 0 12s0 3.89.502 5.814a2.951 
        2.951 0 0 0 2.077 2.088C4.495 20.5 12 20.5 12 
        20.5s7.505 0 9.421-.598a2.951 2.951 0 0 0 
        2.077-2.088C24 15.89 24 12 24 12s0-3.89-.502-5.814zM9.75 
        15.02V8.98l6.25 3.02-6.25 3.02z" />
    </svg>
  );

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    setScrollOffset(typeof window !== "undefined" ? -window.innerHeight / 2 -200 : 0);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "story", label: "My Story" },
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
              offset={scrollOffset}
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
              offset={scrollOffset}
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
  <section id="home" className="h-screen flex items-center px-6 md:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-black/80 to-purple-900/60 z-0"></div>
    <motion.div
      className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-12 z-10"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center md:text-left flex flex-col items-center md:items-start flex-1 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          Hi, I'm Salman
        </h1>
        <p className="mt-2 text-lg text-gray-400 italic">/sal·man/</p>
        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-snug">
          A rising junior studying <span className="text-cyan-400 font-semibold">Computer Science</span> & <span className="text-cyan-400 font-semibold">Applied Math</span> @ Brown University.
        </p>
        <p className="mt-2 text-lg md:text-xl text-gray-400">
          I love building things that make opportunities more accessible to others.
        </p>
        <TypeAnimation
          sequence={[
            "Cout << I love cats 🐱!'; ",
            2000,
            "for (dream in life) { build(dream); }",
            2000,
            "while (!success) tryAgain();",
            2000,
          ]}
          wrapper="span"
          speed={40}
          className="mt-4 text-cyan-400 text-base md:text-lg font-medium"
          repeat={Infinity}
        />
        <a
          href="/CV.pdf"
          className="mt-8 inline-block px-7 py-3 text-lg bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition shadow-lg hover:shadow-cyan-500/50"
        >
          View My Resume
        </a>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mt-8 md:mt-0">
        <Image
          src="/profile.jpg"
          fill
          className="rounded-full object-cover border-4 border-cyan-500 shadow-xl"
          alt="Salman Aji"
        />
      </motion.div>
    </motion.div>
  </section>




<section id="about" className="py-20 px-6 max-w-5xl mx-auto">
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">About Me</h2>
    <div className="text-lg leading-relaxed text-gray-200 space-y-6">

      <p>
        I’m <span className="font-semibold text-white">Salman Aji</span>, a Syrian first-generation student at
        <span className="bg-purple-700/70 text-white px-2 py-0.5 rounded ml-1 mr-1">Brown University</span>,
        studying <span className="bg-green-700/70 text-white px-2 py-0.5 rounded">Computer Science</span> and <span className="bg-green-800/70 text-white px-2 py-0.5 rounded">Applied Math</span>.
      </p>

      <p>
        I care about using tech to help people. Whether it’s building tools to make education more fair or exploring how AI can improve healthcare, I want my work to have real impact. At Brown, I’m part of
        <span className="bg-blue-700/70 text-white px-2 py-0.5 rounded ml-1">Full Stack</span>, where I work on projects beyond class, and I’ve led community efforts shaped by where I come from and what I care about.
      </p>

      <p>
        Still, not everything I do is on a screen. I love being outside,<span className="text-cyan-400">hiking</span>, <span className="text-cyan-400">kayaking</span>, anything that lets me breathe.
        I enjoy slow mornings and making <span className="bg-emerald-700/70 text-white px-2 py-0.5 rounded">matcha</span> (the whisking is calming), and I’m always trying to pick up a new language.
        I like sharing my <span className="bg-yellow-800/70 text-white px-2 py-0.5 rounded">culture</span> and <span className="bg-orange-600/70 text-white px-2 py-0.5 rounded">food</span>,
        and one of my favorite things is <span className="text-pink-400">karaoke night</span> with my friends.
        Oh, and I definitely love <span className="bg-yellow-400 text-black px-2 py-0.5 rounded">cats</span> 🐱.
      </p>

    </div>
  </motion.div>
</section>


      <section id="story" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">My Story</h2>
          <div className="text-lg leading-relaxed text-gray-200">
            <p>
            The first time I wrote "Hello, World," I was in 10th grade, surrounded by a world that felt like it was falling apart. War had stolen the rhythm of my life: schools closed, power gone, plans abandoned. But in that quiet moment, alone with a my laptop, I typed two words and hit run. The screen replied: Hello, World. It was the first time in a long time something answered back.
            That moment changed me. I realized I could still build something, yeah it was small, but it was mine. When everything around me was uncertain, coding made sense. It wasn’t just about solving problems, it was about finding stability. It was the first time I felt in control, the first time I saw a future I could shape with my own hands
            <br></br>
            <br></br>
            Since then, I haven’t stopped. I code because it gave me my voice back. I code because it helps me build something better, for myself, for the people I care about, and even for those I may never meet. Every line of code is my way of saying I still believe in the future.
            Because when the world said no, I learned to build my own yes. That feeling has stayed with me. And I know it always will.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gray-900/50">
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

      {/* VectraFlow */}
      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-cyan-400">Incoming Research Assistant, VectraFlow Project</h3>
        <p className="text-sm text-gray-400">Brown University • May 2025 - Present</p>
        <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
          <li>Awarded Brown’s UTRA to work on an AI-augmented database system processing 50,000+ patient records.</li>
          <li>Collaborate with Rhode Island Hospital to reduce cohort selection time by 90% using LLM-based operators.</li>
          <li>Manage AI agents for query correction and data transformation.</li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://brown-db.github.io/projects/vectraflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-semibold text-cyan-300 hover:underline"
          >
            🔗 Explore the VectraFlow Project →
          </a>
        </div>
      </motion.div>

      {/* Head TA */}
      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-cyan-400">Head Teaching Assistant, AI Course</h3>
        <p className="text-sm text-gray-400">Brown University • Feb 2025 - Present</p>
        <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
          <li>Led hiring of TAs from 200+ applicants and designed course materials for 200+ students.</li>
          <li>Facilitated weekly 2-hour lab sessions, debugging, and Q&A to enhance student learning.</li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://browncsci410.github.io/s25-website/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-semibold text-cyan-300 hover:underline"
          >
            📘 Visit the Course Website →
          </a>
        </div>
      </motion.div>

      {/* Inverse RL Research */}
      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-cyan-400">Research Assistant, Inverse Multiagent Learning</h3>
        <p className="text-sm text-gray-400">Brown University • Nov 2024 - May 2025</p>
        <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
          <li>Collaborated with Prof. Amy Greenwald on modeling Spanish electricity markets using Inverse Reinforcement Learning.</li>
          <li>Achieved 2.02x lower MSE compared to ARIMA, enhancing forecasting accuracy.</li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://openreview.net/forum?id=JzvIWvC9MG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-semibold text-cyan-300 hover:underline"
          >
            📄 Read the Research Paper →
          </a>
        </div>
      </motion.div>

      {/* HousingWorks */}
      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-cyan-400">Data Analyst & Research Intern</h3>
        <p className="text-sm text-gray-400">HousingWorks RI • Feb 2024 - Aug 2024</p>
        <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-200">
          <li>Automated data scraping and analysis of U.S. Census datasets, reducing task time by 70%.</li>
          <li>Contributed to the 2024 Housing Fact Book, influencing Rhode Island’s housing policy.</li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://d337wih8hx5yft.cloudfront.net/images/Publications/HWRI_HFB24.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-semibold text-cyan-300 hover:underline"
          >
            🏠 View the Annual Fact Book 2024 →
          </a>
        </div>
      </motion.div>

    </div>
  </motion.div>
</section>




      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      

  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <Image src="/projects/Bruno.jpg" width={400} height={200} className="w-full h-90 object-cover rounded-lg mb-4" alt="Bruno’s Compass" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Bruno’s Compass</h3>

        <p className="text-sm text-gray-300 mt-4">Java, TypeScript, React, HTML, CSS, JUnit • Ongoing</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Built a site for 1000+ international students at Brown.</li>
          <li>Integrated AI chatbot trained on Brown-specific data.</li>
          <li>Helps with campus life and transition to the U.S.</li>
        </ul>
      </motion.div>

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <Image src="/projects/BlackJack.png"  width={400} height={200} className="w-full h-90 object-contain rounded-lg mb-4" alt="Blackjack Assistant" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Blackjack Assistant</h3>
        <div className="flex gap-6 mt-2">
          <motion.a href="https://github.com/saji802/Blackjack_Assistant" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <GitHubIcon />
      
          <span className="text-sm">Code</span>
          </motion.a>
          <motion.a href="https://youtu.be/bVmlFPspG5c" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
            <YouTubeIcon />
            <span className="text-sm">Demo</span>
        
          </motion.a>
        </div>
        <p className="text-sm text-gray-300 mt-4">Python, roboflow, OpenCV • March - May 2025</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Trained YOLOv8 on 10,000+ card images.</li>
          <li>Used DBSCAN to cluster hand types.</li>
          <li>Reinforcement learning suggests optimal moves.</li>
        </ul>
      </motion.div>

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <Image src="/projects/Go.png" width={400} height={200} className="w-full h-90 object-contain rounded-lg mb-4" alt="Multi-Agent Framework for Go Gameplay" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Multi-Agent Framework for Go Gameplay</h3>
        <div className="flex gap-6 mt-2">
          <motion.a href="https://github.com/saji802/Go-Agents" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <GitHubIcon />
          <span className="text-sm">Code</span>
          </motion.a>
          <motion.a href="https://youtube.com/shorts/dg_esbC7Gro?feature=share" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
            <YouTubeIcon />
            <span className="text-sm">Demo</span>
          </motion.a>
        </div>
        <p className="text-sm text-gray-300 mt-4">Python • Sep - Dec 2024</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Built agents using MCTS, Q-learning, and deep learning.</li>
          <li>Reached 1700 ELO rating.</li>
          <li>Won class tournament with 65+ participants.</li>
        </ul>
      </motion.div>

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <Image src="/projects/OS.png" width={400} height={200} className="w-full h-90 object-cover rounded-lg mb-4" alt="Compact Operating System" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Compact Operating System</h3>
        <div className="flex gap-6 mt-2">
          <motion.a href="https://github.com/saji802/my_OS" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <GitHubIcon />
        <span className="text-sm">Code</span>
          </motion.a>
          <motion.a href="https://youtu.be/hPRFX3Bhpf4" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <YouTubeIcon />
          <span className="text-sm">Demo</span>
          </motion.a>
        </div>
        <p className="text-sm text-gray-300 mt-4">C, C++, Git • Feb - Mar 2024</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Built small OS from scratch with custom memory management.</li>
          <li>Implemented page tables and system calls.</li>
          <li>Supported process creation and virtual memory.</li>
        </ul>
      </motion.div>

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <Image src="/projects/Vocablo.png" width={400} height={200} className="w-full h-90 object-contain rounded-lg mb-4" alt="Vocablo" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Vocablo: Vocabulary Tracker Web App</h3>
        <div className="flex gap-6 mt-2">
          <motion.a href="https://github.com/saji802/Vocablo" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <GitHubIcon />
          <span className="text-sm">Code</span>
          </motion.a>
          <motion.a href="https://www.youtube.com/watch?v=fjDKPDuUjiw" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
            <YouTubeIcon />
            <span className="text-sm">Demo</span>
          </motion.a>

        </div>
        <p className="text-sm text-gray-300 mt-4">TypeScript, Firebase, Next.js, Playwright, Clerk • Jan - Feb 2024</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Created AI-powered Spanish vocabulary tracker.</li>
          <li>Clustered words by theme and usage.</li>
          <li>Included progress visualization and authentication.</li>
        </ul>
      </motion.div>

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <Image src="/projects/Tracker.png" width={400} height={200} className="w-full h-90 object-contain rounded-lg mb-4" alt="Attendance Tracker" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Attendance Tracker</h3>
        <div className="flex gap-6 mt-2">
          <motion.a href="https://github.com/saji802/Attendance-Tracker" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <GitHubIcon />
          <span className="text-sm">Code</span>
          </motion.a>
          <motion.a href="https://youtu.be/agKCuqmHyMQ" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <YouTubeIcon />
          <span className="text-sm">Demo</span>
          </motion.a>
        </div>
        <p className="text-sm text-gray-300 mt-4">Python, OpenCV, Tkinter, SQLite • Jan - Feb 2024</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Developed GUI attendance app with face recognition.</li>
          <li>Integrated SQLite for logging and reporting.</li>
          <li>Automated absence and lateness email reports.</li>
        </ul>
      </motion.div>

      <motion.div variants={cardVariants} whileHover="hover" className="p-6 bg-gray-800 rounded-xl shadow-lg">
      <Image src="/projects/GameHub.png" width={400} height={200} className="w-full h-90 object-contain rounded-lg mb-4" alt="GameHub" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">GameHub</h3>
        <div className="flex gap-6 mt-2">
          <motion.a href="https://github.com/saji802/GameHub" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <GitHubIcon />
          <span className="text-sm">Code</span>
          </motion.a>
          <motion.a href="https://youtu.be/eyNzqPMY93o" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-gray-400 hover:text-cyan-300 transition">
          <YouTubeIcon />
          <span className="text-sm">Demo</span>
          </motion.a>
        </div>
        <p className="text-sm text-gray-300 mt-4">Java, JavaFx, SQLite • Nov - Dec 2023</p>
        <ul className="mt-2 text-sm text-gray-200 list-disc ml-5">
          <li>Created game hub with Othello, Tetris, and Doodle Jump.</li>
          <li>Used JavaFX for visual interface and animations.</li>
          <li>Built leaderboard using local CSV data.</li>
        </ul>
      </motion.div>

    </div>
  </motion.div>
</section>




<section id="skills" className="py-20 px-6 bg-gray-900/50">
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Programming Languages */}
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
            <BsCodeSlash size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-400">Programming Languages</h3>
        </div>
        <ul className="text-sm text-gray-200 grid grid-cols-2 gap-y-1 list-disc list-inside pl-2">
          <li>Python</li>
          <li>Java</li>
          <li>C/C++</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>R</li>
          <li>Racket</li>
        </ul>
      </div>

      {/* Frameworks */}
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
            <BsGear size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-400">Frameworks</h3>
        </div>
        <ul className="text-sm text-gray-200 grid grid-cols-2 gap-y-1 list-disc list-inside pl-2">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Firebase</li>
          <li>Playwright</li>
        </ul>
      </div>

      {/* Databases */}
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
            <FaDatabase size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-400">Databases</h3>
        </div>
        <ul className="text-sm text-gray-200 grid grid-cols-2 gap-y-1 list-disc list-inside pl-2">
          <li>SQLite</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </div>

      {/* Libraries */}
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
            <FaBook size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-400">Libraries</h3>
        </div>
        <ul className="text-sm text-gray-200 grid grid-cols-2 gap-y-1 list-disc list-inside pl-2">
          <li>NumPy</li>
          <li>Pandas</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>Scikit-learn</li>
          <li>OpenCV</li>
          <li>CVXPY</li>
        </ul>
      </div>

      {/* Courses */}
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
            <FaGraduationCap size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-400">Relevant College Courses</h3>
        </div>
        <ul className="text-sm text-gray-200 grid grid-cols-2 gap-y-1 list-disc list-inside pl-2">
          <li>AI</li>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Computer Vision</li>
          <li>Software Engineering</li>
          <li>Computer Systems</li>
          <li>OOP</li>
          <li>Data Structures</li>
        </ul>
      </div>

      {/* Spoken Languages */}
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full mr-3">
            <FaLanguage size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-cyan-400">Languages</h3>
        </div>
        <ul className="text-sm text-gray-200 grid grid-cols-2 gap-y-1 list-disc list-inside pl-2">
          <li>Arabic (Native)</li>
          <li>English (Fluent)</li>
          <li>French (Intermediate)</li>
        </ul>
      </div>
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
                <h3 className="text-2xl font-semibold text-gray-00">Address</h3>
                <p className="text-lg text-gray-400">
                  Brown University<br />
                  69 Brown St<br />
                  Providence, RI 02912<br />
                  USA
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
                <p className="text-lg text-gray-400 border-b border-dashed border-gray-500 inline-block">
                  salman_aji@brown.edu
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
                <p className="text-lg text-gray-400">+1 (401) 688-8211</p>
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
                <svg className="w-18 h-18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </motion.a>
              <br></br>
              <br></br>
              <motion.a
                href="https://linkedin.com/in/salman-aji1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#00FFFF" }}
                className="text-gray-400 transition-colors duration-300"
              >
                <svg className="w-18 h-18" fill="currentColor" viewBox="0 0 24 24">
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