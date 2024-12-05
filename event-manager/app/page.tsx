import Sidebar from "./Dashboard/Sidebar";
import TopPanel from "./Dashboard/TopPanel";
export default function Home() {
  return (
    <div className="poppins flex w-full h-screen">
      <Sidebar/>
      <TopPanel/>
    </div>
  );
}
