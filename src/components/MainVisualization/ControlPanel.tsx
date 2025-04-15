import React from 'react';
import { Button, Stack } from '@mui/material';

/**
 * ControlPanel component
 * Provides buttons for Reset, Randomize, Challenge Mode, and Simulation Mode.
 */
const ControlPanel: React.FC<{
  onReset?: () => void;
  onRandomize?: () => void;
  onChallengeMode?: () => void;
  onSimulationMode?: () => void;
}> = ({ onReset, onRandomize, onChallengeMode, onSimulationMode }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Button variant="outlined" onClick={onReset}>Reset</Button>
      <Button variant="outlined" onClick={onRandomize}>Randomize</Button>
      <Button variant="contained" color="secondary" onClick={onChallengeMode}>Challenge Mode</Button>
      <Button variant="contained" color="success" onClick={onSimulationMode}>Simulation</Button>
    </Stack>
  );
};

export default ControlPanel;
