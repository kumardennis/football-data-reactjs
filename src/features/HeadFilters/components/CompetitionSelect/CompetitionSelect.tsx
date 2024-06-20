import { ChangeEvent } from "react";
import {
  CompetitionID,
  CompetitionName,
} from "src/shared/types/competition.types";

type Props = {
  forwardRef: React.MutableRefObject<CompetitionID>;
  updateRefValue: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const CompetitionSelect: React.FC<Props> = ({
  forwardRef,
  updateRefValue,
}) => {
  return (
    <select onChange={updateRefValue} defaultValue={forwardRef.current}>
      {Object.entries(CompetitionName).map((nameEntry) => (
        <option
          key={nameEntry[0]}
          value={CompetitionID[nameEntry[0] as keyof typeof CompetitionID]}
        >
          {nameEntry[1]}
        </option>
      ))}
    </select>
  );
};
