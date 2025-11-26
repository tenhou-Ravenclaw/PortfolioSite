"use client";
import Link from "next/link";
import { awards } from "../data/awards";
import { events, projects, Event, Project } from "../data/event";
import { skills } from "../data/skills";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import DataPanel from "./components/DataPanel";
import ActivityRail, { Activity as ActivityRailItem } from "./components/ActivityRail";
import SkillConsole from "./components/SkillConsole";

type EventActivity = Event & {
  parsedDate: Date;
  type: "event";
};

type ProjectActivity = Project & {
  parsedDate: Date;
  type: "project";
};

type Activity = EventActivity | ProjectActivity;

const featuredBadges = ["MySQL", "Java", "Next.js", "PHP"];

const getRecentActivities = (): Activity[] => {
  const eventsWithDates = events.map((event) => {
    const dateMatch = event.date.split("~")[0].match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
    const date = dateMatch
      ? new Date(parseInt(dateMatch[1]), parseInt(dateMatch[2]) - 1, parseInt(dateMatch[3]))
      : new Date();
    return { ...event, parsedDate: date, type: "event" as const };
  });

  const projectsWithDates = projects.map((project) => {
    const dateMatch = project.startDate.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
    const date = dateMatch
      ? new Date(parseInt(dateMatch[1]), parseInt(dateMatch[2]) - 1, parseInt(dateMatch[3]))
      : new Date();
    return { ...project, parsedDate: date, type: "project" as const };
  });

  return [...eventsWithDates, ...projectsWithDates]
    .sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())
    .slice(0, 6);
};

const getRoleColor = (activity: Activity) => {
  if (activity.type === "event") {
    switch (activity.role) {
      case "イベントオーナー":
        return "#facc15";
      case "スタッフ":
        return "#38bdfc";
      case "参加者":
      default:
        return "#94a3b8";
    }
  }

  switch (activity.status) {
    case "completed":
      return "#22c55e";
    case "in-progress":
      return "#f97316";
    case "planned":
    default:
      return "#94a3b8";
  }
};

const getRoleText = (activity: Activity) => {
  if (activity.type === "event") {
    return activity.role;
  }

  switch (activity.status) {
    case "completed":
      return "完了";
    case "in-progress":
      return "進行中";
    case "planned":
      return "予定";
    default:
      return activity.status;
  }
};

const formatDate = (activity: Activity) => {
  if (activity.type === "event") {
    const date = activity.parsedDate;
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}`;
  }

  const startDate = activity.parsedDate;
  const startFormatted = `${startDate.getFullYear()}.${String(startDate.getMonth() + 1).padStart(2, "0")}`;

  if (activity.endDate === "進行中" || activity.endDate === "") {
    return `${startFormatted}-`;
  }

  const endMatch = activity.endDate.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
  if (endMatch) {
    const endDate = new Date(parseInt(endMatch[1]), parseInt(endMatch[2]) - 1, parseInt(endMatch[3]));
    const endFormatted = `${endDate.getFullYear()}.${String(endDate.getMonth() + 1).padStart(2, "0")}`;
    return `${startFormatted}-${endFormatted}`;
  }

  return startFormatted;
};

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  const recentActivities = getRecentActivities();
  const activityItems: ActivityRailItem[] = recentActivities.map((activity) => ({
    title: activity.title,
    subtitle: activity.type === "event" ? activity.desc : activity.desc,
    timeline: formatDate(activity),
    badge: getRoleText(activity),
    color: getRoleColor(activity),
  }));

  const completedOrPublicProjects = projects
    .filter((project) => project.status === "completed" || project.github)
    .slice(0, 3);

  return (
    <>
      <main className="neo-container">
        <HeroSection featuredBadges={featuredBadges} />
        <div className="panel-grid">
          <DataPanel title="About" tag="profile" accent="blue">
            <p style={{ marginBottom: "1rem" }}>
              フルスタック（を目指している）エンジニア。フクロウに人生を捧げる猛勤類。近畿大学情報学部 実世界コンピューティングコースに在籍し、
              Web / ハードウェア / サーバの境界をまたぎながら、プロダクトの「手触り」を探求しています。
            </p>
            <p style={{ marginBottom: "1rem" }}>
              大学入学と同時にプログラミングを始め、コミュニティ運営やハッカソン、企業連携プロジェクトにも積極的に参加。
              ハードとソフト、そして「人」をつなぐブリッジャーとして活動中。
            </p>
            <Link href="/about" className="link">
              もっと見る
            </Link>
          </DataPanel>

          <DataPanel title="Awards" tag="log" accent="blue">
            <ul className="awards-stack">
              {awards.map((award) => (
                <li key={`${award.year}-${award.title}`}>
                  <span className="awards-stack__year">{award.year}</span>
                  <div>
                    <strong>{award.title}</strong>
                    <div className="awards-stack__prize">{award.prize}</div>
                  </div>
                </li>
              ))}
            </ul>
          </DataPanel>

          <DataPanel
            title="Works"
            tag="projects"
            accent="lime"
            actions={
              <Link href="/works" className="link">
                View All
              </Link>
            }
          >
            <div className="works-stack">
              {completedOrPublicProjects.map((project) => (
                <div className="works-card" key={project.title}>
                  <div className="works-card__head">
                    <h3>{project.title}</h3>
                    <span
                      className={`works-chip works-chip--${project.status === "completed" ? "done" : "progress"}`}
                    >
                      {project.status === "completed" ? "完了" : "進行中"}
                    </span>
                  </div>
                  <p>{project.desc.length > 140 ? `${project.desc.substring(0, 140)}…` : project.desc}</p>
                  {project.technologies && (
                    <div className="works-tags">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DataPanel>

          <DataPanel
            title="Recent Activities"
            tag="timeline"
            accent="blue"
            actions={
              <Link href="/events" className="link">
                イベント一覧
              </Link>
            }
          >
            <ActivityRail activities={activityItems} />
          </DataPanel>

          <DataPanel title="Skills" tag="console" accent="lime">
            <SkillConsole skills={skills} />
          </DataPanel>
        </div>
      </main>

      <footer className="neo-footer">
        <div className="neo-footer__links">
          <a href="https://x.com/tenhou_0126" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            X
          </a>
          <a href="https://github.com/tenhou-Ravenclaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/彩翔-藤田-595a16352"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LINKEDIN
          </a>
        </div>
        <div className="neo-footer__copy">&copy; {new Date().getFullYear()} Tenhou Ravenclaw</div>
      </footer>
    </>
  );
}
