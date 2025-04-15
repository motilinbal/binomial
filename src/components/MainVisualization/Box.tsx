import React from 'react';
import TokenSelector from './TokenSelector';

/**
 * Box component
 * Represents a single (a+b) box, allowing selection of 'a' or 'b'.
 */
const Box: React.FC<{
  index: number;
  value: "a" | "b" | null;
  onSelect: (val: "a" | "b") => void;
}> = ({ index, value, onSelect }) => {
  return (
    <div style={{ margin: '0 12px', padding: 8, border: '1px solid #ccc', borderRadius: 6, minWidth: 40, minHeight: 60 }}>
      <TokenSelector value={value} onSelect={onSelect} />
    </div>
  );
};

export default Box;
