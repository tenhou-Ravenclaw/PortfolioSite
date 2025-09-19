export type Event = {
    title: string;
    date: string;
    desc: string;
    role: string; // 参加者・運営者など
    learned: string; // 学んだこと
};

export const events: Event[] = [
    {
        title: "プログラミングブートキャンプ",
        date: "2024年4月2日~2024年4月5日",
        desc: "大学のオリエンテーションである「プログラミングブートキャンプ」に参加し、個人でM5Stackを使用したIoTアプリケーションを開発。",
        role: "参加者",
        learned: "IoT開発の基礎、M5Stackの活用法、短期間でのプロトタイピング、チーム外との技術交流の大切さ"
    },
];
