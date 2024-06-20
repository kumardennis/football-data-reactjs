import { useQuery } from "@tanstack/react-query";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import "./CompletedMatches.styles.scss";
import { useGetURLSearchParams } from "src/shared/hooks/useGetURLSearchParams";
import { useCallback } from "react";
import { MIN } from "src/shared/constants";
import { CompletedMatchesService } from "./services/CompletedMatchesService";
import { getCompletedMatches } from "./utils/completedMatches.utils";

const COLUMNS = [
  {
    header: "Home Team",
    id: "home_team",
  },
  { header: "Details", id: "details" },
  {
    header: "Away Team",
    id: "away_team",
  },
];

export const CompletedMatchesTable: React.FC = () => {
  const { competitionId, season } = useGetURLSearchParams();

  const { data, isError, isLoading } = useQuery({
    enabled: !!competitionId && !!season,
    queryKey: ["completedMatches", competitionId, season],
    queryFn: () => getCompletedMatches({ competitionId, season }),
    staleTime: 50 * MIN,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 50 * MIN,
  });

  const createTableHeader = () => (
    <thead>
      <tr>
        {COLUMNS.map((column) => (
          <th>{column.header}</th>
        ))}
      </tr>
    </thead>
  );

  const createTableBody = () => (
    <tbody>
      {data?.map((row) => (
        <tr>
          <td>{row.home.team}</td>
          <td>
            <div className='score'>
              {row.home.score} : {row.away.score}
            </div>
            <span>{row.dateTime}</span>
          </td>
          <td>{row.away.team}</td>
        </tr>
      ))}
    </tbody>
  );

  isLoading && <span>loading...</span>;
  isError && <span>Oops... sorry, an error occured</span>;

  return (
    <>
      <div className='completed-matches'>
        <h2>DELAYED SCORES (COMPLETED MATCHES)</h2>
        <table className='completed-matches-table'>
          {createTableHeader()}
          {createTableBody()}
        </table>
      </div>
    </>
  );
};
