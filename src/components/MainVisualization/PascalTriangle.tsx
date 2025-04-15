import React from 'react';

/**
 * PascalTriangle component
 * Shows the relevant row of Pascal's Triangle and highlights the current coefficient.
 */
function binomialCoeff(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = res * (n - i + 1) / i;
  }
  return res;
}

const PascalTriangle: React.FC<{ n: number; selections: ("a"|"b")[] }> = ({ n, selections }) => {
  const aCount = selections.filter(x => x === 'a').length;
  const row = Array.from({ length: n + 1 }, (_, k) => binomialCoeff(n, k));
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
      {row.map((val, k) => (
        <div
          key={k}
          style={{
            padding: '4px 12px',
            margin: '0 4px',
            borderRadius: 4,
            background: aCount === k ? '#1976d2' : '#eee',
            color: aCount === k ? '#fff' : '#222',
            fontWeight: aCount === k ? 'bold' : 'normal',
            fontSize: 20
          }}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

export default PascalTriangle;
