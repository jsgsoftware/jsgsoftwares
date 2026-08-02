import { useState, type FormEvent } from 'react'
import { 
  Building2,
  RefreshCcw,
  Shield,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Mail,
  MapPin,
  ChevronDown,
  BarChart3,
  Menu,
  X,
  Code2,
  Zap,
  Users,
  Target
} from 'lucide-react'
import './App.css'

const WHATSAPP_NUMBER = '50760634535'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
const EMAIL = 'jsgsoftwares@gmail.com'
const DEFAULT_SUBJECT = 'Cotización - JSG Softwares'

const services = [
  {
    id: 'integracion-banco',
    icon: Building2,
    title: 'Integración Banco → Zoho',
    description: 'Sincronización automática de movimientos bancarios con Zoho Creator o Books.',
    deliverables: [
      'Conexión API con Banco General (OAuth2)',
      'Registro automático de transacciones',
      'Bitácora de auditoría completa'
    ],
    time: '2-4 semanas'
  },
  {
    id: 'automatizaciones',
    icon: RefreshCcw,
    title: 'Automatizaciones con n8n',
    description: 'Flujos de trabajo programados con manejo de tokens, reintentos y cron jobs.',
    deliverables: [
      'Diseño de flujos personalizados',
      'Integración con Zoho, Google Sheets, APIs',
      'Notificaciones y alertas en tiempo real'
    ],
    time: '1-3 semanas'
  },
  {
    id: 'odoo',
    icon: Building2,
    title: 'Implementación de Odoo',
    description: 'Implementamos Odoo a medida con los módulos que tu negocio necesita.',
    deliverables: [
      'Configuración de módulos (Ventas, Inventario, Contabilidad, CRM)',
      'Personalización de flujos y reportes',
      'Integración con sistemas existentes'
    ],
    time: '3-8 semanas'
  },
  {
    id: 'factura-fiscal',
    icon: FileCheck,
    title: 'Módulo de Facturación Fiscal Electrónica',
    description: 'Módulo de facturación fiscal electrónica para Odoo, conforme a normativa panameña (DGII). Compatible con implementaciones existentes.',
    deliverables: [
      'Factura electrónica conforme a DGII Panamá',
      'Integración con Odoo (instalación nueva o existente)',
      'Generación de PDF y XML automáticos'
    ],
    time: '2-4 semanas'
  },
  {
    id: 'mensajeria',
    icon: MessageCircle,
    title: 'Sistema de Mensajería Multiplataforma',
    description: 'Plataforma multiusuario que centraliza WhatsApp, Instagram, Facebook y web chat en un solo panel para tu equipo.',
    deliverables: [
      'Unifica WhatsApp, Instagram, Facebook y web en un panel',
      'Múltiples agentes con roles y permisos',
      'Respuestas automáticas y chatbots inteligentes'
    ],
    time: '1-3 semanas'
  },
  {
    id: 'apis',
    icon: Shield,
    title: 'APIs Seguras',
    description: 'Desarrollo de APIs RESTful con autenticación OAuth2 y Client ID & Secret.',
    deliverables: [
      'APIs RESTful documentadas',
      'Seguridad con OAuth2',
      'Rate limiting y logs de auditoría'
    ],
    time: '2-5 semanas'
  },
  {
    id: 'bitacora',
    icon: FileCheck,
    title: 'Bitácora y Auditoría',
    description: 'Sistema de logs para rastrear operaciones y detectar duplicados.',
    deliverables: [
      'Registro de todas las operaciones',
      'Detección de duplicados',
      'Reportes para compliance'
    ],
    time: '1-2 semanas'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tus procesos y definimos los requisitos técnicos.'
  },
  {
    step: '02',
    title: 'Propuesta',
    description: 'Te entregamos un alcance claro con tiempos y precio fijo.'
  },
  {
    step: '03',
    title: 'Implementación',
    description: 'Desarrollamos la solución con actualizaciones periódicas.'
  },
  {
    step: '04',
    title: 'Validación',
    description: 'Probamos, documentamos y entregamos soporte post-lanzamiento.'
  }
]

const caseStudies = [
  {
    title: 'Integración bancaria + registro automático en Zoho',
    type: 'Integración',
    client: 'Sector Financiero',
    what: [
      'Conexión API del banco con Zoho Creator',
      'Sincronización automática de transacciones',
      'Notificaciones en tiempo real'
    ],
    result: '100% de datos bancarios sincronizados sin entrada manual.',
    metric: '+40h/mes ahorradas'
  },
  {
    title: 'Implementación de Odoo + módulo de facturación fiscal',
    type: 'Odoo',
    client: 'Sector Comercial',
    what: [
      'Implementación de Odoo con módulos personalizados',
      'Módulo de facturación fiscal electrónica (DGII)',
      'Integración con sistema bancario'
    ],
    result: 'Facturación electrónica 100% compliant con normativa panameña.',
    metric: '100% fiscal'
  },
  {
    title: 'Sistema de mensajería multiplataforma para soporte',
    type: 'Mensajería',
    client: 'Sector Servicios',
    what: [
      'Unificación de WhatsApp, Instagram y web chat',
      'Gestión con múltiples agentes',
      'Respuestas automáticas y chatbots'
    ],
    result: 'Tiempo de respuesta reducido de horas a minutos.',
    metric: '-90% tiempo respuesta'
  },
  {
    title: 'Automatización programada con n8n + manejo de tokens',
    type: 'Automatización',
    client: 'Sector Logístico',
    what: [
      'Flujo automatizado con n8n (cron jobs)',
      'Renovación automática de tokens',
      'Reintentos automáticos en caso de error'
    ],
    result: 'Procesos manuales reducidos a cero con renovación automática.',
    metric: '99.9% uptime'
  },
  {
    title: 'Bitácora/auditoría + control de duplicados',
    type: 'Auditoría',
    client: 'Sector Comercial',
    what: [
      'Sistema centralizado de logs',
      'Detección automática de duplicados',
      'Reportes para auditoría'
    ],
    result: 'Cumplimiento de requisitos de compliance garantizado.',
    metric: '0 duplicados'
  }
]

const faqs = [
  {
    question: '¿Cuánto tiempo toma una integración?',
    answer: 'Depende de la complejidad. Una integración bancaria típica toma 2-4 semanas. Automatizaciones simples, 1-2 semanas.'
  },
  {
    question: '¿Qué datos necesito del banco?',
    answer: 'Generalmente necesitas credenciales API (Client ID, Client Secret) y acceso al entorno de pruebas. El banco debe ofrecer integración.'
  },
  {
    question: '¿Es seguro usar OAuth2?',
    answer: 'Sí, OAuth2 es el estándar de la industria para autorización. No exponemos credenciales y el acceso se puede revocar en cualquier momento.'
  },
  {
    question: '¿Qué incluye el soporte post-implementación?',
    answer: 'Correcciones de errores y ajustes dentro del alcance acordado. Soporte adicional se maneja por horas o acuerdo particular.'
  },
  {
    question: '¿Necesito infraestructura propia?',
    answer: 'No. Nosotros configuramos n8n en la nube o puedes hospearlo tú. Zoho se configura en sus servidores.'
  },
  {
    question: '¿Hay costos mensuales ocultos?',
    answer: 'No. El precio incluye desarrollo e implementación. Los costos de Zoho/n8n (si aplica) son aparte y se definen antes de empezar.'
  }
]

function buildWhatsAppLink(params: { name: string; fromEmail: string; phone: string; message: string }) {
  const lines = [
    `Hola JSG Softwares, quiero solicitar una cotización.`,
    '',
    `Nombre: ${params.name}`,
    `Correo: ${params.fromEmail}`,
    params.phone ? `Teléfono: ${params.phone}` : '',
    '',
    `Mensaje: ${params.message}`,
  ].filter(Boolean)
  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

function ContactForm() {
  const [name, setName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const waLink = buildWhatsAppLink({ name, fromEmail, phone, message })
    window.open(waLink, '_blank')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__grid">
        <label className="field">
          <span className="field__label">Nombre</span>
          <input
            className="field__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Tu nombre completo"
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Correo</span>
          <input
            className="field__input"
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            autoComplete="email"
            placeholder="tu@correo.com"
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Teléfono</span>
          <input
            className="field__input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="+507 6000-0000"
          />
        </label>

        <label className="field field--full">
          <span className="field__label">¿Cómo puedo ayudarte?</span>
          <textarea
            className="field__input field__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Cuéntanos sobre tu proyecto..."
            required
          />
        </label>
      </div>

      <div className="form__actions">
        <button className="btn btn--primary" type="submit">
          <MessageCircle size={18} />
          Enviar por WhatsApp
        </button>
        <a className="btn btn--outline" href={`mailto:${EMAIL}?subject=${encodeURIComponent(DEFAULT_SUBJECT)}`}>
          <Mail size={18} />
          o por correo
        </a>
      </div>

      <p className="fineprint">Tus datos son confidenciales y solo serán usados con fines comerciales.</p>
    </form>
  )
}

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-illustration__svg">
        <rect x="20" y="60" width="100" height="70" rx="8" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="2"/>
        <text x="70" y="100" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Banco</text>
        
        <rect x="150" y="60" width="100" height="70" rx="8" fill="rgba(34, 211, 238, 0.2)" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="2"/>
        <text x="200" y="100" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">n8n</text>
        
        <rect x="280" y="60" width="100" height="70" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2"/>
        <text x="330" y="100" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Zoho</text>
        
        <path d="M120 95 L145 95" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="4 2"/>
        <path d="M250 95 L275 95" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="4 2"/>
        
        <rect x="50" y="170" width="300" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <text x="200" y="195" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">Bitácora / Auditoría</text>
        
        <rect x="70" y="205" width="80" height="30" rx="4" fill="rgba(99, 102, 241, 0.3)"/>
        <text x="110" y="225" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9">Token API</text>
        
        <rect x="160" y="205" width="80" height="30" rx="4" fill="rgba(34, 211, 238, 0.3)"/>
        <text x="200" y="225" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9">Webhook</text>
        
        <rect x="250" y="205" width="80" height="30" rx="4" fill="rgba(16, 185, 129, 0.3)"/>
        <text x="290" y="225" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9">Log Entry</text>
        
        <path d="M200 130 L200 165" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3 2"/>
        <circle cx="200" cy="130" r="4" fill="rgba(99, 102, 241, 0.8)"/>
        <circle cx="200" cy="165" r="4" fill="rgba(16, 185, 129, 0.8)"/>
      </svg>
    </div>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="header">
        <div className="container header__inner">
          <div className="brand">
            <div className="brand__mark" aria-hidden="true">
              JSG
            </div>
            <div className="brand__text">
              <div className="brand__name">JSG Softwares</div>
              <div className="brand__tag">Integraciones & Automatización</div>
            </div>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`} aria-label="Navegación">
            <a className="nav__link" href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a className="nav__link" href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
            <a className="nav__link" href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
            <a className="nav__link" href="#casos" onClick={() => setMobileMenuOpen(false)}>Casos</a>
            <a className="nav__link" href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a className="nav__link" href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          </nav>

          <div className="header__cta">
            <a className="btn btn--whatsapp-sm" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <button 
              className="nav-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-label="Presentación">
          <div className="hero__bg" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__content">
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                Disponible en Panamá
              </div>
              
              <h1 className="hero__title">
                Conecta tus sistemas.<br />
                <span className="hero__title-accent">Automatiza todo lo demás.</span>
              </h1>
              
              <p className="hero__description">
                Desarrollamos integraciones con Zoho, automatizaciones con n8n y APIs seguras. 
                Olvídate de la entrada manual de datos.
              </p>
              
              <div className="hero__features">
                <div className="hero__feature">
                  <CheckCircle2 size={18} className="hero__feature-icon" />
                  <span>Integración Banco General → Zoho</span>
                </div>
                <div className="hero__feature">
                  <CheckCircle2 size={18} className="hero__feature-icon" />
                  <span>Automatizaciones con n8n (cron, tokens, reintentos)</span>
                </div>
                <div className="hero__feature">
                  <CheckCircle2 size={18} className="hero__feature-icon" />
                  <span>APIs seguras (OAuth2, Client ID & Secret)</span>
                </div>
              </div>

              <div className="hero__ctas">
                <a className="btn btn--whatsapp-lg" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  Escribir por WhatsApp
                </a>
                <a className="btn btn--outline btn--outline-visible" href={`mailto:${EMAIL}?subject=${encodeURIComponent(DEFAULT_SUBJECT)}`}>
                  <Mail size={18} />
                  o por correo
                </a>
              </div>

              <div className="hero__contact">
                <span className="hero__contact-label">Ciudad de Panamá, Panamá</span>
              </div>
            </div>

            <div className="hero__visual">
              <HeroIllustration />
            </div>
          </div>
        </section>

        <section id="nosotros" className="section section--alt" aria-label="Sobre nosotros">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Sobre JSG Softwares</h2>
              <p className="section-header__subtitle">
                Especialistas en integración, automatización y desarrollo a medida.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-card__icon">
                  <Code2 size={24} />
                </div>
                <h3 className="about-card__title">Desarrollo a medida</h3>
                <p className="about-card__text">
                  Construimos APIs, integraciones y herramientas personalizadas para cada cliente.
                  No usamos plantillas: cada solución se diseña según tus necesidades.
                </p>
              </div>
              <div className="about-card">
                <div className="about-card__icon">
                  <Zap size={24} />
                </div>
                <h3 className="about-card__title">Automatización primero</h3>
                <p className="about-card__text">
                  Si un proceso se puede automatizar, lo automatizamos. Desde sincronización bancaria
                  hasta reportes automáticos con cron jobs y manejo de tokens.
                </p>
              </div>
              <div className="about-card">
                <div className="about-card__icon">
                  <Users size={24} />
                </div>
                <h3 className="about-card__title">Trabajo cercano</h3>
                <p className="about-card__text">
                  Comunicación directa durante todo el proyecto. Sin intermediarios, sin burocracia.
                  Hablas con quien escribe el código.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section" aria-label="Servicios">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Lo que hacemos</h2>
              <p className="section-header__subtitle">
                Soluciones técnicas especializadas en integración, automatización y auditoría.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article key={service.id} className="service-card">
                    <div className="service-card__icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <ul className="service-card__list">
                      {service.deliverables.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="service-card__footer">
                      <Clock size={14} />
                      <span>{service.time}</span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="proceso" className="section section--alt" aria-label="Proceso">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Cómo trabajamos</h2>
              <p className="section-header__subtitle">
                Un proceso claro, sin sorpresas.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((step, idx) => (
                <div key={step.step} className="process-card">
                  <div className="process-card__step">{step.step}</div>
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__description">{step.description}</p>
                  {idx < processSteps.length - 1 && (
                    <ArrowRight className="process-card__arrow" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="casos" className="section" aria-label="Casos de éxito">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Casos de éxito</h2>
              <p className="section-header__subtitle">
                Proyectos que hemos resuelto. Contactános para ver detalles.
              </p>
            </div>

            <div className="cases-grid">
              {caseStudies.map((study, idx) => (
                <article key={idx} className="case-card">
                  <div className="case-card__header">
                    <span className="case-card__tag">{study.type}</span>
                    <span className="case-card__client">{study.client}</span>
                  </div>
                  <h3 className="case-card__title">{study.title}</h3>
                  <ul className="case-card__list">
                    {study.what.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="case-card__metric">
                    <Target size={16} />
                    <span>{study.metric}</span>
                  </div>
                  <div className="case-card__result">
                    <BarChart3 size={16} />
                    <span>{study.result}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section--alt" aria-label="Preguntas frecuentes">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Preguntas frecuentes</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}
                >
                  <button 
                    className="faq-item__trigger"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={20} className="faq-item__icon" />
                  </button>
                  <div className="faq-item__content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section section--cta" aria-label="Contacto">
          <div className="container">
            <div className="cta-box">
              <div className="cta-box__content">
                <h2 className="cta-box__title">¿Hablamos de tu proyecto?</h2>
                <p className="cta-box__text">
                  Cuéntanos qué necesitas y te proponemos una solución.
                </p>
                
                <div className="cta-box__contacts">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="cta-box__contact">
                    <MessageCircle size={20} />
                    <span>+507 6063-4535</span>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="cta-box__contact">
                    <Mail size={20} />
                    <span>{EMAIL}</span>
                  </a>
                  <div className="cta-box__contact">
                    <MapPin size={20} />
                    <span>Ciudad de Panamá, Panamá</span>
                  </div>
                </div>
              </div>

              <div className="cta-box__form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <span className="footer__brand">JSG Softwares</span>
            <span className="footer__sep">·</span>
            <span>Integraciones & Automatización</span>
          </div>
          <div className="footer__center">
            <span>© {new Date().getFullYear()} JSG Softwares · Ciudad de Panamá, Panamá</span>
          </div>
          <div className="footer__right">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp</a>
            <span className="footer__sep">·</span>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App