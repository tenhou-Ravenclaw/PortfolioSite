import Link from "next/link";
import { certifications } from "@/data/certifications";
import { events, projects } from "@/data/events";
import { skills } from "@/data/skills";
import { getRecentActivities, getRoleColor, getRoleText, formatActivityDate } from "@/lib/activity";
import HeroSection from "@/components/sections/HeroSection";
import DataPanel from "@/components/sections/DataPanel";
import ActivityRail, { Activity as ActivityRailItem } from "@/components/sections/ActivityRail";
import SkillConsole from "@/components/sections/SkillConsole";
import CredlyBadge from "@/components/ui/CredlyBadge";
import ScrollRestorer from "@/components/ui/ScrollRestorer";

const featuredBadges = ["MySQL", "Java", "Next.js", "PHP"];
const HOME_PROJECTS_COUNT = 3;
const TAG_DISPLAY_LIMIT = 4;
const DESC_TRUNCATE_LENGTH = 140;

export default function Home() {
  const recentActivities = getRecentActivities();
  const activityItems: ActivityRailItem[] = recentActivities.map((activity) => ({
    title: activity.title,
    subtitle: activity.desc,
    timeline: formatActivityDate(activity),
    badge: getRoleText(activity),
    color: getRoleColor(activity),
  }));

  const completedOrPublicProjects = projects.slice(0, HOME_PROJECTS_COUNT);

  return (
    <>
      <ScrollRestorer />
      <main className="neo-container">
        <HeroSection featuredBadges={featuredBadges} />
        <div className="panel-grid">
          <DataPanel title="about me" accent="blue">
            フルスタック(を目指している)エンジニア。フクロウが大好き。<br />
            近畿大学情報学部実世界コンピューティングコースに在学中。<br />
            プログラミングは大学入学と同時に始めた。<br />
            Webアプリケーション開発を中心にハードウェアやサーバーなど、幅広く学んでいる。<br />
            最近のマイブームはキーボード設計。頑張って作業効率を上げている。
            <Link href="/about" className="link">
              もっと見る
            </Link>
          </DataPanel>

          <div id="awards-section">
            <DataPanel title="Awards" accent="blue">
              <ul className="awards-stack">
                {events
                  .filter((ev) => ev.awards && ev.awards.length > 0)
                  .sort((a, b) => {
                    const dateA = a.date.split("~")[0].replace(/\//g, "-");
                    const dateB = b.date.split("~")[0].replace(/\//g, "-");
                    return dateB.localeCompare(dateA);
                  })
                  .map((ev) => {
                    const match = ev.date.match(/^(\d{4})\/(\d{1,2})/);
                    const year = match?.[1] ?? "";
                    const month = match?.[2] ?? "";
                    return (
                      <li key={ev.title}>
                        <span className="awards-stack__year">{year}.{month}</span>
                        <div>
                          <strong>{ev.title}</strong>
                          <div className="awards-stack__prize">{ev.awards!.join("、")}</div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </DataPanel>
          </div>

          <div id="certifications-section">
            <DataPanel title="Certifications" accent="blue" actions={<Link href="/about" className="link">もっと見る</Link>}>
              <CredlyBadge certifications={certifications} iframeWidth={350} />
            </DataPanel>
          </div>

          <DataPanel
            title="Artifacts"
            accent="lime"
            actions={
              <Link href="/artifacts" className="link">
                View All
              </Link>
            }
          >
            <div className="artifacts-stack">
              {completedOrPublicProjects.map((project) => (
                <div className="artifacts-card" key={project.title}>
                  <div className="artifacts-card__head">
                    <h3>{project.title}</h3>
                    <span
                      className={`artifacts-chip artifacts-chip--${project.status === "completed" ? "done" : "progress"}`}
                    >
                      {project.status === "completed" ? "完了" : "進行中"}
                    </span>
                  </div>
                  <p>{project.desc.length > DESC_TRUNCATE_LENGTH ? `${project.desc.substring(0, DESC_TRUNCATE_LENGTH)}…` : project.desc}</p>
                  {project.technologies && (
                    <div className="artifacts-tags">
                      {project.technologies.slice(0, TAG_DISPLAY_LIMIT).map((tech) => (
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
            accent="blue"
            actions={
              <Link href="/events" className="link">
                イベント一覧
              </Link>
            }
          >
            <ActivityRail activities={activityItems} />
          </DataPanel>

          <div id="skills-section">
            <DataPanel title="Skills" accent="lime">
              <SkillConsole skills={skills} />
            </DataPanel>
          </div>
        </div>
      </main>
    </>
  );
}
