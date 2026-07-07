import React from 'react';
import { Download } from 'lucide-react';
import { calculateExaminerWGP, calculateFinalGradePoint, getFinalGrade } from '../utils/compCalculations';
import { generateCompPDF } from '../utils/compPdfGenerator';

const CompMarklistTab = ({ details, students }) => {
  const handlePrintHTML = () => {
    // Open in new tab with print=marklist&app=comp
    window.open(window.location.pathname + '?print=marklist&app=comp', '_blank');
  };

  const handleDownloadPDF = () => {
    generateCompPDF(details, students);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={handlePrintHTML}>
          Preview HTML / Print
        </button>
        <button className="btn btn-primary" onClick={handleDownloadPDF}>
          <Download size={18} />
          Download PDF
        </button>
      </div>

      <div className="html-preview" style={{ background: '#f8fafc', color: '#000', padding: '2rem', borderRadius: '8px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
            UNIVERSITY OF CALICUT 4 SEM M.Sc. BOTANY (CBCSS) PRACTICAL EXAMINATION, April 2026
          </h2>
          <h3 style={{ fontSize: '13px', fontWeight: 'bold', margin: '0' }}>
            GRADE SHEET OF COMPREHENSIVE VIVA VOCE
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px', fontSize: '13px' }}>
          <p>Name of the centre: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.centre || ''}</p>
          <p>Date of examination: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.date ? details.date.split('-').reverse().join('/') : ''}</p>
          <p>Course name /Course code : &nbsp;&nbsp;{details.courseCode || ''}</p>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '10px', textAlign: 'center', backgroundColor: '#f1f5f9', width: '25%' }}>Register Number</th>
              <th style={{ border: '1px solid #000', padding: '10px', textAlign: 'center', backgroundColor: '#f1f5f9', width: '50%' }}>Name of the candidate</th>
              <th style={{ border: '1px solid #000', padding: '10px', textAlign: 'center', backgroundColor: '#f1f5f9', width: '25%' }}>Weighted Grade Point<br />(150)</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const ex1Wgp = calculateExaminerWGP(student.ex1);
              const ex2Wgp = calculateExaminerWGP(student.ex2);
              const finalWgp = (ex1Wgp + ex2Wgp) / 2;

              return (
                <tr key={student.id}>
                  <td style={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}>{student.registerNumber}</td>
                  <td style={{ border: '1px solid #000', padding: '10px' }}>{student.name}</td>
                  <td style={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}>{finalWgp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        <div style={{ marginTop: '40px', fontSize: '13px' }}>
          <p style={{ marginBottom: '40px' }}>Name and Signature of Examiners</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>1</span>
            <span>2</span>
            <span style={{ marginRight: '50px' }}>Chairman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompMarklistTab;
