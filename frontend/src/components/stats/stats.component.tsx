import { FunctionComponent } from "react";
import { Icon } from "@/components/icon/icon.component";

export const Stats: FunctionComponent = () => {
  return (
    <div className="stats stats-vertical xl:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <Icon type="language" color="hsl(var(--p))" className="inline-block h-8 w-8" />
        </div>
        <div className="stat-title">Languages supported</div>
        <div className="stat-value text-primary">English and Polish</div>
        <div className="stat-desc">Each card manually translated and checked</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <Icon type="stairs" color="hsl(var(--s))" className="inline-block h-8 w-8" />
        </div>
        <div className="stat-title">Difficulties</div>
        <div className="stat-value text-secondary">Easy, medium, or hard</div>
        <div className="stat-desc">Options for every condition</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <Icon type="card" color="hsl(var(--p))" className="w-16" />
        </div>
        <div className="stat-value">2000</div>
        <div className="stat-title">Cards nearly</div>
        <div className="stat-desc text-secondary">And more incoming</div>
      </div>
    </div>
  );
};
