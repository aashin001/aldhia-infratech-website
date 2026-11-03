import { MoveUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { services, stats, projects } from '../data'

export const SectionHeading = ({eyebrow,title,description,light=false}) => <Reveal className={`section-heading ${light?'light':''}`}>
  <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}
</Reveal>

export function Stats() {
  return <div className="stats-band"><div className="stats-grid">{stats.map(([n,l],i)=><Reveal key={n} delay={i*.08}><div className="stat"><strong>{n}</strong><span>{l}</span></div></Reveal>)}</div></div>
}
export function ServiceGrid() {
  return <div className="service-grid">{services.map((s,i)=><Reveal key={s.title} delay={i*.06}><article className="service-card">
    <span className="service-symbol" aria-hidden="true">{s.icon}</span><h3>{s.title}</h3><p>{s.text}</p>
  </article></Reveal>)}</div>
}
export function ProjectGrid({limit=10}) {
  return <div className="project-grid">{projects.slice(0,limit).map(([name,country,contractor],i)=><Reveal key={name} delay={i*.04}><article className="project-card">
    <div className={`project-visual project-visual-${i%4}`}><span className="project-voltage">{name.split(' ')[0]}</span></div>
    <div className="project-info"><div><h3>{name}</h3><p>{country} <span>·</span> Main contractor: {contractor}</p></div></div>
  </article></Reveal>)}</div>
}
