import { FunctionComponent } from "react";
import { Icon } from "@/components/icon/icon.component";

export const Stats: FunctionComponent = () => {
  return (
    <div className="stats stats-vertical xl:stats-horizontal shadow">
      <div className="stat gap-x-2 px-2 sm:gap-x-2 sm:px-6">
        <div className="stat-figure text-primary">
          <Icon type="language" color="hsl(var(--p))" className="inline-block w-6 sm:w-8" />
        </div>
        <div className="stat-title text-sm sm:text-base">Languages supported</div>
        <div className="stat-value text-primary text-xl sm:text-4xl">English and Polish</div>
        <div className="stat-desc">Each card manually translated and checked</div>
      </div>

      <div className="stat gap-x-2 px-2 sm:gap-x-2 sm:px-6">
        <div className="stat-figure text-secondary">
          <Icon type="stairs" color="hsl(var(--s))" className="inline-block w-6 sm:w-8" />
        </div>
        <div className="stat-title text-sm sm:text-base">Difficulties</div>
        <div className="stat-value text-secondary text-xl sm:text-4xl">Easy, medium, or hard</div>
        <div className="stat-desc">Options for every condition</div>
      </div>

      <div className="stat gap-x-2 px-2 sm:gap-x-2 sm:px-6">
        <div className="stat-figure text-secondary">
          <Icon type="card" color="hsl(var(--p))" className="w-12 sm:w-16" />
        </div>
        <div className="stat-value text-xl sm:text-4xl">2000</div>
        <div className="stat-title text-sm sm:text-base">Cards nearly</div>
        <div className="stat-desc text-secondary">And more incoming</div>
      </div>
    </div>
  );
};
