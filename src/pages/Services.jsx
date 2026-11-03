import { SectionHeading, ServiceGrid, CTA } from '../components/Sections'
import Reveal from '../components/Reveal'
export default function Services(){return <>
 <section className="page-hero page-hero-services"><div className="page-hero-image"/><div className="page-hero-content"><span className="eyebrow">OUR CAPABILITIES</span><h1>Specialist services.<br/><em>Connected execution.</em></h1><p>End-to-end solutions for Overhead Transmission Line projects.</p></div></section>
 <section className="section-pad"><SectionHeading eyebrow="WHAT WE DO" title="Focused expertise for power transmission." description="Aldhia Infratech provides OHTL project support with experienced professionals, modern equipment and a strong commitment to safety and quality."/><ServiceGrid/></section>
 <section className="service-process"><Reveal><span className="eyebrow">HOW WE WORK</span><h2>Professional execution.<br/><em>From site to system.</em></h2><p>Our teams work across civil works, structural installation, tower erection and conductor stringing, with quality and safety integrated into project activities.</p></Reveal></section>
 <div className="section-pad"><CTA/></div>
 </>}
