import CvForm from "./CvForm";
import { useParams, useSearchParams } from "react-router-dom";
import Sidebar from "../global/components/Sidebar";

const CvFormPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const templateName = searchParams.get("template");

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 flex justify-center items-center">
        <CvForm templateId={id} templateName={templateName} />
      </main>
    </div>
  );
};

export default CvFormPage;
