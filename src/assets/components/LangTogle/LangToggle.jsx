import { useState } from "react";
import "./LangToggle.css";

const LANGS = [
  {
    code: "ES",
    label: "ES",
    flag: (
      <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#c60b1e"/>
        <rect y="5" width="30" height="10" fill="#ffc400"/>
      </svg>
    ),
  },
  {
    code: "EN",
    label: "EN",
    flag: (
      <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#012169"/>
        <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="4"/>
        <path d="M0,0 L30,20 M30,0 L0,20" stroke="#c8102e" strokeWidth="2.5"/>
        <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="6"/>
        <path d="M15,0 V20 M0,10 H30" stroke="#c8102e" strokeWidth="3.5"/>
      </svg>
    ),
  },
];

const LangToggle = ({ lang, setLang }) => {
  const isEN = lang === "EN";

  return (
    <div className="lang-toggle-wrap">
      <span className={`lang-label ${!isEN ? "lang-label--active" : ""}`}>ES</span>

      <button
        className={`lang-switch ${isEN ? "lang-switch--en" : "lang-switch--es"}`}
        onClick={() => setLang(isEN ? "ES" : "EN")}
        aria-label="Toggle language"
      >
        <span className="lang-switch__track" />
        <span className="lang-switch__thumb">
          {isEN ? LANGS[1].flag : LANGS[0].flag}
        </span>
      </button>

      <span className={`lang-label ${isEN ? "lang-label--active" : ""}`}>EN</span>
    </div>
  );
};

export default LangToggle;
