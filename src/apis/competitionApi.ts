import { CompetitionID, Seasons } from "../shared/types/competition.types";
import { competitionClient } from "./competionApiClient";

export const CompetitionApi = {
  getCompetitionStandings: (competitionId: CompetitionID, season: Seasons) =>
    competitionClient.get(`${competitionId}/standings`, { params: { season } }),
  getCompetitionMatches: (competitionId: CompetitionID, season: Seasons) =>
    competitionClient.get(`${competitionId}/matches?status=SCHEDULED`, {
      params: { season },
    }),
  getCompetitionCompletedMatches: (
    competitionId: CompetitionID,
    season: Seasons
  ) =>
    competitionClient.get(`${competitionId}/matches?status=FINISHED`, {
      params: { season },
    }),
};
