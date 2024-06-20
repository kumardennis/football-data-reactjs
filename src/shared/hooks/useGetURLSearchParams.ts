import { useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CompetitionID, Seasons } from "../types/competition.types";

export const useGetURLSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    competitionId: CompetitionID.PremierLeague,
    season: Seasons.Season2021,
  });

  const competitionId = searchParams.get("competitionId");
  const season = searchParams.get("season");

  const competitionIdRef = useRef<CompetitionID>(
    (competitionId as CompetitionID) ?? CompetitionID.PremierLeague
  );
  const seasonRef = useRef<Seasons>((season as Seasons) ?? Seasons.Season2021);

  useEffect(() => {
    competitionIdRef.current =
      (competitionId as CompetitionID) || CompetitionID.PremierLeague;
    seasonRef.current = (season as Seasons) || Seasons.Season2021;
  }, [searchParams]);

  return {
    competitionIdRef,
    seasonRef,
    competitionId: competitionId as CompetitionID,
    season: season as Seasons,
    setSearchParams,
  };
};
