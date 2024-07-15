import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ name, email }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-sm font-medium text-black rounded-md cursor-pointer"
        role="button"
        tabIndex="0"
      >
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        {name}
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
          <Link
            to="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
