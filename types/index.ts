export type Event = {
    title: string;
    date: string;
    desc: string;
    role: string;
    learned: string;
    url?: string;
    isHighlighted?: boolean;
    awards?: string[];
};

export type Project = {
    title: string;
    startDate: string;
    endDate: string;
    status: 'completed' | 'in-progress' | 'planned';
    desc: string;
    role: string;
    technologies?: string[];
    achievements?: string[];
    learned: string;
    url?: string;
    github?: string;
    isHighlighted?: boolean;
    awards?: string[];
};

export type TimelineItem = {
    type: 'event' | 'project';
    data: Event | Project;
    sortDate: Date;
    _projectEdge?: 'start' | 'end';
};

export type Skill = {
    name: string;
    icon: string;
    level?: number;
    years?: string;
    description?: string;
    category: 'language' | 'tool';
};

export type Certification = {
    /** Credly バッジID（data-share-badge-id に使用） */
    id: string;
    title: string;
};
