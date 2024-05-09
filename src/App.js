import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import ProgrammingLanguages from './ProgrammingLanguages';
import CoreSubjects from './CoreSubjects';
import Quiz from './Quiz';
import './App.css';

Amplify.configure(awsExports);

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubject(null);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setSelectedSubject(null);
  };

  return (
    <div className="App">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <div className="App">
              <header className="App-header">
                <button
                  onClick={signOut}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(to right, blue,aqua)',
                    border: 'none',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '0.8rem',
                    padding: '5px 10px',
                    cursor: 'pointer'
                  }}
                >
                  SIGN OUT
                </button>
                {(selectedCategory === null && selectedSubject === null) && (
                  <>
                    <h1 style={{ margin: '20px auto' }}>Welcome to Quiz App</h1>
                    <div class="category-buttons">
                      <h2>Select a Category:</h2>
                      <button onClick={() => handleCategorySelect('Programming')}>Programming Languages</button>
                      <button onClick={() => handleCategorySelect('Core')}>Computer Science Core Subjects</button>
                    </div>
                  </>
                )}
                {selectedCategory === 'Programming' && <ProgrammingLanguages onSubjectSelect={handleSubjectSelect} />}
                {selectedCategory === 'Core' && <CoreSubjects onSubjectSelect={handleSubjectSelect} />}
                {(selectedCategory !== null || selectedSubject !== null) && (
                  <button onClick={handleBackClick}>Back</button>
                )}
                {selectedSubject && (
                  <Quiz selectedSubject={selectedSubject} onBackClick={handleBackClick} />
                )}
              </header>
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
