import Image from "next/image";
import { CeremonyTimeline } from "./ceremony-timeline";
import styles from "./homepage.module.css";

const highlights = [
  { icon: "calendar", title: "Event timelines", description: "Organize every ceremony from welcome to farewell." },
  { icon: "clock", title: "Multi-day schedules", description: "See how Mehendi, Sangeet, and the reception fit together." },
  { icon: "people", title: "Family collaboration", description: "Assign tasks and keep everyone working from the same plan." },
  { icon: "ledger", title: "Shared expenses", description: "Track what you owe and what you’ve already paid." },
] as const;

const features = [
  { title: "Plan across multiple days", description: "Give each ceremony a time, venue, and clear place in the wedding schedule." },
  { title: "Share the work with family", description: "Assign tasks to wedding members, set due dates, and follow their progress." },
  { title: "Keep guests informed", description: "Share event invitations and see who’s attending through guest RSVPs." },
];

const sample = {
  events: ["Mehendi & Sangeet", "Wedding Ceremony", "Grand Reception"],
  tasks: ["Confirm ceremony timings", "Send the reception invitations", "Check the livestream link"],
  expenses: { total: 185000, paid: 110000 },
};

const gallery = [
  { image: "mehendi", caption: "Mehendi", alt: "Henna patterns and gold bangles against a rose textile" },
  { image: "ceremony", caption: "Wedding ceremony", alt: "A wooden mandap draped with jasmine and marigold garlands" },
  { image: "reception", caption: "Reception", alt: "Candlelit tables with ivory and burgundy flowers" },
];

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function Homepage() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skip} href="#main">Skip to content</a>
      <header className={styles.header}>
        <a className={styles.brand} href="#top">Make My Marriage</a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#timeline">Event Timeline</a>
          <a href="#features">Planning Features</a>
          <a href="#workspace">Workspace Preview</a>
          <a href="#gallery">Photo Gallery</a>
        </nav>
        <a className={styles.button} href="#workspace">Explore the workspace</a>
      </header>

      <main id="main" tabIndex={-1}>
        <section className={`${styles.container} ${styles.hero}`}>
          <h1>One structured system for every Indian wedding event.</h1>
          <p className={styles.intro}>
            From Mehendi and Sangeet to the sacred Muhurtham and reception.
            Plan ceremonies, coordinate with family, and keep track of tasks, expenses, and guests in one place.
          </p>
          <div className={styles.actions}>
            <a className={styles.button} href="#workspace">Explore the workspace <span aria-hidden="true">→</span></a>
            <a className={styles.secondaryButton} href="#timeline">Explore event timelines</a>
          </div>
          <ul className={styles.highlights}>
            {highlights.map(({ icon, title, description }) => (
              <li key={title} className={styles.card}>
                <span className={`${styles.icon} ${styles[icon]}`} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.blush} id="timeline" aria-labelledby="timeline-title">
          <div className={`${styles.container} ${styles.section}`}>
            <div className={styles.sectionHeader}>
              <h2 id="timeline-title">Give every ceremony its moment.</h2>
              <p>See how a sample wedding can lay out the order, timing, and location of each tradition.</p>
            </div>
            <CeremonyTimeline />
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} id="features" aria-labelledby="features-title">
          <div className={styles.sectionHeader}>
            <h2 id="features-title">Keep the plan in one place.</h2>
            <p>Bring your schedule, family checklist, and guest list into the same wedding workspace.</p>
          </div>
          <div className={styles.threeColumns}>
            {features.map(({ title, description }) => (
              <article key={title} className={styles.card}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.blush} id="workspace" aria-labelledby="workspace-title">
          <div className={`${styles.container} ${styles.section}`}>
            <div className={styles.sectionHeader}>
              <h2 id="workspace-title">The ceremony command center</h2>
              <p>Preview a wedding workspace with sample events, tasks, and expenses.</p>
            </div>
            <div className={styles.workspace}>
              <div className={styles.workspaceHeader}>
                <h3>Aarav &amp; Meera’s Wedding</h3>
                <span className={styles.tag}>Sample workspace</span>
              </div>
              <div className={styles.threeColumns}>
                <article className={styles.card}>
                  <h4>Upcoming events</h4>
                  <ul className={styles.previewList}>
                    {sample.events.map((event) => <li key={event}>{event}</li>)}
                  </ul>
                </article>
                <article className={styles.card}>
                  <h4>Planning checklist</h4>
                  <ul className={styles.previewList}>
                    {sample.tasks.map((task) => <li key={task}>{task}</li>)}
                  </ul>
                </article>
                <article className={styles.card}>
                  <h4>Expense snapshot</h4>
                  <dl className={styles.expenses}>
                    <div><dt>Total</dt><dd>{rupees.format(sample.expenses.total)}</dd></div>
                    <div><dt>Paid</dt><dd>{rupees.format(sample.expenses.paid)}</dd></div>
                    <div><dt>Outstanding</dt><dd>{rupees.format(sample.expenses.total - sample.expenses.paid)}</dd></div>
                  </dl>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} id="gallery" aria-labelledby="gallery-title">
          <div className={styles.sectionHeader}>
            <h2 id="gallery-title">A gallery for every celebration</h2>
            <p>See how photos from your Mehendi, wedding ceremony, and reception could look together. Images are illustrative.</p>
          </div>
          <div className={styles.threeColumns}>
            {gallery.map(({ image, caption, alt }) => (
              <figure className={styles.photo} key={image}>
                <div className={styles.photoFrame}>
                  <Image
                    src={`/homepage/${image}.webp`}
                    alt={alt}
                    width={480}
                    height={600}
                    sizes="(max-width: 42rem) calc(100vw - 2rem), (max-width: 75rem) 32vw, 373px"
                  />
                </div>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="testimonial-title">
          <figure className={styles.story}>
            <figcaption id="testimonial-title" className={styles.tag}>Sample testimonial</figcaption>
            <blockquote>“We could see which ceremony was next and who was taking care of each task.”</blockquote>
            <p>Illustrative quote for the homepage preview</p>
          </figure>
        </section>

        <section className={`${styles.container} ${styles.section}`} aria-labelledby="closing-title">
          <div className={styles.closing}>
            <div>
              <h2 id="closing-title">Ready to organize your wedding events?</h2>
              <p>Walk through a sample ceremony and see what your family can plan together.</p>
            </div>
            <a className={styles.accentButton} href="#timeline">View the sample ceremony <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <a className={styles.brand} href="#top">Make My Marriage</a>
          <p>Wedding event and ceremony planning</p>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
