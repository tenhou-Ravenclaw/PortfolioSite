import { useState } from "react";
import { Skill } from "../../data/skills";

type SkillConsoleProps = {
  skills: Skill[];
};

const SkillConsole = ({ skills }: SkillConsoleProps) => {
  const initialSkill = skills.find((s) => (s.level ?? 0) >= 4) ?? skills[0];
  const [selected, setSelected] = useState<Skill | null>(initialSkill ?? null);

  return (
    <div className="skill-console">
      <div className="skill-console__grid">
        {skills.map((skill) => (
          <button
            key={skill.name}
            className={`skill-chip ${selected?.name === skill.name ? "skill-chip--active" : ""}`}
            onClick={() => setSelected(skill)}
          >
            <img src={skill.icon} alt={skill.name} width={36} height={36} />
            <span style={{ fontWeight: 600 }}>{skill.name}</span>
            {skill.level && (
              <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontWeight: 700 }}>
                Lv.{skill.level}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="skill-console__detail">
        {selected ? (
          <>
            <h3>{selected.name}</h3>
            {selected.years && <div style={{ letterSpacing: "0.1em" }}>{selected.years}</div>}
            {selected.level && (
              <div className="skill-level-bar">
                <span style={{ width: `${(selected.level / 5) * 100}%` }} />
              </div>
            )}
            <p>{selected.description}</p>
          </>
        ) : (
          <p>スキルを選択してください。</p>
        )}
      </div>
    </div>
  );
};

export default SkillConsole;

