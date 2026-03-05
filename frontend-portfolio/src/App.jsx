// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroImg from './assets/satvik.png';
import  clinicImg from './assets/clinic.png'
import  groceryImg from './assets/grocery.png'
import  CRM from './assets/CRM.png'
import SaaS from './assets/SaaS.png'
import BudgetPlanner from './assets/BudgetPlanner.png'

// Animation variants
const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const slideFromTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const App = () => {
  const projects = [
  {
    category: "Healthcare",
    title: "Luxury Clinic Platform",
    description:
      "Premium clinic booking system with conversion-focused UX and performance optimization.",
    highlight: "End-to-end UX architecture",
    link: "https://doc-ease-phi.vercel.app/",
    image: clinicImg
  },
  {
    
  category: "E-Commerce",
  title: "Modern Grocery Store Platform",
  description:
    "Concept grocery e-commerce platform focused on seamless product discovery, fast checkout flow, and mobile-first performance optimization.",
  highlight: "Optimized shopping experience",
  link: "https://grocery-del-phi.vercel.app/",
  image: groceryImg, // make sure you import this
  },
 {
  category: "SaaS Growth",
  title: "SaaS Growth Accelerator Funnel",
  description:
    "High-converting SaaS landing funnel designed to qualify leads, increase demo bookings, and maximize paid acquisition ROI.",
  highlight: "Built for scalable revenue growth",
  link: "https://saa-s-growth-78yu.vercel.app/",
  image: SaaS,
},
{
  category: "Finance & Productivity",
  title: "Smart Budget Planner",
  description:
    "Intuitive budget planning app designed to track expenses, manage income, and optimize savings with real-time insights and financial reports.",
  highlight: "Built for smarter money management",
  link: "https://budget-planner-aaft.vercel.app/",
  image: BudgetPlanner,
},
{
  category: "Agency CRM",
  title: "Agency CRM Pipeline System",
  description:
    "High-performance Agency CRM designed to manage leads, track deal stages, automate follow-ups, and streamline client communication for service-based businesses.",
  highlight: "Built for scalable client acquisition & retention",
  link: "https://agency-crm-psi.vercel.app/",
  image: CRM,
  credentials: {
    email: "admin@example.com",
    password: "Admin123!"
  }
},
];

  const scrollToId = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-slate-100 text-slate-900 font-sans overflow-x-hidden antialiased">
      {/* Simple glow orbits */}
      <div className="pointer-events-none fixed -top-40 -right-32 h-96 w-96 rounded-full bg-indigo-300 blur-3xl opacity-40 mix-blend-multiply -z-10" />
      <div className="pointer-events-none fixed -bottom-48 -left-32 h-96 w-96 rounded-full bg-violet-300 blur-3xl opacity-40 mix-blend-multiply -z-10" />
      <div className="pointer-events-none fixed top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-200 blur-3xl opacity-40 mix-blend-multiply -z-10" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200/60">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-400 shadow-md shadow-indigo-400/40" />
          <span className="font-bold text-sm tracking-[0.22em] uppercase">
            Satvik Shetty
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <button onClick={() => scrollToId('#work')} className="hover:text-indigo-500 transition-colors">
            Work
          </button>
          <button onClick={() => scrollToId('#process')} className="hover:text-indigo-500 transition-colors">
            Process
          </button>
          <button onClick={() => scrollToId('#about')} className="hover:text-indigo-500 transition-colors">
            About
          </button>
          <button onClick={() => scrollToId('#contact')} className="hover:text-indigo-500 transition-colors">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex px-3 py-1 rounded-full border border-slate-300/70 bg-white/90 text-[11px] tracking-[0.16em] uppercase text-slate-500">
            Precision Systems
          </span>
          <button
            onClick={() => scrollToId('#contact')}
            className="
              px-4 py-2 rounded-full
              bg-gradient-to-tr from-indigo-500 via-violet-400 to-indigo-500 bg-[length:200%_200%]
              text-xs sm:text-sm font-medium text-white
              shadow-lg shadow-indigo-400/40
              hover:bg-[100%_0] hover:-translate-y-0.5 hover:shadow-xl
              active:translate-y-0 active:shadow-md
              transition-all duration-200
            "
          >
            Start a Project
          </button>
        </div>
      </nav>

      <main className="pt-20 md:pt-24">
        {/* HERO */}
        <section
          id="hero"
          className="px-6 md:px-12 lg:px-20 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24"
        >
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-center">
            {/* Left - slide from left */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl space-y-6"
            >
              <p className="text-[11px] tracking-[0.26em] uppercase text-slate-500">
                Digital System Design &amp; Frontend Engineering
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-tight tracking-[-0.04em]">
                Building{' '}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
                  Futuristic Digital Systems
                </span>
                <br />
                With Precision &amp; Performance
              </h1>
              <p className="text-[0.95rem] md:text-base text-slate-500 leading-relaxed">
                I’m a frontend focused developer with 3 years of hands on coding
                experience, building structured digital platforms with premium
                interface systems, performance driven architecture, and scalable
                frontend engineering.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-300/80 bg-white/90 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
                  3+ years in code · open to agency collaborations
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollToId('#work')}
                    className="
                      relative inline-flex items-center justify-center px-6 py-3 rounded-full
                      bg-gradient-to-tr from-indigo-500 via-violet-400 to-indigo-500 bg-[length:220%_220%]
                      text-sm font-medium text-white
                      shadow-lg shadow-indigo-400/40
                      hover:bg-[100%_0] hover:-translate-y-0.5 hover:shadow-xl
                      active:translate-y-0 active:shadow-md
                      transition-all duration-200
                    "
                  >
                    View Selected Work
                  </button>
                  <button
                    onClick={() => scrollToId('#about')}
                    className="
                      inline-flex items-center justify-center px-5 py-2.5 rounded-full
                      border border-slate-300/80 bg-white/90
                      text-sm font-medium text-slate-500
                      hover:border-indigo-500/70 hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-0.5
                      active:translate-y-0 active:shadow-md
                      transition-all duration-200
                    "
                  >
                    Philosophy &amp; Approach
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right - slide from right with hover */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group"
            >
              <div className="
                relative max-w-sm mx-auto rounded-[1.9rem] border border-slate-200/80
                bg-white/90 shadow-[0_30px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl p-5
                transition-transform duration-300 group-hover:-translate-y-1
              ">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300/70 bg-slate-50/90 text-[11px] tracking-[0.18em] uppercase text-slate-500 mb-4">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-400" />
                  Precision • Performance • Longevity
                </div>

                <div className="bg-gradient-to-tr from-indigo-500 to-violet-400 rounded-3xl p-[3px] shadow-xl shadow-indigo-400/50 mb-4">
                  <div className="rounded-[1.45rem] overflow-hidden bg-white">
                    <img
                      src={heroImg}
                      alt="Satvik Shetty"
                      className="
                        w-full h-auto object-cover grayscale contrast-105
                        transition-transform duration-500
                        group-hover:scale-[1.03] group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 pt-1">
                  <p className="text-[11px] text-slate-500 leading-relaxed max-w-[11rem]">
                    <strong className="text-slate-900">System first interfaces</strong> engineered
                    for clarity, conversion and long term maintainability.
                  </p>
                  <div className="flex gap-2">
                    <div className="px-2.5 py-2 rounded-2xl border border-slate-200 bg-slate-50/70 min-w-[4.5rem]">
                      <p className="text-lg font-semibold bg-gradient-to-tr from-indigo-500 to-violet-400 bg-clip-text text-transparent leading-none mb-1">
                        3+
                      </p>
                      <p className="text-[10px] text-slate-500">Years in code</p>
                    </div>
                    <div className="px-2.5 py-2 rounded-2xl border border-slate-200 bg-slate-50/70 min-w-[4.5rem]">
                      <p className="text-lg font-semibold bg-gradient-to-tr from-indigo-500 to-violet-400 bg-clip-text text-transparent leading-none mb-1">
                        0→1
                      </p>
                      <p className="text-[10px] text-slate-500">First client stage</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <motion.section
          className="px-6 md:px-12 lg:px-20 pb-16"
          variants={slideFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { label: 'Years coding experience', value: '3+' },
              { label: 'Client stage (building first roster)', value: '0→1' },
              { label: 'Focused on quality & performance', value: '100%' },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-2xl bg-white/95 border border-slate-200
                  shadow-md shadow-slate-200/50 px-6 py-5
                  transition-transform transition-shadow duration-200
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <p className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
                  {item.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* WORK / PROJECTS */}
        <section id="work" className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          {/* Header from top */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
                Projects
              </p>
              <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-[-0.03em] mt-2">
                Practice builds that mirror real world briefs.
              </h2>
              <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 mt-4" />
            </div>
            <p className="max-w-md text-sm text-slate-500 leading-relaxed">
              Self initiated projects across healthcare, travel, and real
              estate—built to show how I think about structure, hierarchy, and
              performance for agency level work.
            </p>
          </motion.div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {projects.map((project, index) => (
    <motion.article
  key={project.title}
  variants={slideFromBottom}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6, delay: 0.05 + index * 0.05 }}
  className="group"
>
  <div
    className="
      rounded-[1.6rem] border border-slate-200 bg-white
      shadow-lg shadow-slate-200/70 overflow-hidden
      transition-all duration-300
      group-hover:-translate-y-2 
      group-hover:shadow-2xl 
      group-hover:shadow-indigo-200/70
      group-hover:border-indigo-400
    "
  >
    {/* IMAGE HERO SECTION */}
    {/* IMAGE HERO SECTION */}
<div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="
      w-full h-full object-contain
      transition-transform duration-500
      group-hover:scale-105
    "
  />

  {/* subtle gradient fade for elegance */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

  {/* Category + Title */}
  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
    <div className="inline-flex px-3 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] tracking-[0.18em] uppercase mb-2">
      {project.category}
    </div>

    <h3 className="font-semibold text-[1.1rem] leading-snug">
      {project.title}
    </h3>
  </div>
</div>


    {/* CONTENT SECTION */}
    <div className="px-4 pt-4 pb-5">
      <p className="text-sm text-slate-500 leading-relaxed mb-4">
        {project.description}
      </p>
      {project.credentials && (
  <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
    <p className="font-semibold text-slate-800 mb-1 uppercase tracking-wide">
      Demo Credentials
    </p>
    <p>
      <span className="font-medium">Email:</span> {project.credentials.email}
    </p>
    <p>
      <span className="font-medium">Password:</span> {project.credentials.password}
    </p>
  </div>
)}

      <div className="flex items-center justify-between text-[12px] text-slate-500 gap-3 flex-wrap">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          {project.highlight}
        </span>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 font-medium hover:underline"
        >
          View project →
        </a>
      </div>
    </div>
  </div>
</motion.article>

  ))}
</div>

        </section>

        {/* PROCESS */}
        <section id="process" className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          {/* Header from top */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
                Process
              </p>
              <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-[-0.03em] mt-2">
                Methodical, systems driven, and intentionally minimal.
              </h2>
              <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 mt-4" />
            </div>
            <p className="max-w-md text-sm text-slate-500 leading-relaxed">
              Every engagement follows a rigorous yet streamlined sequence—
              designed to expose constraints early, build reliable architecture,
              and ship premium interfaces without wasted motion.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Research',
                body: 'Understanding goals, constraints, and positioning—translating business intent into a clear digital mandate.',
                variant: slideFromLeft,
                delay: 0.05,
              },
              {
                step: '02',
                title: 'Architecture',
                body: 'Structuring scalable information and interaction systems that can grow without collapsing over time.',
                variant: slideFromRight,
                delay: 0.1,
              },
              {
                step: '03',
                title: 'Design',
                body: 'Crafting refined interface systems with premium visual language, precise spacing, and intuitive flows.',
                variant: slideFromLeft,
                delay: 0.15,
              },
              {
                step: '04',
                title: 'Optimize',
                body: 'Performance and conversion refinement—polishing transitions, load strategies, and measurement loops.',
                variant: slideFromRight,
                delay: 0.2,
              },
            ].map(({ step, title, body, variant, delay }) => (
              <motion.div
                key={step}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay }}
              >
                <div className="h-[2px] bg-gradient-to-r from-slate-300/70 via-indigo-500/70 to-slate-300/70 mb-5 opacity-60" />
                <div
                  className="
                    rounded-2xl border border-slate-200 bg-white/95
                    shadow-md shadow-slate-200/60 p-6
                    transition-transform transition-shadow duration-200
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-400 text-white flex items-center justify-center text-xs font-semibold shadow-md shadow-indigo-500/60 mb-4">
                    {step}
                  </div>
                  <h3 className="font-semibold mb-2 text-[1.05rem]">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          {/* Header from top */}
          <motion.div
            className="mb-10"
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
              Philosophy
            </p>
            <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-[-0.03em] mt-2">
              Digital systems, not decoration.
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 mt-4" />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            {/* Text from left */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[0.95rem] md:text-base text-slate-500 leading-relaxed">
                I’ve spent the last 3 years in code, approaching digital product
                development as system architecture rather than decoration. Every
                decision from spacing to interaction timing is structured for
                clarity, conversion, and longevity.
                <br />
                <br />
                Interfaces should be visually premium, but never at the cost of
                performance or comprehension. I design with engineering
                constraints in mind, ensuring that what we ship is not just
                beautiful on launch day, but maintainable and performant a year
                later.
                <br />
                <br />
                I haven’t closed client deals yet this portfolio exists to
                change that and to give agencies and teams a clear view into how
                I think and build.
              </p>
            </motion.div>

            {/* Card from right */}
            <motion.aside
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-2xl border border-slate-200 bg-white/95 shadow-lg shadow-slate-200/70 p-5 space-y-2 text-sm text-slate-500">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-900 mb-2">
                  What this means in practice
                </p>
                <p>• Layouts built on consistent grids and type scales, so changes remain predictable.</p>
                <p>• Components designed as reusable systems, reducing future design &amp; dev overhead.</p>
                <p>• Performance budgets and loading strategies considered from day zero.</p>
                <p>• A bias towards minimalism only what’s needed to deliver signal, never noise.</p>
                <p>• Currently seeking agency collaborations, internships, and first client projects.</p>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          {/* Header from top */}
          <motion.div
            className="mb-10"
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
              Contact
            </p>
            <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-[-0.03em] mt-2">
              Ready to plug into your next build.
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 mt-4" />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            {/* Intro from left */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[0.95rem] md:text-base text-slate-500 leading-relaxed">
                I’m actively looking to collaborate with agencies, studios, and
                product teams that value structure, performance, and clean
                implementation.
                <br />
                <br />
                Whether you need support on a specific frontend sprint, want to
                explore a trial engagement, or just want to see how I think
                through a brief, feel free to reach out.
              </p>
            </motion.div>

            {/* Contact card from right */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-2xl border border-slate-200 bg-white/95 shadow-lg shadow-slate-200/70 p-5 space-y-4 text-sm text-slate-500">
                <h3 className="text-base font-semibold text-slate-900">
                  Contact details
                </h3>
                <p>
                  Fastest way to reach me is email. I also respond quickly on
                  LinkedIn and GitHub.
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 items-baseline">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 min-w-[70px]">
                      Email
                    </span>
                    {/* TODO: replace with your real email */}
                    <a
                      href="mailto:satvikshetty0709@gmail.com"
                      className="text-indigo-500 break-all"
                    >
                      satvikshetty0709@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 items-baseline">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 min-w-[70px]">
                      LinkedIn
                    </span>
                    {/* TODO: replace with your real LinkedIn URL */}
                    <a
                      href="https://www.linkedin.com/in/satvik-shetty-73713639a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 break-all"
                    >
                    linkedin.com/in/satvik-shetty-73713639a
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 items-baseline">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 min-w-[70px]">
                      GitHub
                    </span>
                    {/* TODO: replace with your real GitHub URL */}
                    <a
                      href="https://github.com/shettysatvikj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 break-all"
                    >
                github.com/shettysatvikj
                    </a>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500/90">
                  Replace these placeholders with your actual email and profile
                  links before sharing this portfolio.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          id="contact-cta"
          className="px-6 md:px-12 lg:px-20 pb-16"
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] bg-gradient-to-tr from-indigo-500 to-violet-400 text-white shadow-[0_30px_90px_rgba(15,23,42,0.4)] px-6 md:px-10 py-10 md:py-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-white pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-[1.9rem] font-semibold tracking-[-0.03em] mb-2">
                  Let’s build something structurally exceptional.
                </h2>
                <p className="text-sm md:text-[0.95rem] max-w-md text-white/90">
                  For agencies, studios, and product teams looking for a
                  systems minded frontend developer to plug into their next
                  build.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToId('#contact')}
                  className="
                    inline-flex items-center gap-2 px-6 py-3 rounded-full
                    bg-white text-slate-900 text-sm font-medium
                    shadow-xl shadow-slate-900/40
                    hover:bg-slate-100 hover:-translate-y-0.5
                    active:translate-y-0 active:shadow-md
                    transition-all duration-200
                  "
                >
                  <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-400" />
                  Start a Project
                </button>
                <button
                  onClick={() => scrollToId('#work')}
                  className="
                    px-5 py-2.5 rounded-full border border-white/70
                    bg-white/10 text-sm text-white backdrop-blur-md
                    hover:bg-white/20 hover:-translate-y-0.5
                    active:translate-y-0
                    transition-all duration-200
                  "
                >
                  Explore selected systems
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mt-4 border-t border-slate-200/70 bg-slate-50/90 text-center text-[12px] text-slate-500 py-6 px-6 md:px-12 lg:px-20">
        © 2026 Satvik Shetty — Futuristic Digital Craft
      </footer>
    </div>
  );
};

export default App;