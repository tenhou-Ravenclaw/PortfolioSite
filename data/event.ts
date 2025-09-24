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
        date: "2024/04/02~2024/04/05",
        desc: "大学のオリエンテーションである「プログラミングブートキャンプ」に参加し、個人でM5Stackを使用したIoTアプリケーションを開発。",
        role: "参加者",
        learned: "IoT開発の基礎、M5Stackの活用法、短期間でのプロトタイピング、チーム外との技術交流の大切さ"
    },
    {
        title: "TGL-college",
        date: "2024/08/16",
        desc: "TGL株式会社が主催するTGL-collegeに参加し、AIや最新技術に関する講義を受講。",
        role: "参加者",
        learned: "AIの基礎、最新技術の動向、実践的な応用例"
    },
    {
        title: "電算研ハッカソン",
        date: "2024/08/25~2024/09/01",
        desc: "電算研が主催するハッカソンに参加し、チーム開発を初体験。",
        role: "参加者",
        learned: "チーム開発の基礎、役割分担、コミュニケーションの重要性、短期間でのアイデア実装"
    },
    {
        title: "シンポジウム",
        date: "2024/09/05",
        desc: "人間とAIが共創する未来をデザインする情報学シンポジウムに参加。",
        url: "https://www.kindai.ac.jp/news-pr/news-release/2024/07/043031.html",
        role: "参加者",
        learned: ""
    },
    {
        title: "JPHacks 2024",
        date: "2024/10/19~2024/10/27",
        desc: "日本最大級のハッカソンに初挑戦した。",
        url: "https://jphacks.com/information/open-2024/",
        role: "参加者",
        learned: ""
    },
    {
        title: "Qiita Conference 2024",
        date: "2024/11/14~2024/11/15",
        desc: "Qiitaが主催するエンジニア向けカンファレンスに参加し、最新技術やトレンドを学んだ。",
        url: "https://qiita.com/official-campaigns/conference/2024-autumn",
        role: "参加者",
        learned: "最新技術の動向、実践的な応用例"
    },
    {
        title: "KC3Hack 2025",
        date: "2025/02/09~2025/02/24",
        desc: "関西学院大学が主催するハッカソンに参加した。",
        url: "https://kc3.me/hack/hack2025/",
        role: "参加者",
        learned: ""
    },
    {
        title: "Wake up Hack 2025",
        date: "2025/04/26~2025/04/29",
        desc: "Wake up Hack 2025に参加した。",
        url: "https://wakeuphack2025.localhouse.jp/",
        role: "参加者",
        learned: ""
    },
    {
        title: "Vibe Learningプロジェクト",
        date: "2025/05/14~2025/06/05",
        desc: "TechTrainが主催するVibe Learningプロジェクトに参加し、AIを活用した学習支援ツールの開発に取り組んだ。",
        url: "https://prtimes.jp/main/html/rd/p/000000110.000040741.html",
        role: "参加者",
        learned: ""
    },
    {
        title: "デザインスプリントワークショップ",
        date: "2025/06/29",
        desc: "デザインスプリントワークショップに参加し、短期間でのアイデア創出とプロトタイピングの手法を学んだ。",
        role: "参加者",
        learned: "デザイン思考、迅速なプロトタイピング、チームでの協働"
    },
    {
        title: "PHPカンファレンス2025",
        date: "2025/07/19",
        desc: "PHPカンファレンス2025に参加し、最新のPHP技術やトレンドを学んだ。",
        role: "参加者",
        learned: "最新のPHP技術、実践的な応用例"
    },
    {
        title: "テックシーカーハッカソン 2025",
        date: "2025/07/26~2025/07/27",
        desc: "テックシーカーハッカソン 2025に参加し、最新のGoogle技術に関する講演とワークショップを受講した。",
        role: "参加者",
        learned: "ハードウェアとソフトウェアとゲーミフィケーションの統合、最新技術の応用"
    },
    {
        title: "Google I/O Extended 2025 in Osaka",
        date: "2025/07/27",
        desc: "Google I/O Extended 2025 in Osakaを主催し、最新のGoogle技術に関する講演とワークショップを開催した。",
        role: "イベントオーナー",
        learned: "イベント企画・運営、技術共有の重要性、コミュニティ形成"
    },
    {
        title: "Google Cloud Next '25 in Tokyo",
        date: "2025/08/05~2025/08/06",
        desc: "Google Cloud Next '25 in Tokyoに参加し、最新のGoogle Cloud技術に関する講演とワークショップを受講した。",
        role: "スタッフ",
        learned: ""
    },
    {
        title: "Web・React入門！夏はWebアプリを作ろう！React勉強会",
        date: "2025/08/09",
        desc: "スタッフとして参加し、Reactの基礎を学ぶ勉強会を開催した。",
        url: "https://gdsc-tmu.connpass.com/event/362107/",
        role: "スタッフ",
        learned: ""
    },
    {
        title: "法人登記・開業支援プログラム 審査会",
        date: "2025/09/05",
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
        startDate: "2024/03/01",
        endDate: "2025/09/30",
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
        title: "小児科用アプリ開発",
        startDate: "2024/04/01",
        endDate: "2025/09/30",
        status: "in-progress",
        desc: "JavaScript と Swift を使用した小児科向けアプリの開発。ユーザー体験とアクセシビリティを重視した設計。",
        role: "プロダクトマネージャー",
        technologies: ["JavaScript", "Swift", "Xcode"],
        achievements: [
            "実際の医療現場での導入",
            "ユーザーフィードバックを基にした改善",
            "チームでのアジャイル開発"
        ],
        learned: "React/Next.jsの深い理解、フロントエンド設計、継続的な開発プロセス",
    },
    {
        title: "HackSphere 運営",
        startDate: "2024/11/01",
        endDate: "2025/09/30",
        status: "in-progress",
        desc: "学生団体 HackSphere の設立と運営。イベント企画、メンバー管理、コミュニティ形成を担当。",
        role: "代表",
        achievements: [
            "団体設立とメンバー募集",
            "複数の技術イベントの開催",
            "地域コミュニティとの連携"
        ],
        learned: "リーダーシップ、コミュニティ形成",
    },
];

