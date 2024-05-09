import React, { useState } from 'react';
import './body.css';

function ProgrammingLanguages({ onBackClick, onSubjectSelect }) {
  const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'C#'];
  const [languageSelected, setLanguageSelected] = useState(false);

  const handleLanguageSelect = (language) => {
    onSubjectSelect(language);
    setLanguageSelected(true);
  };

  return (
    <div>
      {!languageSelected && (
        <div className="sub-cat">
          <h2>Select a Programming Language:</h2>
          {programmingLanguages.map(language => (
            <button key={language} onClick={() => handleLanguageSelect(language)}>{language}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgrammingLanguages;
