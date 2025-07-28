import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ResumeSelector = () => {
  const navigate = useNavigate();

  // const {
  //   data: templates = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["templates"],
  //   queryFn: () =>
  //     fetch("http://localhost:8080/api/templates", { method: "GET" }).then(
  //       (res) => res.json()
  //     ),
  // });

  const resumes = [
    { id: 1, title: "Resume 1" },
    { id: 2, title: "Resume 2" },
    { id: 2, title: "Resume 2" },
  ];
  const isLoading = false;
  const error = null;

  const handleResumeSelect = (resume) => {
    navigate(`/resumes/${resume.id}/fill?resume=${resume.title}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading resumes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-xl text-red-600">
          Error loading resumes. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl w-full mx-auto bg-white rounded-xl flex flex-col min-h-[56vh] px-5">
      <h2 className="text-4xl font-bold text-gray-800 mb-5">
        Your <span className="underline decoration-amber-400">resumes</span>
      </h2>

      <div className="rounded-xl border border-slate-800 p-3 flex-1 overflow-hidden shadow-lg shadow-gray-300">
        <div className="overflow-y-auto h-full p-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                onClick={() => handleResumeSelect(resume)}
                className="bg-white rounded-lg shadow-md duration-300 cursor-pointer p-3 border border-slate-800 min-h-48"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSelector;
