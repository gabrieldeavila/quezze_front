import RoutesWrapper from "./routes";
import "./translate/";
import { GlobalProvider } from "./Contexts/global";

function App() {
  return (
    <GlobalProvider>
      <RoutesWrapper />
    </GlobalProvider>
  );
}

export default App;
