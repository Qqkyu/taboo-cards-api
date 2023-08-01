import { FunctionComponent } from "react";
import { Icon } from "@/components/icon/icon.component";

export const Stats: FunctionComponent = () => {
  return (
    <div className="stats stats-vertical xl:stats-horizontal shadow">
      <div className="stat gap-x-2 px-0 sm:gap-x-4 sm:px-6">
        <div className="stat-figure text-primary">
          <Icon type="language" color="hsl(var(--p))" className="inline-block h-8 w-8" />
        </div>
        <div className="stat-title text-sm sm:text-base">Languages supported</div>
        <div className="stat-value text-primary text-2xl sm:text-4xl md:text-3xl">English and Polish</div>
        <div className="stat-desc">Each card manually translated and checked</div>
      </div>

      <div className="stat gap-x-2 px-0 sm:gap-x-4 sm:px-6">
        <div className="stat-figure text-secondary">
          <Icon type="stairs" color="hsl(var(--s))" className="inline-block h-8 w-8" />
        </div>
        <div className="stat-title text-sm sm:text-base">Difficulties</div>
        <div className="stat-value text-secondary text-2xl sm:text-4xl md:text-3xl">Easy, medium, or hard</div>
        <div className="stat-desc">Options for every condition</div>
      </div>

      <div className="stat gap-x-2 px-0 sm:gap-x-4 sm:px-6">
        <div className="stat-figure text-secondary">
          <Icon type="card" color="hsl(var(--p))" className="w-16" />
        </div>
        <div className="stat-value text-2xl sm:text-4xl md:text-3xl">2000</div>
        <div className="stat-title text-sm sm:text-base">Cards nearly</div>
        <div className="stat-desc text-secondary">And more incoming</div>
      </div>
    </div>
  );
};
