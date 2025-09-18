export type Event = {
    title: string;
    date: string;
    desc: string;
};

export const events: Event[] = [
    {
        title: "サンプルイベント1",
        date: "2025年4月1日",
        desc: "技術系カンファレンスに登壇・LT参加",
    },
    {
        title: "サンプルイベント2",
        date: "2024年12月15日",
        desc: "オンラインハッカソン参加",
    },
];
