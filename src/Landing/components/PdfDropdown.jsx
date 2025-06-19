import { useState, useRef, useEffect } from "react";

const PdfDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`transition-colors duration-150 ${
            open ? "text-amber-700" : "hover:text-amber-700"
          }`}
        >
          PDF ▾
        </button>
      </div>

      {open && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              className="block w-full text-left px-4 py-2 text-sm hover:bg-amber-100"
              onClick={() => {
                setOpen(false);
              }}
            >
              PDF Generator
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm hover:bg-amber-100"
              onClick={() => {
                setOpen(false);
              }}
            >
              Upload PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfDropdown;
