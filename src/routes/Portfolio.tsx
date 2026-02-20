import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Send,
  Star,
  Twitter,
  X,
  Award,
  Coffee,
  Globe,
  Database,
  Server,
  Palette,
  Terminal,
  Smartphone,
  Cloud,
} from 'lucide-react'

export const Route = createFileRoute('/Portfolio')({
  component: Portfolio,
})

// ============================================================================
// 📝 YOUR CV DATA - REPLACE WITH YOUR INFORMATION
// ============================================================================

const personalInfo = {
  name: 'Bhupendra Bhatta',
  title: 'Full-Stack Developer',
  tagline: 'Crafting Digital Experiences with Code & Creativity',
  email: 'hello@yourdomain.com.np',
  phone: '+977 98XXXXXXXX',
  location: 'Kathmandu, Nepal',
  website: 'https://yourdomain.com.np',
  resumeUrl: '/resume.pdf', // Link to downloadable resume
  availability: 'Available for freelance',

  // Social Links
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },

  // Hero Stats
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '99%', label: 'Success Rate' },
  ],
}

const aboutMe = {
  image: '/profile.jpg', // Your profile image
  bio: [
    "Hi! I'm a passionate full-stack developer with over 5 years of experience in crafting beautiful and functional web applications.",
    'I specialize in React, Node.js, and cloud technologies. I love turning complex problems into simple, elegant solutions that users love.',
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while planning my next project.",
  ],
  highlights: [
    { icon: Coffee, label: 'Coffee Lover' },
    { icon: Code2, label: 'Clean Code Advocate' },
    { icon: Rocket, label: 'Fast Learner' },
    { icon: Heart, label: 'Open Source Contributor' },
  ],
}

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company Name',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    startDate: 'Jan 2022',
    endDate: 'Present',
    current: true,
    description:
      'Leading development of enterprise applications and mentoring junior developers.',
    achievements: [
      'Led a team of 5 developers to deliver a major e-commerce platform',
      'Improved application performance by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored 3 junior developers who got promoted',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Another Company',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    current: false,
    description:
      'Built scalable web applications and RESTful APIs for various clients.',
    achievements: [
      'Developed 10+ client projects from scratch',
      'Integrated payment gateways handling $1M+ transactions',
      'Built real-time features using WebSockets',
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Startup Inc.',
    location: 'Remote',
    type: 'Full-time',
    startDate: 'Jan 2019',
    endDate: 'May 2020',
    current: false,
    description:
      'Created responsive and interactive user interfaces for web applications.',
    achievements: [
      "Built company's flagship product UI from ground up",
      'Reduced bundle size by 50% through code splitting',
      'Implemented accessibility features achieving WCAG 2.1 compliance',
    ],
    technologies: ['React', 'TypeScript', 'SASS', 'Redux'],
  },
  {
    id: 4,
    title: 'Junior Developer',
    company: 'First Company',
    location: 'Kathmandu, Nepal',
    type: 'Internship',
    startDate: 'Jun 2018',
    endDate: 'Dec 2018',
    current: false,
    description:
      'Started my professional journey learning from senior developers.',
    achievements: [
      'Learned industry best practices',
      'Contributed to 5 internal projects',
      'Converted from intern to full-time developer',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
]

const education = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science",
    institution: 'Tribhuvan University',
    location: 'Kathmandu, Nepal',
    startDate: '2014',
    endDate: '2018',
    grade: 'First Division with Distinction',
    achievements: [
      "Dean's List for 4 consecutive years",
      'Led the university coding club',
      'Won inter-college hackathon',
    ],
  },
  {
    id: 2,
    degree: 'Higher Secondary (+2 Science)',
    institution: 'Your College Name',
    location: 'Kathmandu, Nepal',
    startDate: '2012',
    endDate: '2014',
    grade: 'First Division',
    achievements: ['Physics topper', 'Science club president'],
  },
]

const skills = {
  technical: [
    {
      category: 'Frontend',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'Vue.js', level: 80 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Node.js/Express', level: 90 },
        { name: 'Python/FastAPI', level: 75 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 },
        { name: 'WebSockets', level: 85 },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Prisma/Drizzle', level: 85 },
        { name: 'Firebase', level: 75 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Vercel/Netlify', level: 90 },
      ],
    },
  ],
  tools: [
    'Git',
    'VS Code',
    'Figma',
    'Postman',
    'Jira',
    'Notion',
    'GitHub Actions',
    'Jest',
    'Cypress',
    'Storybook',
  ],
  soft: [
    'Problem Solving',
    'Team Leadership',
    'Communication',
    'Project Management',
    'Mentoring',
    'Agile/Scrum',
  ],
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and comprehensive admin dashboard.',
    longDescription:
      'Built from scratch for a local business, handling 1000+ daily transactions.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'TailwindCSS', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
    emoji: '🛒',
    stats: { users: '10K+', transactions: '$500K+' },
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool using GPT-4 for creating blog posts, social media content, and marketing copy.',
    longDescription: 'SaaS product with 500+ active subscribers.',
    image: '/projects/ai-content.jpg',
    tags: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ai-content',
    featured: true,
    color: 'from-purple-500 to-pink-500',
    emoji: '🤖',
    stats: { users: '500+', content: '50K+ generated' },
  },
  {
    id: 3,
    title: 'Project Management App',
    description:
      'A collaborative project management tool with real-time updates, task tracking, Kanban boards, and team communication.',
    longDescription: 'Used internally by 3 companies with 100+ users.',
    image: '/projects/pm-app.jpg',
    tags: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/pm-app',
    featured: true,
    color: 'from-green-500 to-emerald-500',
    emoji: '📋',
    stats: { teams: '50+', tasks: '10K+ managed' },
  },
  {
    id: 4,
    title: 'Real Estate Portal',
    description:
      'A comprehensive real estate listing platform with advanced search, virtual tours, and agent management.',
    longDescription: 'Serving 200+ real estate agents in Nepal.',
    image: '/projects/real-estate.jpg',
    tags: ['Next.js', 'Mapbox', 'PostgreSQL', 'AWS S3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/real-estate',
    featured: false,
    color: 'from-orange-500 to-red-500',
    emoji: '🏠',
    stats: { listings: '5K+', agents: '200+' },
  },
  {
    id: 5,
    title: 'Learning Management System',
    description:
      'An LMS platform for online courses with video streaming, quizzes, certificates, and progress tracking.',
    longDescription:
      'Built for an educational institution with 2000+ students.',
    image: '/projects/lms.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'FFmpeg'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/lms',
    featured: false,
    color: 'from-indigo-500 to-purple-500',
    emoji: '📚',
    stats: { students: '2K+', courses: '100+' },
  },
  {
    id: 6,
    title: 'Health & Fitness App',
    description:
      'A mobile-first fitness tracking app with workout plans, nutrition logging, and progress analytics.',
    longDescription: 'React Native app with 5K+ downloads.',
    image: '/projects/fitness.jpg',
    tags: ['React Native', 'Firebase', 'Node.js', 'Charts'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/fitness',
    featured: false,
    color: 'from-pink-500 to-rose-500',
    emoji: '💪',
    stats: { downloads: '5K+', workouts: '50K+ logged' },
  },
]

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://aws.amazon.com/verification',
    icon: Cloud,
  },
  {
    id: 2,
    name: 'Meta Frontend Developer Professional',
    issuer: 'Meta (Coursera)',
    date: '2022',
    credentialUrl: 'https://coursera.org/verify',
    icon: Code2,
  },
  {
    id: 3,
    name: 'Google Cloud Professional',
    issuer: 'Google',
    date: '2022',
    credentialUrl: 'https://google.com/verify',
    icon: Cloud,
  },
  {
    id: 4,
    name: 'MongoDB Developer Certification',
    issuer: 'MongoDB University',
    date: '2021',
    credentialUrl: 'https://mongodb.com/verify',
    icon: Database,
  },
]

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    title: 'CEO, Tech Startup',
    image: '/testimonials/john.jpg',
    content:
      'Working with this developer was an absolute pleasure. They delivered our project on time and exceeded all expectations. Their technical skills and communication are top-notch.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Product Manager, E-commerce Co.',
    image: '/testimonials/sarah.jpg',
    content:
      "Exceptional work! The attention to detail and problem-solving abilities are remarkable. Our platform's performance improved significantly after their optimizations.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'CTO, SaaS Company',
    image: '/testimonials/michael.jpg',
    content:
      "One of the best developers I've worked with. They understand business requirements and translate them into elegant technical solutions. Highly recommended!",
    rating: 5,
  },
]

const languages = [
  { name: 'Nepali', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Fluent', proficiency: 90 },
  { name: 'Hindi', level: 'Conversational', proficiency: 70 },
]

const interests = [
  { name: 'Open Source', icon: Github },
  { name: 'Tech Blogging', icon: Terminal },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Cloud Architecture', icon: Cloud },
  { name: 'Photography', icon: Smartphone },
  { name: 'Travel', icon: Globe },
]

// ============================================================================
// 🎨 UTILITY FUNCTIONS & COMPONENTS
// ============================================================================

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

// Button Component
function Button({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost' | 'gradient'
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const variants = {
    default: 'bg-primary-500 text-white hover:bg-primary-600',
    outline: 'border-2 border-white/20 hover:bg-white/10',
    ghost: 'hover:bg-white/10',
    gradient:
      'bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink text-white shadow-lg hover:shadow-xl bg-[length:200%_200%] animate-gradient',
  }

  const sizes = {
    default: 'h-10 px-5 py-2',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-12 px-8 text-base',
    xl: 'h-14 px-10 text-lg',
    icon: 'h-10 w-10',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// Input Component
function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-lg border-2 border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
        className,
      )}
      {...props}
    />
  )
}

// Textarea Component
function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'min-h-[140px] w-full rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none',
        className,
      )}
      {...props}
    />
  )
}

// Section Wrapper
function Section({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('py-24 relative', className)}>
      {children}
    </section>
  )
}

// Section Header
function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: {
  badge?: string
  title: string
  highlight: string
  description?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description && (
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  )
}

// Animated Card
function AnimatedCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary-500/30 transition-colors',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

// Skill Bar
function SkillBar({
  name,
  level,
  delay = 0,
}: {
  name: string
  level: number
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="text-white/60">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan"
        />
      </div>
    </div>
  )
}

// ============================================================================
// 🚀 MAIN PORTFOLIO COMPONENT
// ============================================================================

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink origin-left z-[100]"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gradient"
            >
              {personalInfo.name.split(' ')[0]}
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    activeSection === item.id
                      ? 'text-white bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5',
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="gradient"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-[#0a0a0f]/95 border-t border-white/5"
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <Section id="home" className="min-h-screen flex items-center pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary-500/20 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-500/15 blur-[80px]"
          />
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              {personalInfo.availability}
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
            >
              {/* <span className="block text-white/90">Hi, I'm</span> */}
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/60 mb-4"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/40 max-w-2xl mx-auto mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-white/50 mb-10"
            >
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
            >
              {personalInfo.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                variant="gradient"
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="xl"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4"
            >
              {[
                {
                  icon: Github,
                  href: personalInfo.social.github,
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: personalInfo.social.linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: Twitter,
                  href: personalInfo.social.twitter,
                  label: 'Twitter',
                },
                {
                  icon: Mail,
                  href: `mailto:${personalInfo.email}`,
                  label: 'Email',
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/50 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60"
              >
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 right-[10%] hidden xl:block"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg shadow-primary-500/30 flex items-center justify-center text-3xl">
            ⚛️
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-[5%] hidden xl:block"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg flex items-center justify-center text-2xl">
            🚀
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/3 left-[15%] hidden xl:block"
        >
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg flex items-center justify-center text-xl">
            ✨
          </div>
        </motion.div>
      </Section>

      {/* ================================================================== */}
      {/* ABOUT SECTION */}
      {/* ================================================================== */}
      <Section id="about" className="bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="About Me"
            title="Get to Know"
            highlight="Me Better"
            description="A passionate developer dedicated to creating impactful digital solutions"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-cyan-500 to-pink-500" />
                <div className="absolute inset-0 flex items-center justify-center text-[180px]">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-primary-500/20 to-pink-500/20 -z-10" />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-[#0a0a0f] border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-green-500/20">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white">100+ Projects</div>
                    <div className="text-sm text-white/60">
                      Completed successfully
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {aboutMe.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-white/70 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {aboutMe.highlights.map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-primary-500/20">
                      <Icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <span className="text-white/80">{label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-bold text-white">Quick Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <Mail className="h-5 w-5 text-primary-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Phone className="h-5 w-5 text-primary-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin className="h-5 w-5 text-primary-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Globe className="h-5 w-5 text-primary-400" />
                    <span>{personalInfo.website}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                    >
                      <span className="text-white/80">{lang.name}</span>
                      <span className="text-white/40 ml-2">({lang.level})</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* EXPERIENCE SECTION */}
      {/* ================================================================== */}
      <Section id="experience">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Career"
            title="Work"
            highlight="Experience"
            description="My professional journey and the companies I've had the pleasure to work with"
          />

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-transparent" />

                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-[#0a0a0f]" />

                {/* Content Card */}
                <div className="ml-8 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-white/60">
                        <span className="text-primary-400 font-medium">
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Calendar className="h-4 w-4" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-white/60 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/70"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm"
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
      </Section>

      {/* ================================================================== */}
      {/* SKILLS SECTION */}
      {/* ================================================================== */}
      <Section id="skills" className="bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Expertise"
            title="Skills &"
            highlight="Technologies"
            description="The tools and technologies I use to bring ideas to life"
          />

          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.technical.map((category, catIndex) => (
              <AnimatedCard key={category.category} delay={catIndex * 0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={cn(
                      'p-3 rounded-xl bg-gradient-to-br',
                      category.color,
                    )}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Tools & Technologies Marquee */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white text-center mb-6">
              Tools I Use
            </h3>
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="flex gap-4"
              >
                {[...skills.tools, ...skills.tools].map((tool, index) => (
                  <div
                    key={`${tool}-${index}`}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap"
                  >
                    {tool}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-white text-center mb-6">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-white/10 hover:border-primary-500/30"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* PROJECTS SECTION */}
      {/* ================================================================== */}
      <Section id="projects">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Portfolio"
            title="Featured"
            highlight="Projects"
            description="A selection of my recent work and side projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary-500/30 transition-all">
                  {/* Project Image/Gradient */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-80',
                        project.color,
                      )}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-7xl">
                      {project.emoji}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-black"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-black"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats */}
                    {project.stats && (
                      <div className="flex gap-4 mb-4 text-sm">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-white/50">
                            <span className="text-white font-medium">
                              {value}
                            </span>{' '}
                            {key}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              View All Projects on GitHub
              <Github className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* EDUCATION & CERTIFICATIONS SECTION */}
      {/* ================================================================== */}
      <Section id="education" className="bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Background"
            title="Education &"
            highlight="Certifications"
            description="My academic background and professional certifications"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="h-7 w-7 text-primary-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <AnimatedCard key={edu.id} delay={index * 0.1}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-primary-400">{edu.institution}</p>
                      </div>
                      <div className="text-right text-sm text-white/50">
                        <div>
                          {edu.startDate} - {edu.endDate}
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm inline-block mb-3">
                      {edu.grade}
                    </div>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-white/60 text-sm"
                        >
                          <Star className="h-3 w-3 text-yellow-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="h-7 w-7 text-primary-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <AnimatedCard key={cert.id} delay={index * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20">
                        <cert.icon className="h-6 w-6 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{cert.name}</h4>
                        <p className="text-white/60 text-sm">{cert.issuer}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-white/40 text-sm">
                            {cert.date}
                          </span>
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 text-sm hover:underline flex items-center gap-1"
                          >
                            Verify
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* TESTIMONIALS SECTION */}
      {/* ================================================================== */}
      <Section id="testimonials">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Testimonials"
            title="What Clients"
            highlight="Say"
            description="Feedback from people I've had the pleasure to work with"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={testimonial.id}
                delay={index * 0.1}
                className="relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 text-6xl text-primary-500/20">
                  "
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/70 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/50">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* INTERESTS SECTION */}
      {/* ================================================================== */}
      <Section id="interests" className="bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Beyond Code"
            title="Interests &"
            highlight="Hobbies"
            description="What I enjoy doing outside of work"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-white/10 hover:border-primary-500/30 transition-colors cursor-default"
              >
                <interest.icon className="h-5 w-5 text-primary-400" />
                <span className="font-medium text-white">{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* CONTACT SECTION */}
      {/* ================================================================== */}
      <Section id="contact">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Get in Touch"
            title="Let's Work"
            highlight="Together"
            description="Have a project in mind? I'd love to hear from you"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's create something amazing together
                </h3>
                <p className="text-white/60">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: personalInfo.phone,
                    href: `tel:${personalInfo.phone}`,
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: personalInfo.location,
                    href: null,
                  },
                  {
                    icon: Globe,
                    label: 'Website',
                    value: personalInfo.website,
                    href: personalInfo.website,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20">
                      <Icon className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white font-medium hover:text-primary-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: personalInfo.social.github },
                    { icon: Linkedin, href: personalInfo.social.linkedin },
                    { icon: Twitter, href: personalInfo.social.twitter },
                  ].map(({ icon: Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-primary-500 hover:border-primary-500 transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative */}
              <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-cyan-500/30 to-pink-500/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-8xl"
                  >
                    🤝
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-gradient mb-2">
                {personalInfo.name}
              </div>
              <p className="text-white/50 text-sm">
                {personalInfo.title} based in {personalInfo.location}
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: personalInfo.social.github },
                { icon: Linkedin, href: personalInfo.social.linkedin },
                { icon: Twitter, href: personalInfo.social.twitter },
                { icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-5 w-5 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{' '}
              in Nepal
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================================================
// CONTACT FORM COMPONENT
// ============================================================================

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center p-12 rounded-2xl bg-white/5 border border-white/10"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-white/60 text-center">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Your Name
          </label>
          <Input
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Email Address
          </label>
          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Subject
        </label>
        <Input
          name="subject"
          placeholder="Project Inquiry"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <Textarea
          name="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  )
}

export default Portfolio
