import {useState,type FormEvent} from'react'
import {ArrowRight,Check,ChevronDown,Mail,MapPin,Menu,MessageCircle,Phone,X} from'lucide-react'
import hero from'./assets/photos/hero-consulting.jpg'
import api from'./assets/photos/service-integrations.jpg'
import automation from'./assets/photos/service-automation.jpg'
import zoho from'./assets/photos/service-erp.jpg'
import web from'./assets/photos/service-development.jpg'
import discovery from'./assets/photos/why-discovery.jpg'
import'./App.css'

const PHONE='50760634535',WA=`https://wa.me/${PHONE}`,EMAIL='jsgsoftwares@gmail.com'
const services=[
  {image:api,title:'Integraciones y APIs',text:'Conectamos tus plataformas, bancos y servicios para que los datos se muevan de forma segura y automática.'},
  {image:automation,title:'Automatización de procesos',text:'Eliminamos tareas repetitivas con flujos en n8n, alertas, validaciones y trazabilidad completa.'},
  {image:zoho,title:'Odoo y Zoho',text:'Implementamos, personalizamos e integramos las herramientas que sostienen tu operación comercial.'},
  {image:web,title:'Software a la medida',text:'Creamos portales, paneles y sistemas web pensados alrededor de los procesos reales de tu empresa.'},
]
const faqs=[
  ['¿Trabajan con sistemas que ya están funcionando?','Sí. Revisamos la solución actual y proponemos una integración o mejora gradual para no interrumpir la operación.'],
  ['¿Cuánto puede tomar un proyecto?','Una automatización sencilla puede tomar de una a dos semanas. Una integración o implementación mayor se estima después del diagnóstico.'],
  ['¿Cómo preparan una cotización?','Primero conversamos sobre el problema y los sistemas involucrados. Luego entregamos un alcance, tiempo, precio y responsabilidades claras.'],
]

function Logo(){return <a className="logo" href="#inicio"><span>&lt;/</span>JSG<span>&gt;</span><small>SOFTWARES</small></a>}
function ContactForm(){const[n,setN]=useState(''),[m,setM]=useState('');function submit(e:FormEvent){e.preventDefault();window.open(`${WA}?text=${encodeURIComponent(`Hola JSG, soy ${n}. ${m}`)}`,'_blank')}return <form className="contactForm" onSubmit={submit}><div><label>Nombre</label><input value={n} onChange={e=>setN(e.target.value)} placeholder="Tu nombre" required/></div><div><label>¿Cómo podemos ayudarte?</label><textarea value={m} onChange={e=>setM(e.target.value)} placeholder="Cuéntanos sobre tu proyecto" rows={4} required/></div><button className="btn btnPrimary">Enviar por WhatsApp <ArrowRight size={18}/></button></form>}

export default function App(){const[menu,setMenu]=useState(false),[faq,setFaq]=useState<number|null>(null);return <div className="page">
  <div className="topbar"><div className="container"><span>Soluciones de software para empresas en Panamá</span><div><a href={`mailto:${EMAIL}`}><Mail size={14}/>{EMAIL}</a><a href={WA}><Phone size={14}/>+507 6063-4535</a></div></div></div>
  <header><div className="container headerInner"><Logo/><nav className={menu?'navOpen':''}><a href="#inicio">Inicio</a><a href="#nosotros">Quiénes somos</a><a href="#servicios">Servicios</a><a href="#proceso">Cómo trabajamos</a><a href="#contacto">Contacto</a></nav><a className="btn btnHeader" href="#contacto">Solicita una asesoría</a><button className="menuButton" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
  <main>
    <section id="inicio" className="hero"><div className="container heroInner"><div className="heroCopy"><span className="overline">DESARROLLO DE SOFTWARE EN PANAMÁ</span><h1>Tecnología que hace más simple tu negocio.</h1><p>Integramos sistemas, automatizamos procesos y desarrollamos soluciones a la medida para que tu empresa opere mejor.</p><div className="heroActions"><a className="btn btnPrimary" href="#contacto">Conversemos <ArrowRight size={18}/></a><a className="btn btnSecondary" href="#servicios">Ver servicios</a></div><div className="heroChecks"><span><Check/>Atención directa</span><span><Check/>Soluciones a medida</span><span><Check/>Soporte local</span></div></div><div className="heroVisual"><img src={hero} alt="Integración de sistemas y desarrollo de software"/><div className="experience"><strong>Panamá</strong><span>Atención cercana y soporte en tu zona horaria</span></div></div></div><div className="heroWave"/></section>

    <section className="trust"><div className="container"><p>Tecnologías que integramos</p><div>{['Laravel','Odoo','Zoho','n8n','AWS','React'].map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section id="nosotros" className="section intro"><div className="container introGrid"><div><span className="eyebrow">QUIÉNES SOMOS</span><h2>Tu aliado tecnológico para crecer con orden.</h2></div><div><p>En JSG Softwares ayudamos a empresas a conectar la tecnología con su operación diaria. No empezamos hablando de herramientas: primero entendemos qué necesitas resolver.</p><p>Trabajamos de forma directa, con alcances claros y soluciones que tu equipo puede usar y mantener.</p><a className="inlineLink" href="#proceso">Conoce cómo trabajamos <ArrowRight size={17}/></a></div></div></section>

    <section id="servicios" className="section servicesSection"><div className="container"><div className="sectionTitle"><span className="eyebrow">NUESTROS SERVICIOS</span><h2>Soluciones para transformar tu operación</h2><p>Desde una integración puntual hasta un sistema completo.</p></div><div className="serviceGrid">{services.map(s=><article className="serviceCard" key={s.title}><div className="serviceImage"><img src={s.image} alt=""/></div><div className="serviceContent"><h3>{s.title}</h3><p>{s.text}</p><a href="#contacto">Conocer más <ArrowRight size={16}/></a></div></article>)}</div></div></section>

    <section className="why"><div className="container whyGrid"><div className="whyVisual"><img src={discovery} alt="Consultor de JSG escuchando las necesidades de una cliente"/></div><div><span className="eyebrow">¿POR QUÉ JSG?</span><h2>Software con propósito, no tecnología por moda.</h2><p>Cada decisión técnica debe mejorar un proceso, reducir un riesgo o darle mejor información a tu equipo.</p><ul><li><Check/><div><strong>Comunicación directa</strong><span>Hablas con las personas que diseñan y construyen la solución.</span></div></li><li><Check/><div><strong>Experiencia en integraciones</strong><span>APIs, bancos, Zoho, Odoo, n8n y plataformas internas.</span></div></li><li><Check/><div><strong>Implementación responsable</strong><span>Pruebas, documentación y acompañamiento después de entregar.</span></div></li></ul></div></div></section>

    <section id="proceso" className="section process"><div className="container"><div className="sectionTitle"><span className="eyebrow">CÓMO LO HACEMOS</span><h2>Un proceso claro de principio a fin</h2></div><div className="steps">{[['01','Conversemos','Entendemos tu operación, el problema y el resultado que buscas.'],['02','Diseñamos','Definimos alcance, solución, tiempo y costo antes de comenzar.'],['03','Construimos','Desarrollamos por etapas y compartimos avances contigo.'],['04','Acompañamos','Probamos, documentamos y damos soporte a la puesta en marcha.']].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

    <section className="section faq"><div className="container faqGrid"><div><span className="eyebrow">PREGUNTAS FRECUENTES</span><h2>Resolvemos tus dudas antes de comenzar.</h2><p>Si tu pregunta no está aquí, escríbenos. Una conversación inicial no tiene costo.</p></div><div>{faqs.map((f,i)=><div className="faqItem" key={f[0]}><button onClick={()=>setFaq(faq===i?null:i)}>{f[0]}<ChevronDown className={faq===i?'rotate':''}/></button>{faq===i&&<p>{f[1]}</p>}</div>)}</div></div></section>

    <section id="contacto" className="contact"><div className="container contactGrid"><div><span className="eyebrow">CONTÁCTANOS</span><h2>Conversemos sobre lo que tu empresa necesita.</h2><p>Cuéntanos qué proceso quieres mejorar o qué sistemas necesitas conectar. Te responderemos con un siguiente paso claro.</p><div className="contactInfo"><a href={WA}><MessageCircle/>+507 6063-4535</a><a href={`mailto:${EMAIL}`}><Mail/>{EMAIL}</a><span><MapPin/>Ciudad de Panamá, Panamá</span></div></div><ContactForm/></div></section>
  </main>
  <footer><div className="container footerGrid"><div><Logo/><p>Analiza · Integra · Transforma</p></div><div><strong>Enlaces</strong><a href="#servicios">Servicios</a><a href="#proceso">Cómo trabajamos</a><a href="#contacto">Contacto</a></div><div><strong>Contacto</strong><a href={WA}>+507 6063-4535</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>Ciudad de Panamá</span></div></div><div className="copyright">© {new Date().getFullYear()} JSG Softwares. Todos los derechos reservados.</div></footer>
</div>}
