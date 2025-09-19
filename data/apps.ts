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
        desc: "大学のオリエンテーションである「プログラミングブートキャンプ」に参加し、個人でm5stackを使用したIoTアプリケーションを開発。",
        role: "参加者",
        learned: "IoT開発の基礎、m5stackの活用法、短期間でのプロトタイピング、チーム外との技術交流の大切さ"
    },
    {
        title: "オンラインハッカソン",
        date: "2024年12月15日",
        desc: "オンラインハッカソンに参加し、チームで新しいアプリケーションを開発。",
        role: "参加者",
        learned: "リモートでのチーム開発、役割分担、短期間でのアイデア実装、発表資料作成のコツ"
    },
];
