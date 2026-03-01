import { ReactNode } from "react";

type DataPanelProps = {
  title: string;
  tag?: string;
  accent?: "lime" | "blue";
  actions?: ReactNode;
  children: ReactNode;
};

const DataPanel = ({ title, tag, accent = "blue", actions, children }: DataPanelProps) => {
  return (
    <section className={`data-panel data-panel--${accent}`}>
      <div className="data-panel__header">
        <div>
          {tag ? <div className="data-panel__tag">{tag}</div> : null}
          <h2 className="data-panel__title">{title}</h2>
        </div>
        {actions}
      </div>
      <div className="data-panel__body">{children}</div>
    </section>
  );
};

export default DataPanel;

