import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../data/websiteData'

export default function ConsultationCTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <h2 className="section-title">Ready to Find Clarity?</h2>
        <p>
          Book a personalized consultation and receive guidance based on your individual needs.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">
            Book Consultation
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn btn-outline">
            <Phone size={16} /> Call Now
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
