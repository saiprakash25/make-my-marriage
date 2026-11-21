"use client";

import { useState } from "react";
import styles from "./homepage.module.css";

const schedules = [
  {
    name: "Traditional Kalyanam",
    day: "Wedding morning",
    events: [
      ["06:30", "Mangala Snanam & Vratham", "Family courtyard"],
      ["08:00", "Kasi Yatra & Mandapam Procession", "Mandapam entrance"],
      ["09:15", "Kanyadanam & Mangalyadharanam", "Main mandapam"],
      ["10:30", "Post-ceremony blessings & breakfast", "Dining hall"],
    ],
  },
  {
    name: "Mehendi & Sangeet",
    day: "Evening before the wedding",
    events: [
      ["16:00", "Mehendi begins", "Garden courtyard"],
      ["18:30", "Family performances", "Main stage"],
      ["20:00", "Dinner", "Dining hall"],
    ],
  },
  {
    name: "Reception",
    day: "Wedding evening",
    events: [
      ["18:30", "Guest welcome", "Reception foyer"],
      ["19:00", "Couple’s entrance & family photos", "Main stage"],
      ["20:00", "Reception dinner", "Dining hall"],
    ],
  },
];

export function CeremonyTimeline() {
  const [selected, setSelected] = useState(0);
  const schedule = schedules[selected];

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineOptions} role="group" aria-label="Sample ceremony">
        {schedules.map(({ name }, index) => (
          <button
            key={name}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className={styles.timelineContent} aria-live="polite">
        <span className={styles.tag}>Sample timeline</span>
        <h3>{schedule.name} run-of-show</h3>
        <p>{schedule.day}</p>
        <ol className={styles.schedule}>
          {schedule.events.map(([time, title, venue]) => (
            <li key={time}>
              <time dateTime={time}>{time}</time>
              <div><strong>{title}</strong><span>{venue}</span></div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
