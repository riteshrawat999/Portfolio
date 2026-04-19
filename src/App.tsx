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
  { name: "Firebase/ Firestore", icon: <Cloud className="w-5 h-5" />, category: "Backend" },
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
    <div className="min-h-screen bg-[#2C2C2C] text-[#F3F4F4] font-sans selection:bg-[#F3F4F4]/30">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F3F4F4]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#853953]/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#2C2C2C]/80 border-b border-[#612D53]/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-[#F3F4F4] flex items-center justify-center shadow-lg shadow-[#F3F4F4]/20">
              <Code2 className="w-5 h-5 text-[#2C2C2C]" />
            </div>
            <span className="font-bold text-lg tracking-tight text-[#F3F4F4]">Portfolio</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a 
                whileHover={{ y: -2 }}
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#F3F4F4]/60 hover:text-[#F3F4F4] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#853953" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/916202599162?text=Hi%20Ritesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20Flutter%20development%20opportunity%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#F3F4F4] text-[#2C2C2C] text-sm font-bold shadow-lg shadow-[#F3F4F4]/10 hover:text-white transition-all"
          >
            Hire Me
          </motion.a>
        </div>
      </nav>

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        {/* Hero Section */}
        <section id="about" className="py-20 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-[#F3F4F4]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F4F4] to-[#853953]">Ritesh Kumar</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#F3F4F4]/70 max-w-2xl leading-relaxed mb-10"
          >
            A motivated <span className="text-[#853953] font-bold">Flutter Developer</span> with clinical experience building mobile applications using Firebase, REST APIs, and advanced State Management. Seeking opportunities to contribute to real-world projects.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#612D53" }}
              href="https://github.com/riteshrawat999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C2C2C] transition-colors border border-[#853953]/30 text-[#F3F4F4] shadow-xl"
            >
              <Github className="w-5 h-5" /> GitHub
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#612D53" }}
              href="https://linkedin.com/in/ritesh-flutter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C2C2C] transition-colors border border-[#853953]/30 text-[#F3F4F4] shadow-xl"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, scaleX: 1.1 }}
              href="mailto:ritesh.flutter@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#853953] transition-colors text-white shadow-lg shadow-[#853953]/20 font-bold"
            >
              <Mail className="w-5 h-5" /> Let's Talk
            </motion.a>
          </motion.div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div 
            whileHover={{ y: -10, borderColor: "#853953" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#612D53]/20 border border-[#853953]/10 flex flex-col gap-5 backdrop-blur-sm transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#853953]/20 flex items-center justify-center text-[#853953] shadow-inner">
              <User className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#F3F4F4]">Personal Info</h3>
              <p className="text-sm text-[#F3F4F4]/50 font-medium">Based in India • Open to work</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10, borderColor: "#853953" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#612D53]/20 border border-[#853953]/10 flex flex-col gap-5 backdrop-blur-sm transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#853953]/20 flex items-center justify-center text-[#853953] shadow-inner">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#F3F4F4]">Availability</h3>
              <p className="text-sm text-[#F3F4F4]/50 font-medium">Full-time • Project-based • Consulting</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10, borderColor: "#853953" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#612D53]/20 border border-[#853953]/10 flex flex-col gap-5 backdrop-blur-sm transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#853953]/20 flex items-center justify-center text-[#853953] shadow-inner">
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#F3F4F4]">Experience</h3>
              <p className="text-sm text-[#F3F4F4]/50 font-medium">Building Mobile Apps since 2024</p>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-2 text-[#F3F4F4]">Technical Arsenal</h2>
              <p className="text-[#F3F4F4]/50 font-medium uppercase tracking-widest text-xs">The craft I keep sharpening.</p>
            </motion.div>
            <div className="flex bg-[#612D53]/40 p-1.5 rounded-2xl border border-[#853953]/20 self-start shadow-2xl backdrop-blur-md">
              {["All", "Mobile", "Backend", "Database"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab.toLowerCase() 
                      ? "bg-[#853953] text-white shadow-xl shadow-[#853953]/20" 
                      : "text-[#F3F4F4]/40 hover:text-[#F3F4F4]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: idx * 0.05 }}
                  key={skill.name}
                  className="p-5 rounded-2xl bg-[#612D53]/10 border border-[#853953]/10 flex items-center gap-4 hover:border-[#853953] hover:bg-[#612D53]/20 transition-all group cursor-default shadow-lg"
                >
                  <div className="text-[#853953] group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-sm text-[#F3F4F4]/90">{skill.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4 text-[#F3F4F4] tracking-tighter">Featured Projects</h2>
            <p className="text-[#F3F4F4]/50 max-w-xl mx-auto font-medium">Bespoke mobile solutions with architectural precision.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`group rounded-[2.5rem] overflow-hidden border border-[#853953]/20 bg-[#612D53]/5 transition-all duration-700 hover:border-[#853953] hover:shadow-2xl hover:shadow-[#853953]/10`}
              >
                <div className="p-10 pb-5 flex justify-between items-start">
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className={`p-5 rounded-3xl bg-[#853953]/10 backdrop-blur-xl border border-[#853953]/20 shadow-2xl text-[#853953]`}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="flex gap-3">
                    <motion.a 
                      whileHover={{ scale: 1.1, backgroundColor: "#853953" }}
                      href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-[#2C2C2C] border border-[#853953]/20 text-[#F3F4F4]/60 hover:text-white transition-all shadow-xl"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-10 pt-5">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-[#853953] transition-colors text-[#F3F4F4]">{project.title}</h3>
                  <p className="text-[#F3F4F4]/60 mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#853953] font-black">Highlights</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-[#F3F4F4]/70 font-semibold group-hover:translate-x-2 transition-transform duration-500">
                          <ChevronRight className="w-5 h-5 text-[#853953]" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[#853953]/10">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full bg-[#2C2C2C] border border-[#853953]/10 text-[10px] font-black uppercase tracking-widest text-[#F3F4F4]/40 hover:text-[#F3F4F4] cursor-default transition-colors">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-12 text-[#F3F4F4] tracking-tighter"
              >
                Academic Path
              </motion.h2>
              <div className="relative space-y-16">
                <div className="absolute left-[26px] top-4 bottom-4 w-1 bg-[#853953]/10" />
                
                {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={edu.degree} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative pl-20 group"
                  >
                    <div className="absolute left-4 top-1 w-6 h-6 rounded-full bg-[#2C2C2C] border-4 border-[#853953] group-hover:bg-[#853953] group-hover:scale-125 transition-all duration-500 shadow-[0_0_20px_rgba(133,57,83,0.4)] z-10" />
                    
                    <span className="text-xs font-black uppercase tracking-widest text-[#853953] mb-3 block">{edu.period}</span>
                    <h3 className="text-2xl font-black mb-2 text-[#F3F4F4] group-hover:text-white transition-colors">{edu.degree}</h3>
                    <p className="text-[#F3F4F4]/60 font-bold mb-4">{edu.institution}</p>
                    <p className="text-[#F3F4F4]/40 text-sm leading-relaxed max-w-lg italic font-medium">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[3rem] bg-gradient-to-br from-[#612D53]/30 to-[#2C2C2C] border border-[#853953]/20 relative shadow-2xl overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-white rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                  <Cpu className="w-48 h-48" />
                </div>
                
                <h3 className="text-3xl font-black mb-8 text-[#F3F4F4] tracking-tight">The Development Loop</h3>
                <div className="space-y-8">
                  <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#612D53]/20 border border-[#853953]/10 hover:bg-[#612D53]/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3F4F4]/10 flex items-center justify-center shrink-0 border border-[#F3F4F4]/20">
                      <span className="font-black text-[#F3F4F4]">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-[#F3F4F4]">Architecture First</h4>
                      <p className="text-sm text-[#F3F4F4]/40 font-medium leading-relaxed">Solid BLoC/Provider foundations over quick hacks.</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#612D53]/20 border border-[#853953]/10 hover:bg-[#612D53]/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3F4F4]/10 flex items-center justify-center shrink-0 border border-[#F3F4F4]/20">
                      <span className="font-black text-[#F3F4F4]">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-[#F3F4F4]">Motion & Polish</h4>
                      <p className="text-sm text-[#F3F4F4]/40 font-medium leading-relaxed">Smooth custom painters and widget-level craftsmanship.</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#612D53]/20 border border-[#853953]/10 hover:bg-[#612D53]/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3F4F4]/10 flex items-center justify-center shrink-0 border border-[#F3F4F4]/20">
                      <span className="font-black text-[#F3F4F4]">03</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-[#F3F4F4]">Data Integrity</h4>
                      <p className="text-sm text-[#F3F4F4]/40 font-medium leading-relaxed">High-performance Firebase and REST sync patterns.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden p-[2px] bg-gradient-to-br from-[#853953] via-[#612D53] to-white/20"
          >
            <div className="bg-[#2C2C2C] rounded-[2.9rem] p-10 md:p-20 flex flex-col items-center text-center backdrop-blur-3xl shadow-2xl">
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-[#F3F4F4] tracking-tighter">Initiate Sync.</h2>
              <p className="text-[#F3F4F4]/60 max-w-xl mb-16 text-xl font-medium leading-relaxed">
                Currently open for new challenges and collaborative mobile ecosystems. Let's build something that matters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-2xl">
                <motion.a 
                  whileHover={{ scale: 1.05, borderColor: "#F3F4F4" }}
                  href="mailto:ritesh.flutter@gmail.com" 
                  className="p-6 rounded-[2rem] bg-[#612D53]/20 border border-[#853953]/20 flex items-center justify-center gap-4 transition-all font-black text-[#F3F4F4] shadow-xl backdrop-blur-md"
                >
                  <Mail className="w-6 h-6 text-[#853953]" /> ritesh.flutter@gmail.com
                </motion.a>
                <motion.a 
                   whileHover={{ scale: 1.05, borderColor: "#F3F4F4" }}
                   href="tel:+916202599162"
                   className="p-6 rounded-[2rem] bg-[#612D53]/20 border border-[#853953]/20 flex items-center justify-center gap-4 transition-all font-black text-[#F3F4F4] shadow-xl backdrop-blur-md"
                >
                  <Smartphone className="w-6 h-6 text-[#853953]" /> +91 6202599162
                </motion.a>
              </div>

              <div className="mt-16 flex gap-10">
                {[
                  { icon: <Github className="w-7 h-7" />, url: "https://github.com/riteshrawat999" },
                  { icon: <Linkedin className="w-7 h-7" />, url: "https://linkedin.com/in/ritesh-flutter" },
                  { icon: <Mail className="w-7 h-7" />, url: "mailto:ritesh.flutter@gmail.com" },
                  { icon: <Globe className="w-7 h-7" />, url: "https://github.com/riteshrawat999" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.3, rotate: i % 2 === 0 ? 5 : -5 }}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#853953] hover:text-[#F3F4F4] transition-colors p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#853953] shadow-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </motion.main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-[#853953]/10 flex flex-col items-center gap-4 text-[#F3F4F4]/30 text-xs font-bold uppercase tracking-widest text-center">
        <p>© 2026 Ritesh Kumar • Flutter Developer Portfolio • Built with passion and precision</p>
      </footer>
    </div>

  );
}
