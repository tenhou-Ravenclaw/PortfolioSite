type Activity = {
  title: string;
  subtitle: string;
  timeline: string;
  badge: string;
  color: string;
};

type ActivityRailProps = {
  activities: Activity[];
};

const ActivityRail = ({ activities }: ActivityRailProps) => {
  return (
    <div className="activity-rail">
      {activities.map((activity) => (
        <div className="activity-card" key={`${activity.title}-${activity.timeline}`}>
          <div className="activity-card__meta">
            <span>{activity.timeline}</span>
            <span className="activity-card__tag" style={{ color: activity.color }}>
              {activity.badge}
            </span>
          </div>
          <div
            style={{
              fontWeight: 700,
              marginBottom: "0.4rem",
              color: "var(--color-ink)",
            }}
          >
            {activity.title}
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.6,
            }}
          >
            {activity.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};

export type { Activity };
export default ActivityRail;

