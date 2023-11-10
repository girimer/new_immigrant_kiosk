function LanguageDropdown() {
  const languages = ["Language 2", "Language 3"];

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        English
      </button>
      <ul className="dropdown-menu">
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageDropdown;
