import { useCallback } from "react";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import { CompletedMatchesService } from "../services/CompletedMatchesService";

export const getCompletedMatches = useCallback(
  async ({
    competitionId,
    season,
  }: {
    competitionId: CompetitionID;
    season: Seasons;
  }) => {
    const service = new CompletedMatchesService(competitionId, season);
    const result = (await service.fetchCompletedMatches())
      .normalizeData()
      .getResult();
    return result;
  },
  []
);
