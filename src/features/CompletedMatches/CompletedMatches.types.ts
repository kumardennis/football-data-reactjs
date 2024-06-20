export type TeamScoresType = {
  team: string;
  score: number;
};

export type CompletedMatchesTableDataType = {
  home: TeamScoresType;
  away: TeamScoresType;
  dateTime: string;
};
