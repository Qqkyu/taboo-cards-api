import { useContext, type FunctionComponent } from "react";
import { DEFAULT_TEAM_NAMES, TeamsContext, type TeamNames } from "@/game-modes/teams/contexts/teams.context";

export const TeamsGameModeStep1: FunctionComponent = () => {
  const [{ purpleTeam, pinkTeam }, setNames] = useContext(TeamsContext);

  const handleChange = (team: keyof TeamNames, value: string) => {
    if (team === "purpleTeam") {
      setNames({ purpleTeam: value, pinkTeam });
    } else {
      setNames({ purpleTeam, pinkTeam: value });
    }
  };

  const handleBlur = (team: keyof TeamNames) => {
    if (team === "purpleTeam" && purpleTeam === "") {
      setNames({ purpleTeam: DEFAULT_TEAM_NAMES.purpleTeam, pinkTeam });
    } else if (team === "pinkTeam" && pinkTeam === "") {
      setNames({ purpleTeam, pinkTeam: DEFAULT_TEAM_NAMES.pinkTeam });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        value={purpleTeam}
        onChange={(e) => handleChange("purpleTeam", e.target.value)}
        onBlur={() => handleBlur("purpleTeam")}
        className="input input-bordered !input-primary !input-lg w-full max-w-xs"
      />
      <div className="divider">VS</div>
      <input
        type="text"
        value={pinkTeam}
        onChange={(e) => handleChange("pinkTeam", e.target.value)}
        onBlur={() => handleBlur("pinkTeam")}
        className="input input-bordered !input-secondary !input-lg w-full max-w-xs"
      />
    </div>
  );
};
