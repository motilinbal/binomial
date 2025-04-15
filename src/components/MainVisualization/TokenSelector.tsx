import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

/**
 * TokenSelector component
 * Allows user to select between 'a' and 'b' for a box.
 */
const TokenSelector: React.FC<{
  value: "a" | "b" | null;
  onSelect: (val: "a" | "b") => void;
}> = ({ value, onSelect }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(_, val) => val && onSelect(val)}
      size="small"
    >
      <ToggleButton value="a">a</ToggleButton>
      <ToggleButton value="b">b</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TokenSelector;
