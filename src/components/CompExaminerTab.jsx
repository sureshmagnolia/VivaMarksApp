import React from 'react';
import { getGradeColorStyle, GRADE_OPTION_STYLES } from '../utils/gradeColors';

const CompExaminerTab = ({ students, handleChange, examiner, title }) => {
  const questions = Array.from({ length: 15 }, (_, i) => `q${i + 1}`);

  const calculateTotalWGP = (studentGrades) => {
    let total = 0;
    const points = { 'A+': 10, 'A': 8, 'B': 6, 'C': 4, 'D': 2, 'E': 0 };
    questions.forEach(q => {
      const grade = studentGrades[q] || 'E';
      total += (points[grade] || 0);
    });
    return total;
  };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#e2e8f0' }}>{title}</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Select grades (A+, A, B, C, D, E) for each of the 15 questions.</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {students.map((student) => {
          const studentGrades = student[examiner] || {};
          const totalWgp = calculateTotalWGP(studentGrades);
          
          return (
            <div key={student.id} className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total WGP</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', lineHeight: '1' }}>
                    {totalWgp}
                  </div>
                </div>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
                gap: '1rem' 
              }}>
                {questions.map((q, i) => {
                  const currentGrade = studentGrades[q] || 'A+';
                  const styleObj = getGradeColorStyle(currentGrade);

                  return (
                    <div key={q} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <label style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '500', textAlign: 'center' }}>
                        Q {i + 1}
                      </label>
                      <select
                        className="table-input"
                        style={{
                          padding: '6px',
                          fontSize: '0.9rem',
                          width: '100%',
                          textAlign: 'center',
                          borderRadius: '6px',
                          border: `1px solid ${styleObj.borderColor}`,
                          backgroundColor: styleObj.backgroundColor,
                          color: styleObj.color,
                          fontWeight: styleObj.fontWeight,
                          textShadow: styleObj.textShadow,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer'
                        }}
                        value={currentGrade}
                        onChange={(e) => handleChange(student.id, q, e.target.value, examiner)}
                      >
                        <option value="A+" style={GRADE_OPTION_STYLES['A+']}>A+</option>
                        <option value="A" style={GRADE_OPTION_STYLES['A']}>A</option>
                        <option value="B" style={GRADE_OPTION_STYLES['B']}>B</option>
                        <option value="C" style={GRADE_OPTION_STYLES['C']}>C</option>
                        <option value="D" style={GRADE_OPTION_STYLES['D']}>D</option>
                        <option value="E" style={GRADE_OPTION_STYLES['E']}>E</option>
                      </select>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompExaminerTab;
