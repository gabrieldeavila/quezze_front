import RoutesWrapper from "./routes";

import { GlobalProvider } from "./Contexts/global";

function App() {
  return (
    <GlobalProvider>
      <RoutesWrapper />
    </GlobalProvider>
  );
}

export default App;
