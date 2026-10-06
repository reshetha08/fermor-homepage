import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from 'lucide-react'
import './App.css'

const marketItems = [
  { symbol: 'S&P 500', price: '5,842.47', change: '+0.84%', positive: true },
  { symbol: 'NASDAQ', price: '18,421.09', change: '+1.21%', positive: true },
  { symbol: 'BTC', price: '$67,204.18', change: '+2.43%', positive: true },
  { symbol: 'ETH', price: '$3,482.60', change: '-0.36%', positive: false },
  { symbol: 'GOLD', price: '$2,391.40', change: '+0.18%', positive: true },
]

const features = [
  { icon: Wallet, number: '01', title: 'Know where it goes', copy: 'See all your spending in one calm, clear picture. No spreadsheets required.', color: 'mint' },
  { icon: Sparkles, number: '02', title: 'Find your next move', copy: 'Small, thoughtful insights that help you make a little more of every day.', color: 'blue' },
  { icon: CreditCard, number: '03', title: 'Move money freely', copy: 'Send, save, and set money aside in a few taps. Life moves fast. So should money.', color: 'peach' },
  { icon: ShieldCheck, number: '04', title: "Know you're protected", copy: 'Your information stays yours, protected with bank-level security at every step.', color: 'lilac' },
]

const stories = [
  { category: 'THE BIG PICTURE', title: 'The new rules of building wealth, one habit at a time', time: '6 min read', image: 'photo-1460925895917-afdab827c52f', tone: 'green' },
  { category: 'MONEY, MADE SIMPLE', title: 'Compound interest: the quiet superpower in your savings', time: '4 min read', image: 'photo-1444653614773-995cb1ef9efa', tone: 'blue' },
  { category: 'A BETTER BALANCE', title: 'A gentler way to think about your monthly budget', time: '5 min read', image: 'photo-1486406146926-c627a92ad1ab', tone: 'peach' },
  { category: 'MARKET NOTES', title: 'What to remember when the market gets a little loud', time: '3 min read', image: 'photo-1484557052118-f32bd25b45b5', tone: 'lilac' },
  { category: 'STARTING SOMEWHERE', title: 'Your first investing plan can be refreshingly simple', time: '7 min read', image: 'photo-1454165804606-c3d57bc86b40', tone: 'green' },
]

function useIntersectionObserver() {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    let observer
    const revealIfVisible = () => {
      const bounds = element.getBoundingClientRect()
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        setIsVisible(true)
        observer?.unobserve(element)
        window.removeEventListener('scroll', revealIfVisible)
        window.removeEventListener('resize', revealIfVisible)
      }
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
          window.removeEventListener('scroll', revealIfVisible)
          window.removeEventListener('resize', revealIfVisible)
        }
      }, { threshold: 0.12 })
      observer.observe(element)
    }

    window.addEventListener('scroll', revealIfVisible, { passive: true })
    window.addEventListener('resize', revealIfVisible)
    revealIfVisible()

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', revealIfVisible)
      window.removeEventListener('resize', revealIfVisible)
    }
  }, [])

  return [elementRef, isVisible]
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver()
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

function Logo({ footer = false }) {
  return (
    <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#top" aria-label="Fermor home">
      <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
      <span>fermor</span>
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['How it works', '#features'], ['Our approach', '#calculator'], ['The journal', '#journal']]

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {links.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="login-link" href="#footer">Log in</a>
          <a className="button button-small button-light" href="#calculator">Get started <ArrowRight size={15} /></a>
        </div>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="A rising chart showing steady financial growth" role="img">
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
      <div className="chart-card">
        <div className="chart-card-top"><div><span className="chart-label">YOUR TOTAL BALANCE</span><div className="chart-total">$24,680<span>.50</span></div></div><span className="chart-change"><ArrowUpRight size={14} /> 12.8%</span></div>
        <div className="chart-periods"><span>1W</span><span>1M</span><span className="period-active">6M</span><span>1Y</span><span>ALL</span></div>
        <svg className="wealth-chart" viewBox="0 0 540 218" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#a9f5ce" stopOpacity=".26" /><stop offset="100%" stopColor="#a9f5ce" stopOpacity="0" /></linearGradient></defs>
          <path className="chart-grid-line" d="M0 35H540M0 85H540M0 135H540M0 185H540" />
          <path className="chart-area" d="M0 174 C35 169 43 153 72 159 S108 145 132 150 S170 122 198 134 S239 126 259 111 S299 124 326 102 S361 98 382 80 S413 94 438 69 S474 75 493 48 S520 45 540 20 V218 H0Z" />
          <path className="chart-line" d="M0 174 C35 169 43 153 72 159 S108 145 132 150 S170 122 198 134 S239 126 259 111 S299 124 326 102 S361 98 382 80 S413 94 438 69 S474 75 493 48 S520 45 540 20" />
          <circle cx="493" cy="48" r="5" className="chart-dot" />
        </svg>
        <div className="chart-axis"><span>MAR 01</span><span>MAR 15</span><span>APR 01</span><span>APR 15</span><span>MAY 01</span></div>
      </div>
      <div className="float-note note-growth"><span className="note-icon"><ArrowUpRight size={17} /></span><span><small>THIS MONTH</small><strong>+$1,240.00</strong></span></div>
      <div className="float-note note-savings"><span className="savings-spark">+</span><span><small>YOU'RE ON TRACK</small><strong>Looking good</strong></span><Check className="note-check" size={17} /></div>
      <div className="art-caption"><span className="caption-dot" /> A little progress, every day.</div>
    </div>
  )
}

function MarketTicker() {
  return (
    <section className="ticker" aria-label="Market snapshot">
      <div className="ticker-inner"><span className="ticker-kicker"><span className="live-dot" /> MARKET SNAPSHOT</span>
        <div className="ticker-window"><div className="ticker-track">
          {[...marketItems, ...marketItems].map((item, index) => <div className="ticker-item" key={`${item.symbol}-${index}`} aria-hidden={index >= marketItems.length}>
            <span className="ticker-symbol">{item.symbol}</span><span className="ticker-price">{item.price}</span>
            <span className={`ticker-change ${item.positive ? 'up' : 'down'}`}>{item.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}{item.change}</span>
          </div>)}
        </div></div><span className="ticker-footnote">Markets move. Your plan can stay steady.</span>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section features-section" id="features"><div className="section-inner">
      <Reveal className="section-heading-row"><div><p className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO BANK</p><h2>Money has enough<br /><span>on its mind.</span></h2></div><p className="section-intro">Your finances should feel simpler, not like one more thing to figure out. We make room for the good stuff.</p></Reveal>
      <div className="feature-grid">{features.map(({ icon: Icon, number, title, copy, color }, index) => <Reveal key={number} delay={index * 80}><article className={`feature-card feature-${color}`}>
        <div className="feature-card-top"><span className="feature-icon"><Icon size={21} strokeWidth={1.7} /></span><span className="feature-number">{number}</span></div>
        <div><h3>{title}</h3><p>{copy}</p></div><a className="feature-arrow" href="#calculator" aria-label={`Explore ${title}`}><ArrowRight size={17} /></a>
      </article></Reveal>)}</div>
      <Reveal className="trust-strip"><div className="trust-avatars" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>Good with money looks different on everyone.</strong> We meet you where you are.</p><span className="trust-stat"><strong>4.9</strong> <span>from 12,000+ members</span></span></Reveal>
    </div></section>
  )
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)
}

function WealthCalculator() {
  const [deposit, setDeposit] = useState(8000)
  const [monthly, setMonthly] = useState(450)
  const [years, setYears] = useState(15)
  const monthlyRate = 0.07 / 12
  const months = years * 12
  const growthFactor = (1 + monthlyRate) ** months
  const projected = deposit * growthFactor + monthly * ((growthFactor - 1) / monthlyRate)
  const contributions = deposit + monthly * months
  const interest = projected - contributions
  const growthPercent = Math.max(0, Math.min(100, (projected / 500000) * 100))
  const controls = [
    { label: 'Starting amount', value: deposit, min: 1000, max: 50000, step: 500, setValue: setDeposit, display: formatCurrency(deposit) },
    { label: 'Monthly contribution', value: monthly, min: 50, max: 2500, step: 50, setValue: setMonthly, display: formatCurrency(monthly) },
    { label: 'Time to grow', value: years, min: 1, max: 40, step: 1, setValue: setYears, display: `${years} years` },
  ]

  return (
    <section className="calculator-section" id="calculator"><div className="section-inner calculator-inner">
      <Reveal className="calculator-copy"><p className="eyebrow"><span className="eyebrow-line" /> YOUR FUTURE, IN FOCUS</p><h2>Little by little<br />adds up to <span>a lot.</span></h2><p>There's no magic number to start with. Just a few good habits, and a little time. See what yours could grow into.</p><div className="calculator-assurance"><CircleHelp size={17} /><span>A simple estimate, not a promise. Real returns vary.</span></div></Reveal>
      <Reveal className="calculator-panel" delay={120}>
        <div className="calc-panel-header"><span className="calc-heading-icon"><BarChart3 size={18} /></span><span>YOUR GROWTH ESTIMATE</span><span className="annual-return">7% avg. annual return <ChevronDown size={14} /></span></div>
        <div className="calc-result"><span>In {years} years, you could have</span><strong>{formatCurrency(projected)}</strong><div className="result-progress" aria-label={`${Math.round(growthPercent)} percent of a $500,000 goal`}><span style={{ width: `${growthPercent}%` }} /></div>
          <div className="result-legend"><span><i className="legend-contributions" /> You put in <strong>{formatCurrency(contributions)}</strong></span><span><i className="legend-growth" /> Growth <strong>{formatCurrency(interest)}</strong></span></div>
        </div>
        <div className="calc-controls">{controls.map((control, index) => <label className="slider-control" key={control.label}>
          <span className="slider-label"><span>{control.label}</span><strong>{control.display}</strong></span>
          <input type="range" min={control.min} max={control.max} step={control.step} value={control.value} style={{ '--range-progress': `${((control.value - control.min) / (control.max - control.min)) * 100}%` }} onChange={(event) => control.setValue(Number(event.target.value))} aria-label={control.label} />
          <span className="range-limits"><span>{index === 2 ? '1 year' : formatCurrency(control.min)}</span><span>{index === 2 ? '40 years' : formatCurrency(control.max)}</span></span>
        </label>)}</div>
        <a className="button button-blue calc-cta" href="#footer">Make a plan with Fermor <ArrowRight size={16} /></a>
      </Reveal>
    </div></section>
  )
}

function Journal() {
  const railRef = useRef(null)
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false })

  const startDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    dragState.current = { active: true, startX: event.clientX, scrollLeft: railRef.current.scrollLeft, moved: false }
    railRef.current.setPointerCapture(event.pointerId)
  }
  const moveDrag = (event) => {
    if (!dragState.current.active) return
    const distance = event.clientX - dragState.current.startX
    if (Math.abs(distance) > 4) dragState.current.moved = true
    railRef.current.scrollLeft = dragState.current.scrollLeft - distance
  }
  const endDrag = () => {
    dragState.current.active = false
    window.setTimeout(() => { dragState.current.moved = false }, 0)
  }

  return (
    <section className="journal-section" id="journal"><div className="section-inner">
      <Reveal className="journal-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> THE FERMOR JOURNAL</p><h2>A little good<br />to know.</h2></div><a className="text-link" href="#journal">All stories <ArrowRight size={16} /></a></Reveal>
      <div className="story-rail" ref={railRef} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onClickCapture={(event) => { if (dragState.current.moved) event.preventDefault() }}>
        {stories.map((story, index) => <Reveal key={story.title} delay={index * 50} className="story-reveal"><a className="story-card" href="#footer" draggable="false">
          <div className={`story-image story-${story.tone}`} style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(5, 10, 19, .18)), url(https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=700&q=80)` }} role="img" aria-label="Financial journal editorial photograph"><span className="story-category">{story.category}</span><span className="story-open"><MoveUpRight size={17} /></span></div>
          <div className="story-copy"><h3>{story.title}</h3><span>{story.time}</span></div>
        </a></Reveal>)}
      </div><div className="rail-hint"><span /> DRAG TO EXPLORE <ArrowRight size={13} /></div>
    </div></section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="footer"><div className="footer-inner"><div className="footer-main">
      <div className="footer-brand-col"><Logo footer /><p>Money, with a little more meaning.</p><span className="footer-reg"><ShieldCheck size={14} /> Your money is protected.</span></div>
      <div className="footer-links-col"><span>EXPLORE</span><a href="#features">How it works</a><a href="#calculator">Our approach</a><a href="#journal">The journal</a></div>
      <div className="footer-links-col"><span>THE DETAILS</span><a href="#footer">Security</a><a href="#footer">Privacy</a><a href="#footer">Help center</a></div>
      <div className="footer-note"><span>GOOD THINGS, OCCASIONALLY.</span><p>A thoughtful note about money, now and then.</p><a href="#footer">Join the list <ArrowRight size={15} /></a></div>
    </div><div className="footer-bottom"><span>(c) 2025 Fermor Financial, Inc.</span><span>Made for real life, wherever you are.</span><span className="footer-status"><i /> All systems looking good</span></div></div></footer>
  )
}

function App() {
  return <><Navbar /><main id="top">
    <section className="hero-section"><div className="hero-inner">
      <Reveal className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> YOUR MONEY, A LITTLE MORE HUMAN</p><h1>Make sense<br />of your <span>money.</span></h1><p className="hero-description">Clear insights, no jargon. A feel-good way to get to know your finances, without judgment. Just you, moving forward.</p><div className="hero-actions"><a className="button button-blue" href="#calculator">Find your next step <ArrowRight size={17} /></a><a className="button button-outline" href="#features">See how it works <ArrowDownRight size={16} /></a></div><div className="hero-reassurance"><span className="reassurance-check"><Check size={12} /></span> Free to join <span className="reassurance-separator">|</span> Takes about 2 minutes</div></Reveal>
      <Reveal className="hero-visual-reveal" delay={120}><HeroVisual /></Reveal><a className="scroll-cue" href="#market"><span /> SCROLL A LITTLE</a>
    </div><div className="hero-index"><span>01</span> / 04</div></section>
    <div id="market"><MarketTicker /></div><Features /><WealthCalculator /><Journal />
  </main><Footer /></>
}

export default App
