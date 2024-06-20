import { BrowserRouter } from "react-router-dom";
import { StandingsTable } from "./features/CompetitionStandings";
import { CompletedMatchesTable } from "./features/CompletedMatches";
import { HeadFilter } from "./features/HeadFilters";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HeadFilter />
          <StandingsTable />
          <CompletedMatchesTable />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
