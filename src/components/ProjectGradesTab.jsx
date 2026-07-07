import React from 'react';
import { calculateStudentScores, DISSERTATION_WEIGHTS } from '../utils/calculations';

const GRADES = ['', 'A+', 'A', 'B', 'C', 'D', 'E'];

const ProjectGradesTab = ({ students, handleChange }) => {
  const renderDropdown = (student, field, label, weight) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <label style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '500', display: 'flex', justifyContent: 'space-between' }}>
        <span>{label}</span>
        {weight && <span style={{ color: '#64748b' }}>(x{weight})</span>}
      </label>
      <select
        className="table-input"
        value={student[field]}
        onChange={(e) => handleChange(student.id, field, e.target.value)}
        style={{ padding: '8px', fontSize: '0.9rem', width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.4)' }}
      >
        {GRADES.map(g => (
          <option key={g} value={g}>{g === '' ? 'Select...' : g}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {students.length === 0 && (
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
            No students added. Go to the "Students Data" tab to add students.
          </div>
        )}
        
        {students.map((student) => {
          const scores = calculateStudentScores(student);

          return (
            <div key={student.id} className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff' }}>
                    {student.registerNumber || 'No Register Number'}
                  </span>
                  <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>
                    {student.name || 'Unnamed Student'}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project WGP (90)</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', lineHeight: '1' }}>
                    {scores.dissertationTotal > 0 ? scores.dissertationTotal : '-'}
                  </div>
                </div>
              </div>

              {/* Grid for Dropdowns */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                gap: '1rem',
                background: 'rgba(15, 23, 42, 0.2)',
                padding: '1rem',
                borderRadius: '8px'
              }}>
                {renderDropdown(student, 'structural', 'Structural', DISSERTATION_WEIGHTS.structural)}
                {renderDropdown(student, 'editing', 'Editing', DISSERTATION_WEIGHTS.editing)}
                {renderDropdown(student, 'references', 'References', DISSERTATION_WEIGHTS.references)}
                {renderDropdown(student, 'title', 'Title & Content', DISSERTATION_WEIGHTS.title)}
                {renderDropdown(student, 'supporting', 'Supporting', DISSERTATION_WEIGHTS.supporting)}
                {renderDropdown(student, 'results', 'Results', DISSERTATION_WEIGHTS.results)}
                {renderDropdown(student, 'novelty', 'Novelty', DISSERTATION_WEIGHTS.novelty)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGradesTab;
