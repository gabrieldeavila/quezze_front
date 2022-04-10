import RoutesWrapper from "./routes";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar";
import { GlobalProvider } from "./Contexts/global";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Sidebar />
      <RoutesWrapper />
    </GlobalProvider>
  );
}

export default App;
