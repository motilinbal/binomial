import React from 'react';
import MathDisplay from '../../components/shared/MathDisplay';
/**
 * TargetTermDisplay component
 * Shows the target term for the challenge (e.g., a^2b^3).
 */
const TargetTermDisplay: React.FC<{ targetK: number; n: number }> = ({ targetK, n }) => {
  const latex = `a^{${targetK}} b^{${n - targetK}}`;
  return (
    <div style={{ fontSize: 22, margin: '16px 0', textAlign: 'center' }} data-component-name="TargetTermDisplay">
      <span>Target Term: </span>
      <MathDisplay latex={latex} />
    </div>
  );
};
export default TargetTermDisplay;
