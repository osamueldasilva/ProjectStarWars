import { BrowserRouter as Router } from "react-router-dom";
import { RoutesProvier } from "./Routes";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoutesProvier />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
