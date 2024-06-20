import { CompletedMatchesTableDataType } from "src/features/CompletedMatches/CompletedMatches.types";
import dayjs from "dayjs";

export const normalizeCompletedMatchesData = (
  response: any
): CompletedMatchesTableDataType[] => {
  const normalizedData: CompletedMatchesTableDataType[] = [];
  const responseData: [] = response["matches"];

  responseData.forEach((element) => {
    const normalizedElement: CompletedMatchesTableDataType = {
      home: {
        team: element["homeTeam"]["name"],
        score: element["score"]["fullTime"]["homeTeam"],
      },
      away: {
        team: element["awayTeam"]["name"],
        score: element["score"]["fullTime"]["awayTeam"],
      },
      dateTime: element["utcDate"]
        ? dayjs(element["utcDate"]).format("DD/MM/YYYY HH:mm")
        : "",
    };

    normalizedData.push(normalizedElement);
  });

  return normalizedData;
};
