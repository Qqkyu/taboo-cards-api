import { FunctionComponent, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { JsonPreviewLoader } from "@/components/playground/components/json-preview-loader/json-preview-loader.component";

export const PlaygroundPageLoader: FunctionComponent = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return hydrated ? null : (
    <div className="flex w-[303.84px] flex-col gap-8 sm:w-[395.47px] lg:w-[561.39px]">
      <div className="flex flex-col gap-4">
        <Skeleton
          baseColor="hsl(var(--b3))"
          highlightColor="hsl(var(--b2))"
          borderRadius="8px"
          height="68px"
          duration={3}
        />
        <Skeleton
          baseColor="hsl(var(--b3))"
          highlightColor="hsl(var(--b2))"
          borderRadius="8px"
          height="48px"
          duration={3}
        />
        <div className="flex justify-center lg:hidden">
          <Skeleton
            baseColor="hsl(var(--b3))"
            highlightColor="hsl(var(--b2))"
            borderRadius="8px"
            height="48px"
            width="92.98px"
            duration={3}
          />
        </div>
      </div>
      <JsonPreviewLoader />
    </div>
  );
};
