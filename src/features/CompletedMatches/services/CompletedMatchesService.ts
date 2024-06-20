import { CompetitionApi } from "src/apis/competitionApi";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import { CompletedMatchesTableDataType } from "../CompletedMatches.types";
import { normalizeCompletedMatchesData } from "src/shared/dataNormalizers/normalizeCompletedMatchesData";

export class CompletedMatchesService {
  private competitionId: CompetitionID;
  private season: Seasons;
  private response: any;
  private normalizedData: CompletedMatchesTableDataType[] = [];

  constructor(competitionId: CompetitionID, season: Seasons) {
    this.competitionId = competitionId;
    this.season = season;
  }

  async fetchCompletedMatches() {
    this.response = await CompetitionApi.getCompetitionCompletedMatches(
      this.competitionId,
      this.season
    );
    return this;
  }

  normalizeData() {
    this.normalizedData = normalizeCompletedMatchesData(this.response);
    return this;
  }

  getResult(): CompletedMatchesTableDataType[] {
    return this.normalizedData;
  }
}
