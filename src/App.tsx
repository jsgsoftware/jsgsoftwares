import { useState, type FormEvent } from 'react'
import heroIllustration from './assets/hero-illustration.svg'
import prjAutomation from './assets/prj-automation.svg'
import prjDashboard from './assets/prj-dashboard.svg'
import prjIntegration from './assets/prj-integration.svg'
import svcAiAgents from './assets/svc-ai-agents.svg'
import svcApi from './assets/svc-api.svg'
import svcAutomation from './assets/svc-automation.svg'
import svcCalendar from './assets/svc-calendar.svg'
import svcChatbot from './assets/svc-chatbot.svg'
import svcMaintenance from './assets/svc-maintenance.svg'
import svcMultiplatform from './assets/svc-multiplatform.svg'
import svcWeb from './assets/svc-web.svg'
import svcZoho from './assets/svc-zoho.svg'
import './App.css'

function App() {
  const email = 'jsgsoftwares@gmail.com'
  const whatsappNumber = '50760634535'
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const defaultSubject = 'Cotización - JSG Softwares'

  const services = [
    {
      title: 'APIs e integraciones',
      text: 'Integración entre plataformas con webhooks, endpoints y sincronizaciones seguras.',
      imageSrc: svcApi,
      imageAlt: 'Ilustración de integración de API',
    },
    {
      title: 'Desarrollo web',
      text: 'Sitios y apps web modernas para ventas, operaciones y atención al cliente.',
      imageSrc: svcWeb,
      imageAlt: 'Ilustración de una aplicación web',
    },
    {
      title: 'Automatizaciones (n8n)',
      text: 'Automatizaciones con n8n: flujos, integraciones y orquestación de procesos.',
      imageSrc: svcAutomation,
      imageAlt: 'Ilustración de automatización de procesos',
    },
    {
      title: 'Chatbots',
      text: 'Chatbots para soporte y ventas: captura de leads, FAQ y seguimiento.',
      imageSrc: svcChatbot,
      imageAlt: 'Ilustración de un chatbot',
    },
    {
      title: 'Agentes IA',
      text: 'Agentes IA para atención, soporte interno y automatización asistida por lenguaje natural.',
      imageSrc: svcAiAgents,
      imageAlt: 'Ilustración de agentes de inteligencia artificial',
    },
    {
      title: 'Zoho (CRM/Creator/Flow)',
      text: 'Desarrollos, personalizaciones e integraciones en el ecosistema Zoho.',
      imageSrc: svcZoho,
      imageAlt: 'Ilustración de módulos de sistema',
    },
    {
      title: 'Venta de software multiplataforma',
      text: 'Soluciones listas para usar (web/móvil) adaptables a tu operación y con soporte.',
      imageSrc: svcMultiplatform,
      imageAlt: 'Ilustración de software multiplataforma',
    },
    {
      title: 'Software de calendario',
      text: 'Agenda y reservas: calendario, recordatorios, confirmaciones y control de disponibilidad.',
      imageSrc: svcCalendar,
      imageAlt: 'Ilustración de calendario',
    },
    {
      title: 'Desarrollo a la medida',
      text: 'Sistemas personalizados para optimizar procesos y mejorar productividad.',
      imageSrc: prjDashboard,
      imageAlt: 'Ilustración de un dashboard',
    },
    {
      title: 'Mantenimiento y soporte',
      text: 'Mejoras, correcciones y evolución continua de tus sistemas.',
      imageSrc: svcMaintenance,
      imageAlt: 'Ilustración de mantenimiento y soporte',
    },
  ]

  const portfolio = [
    {
      title: 'Integración entre sistemas',
      text: 'Conecta herramientas y centraliza datos con integraciones seguras.',
      imageSrc: prjIntegration,
      imageAlt: 'Diagrama de integración',
    },
    {
      title: 'Automatización de procesos',
      text: 'Reduce tiempos operativos automatizando tareas clave con n8n.',
      imageSrc: prjAutomation,
      imageAlt: 'Flujo de automatización',
    },
    {
      title: 'Panel web + API',
      text: 'Aplicación web con back-end para control, reportes y operaciones.',
      imageSrc: prjDashboard,
      imageAlt: 'Dashboard web',
    },
  ]

  const featuredClients = ['Olacars Panamá']
  const sectors = ['Retail', 'Logística', 'Servicios', 'Educación', 'Finanzas', 'Salud']

  function buildMailtoLink(params: { name: string; fromEmail: string; phone: string; message: string }) {
    const lines = [
      `Nombre: ${params.name}`,
      `Correo: ${params.fromEmail}`,
      `Teléfono: ${params.phone}`,
      '',
      'Mensaje:',
      params.message,
    ]
    const body = encodeURIComponent(lines.join('\n'))
    const subject = encodeURIComponent(defaultSubject)
    return `mailto:${email}?subject=${subject}&body=${body}`
  }

  function ContactForm() {
    const [name, setName] = useState('')
    const [fromEmail, setFromEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const mailto = buildMailtoLink({ name, fromEmail, phone, message })

    function onSubmit(e: FormEvent) {
      e.preventDefault()
      window.location.href = mailto
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
            />
          </label>

          <label className="field field--full">
            <span className="field__label">¿Cómo puedo ayudarte?</span>
            <textarea
              className="field__input field__textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </label>
        </div>

        <div className="form__actions">
          <button className="btn" type="submit">
            Enviar solicitud
          </button>
          <a className="btn btn--ghost" href={whatsappLink} target="_blank" rel="noreferrer">
            Escribir por WhatsApp
          </a>
        </div>

        <p className="fineprint">Tus datos son confidenciales y solo serán usados con fines comerciales.</p>
      </form>
    )
  }

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
              <div className="brand__tag">Desarrollo de software</div>
            </div>
          </div>

          <nav className="nav" aria-label="Navegación">
            <a className="nav__link" href="#servicios">
              Servicios
            </a>
            <a className="nav__link" href="#clientes">
              Clientes
            </a>
            <a className="nav__link" href="#portafolio">
              Portafolio
            </a>
            <a className="nav__link" href="#contacto">
              Contacto
            </a>
          </nav>

          <div className="header__cta">
            <a className="btn btn--ghost" href={`mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`}>
              Cotizar por correo
            </a>
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero hero--cover" aria-label="Presentación">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="hero__kicker">Soluciones de Software Personalizadas</div>
              <h1 className="hero__title">Desarrollo de software a la medida para tu empresa.</h1>
              <p className="hero__lead">
                APIs, aplicaciones web, software multiplataforma, chatbots, agentes IA y automatizaciones con n8n. Zoho e
                integraciones para optimizar procesos y mejorar la productividad.
              </p>
              <div className="hero__actions">
                <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
                  Solicita una asesoría
                </a>
                <a className="btn btn--ghost" href={`mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`}>
                  Cotizar por correo
                </a>
              </div>

              <div className="hero__meta">
                <div className="pill">
                  <span className="pill__k">Correo:</span>
                  <a className="pill__v" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
                <div className="pill">
                  <span className="pill__k">WhatsApp:</span>
                  <a className="pill__v" href={whatsappLink} target="_blank" rel="noreferrer">
                    +{whatsappNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="hero__panel" aria-hidden="true">
              <div className="panel panel--glass">
                <img className="panel__img" src={heroIllustration} alt="Ilustración de tecnología" loading="lazy" />
                <div className="panel__title">Servicios principales</div>
                <ul className="panel__list">
                  <li>APIs e integraciones</li>
                  <li>Desarrollo web</li>
                  <li>Software multiplataforma</li>
                  <li>Automatizaciones (n8n)</li>
                  <li>Chatbots</li>
                  <li>Agentes IA</li>
                  <li>Zoho (CRM/Creator/Flow)</li>
                  <li>Software de calendario</li>
                  <li>Mantenimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section" aria-label="Servicios">
          <div className="container">
            <h2 className="section__title">Servicios</h2>
            <p className="section__subtitle">Digitalización, desarrollo y automatización para tu operación.</p>

            <div className="grid grid--services">
              {services.map((s) => (
                <article key={s.title} className="card card--media">
                  <div className="media">
                    <img className="media__img" src={s.imageSrc} alt={s.imageAlt} loading="lazy" />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{s.title}</h3>
                    <p className="card__text">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clientes" className="section section--alt" aria-label="Clientes">
          <div className="container">
            <h2 className="section__title">Clientes</h2>
            <p className="section__subtitle">Algunos proyectos realizados y experiencia por rubro.</p>

            <div className="logos" role="list" aria-label="Clientes">
              {featuredClients.map((c) => (
                <div key={c} className="logoChip logoChip--primary" role="listitem">
                  {c}
                </div>
              ))}
            </div>

            <div className="logos logos--secondary" role="list" aria-label="Sectores">
              {sectors.map((c) => (
                <div key={c} className="logoChip" role="listitem">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="section" aria-label="Portafolio">
          <div className="container">
            <div className="section__head">
              <div>
                <h2 className="section__title">Portafolio</h2>
                <p className="section__subtitle">Ejemplos de soluciones que puedo construir para tu operación.</p>
              </div>
              <div className="section__headActions">
                <a className="btn btn--ghost" href="#contacto">
                  Ver más / Cotizar
                </a>
              </div>
            </div>

            <div className="grid grid--portfolio">
              {portfolio.map((p) => (
                <article key={p.title} className="card card--media">
                  <div className="media">
                    <img className="media__img" src={p.imageSrc} alt={p.imageAlt} loading="lazy" />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{p.title}</h3>
                    <p className="card__text">{p.text}</p>
                  </div>
                </article>
              ))}
              <article className="card card--cta">
                <h3 className="card__title">¿Tienes un proyecto en mente?</h3>
                <p className="card__text">Escríbeme y armamos el alcance para cotizar con claridad.</p>
                <div className="card__actions">
                  <a className="btn btn--small" href={whatsappLink} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a className="btn btn--ghost btn--small" href={`mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`}>
                    Correo
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="section section--alt" aria-label="Contacto">
          <div className="container contact">
            <div>
              <h2 className="section__title">Contacto</h2>
              <p className="section__subtitle">Completa el formulario o contáctame directo:</p>

              <div className="contact__rows">
                <div className="contact__row">
                  <div className="contact__label">Correo</div>
                  <a className="contact__value" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
                <div className="contact__row">
                  <div className="contact__label">WhatsApp</div>
                  <a className="contact__value" href={whatsappLink} target="_blank" rel="noreferrer">
                    +{whatsappNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__actions">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">© {new Date().getFullYear()} JSG Softwares</div>
          <div className="footer__right">
            <a href={`mailto:${email}`}>{email}</a>
            <span className="footer__sep" aria-hidden="true">
              ·
            </span>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
