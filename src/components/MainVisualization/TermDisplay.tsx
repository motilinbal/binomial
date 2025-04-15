import React from 'react';
import MathDisplay from '../shared/MathDisplay';

/**
 * TermDisplay component
 * Shows the current term based on user selections.
 */
const TermDisplay: React.FC<{ selections: ("a" | "b" | null)[] }> = ({ selections }) => {
  const aCount = selections.filter(s => s === 'a').length;
  const bCount = selections.filter(s => s === 'b').length;
  const latex = `a^{${aCount}} b^{${bCount}}`;
  return (
    <div data-component-name="TermDisplay" style={{ fontSize: 24, margin: '16px 0' }}>
      <span>Term: </span>
      <MathDisplay latex={latex} />
    </div>
  );
};

export default TermDisplay;
