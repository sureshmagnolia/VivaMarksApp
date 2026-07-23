export const getGradeColorStyle = (grade) => {
  switch (grade) {
    case 'A+':
      return {
        backgroundColor: '#15803d', // Rich Emerald Green
        color: '#ffffff',
        borderColor: '#22c55e',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    case 'A':
      return {
        backgroundColor: '#047857', // Deep Teal Green
        color: '#ffffff',
        borderColor: '#10b981',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    case 'B':
      return {
        backgroundColor: '#1d4ed8', // Bright Blue
        color: '#ffffff',
        borderColor: '#3b82f6',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    case 'C':
      return {
        backgroundColor: '#b45309', // Amber / Golden Brown
        color: '#ffffff',
        borderColor: '#f59e0b',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    case 'D':
      return {
        backgroundColor: '#c2410c', // Deep Orange
        color: '#ffffff',
        borderColor: '#f97316',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    case 'E':
      return {
        backgroundColor: '#b91c1c', // Crimson Red
        color: '#ffffff',
        borderColor: '#ef4444',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    case 'O':
      return {
        backgroundColor: '#6d28d9', // Vibrant Purple
        color: '#ffffff',
        borderColor: '#a855f7',
        fontWeight: 'bold',
        textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)'
      };
    default:
      return {
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        color: '#94a3b8',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        fontWeight: 'normal'
      };
  }
};

export const GRADE_OPTION_STYLES = {
  'A+': { backgroundColor: '#0f172a', color: '#4ade80', fontWeight: 'bold' },
  'A':  { backgroundColor: '#0f172a', color: '#34d399', fontWeight: 'bold' },
  'B':  { backgroundColor: '#0f172a', color: '#60a5fa', fontWeight: 'bold' },
  'C':  { backgroundColor: '#0f172a', color: '#fbbf24', fontWeight: 'bold' },
  'D':  { backgroundColor: '#0f172a', color: '#fb923c', fontWeight: 'bold' },
  'E':  { backgroundColor: '#0f172a', color: '#f87171', fontWeight: 'bold' },
  'O':  { backgroundColor: '#0f172a', color: '#c084fc', fontWeight: 'bold' },
  '':   { backgroundColor: '#0f172a', color: '#94a3b8' }
};
