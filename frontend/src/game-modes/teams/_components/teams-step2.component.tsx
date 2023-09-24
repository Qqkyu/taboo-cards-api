import { useContext, type FunctionComponent } from "react";
import { GameContext } from "@/game-modes/teams/contexts/game.context";
import { SettingsContext } from "@/game-modes/teams/contexts/settings.context";

export const TeamsGameModeStep2: FunctionComponent = () => {
  const [{ round, points }, setGame] = useContext(GameContext);
  const [{ rounds }] = useContext(SettingsContext);

  return (
    <div className="flex flex-row items-center gap-3  md:flex-col">
      <ul className="steps steps-vertical md:steps-horizontal">
        {Array.from({ length: round }).map((_, i) => (
          <li key={i} className="step step-primary" />
        ))}
        {Array.from({ length: rounds - round }).map((_, i) => (
          <li key={i} className="step" />
        ))}
      </ul>
    </div>
  );
};
