import { ShieldCheck, HeartPulse, Leaf, Users } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SectionHeading, CTA } from '../components/Sections'
const commitments=[['Health & wellbeing','Providing a safe and healthy workplace for employees, clients and the communities in which we operate.',HeartPulse],['Safe work practices','Maintaining high standards of health, safety and environmental performance.',ShieldCheck],['Training & awareness','Providing continuous HSE training and awareness programmes for all employees.',Users],['Continuous improvement','Improving our HSE management system through proactive risk management and compliance.',Leaf]]
export default function HSE(){return <>
 <section className="page-hero page-hero-hse"><div className="page-hero-image"/><div className="page-hero-content"><span className="eyebrow">HEALTH · SAFETY · ENVIRONMENT</span><h1>Zero harm.<br/><em>Every day.</em></h1><p>Safety and environmental responsibility are fundamental to our operations.</p></div></section>
 <section className="section-pad"><SectionHeading eyebrow="OUR COMMITMENT" title="A responsible approach to every site." description="At Aldhia Infratech, Health, Safety and Environment are fundamental to every aspect of our operations. We are committed to providing a safe and healthy workplace."/><div className="hse-grid">{commitments.map(([title,desc,Icon],i)=><Reveal key={title} delay={i*.08}><article className="hse-card"><Icon/><h3>{title}</h3><p>{desc}</p></article></Reveal>)}</div></section>
 <section className="hse-callout"><Reveal><span className="eyebrow">OUR OBJECTIVE</span><h2>Zero harm. Zero incidents.<br/><em>Environmental sustainability.</em></h2><p>Through proactive risk management, continuous training and strict compliance with industry regulations.</p></Reveal></section>
 <div className="section-pad"><CTA/></div>
 </>}
