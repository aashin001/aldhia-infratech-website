import { useEffect, useState } from 'react'
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react'
import { company } from '../data'
import Home from '../pages/Home'

const links = [
  ['Home','#home'],
  ['About','#about'],
  ['Services','#services'],
  ['Contact','#contact']
]


export default function Layout() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [active,setActive] = useState('#home')

  useEffect(() => {
    const updateActiveSection = () => {
      const footer = document.querySelector('#contact')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        // Treat the merged contact/footer as the active Contact destination
        // as soon as the visitor reaches its visible area.
        if (footerRect.top <= window.innerHeight * 0.68 && footerRect.bottom > 100) {
          setActive('#contact')
          return
        }
      }

      const sectionLinks = links.filter(([, id]) => id !== '#contact')
      let current = '#home'
      for (const [, id] of sectionLinks) {
        const section = document.querySelector(id)
        if (section && section.getBoundingClientRect().top <= 150) {
          current = id
        }
      }
      setActive(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (id === '#contact') setActive('#contact')
  }

  return <>
    <header className="site-header">
      <a href="#home" onClick={() => goTo('#home')} className="brand-lockup" aria-label="Aldhia Infratech home">
        <img src="/assets/logo-nav.png" alt="Aldhia Infratech logo" />
      </a>
      <nav className={`main-nav ${menuOpen?'is-open':''}`}>
        {links.map(([label,path]) => <a key={path} href={path} onClick={(e)=>{e.preventDefault();goTo(path)}} className={active===path?'active':''}>{label}</a>)}
      </nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <main><Home /></main>
    <footer className="site-footer footer-contact-merged" id="contact">
      <div className="footer-main-row">
        <div className="footer-brand-left">
          <img className="footer-logo" src="/assets/logo.png" alt="Aldhia Infratech" />
          <p className="footer-tag">Engineering Excellence in Power Transmission</p>
        </div>
        <div className="footer-contact-right">
          <span className="eyebrow">CONTACT ALDHIA · RIYADH</span>
          <h2>Let’s power what comes next.</h2>
          <p className="footer-contact-intro">Connect with our team for business and project enquiries.</p>
          <div className="footer-contact-list">
            <a href="https://maps.google.com/?q=Sulaimaniyah+Street+Riyadh" target="_blank" rel="noreferrer"><MapPin size={17}/> <span>{company.address}</span></a>
            <a href={`tel:${company.phone}`}><Phone size={17}/> <span>{company.phone}</span></a>
            <a href={`mailto:${company.email}`}><Mail size={17}/> <span>{company.email}</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom footer-bottom-centered">
        <span>© {new Date().getFullYear()} Aldhia Infratech. All rights reserved.</span>
      </div>
    </footer>
  </>
}
