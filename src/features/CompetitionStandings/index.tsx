import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  createColumnsForStandingsTable,
  getStandings,
} from "./utils/standingsTable.utils";
import { useGetURLSearchParams } from "src/shared/hooks/useGetURLSearchParams";
import { useQuery } from "@tanstack/react-query";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import { StandingsService } from "src/features/CompetitionStandings/services/StandingsService";
import "./CompetitionStandings.styles.scss";
import { MIN } from "src/shared/constants";

const dummyData = [
  {
    position: 1,
    team: "Team A",
    played: 38,
    won: 28,
    drawn: 7,
    lost: 3,
    points: 91,
  },
  {
    position: 1,
    team: "Team B",
    played: 38,
    won: 28,
    drawn: 7,
    lost: 3,
    points: 91,
  },
  {
    position: 1,
    team: "Team C",
    played: 38,
    won: 28,
    drawn: 7,
    lost: 3,
    points: 91,
  },
  {
    position: 1,
    team: "Team D",
    played: 38,
    won: 28,
    drawn: 7,
    lost: 3,
    points: 91,
  },
];

const columns = createColumnsForStandingsTable();

export const StandingsTable: React.FC = () => {
  const { competitionId, season } = useGetURLSearchParams();

  const { isError, isLoading } = useQuery({
    queryKey: ["standings", { competitionId, season }],
    queryFn: () => getStandings({ competitionId, season }),
    staleTime: 50 * MIN,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 50 * MIN,
  });

  const table = useReactTable({
    columns,
    data: dummyData,
    getCoreRowModel: getCoreRowModel(),
  });

  const createTableHeader = () => (
    <thead>
      {table.getHeaderGroups().map((headerGroups) => (
        <tr key={headerGroups.id}>
          {headerGroups.headers.map((header) => (
            <th key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );

  const createTableBody = () => (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  isLoading && <span>loading...</span>;
  isError && <span>Oops... sorry, an error occured</span>;

  return (
    <div className='competition-standings'>
      <h2>COMPETITION STANDINGS</h2>
      <table className='standings-table'>
        {createTableHeader()}
        {createTableBody()}
      </table>
    </div>
  );
};
