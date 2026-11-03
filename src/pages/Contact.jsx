import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { company } from '../data'
import Reveal from '../components/Reveal'
export default function Contact(){return <>
 <section className="page-hero page-hero-contact"><div className="page-hero-image"/><div className="page-hero-content"><span className="eyebrow">CONTACT ALDHIA</span><h1>Let’s build the<br/><em>next connection.</em></h1><p>Get in touch with our team in Riyadh.</p></div></section>
 <section className="section-pad contact-layout"><Reveal><span className="eyebrow">GET IN TOUCH</span><h2>We’re ready to<br/><em>hear from you.</em></h2><p className="contact-intro">For project enquiries and business communication, contact Aldhia Infratech using the details below.</p></Reveal>
 <div className="contact-details">
  <a href="https://maps.google.com/?q=Sulaimaniyah+Street+Riyadh" target="_blank" rel="noreferrer"><MapPin/><span><small>OFFICE</small><strong>{company.address}</strong></span><ArrowUpRight/></a>
  <a href={`tel:${company.phone}`}><Phone/><span><small>PHONE</small><strong>{company.phone}</strong></span><ArrowUpRight/></a>
  <a href={`mailto:${company.email}`}><Mail/><span><small>EMAIL</small><strong>{company.email}</strong></span><ArrowUpRight/></a>
 </div></section>
 <section className="contact-map"><div><span className="eyebrow">RIYADH · SAUDI ARABIA</span><h2>Engineering excellence<br/>in power transmission.</h2><a className="button button-green" href="https://maps.google.com/?q=Sulaimaniyah+Street+Riyadh" target="_blank" rel="noreferrer">Open location <ArrowUpRight size={17}/></a></div></section>
 </>}
