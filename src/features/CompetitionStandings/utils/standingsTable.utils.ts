import { createColumnHelper, AccessorFnColumnDef } from "@tanstack/react-table";
import { StandingsTableDataType } from "../types/standingTables.types";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import { StandingsService } from "../services/StandingsService";

const columnHelper = createColumnHelper<StandingsTableDataType>();

export const createColumnsForStandingsTable = (): AccessorFnColumnDef<
  StandingsTableDataType,
  any
>[] => {
  const columns: AccessorFnColumnDef<StandingsTableDataType, any>[] = [
    columnHelper.accessor((row) => row.position, {
      id: "position",
      cell: (data) => data.getValue(),
      header: "Position",
    }),
    columnHelper.accessor((row) => row.team, {
      id: "team",
      cell: (data) => data.getValue(),
      header: "Team",
    }),
    columnHelper.accessor((row) => row.played, {
      id: "played",
      cell: (data) => data.getValue(),
      header: "Played",
    }),
    columnHelper.accessor((row) => row.won, {
      id: "won",
      cell: (data) => data.getValue(),
      header: "Won",
    }),
    columnHelper.accessor((row) => row.drawn, {
      id: "drawn",
      cell: (data) => data.getValue(),
      header: "Drawn",
    }),
    columnHelper.accessor((row) => row.lost, {
      id: "lost",
      cell: (data) => data.getValue(),
      header: "Lost",
    }),
    columnHelper.accessor((row) => row.points, {
      id: "points",
      cell: (data) => data.getValue(),
      header: "Points",
    }),
  ];

  return columns;
};

export const getStandings = async ({
  competitionId,
  season,
}: {
  competitionId: CompetitionID;
  season: Seasons;
}) => {
  const service = new StandingsService(competitionId, season);

  const result = (await service.fetchStandings()).normalizeData().getResult();

  return result;
};
