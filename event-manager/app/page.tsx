import ChartData from "./Dashboard/ChartData";
import OverallProgres from "./Dashboard/OverallProgres";
import Sidebar from "./Dashboard/Sidebar";
import StatisticData from "./Dashboard/StatisticData";
import TopPanel from "./Dashboard/TopPanel";
export default function Home() {
  return (
    <div className="poppins flex w-full h-screen">
      <Sidebar />
      <TopPanel />
      <OverallProgres />
      <StatisticData />
      {/* <ChartData /> */}
    </div>
  );
}
