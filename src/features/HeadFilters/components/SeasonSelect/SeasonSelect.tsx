import { ChangeEvent } from "react";
import { Seasons } from "src/shared/types/competition.types";

type Props = {
  forwardRef: React.MutableRefObject<Seasons>;
  updateRefValue: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const SeasonSelect: React.FC<Props> = ({
  forwardRef,
  updateRefValue,
}) => {
  return (
    <select onChange={updateRefValue} defaultValue={forwardRef.current}>
      {Object.entries(Seasons).map((seasonEntry) => (
        <option key={seasonEntry[0]} value={seasonEntry[1]}>
          {seasonEntry[1]} - {Number(seasonEntry[1]) + 1}
        </option>
      ))}
    </select>
  );
};
