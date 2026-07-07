import React from 'react';
import { calculateStudentScores } from '../utils/calculations';

const GRADES = ['', 'A+', 'A', 'B', 'C', 'D', 'E'];

const PresentationVivaTab = ({ students, handleChange }) => {
  const renderDropdown = (student, field, label) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <label style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '500' }}>
        {label} <span style={{ color: '#64748b' }}>(x1.5)</span>
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
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Presentation (30)</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#60a5fa', lineHeight: '1' }}>
                      {scores.presentationTotal > 0 ? scores.presentationTotal : '-'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Viva Voce (30)</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981', lineHeight: '1' }}>
                      {scores.vivaTotal > 0 ? scores.vivaTotal : '-'}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Topic Input */}
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px', display: 'block' }}>Topic / Title of Project</label>
                  <input
                    type="text"
                    className="table-input"
                    value={student.topic || ''}
                    onChange={(e) => handleChange(student.id, 'topic', e.target.value)}
                    placeholder="Enter project topic"
                    style={{ fontSize: '1rem', width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {/* Presentation Section */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#e2e8f0', margin: '0 0 1rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
                      Presentation
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      {renderDropdown(student, 'presentationEx1', 'Examiner 1')}
                      {renderDropdown(student, 'presentationEx2', 'Examiner 2')}
                    </div>
                  </div>

                  {/* Viva Voce Section */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#e2e8f0', margin: '0 0 1rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
                      Viva Voce
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      {renderDropdown(student, 'vivaEx1', 'Examiner 1')}
                      {renderDropdown(student, 'vivaEx2', 'Examiner 2')}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PresentationVivaTab;
