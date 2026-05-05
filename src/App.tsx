import DashboardContainer from "./components/dashboard/DashboardContainer";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardContainer />
    </div>
  );
}

export default App;
