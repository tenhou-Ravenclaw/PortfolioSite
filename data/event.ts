export type Event = {
    title: string;
    date: string;
    desc: string;
    role: string; // 参加者・運営者など
    learned: string; // 学んだこと
    url?: string; // イベントページ等のURL（任意）
};

export type Project = {
    title: string;
    startDate: string; // 開始日
    endDate: string; // 終了日（進行中の場合は空文字または'進行中'）
    status: 'completed' | 'in-progress' | 'planned'; // プロジェクト状態
    desc: string;
    role: string;
    technologies?: string[]; // 使用技術
    achievements?: string[]; // 達成したこと
    learned: string;
    url?: string; // プロジェクトURL
    github?: string; // GitHubリポジトリ
};

// タイムラインアイテムの統合型
export type TimelineItem = {
    type: 'event' | 'project';
    data: Event | Project;
    sortDate: Date; // ソート用日付
    _projectEdge?: 'start' | 'end'; // プロジェクトの開始・終了月区別用（UI用）
};

export const events: Event[] = [
    {
        title: "プログラミングブートキャンプ",
        date: "2024年4月2日~2024年4月5日",
        desc: "大学のオリエンテーションである「プログラミングブートキャンプ」に参加し、個人でM5Stackを使用したIoTアプリケーションを開発。",
        role: "参加者",
        learned: "IoT開発の基礎、M5Stackの活用法、短期間でのプロトタイピング、チーム外との技術交流の大切さ"
    },
    {
        title: "TGL-college",
        date: "2024年8月16日",
        desc: "TGL株式会社が主催するTGL-collegeに参加し、AIや最新技術に関する講義を受講。",
        role: "参加者",
        learned: "AIの基礎、最新技術の動向、実践的な応用例"
    },
    {
        title: "電算研ハッカソン",
        date: "2024年8月25日~2024年9月1日",
        desc: "電算研が主催するハッカソンに参加し、チーム開発を初体験。",
        role: "参加者",
        learned: "チーム開発の基礎、役割分担、コミュニケーションの重要性、短期間でのアイデア実装"
    },
    {
        title: "シンポジウム",
        date: "2024年9月5日",
        desc: "人間とAIが共創する未来をデザインする情報学シンポジウムに参加。",
        url: "https://www.kindai.ac.jp/news-pr/news-release/2024/07/043031.html",
        role: "参加者",
        learned: ""
    },
    {
        title: "JPHacks 2024",
        date: "2024年10月19日~2024年10月27日",
        desc: "日本最大級のハッカソンに初挑戦した。",
        url: "https://jphacks.com/information/open-2024/",
        role: "参加者",
        learned: ""
    },
    {
        title: "Qiita Conference 2024",
        date: "2024年11月14日~2024年11月15日",
        desc: "Qiitaが主催するエンジニア向けカンファレンスに参加し、最新技術やトレンドを学んだ。",
        url: "https://qiita.com/official-campaigns/conference/2024-autumn",
        role: "参加者",
        learned: "最新技術の動向、実践的な応用例"
    },
    {
        title: "KC3Hack 2025",
        date: "2025年2月9日~2025年2月24日",
        desc: "関西学院大学が主催するハッカソンに参加した。",
        url: "https://kc3.me/hack/hack2025/",
        role: "参加者",
        learned: ""
    },
    {
        title: "Wake up Hack 2025",
        date: "2025年4月26日~2025年4月29日",
        desc: "Wake up Hack 2025に参加した。",
        url: "https://wakeuphack2025.localhouse.jp/",
        role: "参加者",
        learned: ""
    },
    {
        title: "Vibe Learningプロジェクト",
        date: "2025年5月14日~2025年6月5日",
        desc: "TechTrainが主催するVibe Learningプロジェクトに参加し、AIを活用した学習支援ツールの開発に取り組んだ。",
        url: "https://prtimes.jp/main/html/rd/p/000000110.000040741.html",
        role: "参加者",
        learned: ""
    },
    {
        title: "デザインスプリントワークショップ",
        date: "2025年6月29日",
        desc: "デザインスプリントワークショップに参加し、短期間でのアイデア創出とプロトタイピングの手法を学んだ。",
        role: "参加者",
        learned: "デザイン思考、迅速なプロトタイピング、チームでの協働"
    },
    {
        title: "PHPカンファレンス2025",
        date: "2025年7月19日",
        desc: "PHPカンファレンス2025に参加し、最新のPHP技術やトレンドを学んだ。",
        role: "参加者",
        learned: "最新のPHP技術、実践的な応用例"
    },
    {
        title: "テックシーカーハッカソン 2025",
        date: "2025年7月26日~2025年7月27日",
        desc: "テックシーカーハッカソン 2025に参加し、最新のGoogle技術に関する講演とワークショップを受講した。",
        role: "参加者",
        learned: "ハードウェアとソフトウェアとゲーミフィケーションの統合、最新技術の応用"
    },
    {
        title: "Google I/O Extended 2025 in Osaka",
        date: "2025年7月27日",
        desc: "Google I/O Extended 2025 in Osakaを主催し、最新のGoogle技術に関する講演とワークショップを開催した。",
        role: "イベントオーナー",
        learned: "イベント企画・運営、技術共有の重要性、コミュニティ形成"
    },
    {
        title: "Google Cloud Next '25 in Tokyo",
        date: "2025年8月5日~2025年8月6日",
        desc: "Google Cloud Next '25 in Tokyoに参加し、最新のGoogle Cloud技術に関する講演とワークショップを受講した。",
        role: "スタッフ",
        learned: ""
    },
    {
        title: "Web・React入門！夏はWebアプリを作ろう！React勉強会",
        date: "2025年8月9日",
        desc: "スタッフとして参加し、Reactの基礎を学ぶ勉強会を開催した。",
        url: "https://gdsc-tmu.connpass.com/event/362107/",
        role: "スタッフ",
        learned: ""
    },
    {
        title: "法人登記・開業支援プログラム 審査会",
        date: "2025年9月5日",
        desc: "法人登記・開業支援プログラムの審査会に参加し、ビジネスプランの評価とフィードバックを行った。",
        url: "https://www.kindai.ac.jp/kincuba/event/045758.html",
        role: "参加者",
        learned: ""
    },
];

// 長期プロジェクトのサンプルデータ
export const projects: Project[] = [
    {
        title: "ポートフォリオサイト開発",
        startDate: "2024年3月1日",
        endDate: "2026年12月31日",
        status: "in-progress",
        desc: "Next.js と TypeScript を使用した個人ポートフォリオサイトの開発。レスポンシブデザインと SEO 対策を重視した設計。",
        role: "フルスタック開発者",
        technologies: ["Next.js", "TypeScript", "CSS", "Vercel"],
        achievements: [
            "レスポンシブデザインの実装",
            "SEO最適化",
            "継続的な機能追加とデザイン改善"
        ],
        learned: "React/Next.jsの深い理解、フロントエンド設計、継続的な開発プロセス",
        github: "https://github.com/tenhou-Ravenclaw/PortfolioSite"
    },
    {
        title: "AI学習支援システム",
        startDate: "2025年5月14日",
        endDate: "2025年10月5日",
        status: "completed",
        desc: "TechTrainのVibe Learningプロジェクトで開発したAI学習支援ツール。自然言語処理を活用した学習内容の分析と最適化。",
        role: "AIエンジニア",
        technologies: ["Python", "OpenAI API", "FastAPI", "React"],
        achievements: [
            "AIを活用した学習分析機能",
            "ユーザーフレンドリーなUI設計",
            "チーム開発での協調作業"
        ],
        learned: "AI API の活用、バックエンド開発、チームでのアジャイル開発",
        url: "https://prtimes.jp/main/html/rd/p/000000110.000040741.html"
    },
    {
        title: "IoTデバイス管理システム",
        startDate: "2024年4月2日",
        endDate: "2024年4月5日",
        status: "completed",
        desc: "M5Stackを使用したIoTアプリケーション。センサーデータの収集、可視化、リモート制御機能を実装。",
        role: "IoTエンジニア",
        technologies: ["M5Stack", "Arduino IDE", "WiFi", "センサー"],
        achievements: [
            "リアルタイムデータ収集",
            "Webベースの制御インターフェース",
            "短期間でのプロトタイプ完成"
        ],
        learned: "IoT開発の基礎、ハードウェアとソフトウェアの統合、迅速なプロトタイピング"
    }
];
