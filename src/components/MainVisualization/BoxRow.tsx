import React from 'react';
import Box from './Box';

/**
 * BoxRow component
 * Renders a row of n Box components for the main visualization.
 */
const BoxRow: React.FC<{
  n: number;
  selections: ("a"|"b")[];
  setSelections: (s: ("a"|"b")[]) => void;
}> = ({ n, selections, setSelections }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
      {[...Array(n)].map((_, i) => (
        <Box
          key={i}
          value={selections[i]}
          onSelect={val => {
            const newSelections = [...selections];
            newSelections[i] = val;
            setSelections(newSelections);
          }}
        />
      ))}
    </div>
  );
};

export default BoxRow;
