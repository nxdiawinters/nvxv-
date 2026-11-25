import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Menu, Search, ShoppingBag, X } from 'lucide-react'
import './styles.css'

const nav = [
  ['Manifesto', '#manifesto'],
  ['Music', '#music'],
  ['Tour', '#tour'],
  ['Editorial', '#editorial'],
  ['Shop', '#shop'],
]

const releases = [
  { title: 'AFTERIMAGE', type: 'EP / 2026', number: '01' },
  { title: 'NO SAINTS', type: 'Single / 2025', number: '02' },
  { title: 'MIDNIGHT FORM', type: 'Live Set / 2025', number: '03' },
]

const shows = [
  { date: '12', month: 'DEC', city: 'Los Angeles', venue: 'Academy Nightclub' },
  { date: '19', month: 'DEC', city: 'Miami', venue: 'Club Space' },
  { date: '09', month: 'JAN', city: 'New York', venue: 'Elsewhere' },
]

const products = [
  { name: 'VOID / 001 Hoodie', price: '$180', tone: 'black' },
  { name: 'Signal Tee', price: '$95', tone: 'ivory' },
  { name: 'No Saints Cuff', price: '$240', tone: 'gold' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = (event: React.FormEvent) => {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <>
      <header className="header">
        <a className="brand" href="#" aria-label="Nadia Winter home">
          <span>NADIA</span><span>WINTER</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search"><Search size={18} /></button>
          <button className="icon-button cart-button" aria-label="Shopping bag" onClick={() => setCartCount(cartCount)}>
            <ShoppingBag size={18} /><span>{cartCount}</span>
          </button>
          <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="icon-button close-menu" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></button>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
      )}

      <main>
        <section className="hero">
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="portrait">
              <div className="portrait-silhouette"><span>V0!D</span></div>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Artist / Founder / Director</p>
            <h1>THE FUTURE<br />IS <em>BLACK</em></h1>
            <p className="hero-subtitle">Nadia Winter explores sound, image and identity through N.V.X.V Global.</p>
            <a className="text-link" href="#music">Enter the world <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="manifesto" id="manifesto">
          <p className="section-index">01 / MANIFESTO</p>
          <div className="manifesto-content">
            <p className="manifesto-lead">We build worlds for people who refuse to disappear.</p>
            <p className="manifesto-body">N.V.X.V Global is a cultural label spanning music, fashion, film and independent talent. Founded by Nadia Winter as a statement of creative autonomy.</p>
            <a className="text-link dark" href="#editorial">Discover the label <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="music-section" id="music">
          <div className="section-heading">
            <p className="section-index">02 / MUSIC</p>
            <h2>NEW FREQUENCIES</h2>
          </div>
          <div className="release-grid">
            {releases.map((release, index) => (
              <article className={`release-card release-${index + 1}`} key={release.title}>
                <div className="release-art"><span>{release.number}</span><b>NW</b></div>
                <div className="release-meta">
                  <div><h3>{release.title}</h3><p>{release.type}</p></div>
                  <button className="circle-button" aria-label={`Play ${release.title}`}><span>▶</span></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tour-section" id="tour">
          <div className="tour-heading">
            <p className="section-index">03 / LIVE</p>
            <h2>NIGHT<br />PROTOCOL</h2>
          </div>
          <div className="show-list">
            {shows.map((show) => (
              <article className="show" key={show.city}>
                <div className="show-date"><strong>{show.date}</strong><span>{show.month}</span></div>
                <div className="show-location"><h3>{show.city}</h3><p>{show.venue}</p></div>
                <a href="#" onClick={(event) => event.preventDefault()} className="ticket-link">Tickets <ArrowUpRight size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-section" id="editorial">
          <div className="editorial-image">
            <div className="editorial-frame"><span>ARCHIVE 001</span></div>
          </div>
          <div className="editorial-copy">
            <p className="section-index">04 / EDITORIAL</p>
            <h2>THE SPACE<br />BETWEEN</h2>
            <p>An intimate portrait of the artist behind V0!D — autonomy, excess and the discipline of reinvention.</p>
            <a className="text-link dark" href="#shop">View story <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading shop-heading">
            <p className="section-index">05 / OBJECTS</p>
            <h2>LIMITED FORMS</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className={`product-art ${product.tone}`}><div className="product-object" /></div>
                <div className="product-info"><div><h3>{product.name}</h3><p>{product.price}</p></div><button onClick={() => setCartCount((count) => count + 1)}>Add</button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="join-section">
          <p className="section-index">PRIVATE CHANNEL</p>
          {subscribed ? (
            <h2>YOU'RE ON THE LIST.</h2>
          ) : (
            <>
              <h2>JOIN THE INNER CIRCLE</h2>
              <form onSubmit={subscribe}>
                <input aria-label="Email address" type="email" required placeholder="EMAIL ADDRESS" value={email} onChange={(event) => setEmail(event.target.value)} />
                <button type="submit" aria-label="Subscribe"><ArrowUpRight /></button>
              </form>
            </>
          )}
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#">NADIA WINTER</a>
        <div className="footer-links"><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">YouTube</a><a href="#">Pinterest</a></div>
        <p>© 2026 N.V.X.V Global</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
