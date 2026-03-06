"use client";

import { Project, projects } from "../../data/event";
import { parseDateString, formatYearMonth } from "../../lib/date";

function formatProjectPeriod(startDate: string, endDate: string): string {
    const start = parseDateString(startDate);
    const startFormatted = start ? formatYearMonth(start) : '';

    if (!parseDateString(endDate) || endDate === '進行中') {
        return `${startFormatted} - 進行中`;
    }

    return `${startFormatted} - ${formatYearMonth(parseDateString(endDate)!)}`;
}

function getStatusColor(status: Project['status']): string {
    switch (status) {
        case 'completed': return '#10b981';
        case 'in-progress': return '#f59e0b';
        case 'planned': return '#6b7280';
    }
}

function getStatusText(status: Project['status']): string {
    switch (status) {
        case 'completed': return '完了';
        case 'in-progress': return '進行中';
        case 'planned': return '予定';
    }
}

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card__inner">
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
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
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
                        {project.achievements.map((achievement) => (
                            <li key={achievement} style={{ marginBottom: '0.5rem' }}>
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
                        className="neo-modal-btn"
                    >
                        GitHub
                    </a>
                )}
                {project.url && (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-modal-btn"
                    >
                        プロジェクトを見る
                    </a>
                )}
            </div>
        </div>
    );
}

export default function ArtifactsPage() {
    const completedProjects = projects.filter(p => p.status === 'completed');
    const inProgressProjects = projects.filter(p => p.status === 'in-progress');
    const plannedProjects = projects.filter(p => p.status === 'planned');

    return (
        <main className="container" style={{ position: 'relative' }}>
            <div className="bg-geometry" />
            <section className="hero hero--sub">
                <h1 className="hero-title">Artifacts</h1>
                <p className="hero-sub">技術的な制作物・プロジェクト実績</p>
            </section>

            <section className="section">
                <h2 className="section-title">プロジェクト一覧</h2>

                {completedProjects.length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="section-subtitle" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-primary-hover)' }}>完了</h3>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {completedProjects.map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-card__decor project-card__decor--left" aria-hidden="true">
                                        <div className="card-qr" />
                                    </div>
                                    <div className="project-card__content">
                                        <ProjectCard project={project} />
                                    </div>
                                    <div className="project-card__decor project-card__decor--right" aria-hidden="true">
                                        <div className="card-barcode card-barcode--thin" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {inProgressProjects.length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="section-subtitle" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-primary-hover)' }}>進行中</h3>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {inProgressProjects.map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-card__decor project-card__decor--left" aria-hidden="true">
                                        <div className="vertical-label">
                                            <span>進行中</span>
                                        </div>
                                    </div>
                                    <div className="project-card__content">
                                        <ProjectCard project={project} />
                                    </div>
                                    <div className="project-card__decor project-card__decor--right" aria-hidden="true">
                                        <div className="card-dotgrid" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {plannedProjects.length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="section-subtitle" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-primary-hover)' }}>予定</h3>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {plannedProjects.map((project) => (
                                <div key={project.title} className="project-card">
                                    <div className="project-card__decor project-card__decor--left" aria-hidden="true">
                                        <div className="card-barcode" />
                                    </div>
                                    <div className="project-card__content">
                                        <ProjectCard project={project} />
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
