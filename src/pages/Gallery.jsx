import { SectionHeading, CTA } from '../components/Sections'
import Reveal from '../components/Reveal'
const photos=[
 ['Transmission tower erection','https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85'],
 ['Power transmission network','https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85'],
 ['Electrical infrastructure','https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85'],
 ['Engineering in the field','https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85'],
 ['Power lines at dusk','https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=85'],
 ['Industrial site activity','https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85'],
]
export default function Gallery(){return <>
 <section className="page-hero page-hero-gallery"><div className="page-hero-image"/><div className="page-hero-content"><span className="eyebrow">IN THE FIELD</span><h1>People. Projects.<br/><em>Progress.</em></h1><p>A closer look at the work behind power transmission infrastructure.</p></div></section>
 <section className="section-pad"><SectionHeading eyebrow="PROJECT GALLERY" title="A visual perspective on our industry." description="This gallery uses illustrative industry imagery as a temporary visual direction. Replace these images with approved Aldhia site photographs before publishing."/><div className="gallery-grid">{photos.map(([title,url],i)=><Reveal key={title} delay={i*.05}><figure className="gallery-item"><img src={url} alt={title} loading="lazy"/><figcaption>{title}</figcaption></figure></Reveal>)}</div></section>
 <div className="section-pad"><CTA/></div>
 </>}
