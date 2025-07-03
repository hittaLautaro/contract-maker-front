import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const generatePdf = async (formData) => {
  const res = await fetch("http://localhost:8080/api/cv/generate-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log(res);

  if (!res.ok) throw new Error("Failed to generate PDF");

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  window.open(url);

  return blob;
};

export const useCvForm = (templateId = 1) => {
  const [formData, setFormData] = useState({
    selectedTemplateId: templateId,
    fullName: "",
    city: "",
    email: "",
    phone: "",
    summary: "",
    linkedin: "",
    github: "",
    languages: [],
    technologies: [],
    experiences: [],
    educationList: [],
    projects: [],
  });

  const mutation = useMutation({
    mutationFn: generatePdf,
    onSuccess: (data) => {
      console.log("PDF generated", data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateLanguages = (languages) => {
    setFormData((prev) => ({ ...prev, languages }));
  };

  const addLanguage = (newTag) => {
    updateLanguages([...formData.languages, newTag]);
  };

  const removeLanguage = (tagToRemove) => {
    updateLanguages(formData.languages.filter((tag) => tag !== tagToRemove));
  };

  const addExperience = () => {
    const newExperience = {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      technologies: [],
    };
    setFormData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const updateExperience = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addEducation = () => {
    const newEducation = {
      universityName: "",
      graduationDate: "",
      degree: "",
      major: "",
      city: "",
    };
    setFormData((prev) => ({
      ...prev,
      educationList: [...prev.educationList, newEducation],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      educationList: prev.educationList.filter((_, i) => i !== index),
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      educationList: prev.educationList.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const addProject = () => {
    const newProject = {
      name: "",
      since: "",
      till: "",
      description: "",
      technologies: [],
      github: "",
    };
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const updateProject = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  const handleSubmit = () => {
    mutation.mutate(formData);
  };

  return {
    formData,
    updateField,
    addLanguage,
    removeLanguage,
    addExperience,
    removeExperience,
    updateExperience,
    addEducation,
    removeEducation,
    updateEducation,
    addProject,
    removeProject,
    updateProject,
    handleSubmit,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
