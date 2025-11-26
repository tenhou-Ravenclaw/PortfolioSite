
"use client";

import { useState } from "react";
import { events, projects, Event, Project, TimelineItem } from "../../data/event";

// 共通の日付文字列パース関数
function parseDateString(dateString: string): Date {
  const match = dateString.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
  if (match) {
    return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
  }
  return new Date();
}

// 日付文字列から Date オブジェクトを作成するヘルパー関数
function parseEventDate(dateString: string): Date {
  const startDate = dateString.split('~')[0];
  return parseDateString(startDate);
}

function parseProjectDate(dateString: string): Date {
  if (dateString === "進行中" || dateString === "") {
    return new Date();
  }
  return parseDateString(dateString);
}

// 年月リストを新しい順で生成（イベントまたはプロジェクトの開始/終了月がある月のみ）
function getTimelineYearMonthList(events: Event[], projects: Project[]) {
  const ymSet = new Set<string>();
  events.forEach(ev => {
    const date = parseEventDate(ev.date);
    ymSet.add(`${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`);
  });
  projects.forEach(prj => {
    const start = parseProjectDate(prj.startDate);
    const end = (prj.endDate === '進行中' || !prj.endDate) ? new Date() : parseProjectDate(prj.endDate);
    ymSet.add(`${start.getFullYear()}/${String(start.getMonth() + 1).padStart(2, '0')}`);
    ymSet.add(`${end.getFullYear()}/${String(end.getMonth() + 1).padStart(2, '0')}`);
  });
  const ymList = Array.from(ymSet);
  ymList.sort((a, b) => b.localeCompare(a)); // 新しい順
  return ymList;
}
// プロジェクトに重複しないように列番号を割り当てる（ガントチャート用）
function assignProjectColumns(projects: Project[]) {
  // 期間をDateで持つ
  const projectRanges = projects.map((p, idx) => {
    const start = parseProjectDate(p.startDate);
    const end = (p.endDate === '進行中' || !p.endDate) ? new Date() : parseProjectDate(p.endDate);
    return { idx, start, end };
  });
  // 列割り当て
  const columns: { end: Date }[] = [];
  const result: number[] = [];
  projectRanges.sort((a, b) => a.start.getTime() - b.start.getTime());
  projectRanges.forEach(prj => {
    // 使える最小の列を探す
    let col = 0;
    for (; col < columns.length; col++) {
      if (columns[col].end < prj.start) break;
    }
    result[prj.idx] = col;
    columns[col] = { end: prj.end };
  });
  return result;
}



// プロジェクトの開始月～終了月の年月リストを生成（未使用だが将来用のため保持）
// function getYearMonthRange(start: Date, end: Date) {
//   const result: string[] = [];
//   let d = new Date(start.getFullYear(), start.getMonth(), 1);
//   const last = new Date(end.getFullYear(), end.getMonth(), 1);
//   while (d <= last) {
//     result.push(`${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}`);
//     d.setMonth(d.getMonth() + 1);
//   }
//   return result;
// }


export default function Events() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  // 年月リスト（新しい順）
  const ymList = getTimelineYearMonthList(events, projects);
  // プロジェクト列割り当て
  const projectColumns = assignProjectColumns(projects);
  const projectColCount = Math.max(...projectColumns) + 1;

  // プロジェクトの各列ごとに、どのプロジェクトがどの行（年月）で表示されるかを計算
  // 各プロジェクトの開始・終了インデックス
  const ymIndexMap = Object.fromEntries(ymList.map((ym, idx) => [ym, idx]));
  const projectBlocks = projects.map((prj, i) => {
    const start = parseProjectDate(prj.startDate);
    const end = (prj.endDate === '進行中' || !prj.endDate) ? new Date() : parseProjectDate(prj.endDate);
    const startYm = `${start.getFullYear()}/${String(start.getMonth() + 1).padStart(2, '0')}`;
    const endYm = `${end.getFullYear()}/${String(end.getMonth() + 1).padStart(2, '0')}`;
    const startIdx = ymIndexMap[startYm];
    const endIdx = ymIndexMap[endYm];
    return { project: prj, col: projectColumns[i], startIdx, endIdx };
  });

  // イベントを年月ごとにまとめる
  const eventMap: { [ym: string]: Event[] } = {};
  events.forEach(ev => {
    const date = parseEventDate(ev.date);
    const ym = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!eventMap[ym]) eventMap[ym] = [];
    eventMap[ym].push(ev);
  });

  // UI
  return (
    <main className="container" style={{ minHeight: '70vh', paddingTop: '2rem' }}>
      <section className="hero hero--sub">
        <h1 className="hero-title">イベント・プロジェクト履歴</h1>
        <p className="hero-sub">タイムライン形式で活動履歴を表示</p>
      </section>
      <section className="section">
        <div className="timeline-wrapper" style={{ overflowX: 'auto', maxWidth: '1200px', margin: '2rem auto', padding: '1rem', position: 'relative' }}>
          <div className="timeline-grid" aria-hidden="true" />
          <table style={{ borderCollapse: 'separate', borderSpacing: 0, width: '100%', position: 'relative', zIndex: 1 }}>
            <thead>
              <tr>
                <th style={{ minWidth: 100, textAlign: 'right', paddingRight: 16, fontWeight: 700, color: 'var(--color-primary-hover)', fontSize: 18 }}>年月</th>
                <th style={{ minWidth: 220, textAlign: 'left', fontWeight: 700, color: 'var(--color-fg)' }}>イベント</th>
                {Array.from({ length: projectColCount }).map((_, colIdx) => (
                  <th key={colIdx} style={{ minWidth: 220, textAlign: 'left', fontWeight: 700, color: 'var(--color-fg)' }}>{`プロジェクト${colIdx + 1}`}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ymList.map((ym, rowIdx) => (
                <tr key={ym}>
                  {/* 年月軸 */}
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--color-primary-hover)', background: 'var(--color-accent)', borderRight: '2px solid var(--color-border)', verticalAlign: 'top', padding: '12px 16px 12px 0' }}>{ym}</td>
                  {/* イベント列 */}
                  <td style={{ background: 'var(--color-accent)', borderRight: '2px solid var(--color-border)', verticalAlign: 'top', padding: '12px 8px' }}>
                    {eventMap[ym]?.map((ev, i) => (
                      <div key={i} className="timeline-event-card" style={{ marginBottom: 12, cursor: 'pointer', border: '1px solid var(--color-border)', borderRadius: 12, padding: '1rem', background: 'var(--color-accent)', boxShadow: 'var(--shadow)', position: 'relative' }}
                        onClick={() => setSelectedItem({ type: 'event', data: ev, sortDate: parseEventDate(ev.date) })}
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundColor = 'rgba(111, 196, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <div className="timeline-event-card__barcode" aria-hidden="true" />
                        <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--color-ink)', marginBottom: 4 }}>{ev.title}</div>
                        <div style={{ fontSize: 13, color: 'var(--color-ink)', opacity: 0.75, marginBottom: 2 }}>{ev.role}</div>
                        <div style={{ fontSize: 13, color: 'var(--color-ink)', opacity: 0.85 }}>{ev.desc.length > 40 ? ev.desc.substring(0, 40) + '...' : ev.desc}</div>
                      </div>
                    ))}
                  </td>
                {/* プロジェクト列（ガントチャート風） */}
                {Array.from({ length: projectColCount }).map((_, colIdx) => {
                  // このセルに表示すべきプロジェクトブロックがあるか
                  const block = projectBlocks.find(pb => pb.col === colIdx && pb.startIdx === rowIdx);
                  if (block) {
                    const rowSpan = block.endIdx - block.startIdx + 1;
                    return (
                      <td key={colIdx} rowSpan={rowSpan} style={{ background: 'var(--color-accent)', verticalAlign: 'top', padding: '12px 8px', borderRight: '2px solid var(--color-border)', borderLeft: colIdx === 0 ? 'none' : '1px solid var(--color-border)' }}>
                        <div className="timeline-project-card" style={{ cursor: 'pointer', border: '1px solid var(--color-border)', borderRadius: 12, padding: '1rem', background: 'var(--color-accent)', boxShadow: 'var(--shadow)', position: 'relative' }}
                          onClick={() => setSelectedItem({ type: 'project', data: block.project, sortDate: parseProjectDate(block.project.startDate) })}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(196, 255, 130, 0.15)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div className="timeline-project-card__qr" aria-hidden="true" />
                          <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--color-ink)', marginBottom: 4 }}>{block.project.title}</div>
                          <div style={{ fontSize: 13, color: 'var(--color-ink)', opacity: 0.75, marginBottom: 2 }}>{block.project.role}</div>
                          <div style={{ fontSize: 13, color: 'var(--color-ink)', opacity: 0.85, marginBottom: 2 }}>{block.project.desc.length > 40 ? block.project.desc.substring(0, 40) + '...' : block.project.desc}</div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: block.project.status === 'completed' ? '#10b981' : block.project.status === 'in-progress' ? '#f59e0b' : '#6b7280' }}>{block.project.status === 'completed' ? '完了' : block.project.status === 'in-progress' ? '進行中' : '予定'}</div>
                        </div>
                      </td>
                    );
                  }
                  // 既にrowSpanで埋まっているセルは空
                  const isCovered = projectBlocks.some(pb => pb.col === colIdx && pb.startIdx < rowIdx && pb.endIdx >= rowIdx);
                  return isCovered ? null : <td key={colIdx} style={{ background: 'var(--color-accent)', borderRight: '2px solid var(--color-border)', borderLeft: colIdx === 0 ? 'none' : '1px solid var(--color-border)' }} />;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </section>

      {/* モーダル（従来通り） */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              background: 'var(--color-accent)',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--color-border)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#6b7280',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', marginRight: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-fg)', margin: 0 }}>
                {selectedItem.data.title}
              </h2>
              <span style={{
                fontSize: '0.8rem',
                padding: '0.3rem 0.8rem',
                background: 'var(--color-primary)',
                color: 'white',
                borderRadius: '16px',
                fontWeight: '500'
              }}>
                {selectedItem.type === 'event' ? 'イベント' : 'プロジェクト'}
              </span>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-fg)', opacity: 0.7, marginBottom: '1rem', fontWeight: '500' }}>
              {selectedItem.type === 'event'
                ? (selectedItem.data as Event).date
                : (() => {
                  const prj = selectedItem.data as Project;
                  const startDate = parseProjectDate(prj.startDate);
                  const startFormatted = `${startDate.getFullYear()}.${String(startDate.getMonth() + 1).padStart(2, '0')}`;
                  if (prj.endDate === '進行中' || prj.endDate === '') return `${startFormatted} - 進行中`;
                  const endDate = parseProjectDate(prj.endDate);
                  const endFormatted = `${endDate.getFullYear()}.${String(endDate.getMonth() + 1).padStart(2, '0')}`;
                  return `${startFormatted} - ${endFormatted}`;
                })()
              }
            </div>
            {selectedItem.type === 'project' && (
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: (selectedItem.data as Project).status === 'completed' ? '#10b981' : (selectedItem.data as Project).status === 'in-progress' ? '#f59e0b' : '#6b7280'
              }}>
                {(selectedItem.data as Project).status === 'completed' ? '完了' : (selectedItem.data as Project).status === 'in-progress' ? '進行中' : '予定'}
              </div>
            )}
            <div style={{ fontSize: '1rem', color: 'var(--color-fg)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {selectedItem.data.desc}
            </div>
            {selectedItem.type === 'project' && (selectedItem.data as Project).technologies && (
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: '600', color: 'var(--color-fg)' }}>使用技術：</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {(selectedItem.data as Project).technologies!.map((tech, techIdx) => (
                    <span key={techIdx} style={{
                      fontSize: '0.8rem',
                      padding: '0.3rem 0.8rem',
                      background: 'var(--color-primary)',
                      color: 'white',
                      borderRadius: '16px',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {selectedItem.type === 'project' && (selectedItem.data as Project).achievements && (
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: '600', color: 'var(--color-fg)' }}>達成したこと：</span>
                <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
                  {(selectedItem.data as Project).achievements!.map((achievement, achIdx) => (
                    <li key={achIdx} style={{ marginBottom: '0.5rem', color: 'var(--color-fg)', opacity: 0.85, lineHeight: '1.5' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{ marginBottom: '1rem', color: 'var(--color-fg)' }}>
                <span style={{ fontWeight: '600' }}>立場：</span>{selectedItem.data.role}
              </div>
              {selectedItem.data.learned && (
                <div style={{ color: 'var(--color-fg)', opacity: 0.85 }}>
                  <span style={{ fontWeight: '600' }}>学んだこと：</span>{selectedItem.data.learned}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {selectedItem.type === 'project' && (selectedItem.data as Project).github && (
                <a
                  href={(selectedItem.data as Project).github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-primary-hover)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary-hover)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  GitHubを見る
                </a>
              )}
              {selectedItem.data.url && (
                <a
                  href={selectedItem.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-primary)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary-hover)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {selectedItem.type === 'event' ? 'イベントページを見る' : 'プロジェクトページを見る'}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}