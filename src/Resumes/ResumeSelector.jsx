import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  DeleteIcon,
  Download,
  Eye,
  Loader2,
  Pencil,
  Trash2,
} from "lucide-react";
import { BiError, BiTrash } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import { BsTrash2Fill } from "react-icons/bs";

const ResumeSelector = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const {
    data: drafts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["drafts"],
    queryFn: () =>
      fetch("http://localhost:8080/api/drafts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
  });

  const handleDraftSelect = (template) => {
    navigate(`/resumes/${template.id}/edit`);
  };

  if (isLoading && !error) {
    return (
      <div className="max-w-6xl w-full mx-auto bg-white rounded-xl flex flex-col min-h-[56vh] px-5">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">
          Your <span className="underline decoration-amber-400">resumes</span>
        </h2>

        <div className="rounded-xl border border-slate-800 p-3 flex-1 overflow-hidden shadow-lg shadow-gray-300 flex items-center justify-center">
          <div className="text-xl text-gray-600 min-h-64 text-center flex items-center justify-center">
            <Loader2 className="animate-spin w-8 h-8" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl w-full mx-auto bg-white rounded-xl flex flex-col min-h-[56vh] px-5">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">
          Your <span className="underline decoration-amber-400">resumes</span>
        </h2>

        <div className="rounded-xl border border-slate-800 p-3 flex-1 overflow-hidden shadow-lg shadow-gray-300  flex items-center justify-center">
          <div className="text-lg font-semibold text-red-600 min-h-64 text-center flex items-center justify-center">
            <BiError size={25} className="mr-2" />
            Error! Please try again later.
          </div>
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
            {drafts.map((draft) => (
              <div
                key={draft.id}
                onClick={() => handleDraftSelect(draft)}
                className="bg-white rounded-lg shadow-md duration-300  p-3 border border-slate-800 "
              >
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-semibold  text-gray-800">
                    {draft.title || "Untitled Resume"}
                  </h3>
                  <div className="flex flex-row justify-between gap-2">
                    <button className="bg-amber-300 rounded p-2 font-mono font-medium text-lg">
                      <Pencil size={20} />
                    </button>
                    <button className="bg-red-300 rounded p-2 font-mono font-medium text-lg">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-800">
                  Last updated at{" "}
                  {draft.createdAt
                    ? new Date(draft.updatedAt).toLocaleDateString("en-EN", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                    : "No date available"}
                </p>
                <button className="bg-indigo-200 rounded px-2 py-1  font-medium text-normal w-full mt-3">
                  <div className="flex flex-row items-center gap-2 justify-center">
                    <Eye size={20} />
                    Preview
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSelector;
