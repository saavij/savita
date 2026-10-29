import './App.css'

// Placeholder business details: replace these with the bar's real information.
const bar = {
  name: 'Bar Savita',
  tagline: 'Good drinks, good food and good company, right around the corner.',
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'hello@barsavita.example',
  address: ['123 Main Street', 'Your Town, ST 12345'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=123+Main+Street',
}

const menu = [
  {
    category: 'Cocktails',
    items: [
      { name: 'House Old Fashioned', note: 'Bourbon, bitters, orange', price: '$13' },
      { name: 'Spicy Margarita', note: 'Tequila, lime, chilli', price: '$12' },
      { name: 'Espresso Martini', note: 'Vodka, coffee liqueur, espresso', price: '$13' },
      { name: 'Seasonal Spritz', note: 'Ask what we’re pouring', price: '$11' },
    ],
  },
  {
    category: 'Beer & Wine',
    items: [
      { name: 'Draft beer', note: 'Rotating local taps', price: '$7+' },
      { name: 'Bottles & cans', note: 'Lagers, IPAs, ciders', price: '$6+' },
      { name: 'Wine by the glass', note: 'Red, white, rosé, bubbles', price: '$9+' },
      { name: 'Non-alcoholic', note: 'Mocktails, NA beer, sodas', price: '$5+' },
    ],
  },
  {
    category: 'Bar Bites',
    items: [
      { name: 'Loaded fries', note: 'Cheese, scallions, house sauce', price: '$9' },
      { name: 'Wings', note: 'Buffalo, BBQ or garlic parm', price: '$13' },
      { name: 'Sliders (3)', note: 'Beef or crispy chicken', price: '$14' },
      { name: 'Nachos to share', note: 'Salsa, guac, jalapeños', price: '$12' },
    ],
  },
]

const events = [
  { day: 'Tuesday', title: 'Trivia Night', detail: 'Teams of up to 6 · starts 8 pm' },
  { day: 'Thursday', title: 'Live Music', detail: 'Local acts · from 9 pm' },
  { day: 'Sunday', title: 'Game Day', detail: 'Every big match on the screens' },
]

const hours = [
  { days: 'Monday', time: 'Closed' },
  { days: 'Tuesday – Thursday', time: '4:00 pm – 12:00 am' },
  { days: 'Friday – Saturday', time: '4:00 pm – 2:00 am' },
  { days: 'Sunday', time: '12:00 pm – 10:00 pm' },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">{bar.name}</a>
          <nav aria-label="Main">
            <a href="#menu">Menu</a>
            <a href="#events">Events</a>
            <a href="#visit">Visit</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Neighbourhood bar · Est. 20XX</p>
            <h1>{bar.name}</h1>
            <p className="lead">{bar.tagline}</p>
            <div className="happy-hour">
              <strong>Happy Hour</strong> Tue – Fri, 4 – 6 pm · $2 off drafts &amp; house cocktails
            </div>
            <div className="hero-actions">
              <a href="#menu" className="btn">See the menu</a>
              <a href="#visit" className="btn btn-ghost">Find us</a>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="container">
            <h2>Menu</h2>
            <p className="section-intro">A taste of what we serve. Ask the bar about today's specials.</p>
            <div className="menu-grid">
              {menu.map((group) => (
                <div key={group.category} className="card">
                  <h3>{group.category}</h3>
                  <ul className="menu-list">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="menu-row">
                          <span className="item-name">{item.name}</span>
                          <span className="dots" aria-hidden="true"></span>
                          <span className="price">{item.price}</span>
                        </div>
                        <span className="item-note">{item.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="section section-alt">
          <div className="container">
            <h2>Every week</h2>
            <p className="section-intro">Regular nights worth putting in your calendar.</p>
            <div className="events-grid">
              {events.map((event) => (
                <div key={event.title} className="event">
                  <span className="event-day">{event.day}</span>
                  <h3>{event.title}</h3>
                  <p>{event.detail}</p>
                </div>
              ))}
            </div>
            <p className="private-hire">
              Planning a birthday, work do or party? We take group bookings and
              private hire. <a href={bar.phoneHref}>Call us</a> or{' '}
              <a href={`mailto:${bar.email}`}>email</a> to ask.
            </p>
          </div>
        </section>

        <section id="visit" className="section">
          <div className="container visit-grid">
            <div className="card">
              <h2>Opening hours</h2>
              <table className="hours">
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.days}>
                      <th scope="row">{row.days}</th>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="small-print">Kitchen closes one hour before the bar. Valid ID required.</p>
            </div>
            <div className="card">
              <h2>Find us</h2>
              <address>
                {bar.address.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </address>
              <p>
                <a href={bar.mapsUrl} target="_blank" rel="noreferrer">Get directions ↗</a>
              </p>
              <p className="contact-lines">
                Phone: <a href={bar.phoneHref}>{bar.phone}</a><br />
                Email: <a href={`mailto:${bar.email}`}>{bar.email}</a>
              </p>
              <a href={bar.phoneHref} className="btn">Book a table</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} {bar.name} · Please drink responsibly.
        </div>
      </footer>
    </>
  )
}

export default App
