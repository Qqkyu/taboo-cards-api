import { Icon } from "@/components/icon/icon.component";
import { TeamNamesContext } from "@/game-modes/teams/contexts/team-names.context";
import { useContext, type FunctionComponent } from "react";

type Props = {
  team: "pink" | "purple";
};

export const ReadyScreen: FunctionComponent<Props> = ({ team }) => {
  const [{ pinkTeamName, purpleTeamName }] = useContext(TeamNamesContext);

  return (
    <div
      className={`card w-96 ${
        team === "purple" ? "bg-primary text-primary-content" : "bg-secondary text-primary-content"
      }`}
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{team === "purple" ? purpleTeamName : pinkTeamName}</h2>
        <Icon type="team" color={`hsl(var(--${team === "purple" ? "pc" : "sc"}))`} className="w-16" />
        <div className="card-actions justify-end">
          <button className="btn btn-ghost">Start</button>
        </div>
      </div>
    </div>
  );
};
