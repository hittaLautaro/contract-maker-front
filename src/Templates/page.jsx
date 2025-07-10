import Sidebar from "../global/components/Sidebar.jsx";
import TemplateSelector from "./TemplateSelector";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 py-10 flex justify-center items-center">
        <TemplateSelector />
      </main>
    </div>
  );
};

export default TemplatesPage;
