import Sidebar from "../global/components/Sidebar.jsx";
import ResumeSelector from "./ResumeSelector.jsx";

const ResumesPage = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 py-10 flex justify-center items-center">
        <ResumeSelector />
      </main>
    </div>
  );
};

export default ResumesPage;
