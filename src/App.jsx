import React, { useState } from 'react';
import ProjectVivaApp from './ProjectVivaApp';
import ComprehensiveVivaApp from './ComprehensiveVivaApp';
import './index.css';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const printMode = queryParams.get('print');
  const printApp = queryParams.get('app');

  // Load the last active app tab to persist across reloads
  const [currentAppTab, setCurrentAppTab] = useState(() => {
    return localStorage.getItem('viva_marks_current_app') || 'project';
  });

  const handleTabSwitch = (tab) => {
    setCurrentAppTab(tab);
    localStorage.setItem('viva_marks_current_app', tab);
  };

  // If we are in print mode, delegate strictly to the requested app
  if (printMode === 'marklist' && printApp !== 'comp') {
    return <ProjectVivaApp />;
  }
  if (printMode === 'marklist' && printApp === 'comp') {
    return <ComprehensiveVivaApp />;
  }

  return (
    <div className="master-container">
      <nav className="master-nav">
        <button 
          className={`master-tab ${currentAppTab === 'project' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('project')}
        >
          Project Viva Marks Consolidator
        </button>
        <button 
          className={`master-tab ${currentAppTab === 'comp' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('comp')}
        >
          Comprehensive Viva Marks Consolidator
        </button>
      </nav>

      <div className="master-content">
        {currentAppTab === 'project' && <ProjectVivaApp />}
        {currentAppTab === 'comp' && <ComprehensiveVivaApp />}
      </div>
    </div>
  );
}

export default App;
