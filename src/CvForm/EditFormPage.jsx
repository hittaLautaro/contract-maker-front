import Sidebar from "../global/components/Sidebar.jsx";
import EditForm from "./EditForm.jsx";

const EditFormPage = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 py-5 flex justify-center items-center">
        <EditForm />
      </main>
    </div>
  );
};

export default EditFormPage;
