import { useState, type FunctionComponent, useMemo, useCallback } from "react";
import { CardScreen } from "@/game-modes/teams/_components/teams-step2/_components/card-screen/card-screen.component";
import { ReadyScreen } from "@/game-modes/teams/_components/teams-step2/_components/ready-screen/ready-screen.component";

type Props = {
  lang: "en" | "pl";
};

export const Round: FunctionComponent<Props> = ({ lang }) => {
  const [isReady, setIsReady] = useState(false);

  const startingTeam: "pink" | "purple" = useMemo(() => {
    return Math.random() < 0.5 ? "pink" : "purple";
  }, []);
  const [currentTeam, setCurrentTeam] = useState(startingTeam);

  const handleTimeEnd = useCallback(() => {
    setCurrentTeam(startingTeam === "pink" ? "purple" : "pink");
    setIsReady(false);
  }, [startingTeam]);

  return (
    <>
      <ReadyScreen team={currentTeam} onReady={() => setIsReady(true)} />
      <CardScreen key={currentTeam} team={currentTeam} lang={lang} isReady={isReady} onTimeEnd={handleTimeEnd} />
    </>
  );
};
