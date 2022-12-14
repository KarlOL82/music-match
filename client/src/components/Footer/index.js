import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 bg-gray-300 mt-auto flex justify-center bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn text-center text-xl bg-slate-300 rounded-lg text-gray-900 font-bold btn-lg btn-info m-6 hover:bg-slate-600" 
          onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        
        <h4 className="text-gray-900">
          This has been{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          A JANK Production
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
