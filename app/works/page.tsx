"use client";

import { projects } from "../../data/event";

export default function WorksPage() {
    // プロジェクトの期間フォーマット
    const formatProjectPeriod = (startDate: string, endDate: string) => {
        const parseDate = (dateString: string) => {
            if (dateString === "進行中" || dateString === "") return null;
            const match = dateString.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
            if (match) {
                return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
            }
            return null;
        };

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
            <section className="hero">
                <h1 className="hero-title">Works</h1>
                <p className="hero-sub">技術的な制作物・プロジェクト実績</p>
            </section>

            {/* プロジェクト一覧 */}
            <section className="section">
                <h2 className="section-title">プロジェクト一覧</h2>
                <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            style={{
                                background: 'white',
                                borderRadius: '16px',
                                padding: '2rem',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                border: '1px solid #f3f4f6',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                            }}
                        >
                            {/* プロジェクトヘッダー */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#1f2937',
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
                                    color: '#6b7280',
                                    fontWeight: '500',
                                    marginBottom: '0.5rem'
                                }}>
                                    {formatProjectPeriod(project.startDate, project.endDate)}
                                </div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: '#4b5563',
                                    fontWeight: '500'
                                }}>
                                    役割: {project.role}
                                </div>
                            </div>

                            {/* プロジェクト説明 */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#374151',
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
                                        color: '#374151',
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
                                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                                        color: '#374151',
                                        marginBottom: '0.8rem'
                                    }}>
                                        達成したこと
                                    </h4>
                                    <ul style={{
                                        margin: 0,
                                        paddingLeft: '1.2rem',
                                        color: '#4b5563',
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
                                        color: '#374151',
                                        marginBottom: '0.8rem'
                                    }}>
                                        学んだこと
                                    </h4>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: '#4b5563',
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
                                            background: 'linear-gradient(135deg, #24292e 0%, #1b1f23 100%)',
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
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
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
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        プロジェクトを見る
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
