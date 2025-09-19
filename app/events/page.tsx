import { events } from "../../data/event";

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
            {event.url && (
              <div className="event-link-area">
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
                  イベントページを見る
                </a>
              </div>
            )}
            <hr className="event-divider" />
            <div className="event-meta">
              <div className="event-role"><span className="event-label">立場</span>：{event.role}</div>
              <div className="event-learned"><span className="event-label">学んだこと</span>：{event.learned}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
