
"use client";

import { useState } from "react";
import type { Event } from "@/types";
import { events } from "@/data/events";
import { parseEventDate } from "@/lib/date";

function getTimelineYearMonthList(events: Event[]) {
  const ymSet = new Set<string>();
  events.forEach(ev => {
    const date = parseEventDate(ev.date);
    ymSet.add(`${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`);
  });
  const ymList = Array.from(ymSet);
  ymList.sort((a, b) => b.localeCompare(a));
  return ymList;
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const ymList = getTimelineYearMonthList(events);

  const eventMap: { [ym: string]: Event[] } = {};
  events.forEach(ev => {
    const date = parseEventDate(ev.date);
    const ym = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!eventMap[ym]) eventMap[ym] = [];
    eventMap[ym].push(ev);
  });

  return (
    <main className="container" style={{ minHeight: '70vh', paddingTop: '2rem' }}>
      <section className="hero hero--sub">
        <h1 className="hero-title">イベント履歴</h1>
        <p className="hero-sub">タイムライン形式で活動履歴を表示</p>
      </section>
      <section className="section">
        <div className="timeline-wrapper" style={{ overflowX: 'auto', maxWidth: '900px', margin: '2rem auto', padding: '1rem', position: 'relative' }}>
          <div className="timeline-grid" aria-hidden="true" />
          <table style={{ borderCollapse: 'separate', borderSpacing: 0, width: '100%', position: 'relative', zIndex: 1 }}>
            <thead>
              <tr>
                <th style={{ minWidth: 100, textAlign: 'right', paddingRight: 16, fontWeight: 700, color: 'var(--color-primary-hover)', fontSize: 18 }}>年月</th>
                <th style={{ minWidth: 220, textAlign: 'left', fontWeight: 700, color: 'var(--color-fg)' }}>イベント</th>
              </tr>
            </thead>
            <tbody>
              {ymList.map((ym) => (
                <tr key={ym}>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--color-primary-hover)', background: 'var(--color-accent)', borderRight: '2px solid var(--color-border)', verticalAlign: 'top', padding: '12px 16px 12px 0' }}>{ym}</td>
                  <td style={{ background: 'var(--color-accent)', verticalAlign: 'top', padding: '12px 8px' }}>
                    {eventMap[ym]?.map((ev, i) => (
                      <div
                        key={i}
                        className="timeline-event-card"
                        style={{ marginBottom: 12, cursor: 'pointer', border: ev.isHighlighted ? '2px solid #fbbf24' : '1px solid var(--color-border)', borderRadius: 12, padding: '1rem', background: 'var(--color-accent)', boxShadow: ev.isHighlighted ? '0 4px 12px rgba(251, 191, 36, 0.15)' : 'var(--shadow)', position: 'relative' }}
                        onClick={() => setSelectedEvent(ev)}
                      >
                        {ev.isHighlighted && (
                          <div style={{ position: 'absolute', top: -8, right: -8, zIndex: 2, background: 'var(--color-accent)', borderRadius: '50%', padding: 2, border: '1px solid #fbbf24' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </div>
                        )}
                        <div className="timeline-event-card__barcode" aria-hidden="true" />
                        <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--color-ink)', marginBottom: 4, paddingRight: ev.isHighlighted ? 16 : 0 }}>{ev.title}</div>
                        <div style={{ fontSize: 13, color: 'var(--color-ink)', opacity: 0.75, marginBottom: 2 }}>{ev.role}</div>
                        <div style={{ fontSize: 13, color: 'var(--color-ink)', opacity: 0.85 }}>{ev.desc.length > 40 ? ev.desc.substring(0, 40) + '...' : ev.desc}</div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {selectedEvent && (
        <div
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{ background: 'var(--color-accent)', borderRadius: '16px', padding: '2rem', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', boxShadow: 'var(--shadow)', border: '1px solid var(--color-border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', marginRight: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-fg)', margin: 0 }}>
                {selectedEvent.title}
              </h2>
              <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(56, 189, 252, 0.1)', color: 'var(--color-primary-ink)', border: '1px solid rgba(56, 189, 252, 0.2)', borderRadius: '16px', fontWeight: '500' }}>
                イベント
              </span>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-fg)', opacity: 0.7, marginBottom: '1rem', fontWeight: '500' }}>
              {selectedEvent.date}
            </div>
            <div style={{ fontSize: '1rem', color: 'var(--color-fg)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {selectedEvent.desc}
            </div>
            {selectedEvent.awards && selectedEvent.awards.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: '600', color: 'var(--color-fg)' }}>受賞：</span>
                <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
                  {selectedEvent.awards.map((award, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', color: '#d97706', fontWeight: '700', lineHeight: '1.5' }}>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div style={{ backgroundColor: 'var(--color-bg)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
              <div style={{ marginBottom: selectedEvent.learned ? '1rem' : 0, color: 'var(--color-fg)' }}>
                <span style={{ fontWeight: '600' }}>立場：</span>{selectedEvent.role}
              </div>
              {selectedEvent.learned && (
                <div style={{ color: 'var(--color-fg)', opacity: 0.85 }}>
                  <span style={{ fontWeight: '600' }}>学んだこと：</span>{selectedEvent.learned}
                </div>
              )}
            </div>
            {selectedEvent.url && (
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href={selectedEvent.url} target="_blank" rel="noopener noreferrer" className="neo-modal-btn">
                  イベントページを見る
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
