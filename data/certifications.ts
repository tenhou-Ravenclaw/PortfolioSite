export type Certification = {
    /** Credly バッジID（data-share-badge-id に使用） */
    id: string;
    title: string;
};

export const certifications: Certification[] = [
    {
        id: "f901cb7a-5a52-4c5f-8729-eabff3be7df1",
        title: "AWS Certified Cloud Practitioner",
    },
];
