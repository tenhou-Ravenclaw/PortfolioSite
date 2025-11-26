"use client";

import { projects } from "../../data/event";

// Shared date parsing utility
function parseDate(dateString: string): Date | null {
    if (dateString === "進行中" || dateString === "") return null;
    const match = dateString.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
    if (match) {
        return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
    }
    return null;
}

export default function WorksPage() {
    // プロジェクトの期間フォーマット
    const formatProjectPeriod = (startDate: string, endDate: string) => {
        const start = parseDate(startDate);
        const end = parseDate(endDate);

        const startFormatted = start
            ? `${start.getFullYear()}.${String(start.getMonth() + 1).padStart(2, '0')}`
            : '';

        if (!end || endDate === '進行中') {
            return `${startFormatted} - 進行中`;
        }

        const endFormatted = `${end.getFullYear()}.${String(end.getMonth() + 1).padStart(2, '0')}`;
        return `${startFormatted} - ${endFormatted}`;
    };

    // ステータス色取得
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return '#10b981';
            case 'in-progress': return '#f59e0b';
            case 'planned': return '#6b7280';
            default: return '#4f46e5';
        }
    };

    // ステータステキスト取得
    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed': return '完了';
            case 'in-progress': return '進行中';
            case 'planned': return '予定';
            default: return '';
        }
    };

    return (
        <main className="container" style={{ position: 'relative' }}>
            <div className="bg-geometry" />
            <section className="hero hero--sub">
                <h1 className="hero-title">Works</h1>
                <p className="hero-sub">技術的な制作物・プロジェクト実績</p>
            </section>

            {/* プロジェクト一覧 */}
            <section className="section">
                <h2 className="section-title">プロジェクト一覧</h2>
                
                {/* 完了プロジェクト */}
                {projects.filter(p => p.status === 'completed').length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="section-subtitle" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-primary-hover)' }}>完了</h3>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {projects.filter(p => p.status === 'completed').map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-card__decor project-card__decor--left" aria-hidden="true">
                                        <div className="card-qr" />
                                    </div>
                                    <div className="project-card__content">
                                        {renderProjectCard(project, formatProjectPeriod, getStatusColor, getStatusText)}
                                    </div>
                                    <div className="project-card__decor project-card__decor--right" aria-hidden="true">
                                        <div className="card-barcode card-barcode--thin" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 進行中プロジェクト */}
                {projects.filter(p => p.status === 'in-progress').length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="section-subtitle" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-primary-hover)' }}>進行中</h3>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {projects.filter(p => p.status === 'in-progress').map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-card__decor project-card__decor--left" aria-hidden="true">
                                        <div className="vertical-label">
                                            <span>進行中</span>
                                        </div>
                                    </div>
                                    <div className="project-card__content">
                                        {renderProjectCard(project, formatProjectPeriod, getStatusColor, getStatusText)}
                                    </div>
                                    <div className="project-card__decor project-card__decor--right" aria-hidden="true">
                                        <div className="card-dotgrid" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 予定プロジェクト */}
                {projects.filter(p => p.status === 'planned').length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="section-subtitle" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-primary-hover)' }}>予定</h3>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {projects.filter(p => p.status === 'planned').map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-card__decor project-card__decor--left" aria-hidden="true">
                                        <div className="card-barcode" />
                                    </div>
                                    <div className="project-card__content">
                                        {renderProjectCard(project, formatProjectPeriod, getStatusColor, getStatusText)}
                                    </div>
                                    <div className="project-card__decor project-card__decor--right" aria-hidden="true">
                                        <div className="card-qr" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

function renderProjectCard(
    project: typeof projects[0],
    formatProjectPeriod: (start: string, end: string) => string,
    getStatusColor: (status: string) => string,
    getStatusText: (status: string) => string
) {
    return (
        <div
            style={{
                background: 'var(--color-accent)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--color-border)',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(25, 72, 126, 0.25)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
        >
            {/* プロジェクトヘッダー */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--color-fg)',
                        margin: 0
                    }}>
                        {project.title}
                    </h3>
                    <span style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '16px',
                        color: 'white',
                        background: getStatusColor(project.status)
                    }}>
                        {getStatusText(project.status)}
                    </span>
                </div>
                <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-fg)',
                    opacity: 0.7,
                    fontWeight: '500',
                    marginBottom: '0.5rem'
                }}>
                    {formatProjectPeriod(project.startDate, project.endDate)}
                </div>
                <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-fg)',
                    opacity: 0.8,
                    fontWeight: '500'
                }}>
                    役割: {project.role}
                </div>
            </div>

            {/* プロジェクト説明 */}
            <div style={{ marginBottom: '1.5rem' }}>
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-fg)',
                    lineHeight: '1.7',
                    margin: 0
                }}>
                    {project.desc}
                </p>
            </div>

            {/* 使用技術 */}
            {project.technologies && (
                <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-fg)',
                        marginBottom: '0.8rem'
                    }}>
                        使用技術
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                style={{
                                    fontSize: '0.85rem',
                                    padding: '0.4rem 0.8rem',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    fontWeight: '500'
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* 達成したこと */}
            {project.achievements && (
                <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-fg)',
                        marginBottom: '0.8rem'
                    }}>
                        達成したこと
                    </h4>
                    <ul style={{
                        margin: 0,
                        paddingLeft: '1.2rem',
                        color: 'var(--color-fg)',
                        opacity: 0.85,
                        lineHeight: '1.6'
                    }}>
                        {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} style={{ marginBottom: '0.5rem' }}>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 学んだこと */}
            {project.learned && (
                <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-fg)',
                        marginBottom: '0.8rem'
                    }}>
                        学んだこと
                    </h4>
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--color-fg)',
                        opacity: 0.85,
                        lineHeight: '1.6',
                        margin: 0
                    }}>
                        {project.learned}
                    </p>
                </div>
            )}

            {/* リンクボタン */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--color-primary-hover)',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.background = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = 'var(--color-primary-hover)';
                        }}
                    >
                        GitHub
                    </a>
                )}
                {project.url && (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.background = 'var(--color-primary-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = 'var(--color-primary)';
                        }}
                    >
                        プロジェクトを見る
                    </a>
                )}
            </div>
        </div>
    );
}
