import { ChangeEvent } from "react";
import { useGetURLSearchParams } from "src/shared/hooks/useGetURLSearchParams";
import { CompetitionID, Seasons } from "src/shared/types/competition.types";
import { CompetitionSelect } from "./components/CompetitionSelect/CompetitionSelect";
import { SeasonSelect } from "./components/SeasonSelect/SeasonSelect";
import "./HeadFilters.styles.scss";

export const HeadFilter = () => {
  const { competitionIdRef, seasonRef, setSearchParams } =
    useGetURLSearchParams();

  const updateUrlSearchParams = () => {
    setSearchParams((prev) => {
      prev.set("competitionId", competitionIdRef.current);
      prev.set("season", seasonRef.current);

      return prev;
    });
  };

  const updateCompetitionRef = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    competitionIdRef.current = event.target.value as CompetitionID;
  };

  const updateSeasonRef = (event: ChangeEvent<HTMLSelectElement>) => {
    seasonRef.current = event.target.value as Seasons;
  };

  return (
    <>
      <div className='head-filters'>
        <span>Filters</span>
        <div className='filter-form'>
          <CompetitionSelect
            forwardRef={competitionIdRef}
            updateRefValue={updateCompetitionRef}
          />

          <SeasonSelect
            forwardRef={seasonRef}
            updateRefValue={updateSeasonRef}
          />
          <button onClick={updateUrlSearchParams}>Submit</button>
        </div>
      </div>
    </>
  );
};
