import { Event, Project, events, projects } from "../data/event";
import { parseEventDate, parseDateString, formatYearMonth } from "./date";

export type EventActivity = Event & {
  parsedDate: Date;
  type: "event";
};

export type ProjectActivity = Project & {
  parsedDate: Date;
  type: "project";
};

export type Activity = EventActivity | ProjectActivity;

const RECENT_ACTIVITIES_COUNT = 6;

export function getRecentActivities(): Activity[] {
  const eventsWithDates: EventActivity[] = events.map((event) => ({
    ...event,
    parsedDate: parseEventDate(event.date),
    type: "event" as const,
  }));

  const projectsWithDates: ProjectActivity[] = projects.map((project) => ({
    ...project,
    parsedDate: parseDateString(project.startDate) ?? new Date(0),
    type: "project" as const,
  }));

  return [...eventsWithDates, ...projectsWithDates]
    .sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())
    .slice(0, RECENT_ACTIVITIES_COUNT);
}

export function getRoleColor(activity: Activity): string {
  if (activity.type === "event") {
    switch (activity.role) {
      case "イベントオーナー": return "#facc15";
      case "スタッフ": return "#38bdfc";
      default: return "#94a3b8";
    }
  }

  switch (activity.status) {
    case "completed": return "#22c55e";
    case "in-progress": return "#f97316";
    default: return "#94a3b8";
  }
}

export function getRoleText(activity: Activity): string {
  if (activity.type === "event") return activity.role;

  switch (activity.status) {
    case "completed": return "完了";
    case "in-progress": return "進行中";
    case "planned": return "予定";
    default: return activity.status;
  }
}

export function formatActivityDate(activity: Activity): string {
  const startFormatted = formatYearMonth(activity.parsedDate);
  if (activity.type === "event") return startFormatted;

  if (activity.endDate === "進行中" || activity.endDate === "") {
    return `${startFormatted}-`;
  }

  const endDate = parseDateString(activity.endDate);
  if (endDate) return `${startFormatted}-${formatYearMonth(endDate)}`;

  return startFormatted;
}
