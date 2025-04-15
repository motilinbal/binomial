import React from 'react';
import MathDisplay from '../shared/MathDisplay';

/**
 * ProbabilityComparison component
 * Shows a table comparing empirical and theoretical probabilities for each term.
 */
const ProbabilityComparison: React.FC<{
  results: number[];
  trials: number;
  theoretical: number[];
}> = ({ results, trials, theoretical }) => {
  const n = results.length - 1;
  return (
    <div style={{ margin: '24px auto', maxWidth: 500 }}>
      <h3>Empirical vs. Theoretical Probabilities</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc' }}>Term</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Empirical</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Theoretical</th>
          </tr>
        </thead>
        <tbody>
          {results.map((count, k) => (
            <tr key={k}>
              <td style={{ textAlign: 'center' }} data-component-name="ProbabilityComparison">
                <MathDisplay latex={`a^{${k}} b^{${n - k}}`} />
              </td>
              <td style={{ textAlign: 'center' }}>{(count / trials).toFixed(4)}</td>
              <td style={{ textAlign: 'center' }}>{theoretical[k].toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProbabilityComparison;
