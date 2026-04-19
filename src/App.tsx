/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Cpu, 
  Layers,
  ChevronRight,
  Globe,
  MapPin,
  Calendar,
  User,
  ArrowRight,
  Cloud,
  Eye
} from "lucide-react";
import { useState } from "react";

const SKILLS = [
  { name: "Flutter", icon: <Smartphone className="w-5 h-5" />, category: "Mobile" },
  { name: "Dart", icon: <Code2 className="w-5 h-5" />, category: "Mobile" },
  { name: "Kotlin (Basic)", icon: <Cpu className="w-5 h-5" />, category: "Mobile" },
  { name: "Firebase/Firestore", icon: <Cloud className="w-5 h-5" />, category: "Backend" },
  { name: "SQLite", icon: <Database className="w-5 h-5" />, category: "Database" },
  { name: "Provider", icon: <Layers className="w-5 h-5" />, category: "Mobile" },
  { name: "Bloc/Cubit", icon: <Layers className="w-5 h-5" />, category: "Mobile" },
  { name: "GetX", icon: <Layers className="w-5 h-5" />, category: "Mobile" },
  { name: "REST APIs/JSON", icon: <Globe className="w-5 h-5" />, category: "Backend" },
  { name: "Git/GitHub", icon: <Github className="w-5 h-5" />, category: "Tools" },
];

const PROJECTS = [
  {
    title: "Face Recognition",
    description: "Developed a real-time facial recognition application using Flutter and TensorFlow Lite. Integrated FaceNet Model for face comparison.",
    tech: ["Flutter", "GetX", "TensorFlow Lite", "FaceNet"],
    icon: <Eye className="w-8 h-8 text-emerald-400" />,
    color: "bg-emerald-500/10 border-emerald-500/20",
    features: ["Real-time Detection", "Optimized Image Processing", "State Management: GetX", "On-device AI"],
    github: "https://github.com/riteshrawat999/face_recognition"
  },
  {
    title: "Weather Application",
    description: "Built a real-time weather app with comprehensive forecasting using OpenWeather API. Implemented robust error handling.",
    tech: ["Flutter", "Bloc", "REST API", "JSON Parsing"],
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-500/10 border-blue-500/20",
    features: ["State Management: Bloc", "JSON Parsing", "Responsive UI", "Real-time updates"],
    github: "https://github.com/riteshrawat999/weather_app"
  }
];

const EDUCATION = [
  {
    degree: "Bachelor Of Computer Applications (BCA)",
    institution: "Maulana Mazharul Haque Arabic & Persian University, Patna",
    period: "2023 - 2026",
    description: "Currently pursuing a degree in Computer Applications, focusing on software development and computer science fundamentals."
  },
  {
    degree: "Professional Diploma In Software Engineering",
    institution: "Edugaon Education and Innovation Labs, Patna",
    period: "2021 - 2023",
    description: "Completed comprehensive training in software engineering principles and modern development methodologies."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" ? SKILLS : SKILLS.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-[#37353E] text-white font-sans selection:bg-[#D3DAD9]/30">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#715A5A]/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#37353E]/80 border-b border-[#715A5A]/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-[#D3DAD9] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-[#37353E]" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Portfolio</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-[#D3DAD9] text-[#37353E] text-sm font-semibold shadow-lg shadow-[#D3DAD9]/20 hover:bg-[#D3DAD9]/90 transition-all"
          >
            Hire Me
          </motion.button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="about" className="py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-[#44444E] shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/flutterdev/200/200" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-full" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D3DAD9]">Ritesh Kumar</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
          >
            A motivated <span className="text-[#D3DAD9] font-semibold">Flutter Developer</span> with clinical experience building mobile applications using Firebase, REST APIs, and advanced State Management. Seeking opportunities to contribute to real-world projects.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="https://github.com/riteshrawat999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#44444E] hover:bg-[#715A5A] transition-colors border border-[#715A5A]/30 text-white">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/ritesh-flutter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#44444E] hover:bg-[#715A5A] transition-colors border border-[#715A5A]/30 text-white">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="mailto:ritesh.flutter@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D3DAD9] hover:bg-[#D3DAD9]/80 transition-colors text-[#37353E] shadow-lg shadow-[#D3DAD9]/10 font-bold">
              <Mail className="w-5 h-5" /> Let's Talk
            </a>
          </motion.div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-[#44444E]/30 border border-[#715A5A]/20 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Personal Info</h3>
              <p className="text-sm text-white/50">Based in India • Open to remote work</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-[#44444E]/30 border border-[#715A5A]/20 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Availability</h3>
              <p className="text-sm text-white/50">Full-time • Project-based • Consulting</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-[#44444E]/30 border border-[#715A5A]/20 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Experience</h3>
              <p className="text-sm text-white/50">4+ Years in Mobile & Web Development</p>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Technical Arsenal</h2>
              <p className="text-white/50">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="flex bg-[#44444E]/50 p-1 rounded-xl border border-[#715A5A]/30 self-start">
              {["All", "Mobile", "Backend", "Database"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.toLowerCase() 
                      ? "bg-[#D3DAD9] text-[#37353E] shadow-lg shadow-[#D3DAD9]/10" 
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#44444E]/20 border border-[#715A5A]/20 flex items-center gap-3 hover:border-white/50 transition-colors group"
                >
                  <div className="text-[#715A5A] group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm text-white/80">{skill.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-white/50 max-w-xl mx-auto">Focusing on complex state management and innovative solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group rounded-3xl overflow-hidden border border-[#715A5A]/30 bg-[#44444E]/10 transition-all duration-500 hover:scale-[1.02] hover:bg-[#44444E]/20`}
              >
                <div className="p-8 pb-4 flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-[#715A5A]/20 backdrop-blur-sm border border-[#715A5A]/30 shadow-inner text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#37353E]/50 border border-[#715A5A]/30 text-white/60 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-8 pt-4">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors text-white">{project.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold">Core Highlights</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                          <ChevronRight className="w-4 h-4 text-white" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#715A5A]/20">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-[#37353E] border border-[#715A5A]/30 text-xs font-mono text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="experience" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-10 text-white">Educational Background</h2>
              <div className="relative space-y-12">
                <div className="absolute left-6 top-2 bottom-2 w-px bg-[#715A5A]/30" />
                
                {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={edu.degree} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-12 group"
                  >
                    <div className="absolute left-[18px] top-1.5 w-3 h-3 rounded-full bg-[#715A5A] border-2 border-[#37353E] group-hover:bg-[#D3DAD9] group-hover:scale-150 transition-all z-10" />
                    <div className="absolute left-[23px] -top-2 h-0 w-0 group-hover:h-full group-hover:w-px bg-[#D3DAD9]/30 transition-all duration-500" />
                    
                    <span className="text-sm font-semibold text-white/80 mb-2 block">{edu.period}</span>
                    <h3 className="text-xl font-bold mb-1 text-white/90">{edu.degree}</h3>
                    <p className="text-white/60 font-medium mb-3">{edu.institution}</p>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#44444E]/40 to-[#37353E] border border-[#715A5A]/30 relative shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-white">
                  <Cpu className="w-24 h-24" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white">Development Roadmap</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#44444E]/20 border border-[#715A5A]/20">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="font-bold text-white">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white/90">Architecture Planning</h4>
                      <p className="text-sm text-white/40">Choosing the right state management (Bloc/GetX) and designing clean domain models.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#44444E]/20 border border-[#715A5A]/20">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="font-bold text-white">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white/90">UI/UX Implementation</h4>
                      <p className="text-sm text-white/40">Building pixel-perfect interfaces with Flutter's widget tree and custom painters.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#44444E]/20 border border-[#715A5A]/20">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="font-bold text-white">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white/90">Backend & API Sync</h4>
                      <p className="text-sm text-white/40">Integrating RESTful APIs with Node.js/PHP and handling data persistence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="relative rounded-[2rem] overflow-hidden p-1 bg-gradient-to-r from-[#37353E] via-[#715A5A] to-white">
            <div className="bg-[#37353E] rounded-[1.9rem] p-8 md:p-16 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's work together</h2>
              <p className="text-white/60 max-w-lg mb-12 text-lg">
                I'm currently available for full-time opportunities and freelance projects. Whether you have a specific idea or just want to chat.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
                <a 
                  href="mailto:ritesh.flutter@gmail.com" 
                  className="p-4 rounded-2xl bg-[#44444E]/30 border border-[#715A5A]/30 flex items-center justify-center gap-3 hover:border-white transition-all font-semibold text-white"
                >
                  <Mail className="w-5 h-5" /> ritesh.flutter@gmail.com
                </a>
                <a 
                   href="tel:+916202599162"
                   className="p-4 rounded-2xl bg-[#44444E]/30 border border-[#715A5A]/30 flex items-center justify-center gap-3 hover:border-white transition-all font-semibold text-white"
                >
                  <Smartphone className="w-5 h-5" /> +91 6202599162
                </a>
              </div>

              <div className="mt-12 flex gap-6">
                <a href="https://github.com/riteshrawat999" target="_blank" rel="noopener noreferrer" className="text-[#715A5A] hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ritesh-flutter" target="_blank" rel="noopener noreferrer" className="text-[#715A5A] hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:ritesh.flutter@gmail.com" className="text-[#715A5A] hover:text-white transition-colors">
                   <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/riteshrawat999" target="_blank" rel="noopener noreferrer" className="text-[#715A5A] hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-[#715A5A]/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-sm">
        <p>© 2026 Ritesh Kumar. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
