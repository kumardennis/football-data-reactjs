import { CompetitionApi } from "src/apis/competitionApi";
import { normalizeStandingsData } from "src/shared/dataNormalizers/normalizeStandingsData";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import { StandingsTableDataType } from "../types/standingTables.types";

export class StandingsService {
  private competitionId: CompetitionID;
  private season: Seasons;
  private response: any;
  private normalizedData: any;

  constructor(competitionId: CompetitionID, season: Seasons) {
    this.competitionId = competitionId;
    this.season = season;
  }

  async fetchStandings() {
    this.response = await CompetitionApi.getCompetitionStandings(
      this.competitionId,
      this.season
    );
    return this;
  }

  normalizeData() {
    this.normalizedData = normalizeStandingsData(this.response);
    return this;
  }

  getResult(): StandingsTableDataType[] {
    return this.normalizedData;
  }
}
