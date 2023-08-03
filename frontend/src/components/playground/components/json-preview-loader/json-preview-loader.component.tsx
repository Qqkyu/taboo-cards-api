import { FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";

export const JsonPreviewLoader: FunctionComponent = () => {
  return (
    <Skeleton
      baseColor="hsl(var(--b3))"
      highlightColor="hsl(var(--b2))"
      borderRadius="8px"
      height="294.5px"
      duration={3}
    />
  );
};
