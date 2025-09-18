import { events } from "../../data/apps";

export default function Events() {
  return (
    <main className="container" style={{ minHeight: '70vh', paddingTop: '2rem' }}>
      <h1 className="section-title">イベント参加履歴</h1>
      <div className="event-card-list">
        {events.map((event, idx) => (
          <div className="event-card" key={idx}>
            <div className="event-title">{event.title}</div>
            <div className="event-date">{event.date}</div>
            <div className="event-desc">{event.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
