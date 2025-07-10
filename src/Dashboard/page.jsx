import TemplateSmallSelector from "./TemplateSmallSelector";
import DraftSelector from "./DraftSelector";
import Sidebar from "../global/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-row flex-1 ">
        <Sidebar />
        <main className="flex-1 p-4 bg-white flex justify-center items-center flex-col">
          <TemplateSmallSelector />
          <DraftSelector />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
