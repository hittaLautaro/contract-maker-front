// components/PersonalInfoSection.js
import TagInput from "./TagInput";

const PersonalInfoSection = ({
  formData,
  updateField,
  addLanguage,
  removeLanguage,
}) => {
  return (
    <section className="bg-white px-5 py-4 border border-gray-800 rounded-xl shadow-lg shadow-gray-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            placeholder="e.g. John Doe"
            onChange={(e) => updateField("fullName", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Email
          </label>
          <input
            type="email"
            placeholder="e.g. example@gmail.com"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            placeholder="e.g. John Doe"
            onChange={(e) => updateField("city", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            placeholder="e.g. +1 555 123 4567"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn
          </label>
          <input
            type="url"
            value={formData.linkedin}
            placeholder="e.g. linkedin.com/in/johnDoe"
            onChange={(e) => updateField("linkedin", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub
          </label>
          <input
            type="url"
            placeholder="e.g. github.com/johnDoe"
            value={formData.github}
            onChange={(e) => updateField("github", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="mt-4 col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Languages
          </label>
          <TagInput
            tags={formData.languages}
            customPlaceHolder="e.g. English, Spanish..."
            onAdd={addLanguage}
            onRemove={removeLanguage}
          />
        </div>
        <div className="mt-4 col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Summary
          </label>
          <textarea
            value={formData.summary}
            placeholder="e.g. I'm a Software Engineer specialized in..."
            onChange={(e) => updateField("summary", e.target.value)}
            rows={1}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
