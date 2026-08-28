import { Facebook, Instagram, Mail, MapPin, Phone, Clock, Youtube } from 'lucide-react'
import { siteConfig } from '../data/websiteData'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

const serviceLinks = ['Astrology', 'Vastu', 'Kundali', 'Marriage Consultation', 'Career Guidance', 'Pujas']

export default function Footer() {
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: brand */}
          <div>
            <div className="footer-brand">
              <span>ॐ</span>
              <h3>{siteConfig.shortName}</h3>
            </div>
            <p>
              Authentic Vedic astrology, Vastu and spiritual guidance rooted in traditional wisdom
              — helping you navigate life's important moments with clarity.
            </p>
          </div>

          {/* Column 2: quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: services */}
          <div>
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button onClick={() => scrollToSection('services')}>{service}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: contact */}
          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ display: 'flex', gap: 8 }}>
                <Phone size={16} /> {siteConfig.phone}
              </li>
              <li style={{ display: 'flex', gap: 8 }}>
                <Mail size={16} /> {siteConfig.email}
              </li>
              <li style={{ display: 'flex', gap: 8 }}>
                <MapPin size={16} /> {siteConfig.address}
              </li>
              <li style={{ display: 'flex', gap: 8 }}>
                <Clock size={16} /> {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {siteConfig.siteName}. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Phone size={18} />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
