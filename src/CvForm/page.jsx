import Header from "../global/components/Header";
import CvForm from "./CvForm";
import { useParams, useSearchParams } from "react-router-dom";

const CvFormPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const templateName = searchParams.get("template");

  return (
    <div className="min-h-screen">
      <Header />
      <CvForm templateId={id} templateName={templateName} />
    </div>
  );
};

export default CvFormPage;
