import { SectionHeading, ProjectGrid, CTA } from '../components/Sections'
import { projects } from '../data'
import Reveal from '../components/Reveal'
export default function Projects(){return <>
 <section className="page-hero page-hero-projects"><div className="page-hero-image"/><div className="page-hero-content"><span className="eyebrow">PROJECT EXPERIENCE</span><h1>Powering progress<br/><em>across borders.</em></h1><p>Transmission line project experience across Africa and beyond.</p></div></section>
 <section className="section-pad"><SectionHeading eyebrow="SELECTED PROJECTS" title="A record of international project experience." description="The following project highlights and contractor details are drawn from the Aldhia Infratech company profile."/><ProjectGrid limit={10}/></section>
 <section className="section-pad project-note"><Reveal><span className="eyebrow">OUR EXPERIENCE</span><h2>Working alongside leading EPC contractors.</h2><p>The company profile references project experience with L&amp;T, KPIL, KEC, Sterlite Power, SENELEC and UETCL.</p></Reveal></section>
 <div className="section-pad"><CTA/></div>
 </>}
