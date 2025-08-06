"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Download,
  MapPin,
  Phone,
  Globe,
  Code2,
  Database,
  Server,
  Cloud,
  Zap,
  Shield,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoaded, setIsLoaded] = useState(false)

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const sections = Object.entries(sectionRefs)
      const scrollPosition = window.scrollY + 200

      for (const [name, ref] of sections) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(name)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionName: string) => {
    const section = sectionRefs[sectionName as keyof typeof sectionRefs]
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth" })
    }
  }

const skills = [
  {
    name: "Full Stack Development",
    icon: Code2,
    description: "PHP, JavaScript, Laravel, React",
    level: 80,
  },
  {
    name: "Backend & APIs",
    icon: Server,
    description: "Laravel RESTful APIs, MVC architecture",
    level: 90,
  },
  {
    name: "Frontend Styling",
    icon: Zap,
    description: "HTML, CSS, Bootstrap, Tailwind",
    level: 70,
  },
  {
    name: "Database Management",
    icon: Database,
    description: "MySQL – modeling, queries, optimization",
    level: 75,
  },
  {
    name: "Version Control",
    icon: Shield,
    description: "Git & GitHub – collaboration and branching",
    level: 75,
  },
  {
    name: "Testing & Debugging",
    icon: Cloud,
    description: "Postman, browser dev tools, bug fixing",
    level: 75,
  },
];

const experience = [
  {
    title: "Freelance Web Developer",
    company: "El Ghait",
    period: "May 2025 – July 2025",
    location: "Remote",
    description: "Developed a full-featured shop Application with teammate, including admin and customer modules.",
    achievements: [
      "Created admin panel to manage products, orders, and posts",
      "Built responsive customer interface for product browsing and purchasing",
      "Implemented user authentication and product categorization",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Web Development Intern",
    company: "Click Stream ADS",
    period: "Sep 2024 – Nov 2024",
    location: "Oujda, Morocco",
    description: "Worked on email templates and campaign optimization for digital advertising.",
    achievements: [
      "Created responsive HTML email templates",
      "Assisted in server management and deployment",
      "Helped optimize ad campaigns for better performance",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Developer Intern",
    company: "ADM VALUE",
    period: "Jan 2023 – Feb 2023",
    location: "Oujda, Morocco",
    description: "Participated in the full development lifecycle of a recruitment website using Laravel.",
    achievements: [
      "Built advanced search and CV management features",
      "Developed user and admin interfaces with modern UI components",
      "Collaborated with a team to deliver a functional web application",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const projects = [
  {
    title: "El Ghait Shop Application",
    category: "Online Store",
    description:
      "Full-featured e-commerce app with admin and customer dashboards. Built to manage products, categories, and orders.",
    image: "/images/elghait.gif",
    tech: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    metrics: { products: "200+", orders: "300+", posts: "50+" },
    github: "private",
    demo: "#",
    gradient: "from-green-600 via-teal-600 to-cyan-600",
  },
  {
    title: "Auction Sales Application",
    category: "Bidding Platform",
    description:
    "Real-time bidding platform allowing users to create, join, and manage auctions. Includes authentication and admin dashboard.",
    image: "/images/ezgif-70c61aec5dfeac.gif",
    tech: ["Laravel", "JavaScript", "Tailwind", "MySQL"],
    metrics: { auctions: "100+", response: "Real-time", users: "multi-user support" },
    github: "https://github.com/oussamabensaidi/bidding.git",
    demo: "#",
    gradient: "from-blue-600 via-purple-600 to-indigo-600",
  },
  {
    title: "Trading Analysis Application",
    category: "Finance Tools",
    description:
      "A productivity-focused finance app for tracking trading accuracy, managing budgets, and organizing daily tasks with time tracking.",
    image: "/images/ezgif-2ec1e826f51365.gif",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    metrics: { analyses: "1K+", accuracy: "High", users: "Personal Use" },
    github: "https://github.com/oussamabensaidi/trade-app.git",
    demo: "#",
    gradient: "from-purple-600 via-pink-600 to-red-600",
  },
];


  const navItems = [
    { name: "Home", key: "hero" },
    { name: "About", key: "about" },
    { name: "Experience", key: "experience" },
    { name: "Projects", key: "projects" },
    { name: "Contact", key: "contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Oussama Bensaidi
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.key ? "text-purple-400" : "text-slate-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent backdrop-blur-sm"
                onClick={() => {
    // Option 1: Direct download
    const link = document.createElement('a');
    link.href = 'DOC-20250712-WA0161_250715_144155.pdf';
    link.download = 'Oussama_Bensaidi_Resume.pdf';
    link.click();
    
  }}

            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="pt-24 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Full-Stack Developer 
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  junior
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          I design and build scalable full-stack applications with Laravel, React, and MySQL.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all"
                onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all"
  onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=bensaidioussama7@gmail.com", "_blank")}
  
                  >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-sm border border-slate-700/50">
                  <img
                    // src="/placeholder.svg?height=400&width=400&text=Professional+Photo"
                    src="/images/moi.jpg"
                    alt="Oussama Bensaidi - fullstack"
                    className="w-full h-full object-cover"
                  />


                  
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Code2 className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            {/* <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              I'm oussama a web developer passionate about building clean practical and user-focused applications.
              I love turning ideas into real projects.
              always aiming for smart efficint solutions rather than just <span className="flashydesign">flashy designs </span>  
               beyond coding im driven by learning new stuff 
            </p> */}
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I’m Oussama, a junior full-stack web developer with hands-on experience in Laravel, React, and MySQL. 
            I build clean, user-friendly applications and enjoy turning ideas into working projects.
             Always eager to learn new tools and collaborate, I’m looking for opportunities to grow my skills and contribute to real-world teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 transform group"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-white">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300">{skill.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

         <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
  {[
    { value: "5+", label: "Projects Built", color: "from-purple-400 to-pink-400" },
    { value: "2", label: "Internships Completed", color: "from-cyan-400 to-blue-400" },
    { value: "1", label: "Freelance Project", color: "from-green-400 to-teal-400" },
    { value: "6+ months", label: "Multiple internships and freelance projects", color: "from-yellow-400 to-orange-400" },
  ].map((stat, index) => (
    <div key={index} className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
      <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
        {stat.value}
      </div>
      <div className="text-slate-400">{stat.label}</div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-slate-300">My experience developing web applications and collaborating with teams</p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] transform group overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
                <CardHeader className="relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-white mb-1">{job.title}</CardTitle>
                      <div className="flex items-center gap-4 text-slate-300">
                        <span className="font-medium">{job.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 bg-purple-500/10 backdrop-blur-sm"
                    >
                      {job.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300 mt-4">{job.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-3">
                    {job.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-300">
              Some of the systems I've built for real-world use and personal growth.        
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 transform group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 bg-purple-500/10 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-700/50">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-purple-400">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                  {project.github && project.github !== "private" ? (
  <Button
    variant="outline"
    size="sm"
    className="border-slate-600 text-slate-300 hover:bg-slate-700/50 bg-transparent backdrop-blur-sm"
    onClick={() => window.open(project.github, "_blank")}
  >
    <Github className="w-4 h-4 mr-2" />
    Code
  </Button>
) : (
  <div className="text-sm text-slate-400 italic py-2 px-3 border border-slate-700/50 rounded backdrop-blur-sm bg-slate-700/20">
    Private Repository
  </div>
)}

                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700/50 bg-transparent backdrop-blur-sm"
                      >
                      <ExternalLink className="w-4 h-4 mr-2" path="google.com" />
                      Demo
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-300">
              Ready to build something amazing? I'm always open to discussing new opportunities and interesting
              projects.
            </p>
          </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
  <div className="space-y-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
  {[
    { 
      icon: Mail, 
      text: "bensaidioussama7@gmail.com",
      isClickable: true,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=bensaidioussama7@gmail.com"
    },
    { 
      icon: Phone, 
      text: "212 6 30 86 94 02",
    },
    { 
      icon: MapPin, 
      text: "Morocco Rabat-Salé-Kénitra" 
    },
    { 
      icon: Globe, 
      text: "https://bensaidioussama-portfolio.vercel.app/" 
    },
  ].map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-3 p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 ${
        item.isClickable ? 'hover:bg-slate-700/40 cursor-pointer transition-colors duration-200' : ''
      }`}
    >
      {item.isClickable ? (
        <a
          href={item.href}
          className="flex items-center gap-3 w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon className="w-5 h-5 text-purple-400" />
          <span className="text-slate-300">{item.text}</span>
        </a>
      ) : (
        <>
          <item.icon className="w-5 h-5 text-purple-400" />
          <span className="text-slate-300">{item.text}</span>
        </>
      )}
    </div>
  ))}
</div>
              </div>

          <div className="flex gap-4 justify-center">
  <Button
    variant="outline"
    size="sm"
    className="border-slate-600 text-slate-300 hover:bg-slate-700/50 bg-transparent backdrop-blur-sm"
    onClick={() => window.open('https://github.com/oussamabensaidi', '_blank')}
  >
    <Github className="w-4 h-4 mr-2" />
    GitHub
  </Button>
  <Button
    variant="outline"
    size="sm"
    className="border-slate-600 text-slate-300 hover:bg-slate-700/50 bg-transparent backdrop-blur-sm"
    onClick={() => window.open('https://www.linkedin.com/in/bensaidi-oussama ', '_blank')}
  >
    <Linkedin className="w-4 h-4 mr-2" />
    LinkedIn
  </Button>
</div>
</div>


            {/* <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25">
                  Send Message
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Oussama Bensaidi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
