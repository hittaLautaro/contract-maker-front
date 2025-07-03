import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { useCvForm } from "./hooks/useCvForm.js";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ProjectsSection from "./ProjectSection.jsx";
import EducationSection from "./EducationSection.jsx";
import { NavLink } from "react-router-dom";
import {
  RiArrowGoBackFill,
  RiFilePdf2Fill,
  RiFileWord2Fill,
  RiWordpressFill,
} from "react-icons/ri";
import { useState, useEffect } from "react";
import { FaFileWord, FaRegFileWord } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { ImCross } from "react-icons/im";

const CvForm = ({ templateId = 1 }) => {
  const {
    formData,
    updateField,
    // Languages
    addLanguage,
    removeLanguage,
    // Experiences
    addExperience,
    removeExperience,
    updateExperience,
    // Education
    addEducation,
    removeEducation,
    updateEducation,
    // Projects
    addProject,
    removeProject,
    updateProject,
    // Form submission
    handleSubmit,
    isLoading,
    error,
  } = useCvForm(templateId);

  // Local state to hold generated PDF URL and modal open state
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  // Wrap original handleSubmit to capture PDF URL and open modal
  const newHandleSubmit = async () => {
    try {
      // Assuming your hook's generatePdf returns the blob or url:
      const blob = await handleSubmit();
      if (blob) {
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setModalOpen(true);
        console.log("modal open", blob);
      }
    } catch (e) {
      // error handled in the hook already
    }
  };

  // Clean up URL object when modal closes or component unmounts
  const closeModal = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
    setModalOpen(false);
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4 mt-5 pb-10">
      {/* Header */}
      <div className="flex flex-row items-center gap-4 my-10">
        <NavLink to="/templates">
          <RiArrowGoBackFill size={30} className="text-gray-800" />
        </NavLink>

        <h2 className="text-4xl font-bold text-gray-800">
          Fill the{" "}
          <span className="underline decoration-amber-400">template</span>
        </h2>
      </div>

      <div className="space-y-5">
        <PersonalInfoSection
          formData={formData}
          updateField={updateField}
          addLanguage={addLanguage}
          removeLanguage={removeLanguage}
        />

        <ExperienceSection
          experiences={formData.experiences}
          addExperience={addExperience}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />

        <ProjectsSection
          projects={formData.projects}
          addProject={addProject}
          updateProject={updateProject}
          removeProject={removeProject}
        />

        <EducationSection
          educationList={formData.educationList}
          addEducation={addEducation}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      </div>

      <div className="flex justify-end mt-5">
        {error && (
          <div className="px-4 py-3 bg-red-100 border border-red-400 text-red-700 rounded mr-2">
            Error: {error.message}
          </div>
        )}
        <button
          type="button"
          onClick={newHandleSubmit}
          disabled={isLoading}
          className={`px-6 py-3 bg-amber-300 text-zinc-800 border-2 border-zinc-800 rounded-md hover:bg-amber-400 transition-colors font-medium ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Generating..." : "Generate CV"}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white border-2 border-zinc-800 rounded-lg shadow-lg p-4 max-w-5xl max-h-[90vh]  overflow-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
              className="flex justify-end"
            >
              <ImCross />
            </a>
            {pdfUrl ? (
              <Document
                file={pdfUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="pdf-document mt-2"
              >
                {Array.from(new Array(numPages), (_, i) => (
                  <Page
                    key={i + 1}
                    pageNumber={i + 1}
                    width={550} // Set fixed width
                    scale={1.0} // Control zoom level
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    className="pdf-page border-2 border-zinc-800 max-w-40"
                  />
                ))}
              </Document>
            ) : (
              <p>No preview available.</p>
            )}
            <div className="flex space-x-2">
              <a
                href={pdfUrl}
                download="cv.pdf"
                className="mt-4 px-3 py-2 bg-sky-700 text-white font-semibold rounded hover:bg-sky-800 flex flex-row items-center gap-2"
              >
                <FaRegFileWord size={18} />
                Download DOC
              </a>
              <a
                href={pdfUrl}
                download="cv.pdf"
                className="mt-4 px-3 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 flex flex-row items-center gap-2"
              >
                <RiFilePdf2Fill size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CvForm;
