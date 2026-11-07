import { ArrowDown, ArrowUpRight, ShieldCheck, Zap, Globe2, MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { SectionHeading, Stats,  ServiceGrid } from '../components/Sections'
import { company, projects } from '../data'

export default function Home() {
 return <>
  <section className="hero" id="home">
    <div className="hero-image" /><div className="hero-grid" />
    <div className="hero-content">
      <motion.span className="eyebrow hero-eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.2}}>POWER TRANSMISSION · ENGINEERING · EXECUTION</motion.span>
      {/* <motion.h1 initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.3}}>Engineering the<br/><em>power</em> to connect.</motion.h1> */}
      <motion.h1 initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.3}}>
  Engineering Excellence in<br/>
  <em>Power Transmission</em>
</motion.h1>
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.52}}>Specialized engineering and construction capabilities for overhead transmission line projects across Saudi Arabia.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.7}}>
        <a href="#services" className="button button-green">Explore our expertise <ArrowUpRight size={18}/></a>
        <a href="#about" className="text-link">Discover Aldhia <ArrowUpRight size={17}/></a>
      </motion.div>
    </div>
    <div className="hero-bottom"><span>RIYADH, SAUDI ARABIA</span><span>{company.tagline}</span><a href="#about" aria-label="Scroll down"><ArrowDown size={18}/></a></div>
    <div className="hero-side-label">ALDHIA INFRATECH <span>— SAUDI ARABIA</span></div>
  </section>

  <section className="intro-section section-pad" id="about">
    <div className="intro-aside"><span className="eyebrow">WHO WE ARE</span><span className="intro-line"/></div>
    <div className="intro-copy"><Reveal><h2>Building the backbone of <span>reliable power.</span></h2><p>Aldhia Infratech is a specialized engineering and construction company focused on Overhead Transmission Line (OHTL) projects, including civil works, tower erection, stringing and wiring.</p><p>Driven by quality, safety and professionalism, we support the Kingdom’s expanding energy infrastructure and the objectives of Saudi Vision 2030.</p></Reveal></div>
  </section>

  <section className="vision-mission">
    <div><span className="eyebrow">OUR VISION</span><h2>To be a leading and trusted provider of power transmission infrastructure solutions.</h2><p>Delivering engineering excellence, innovation and sustainable value while supporting Saudi Arabia’s Vision 2030 and the nation’s growing energy demands.</p></div>
    <div><span className="eyebrow">OUR MISSION</span><h2>To provide innovative and high-quality power transmission solutions.</h2><p>Through advanced technology, skilled manpower and a commitment to safety, integrity, teamwork and customer satisfaction.</p></div>
  </section>

  <section id="achievements"><Stats/></section>

  <section className="section-pad services-section" id="services">
    <SectionHeading eyebrow="WHAT WE DO" title="Expertise built around the power network." description="End-to-end support for overhead transmission line projects, delivered by experienced professionals and skilled teams."/>
    <ServiceGrid limit={6}/>
  </section>

  {/* <section className="hse-section section-pad" id="hse">
    <div className="hse-copy">
      <Reveal><span className="eyebrow">HEALTH · SAFETY · ENVIRONMENT</span>
        <h2>Health, Safety, and<br/><em>Environmental Commitment</em></h2>
        <p>At Aldhia Infratech, Health, Safety, and Environment (HSE) are fundamental to every aspect of our operations. We are committed to providing a safe and healthy workplace for our employees, clients, and the communities in which we operate.</p>
        <p>Our objective is to achieve zero harm, zero incidents, and environmental sustainability through proactive risk management, continuous training, and strict compliance with industry regulations.</p>
        <h3>We are committed to:</h3>
        <ul className="hse-list">
          <li>Maintaining the highest standards of health, safety, and environmental performance.</li>
          <li>Providing continuous HSE training and awareness programs for all employees.</li>
          <li>Encouraging a strong safety culture where every employee is responsible for their own safety and the safety of others.</li>
          <li>Continuously improving our HSE management system to achieve operational excellence.</li>
        </ul>
      </Reveal>
    </div>
    <div className="hse-photo-stack">
      <img className="hse-photo-main" src="/assets/profile/site-safety-team.jpeg" alt="Aldhia site team during a safety activity" loading="lazy"/>
      <img className="hse-photo-small" src="/assets/profile/hse-training-session.jpeg" alt="Health and safety training session" loading="lazy"/>
      <span className="hse-photo-caption">SAFETY · TRAINING · RESPONSIBILITY</span>
    </div>
  </section> */}

  {/* <section className="section-pad projects-section" id="projects">
    <SectionHeading eyebrow="PROJECT EXPERIENCE" title="Connected across borders." description="International transmission line project experience listed in the Aldhia Infratech company profile."/>
    <ProjectGrid limit={10}/>
    <div className="project-note"><p>Project experience includes work with leading EPC contractors such as L&amp;T, KPIL, KEC, Sterlite Power, SENELEC and UETCL.</p></div>
  </section> */}

  {/* <section className="section-pad capability-section" id="organization">
    <SectionHeading eyebrow="OUR PEOPLE" title="A structured team. A coordinated approach." description="Our company profile outlines a delivery structure spanning management, planning, construction, quality, safety, site engineering, supervision and field teams."/>
    <div className="values-strip">
      <div><ShieldCheck/><h3>Quality & safety</h3><p>Commitment to professional and responsible project execution.</p></div>
      <div><Zap/><h3>Engineering capability</h3><p>Specialized OHTL expertise supported by skilled manpower.</p></div>
      <div><Globe2/><h3>International experience</h3><p>Project experience across Asia and Africa.</p></div>
    </div>
  </section> */}

  {/* <section className="section-pad gallery-section" id="gallery">
    <SectionHeading eyebrow="SITE ACTIVITIES" title="The work behind the network." description="A look at transmission line construction, tower erection and site safety activities from the Aldhia Infratech company profile."/>
    <div className="gallery-grid company-gallery">
      <figure className="gallery-item"><img src="/assets/profile/tower-erection-team.png" alt="Transmission tower erection activity" loading="lazy"/><figcaption>Tower erection</figcaption></figure>
      <figure className="gallery-item"><img src="/assets/profile/foundation-rebar-work.png" alt="Transmission tower foundation work" loading="lazy"/><figcaption>Foundation works</figcaption></figure>
      <figure className="gallery-item"><img src="/assets/profile/tower-climbing-technician.jpeg" alt="Technician working on a transmission tower" loading="lazy"/><figcaption>Field operations</figcaption></figure>
      <figure className="gallery-item"><img src="/assets/profile/site-medical-assessment.jpeg" alt="Site medical assessment" loading="lazy"/><figcaption>Daily medical assessment</figcaption></figure>
      <figure className="gallery-item"><img src="/assets/profile/hse-training-session.jpeg" alt="HSE training session" loading="lazy"/><figcaption>HSE training</figcaption></figure>
      <figure className="gallery-item"><img src="/assets/profile/site-safety-team.jpeg" alt="Site safety team" loading="lazy"/><figcaption>Site safety team</figcaption></figure>
    </div>
  </section> */}


 </>
}
