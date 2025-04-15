import React from 'react';
import { Button, TextField, Box, Tooltip } from '@mui/material';

/**
 * SimulationControls component
 * Controls for running simulations (number of trials, run button, reset button).
 */
const SimulationControls: React.FC<{
  trials: number;
  setTrials: (n: number) => void;
  probability: number;
  setProbability: (p: number) => void;
  runSimulation: () => void;
  running: boolean;
  onReset?: () => void;
}> = ({ trials, setTrials, probability, setProbability, runSimulation, running, onReset }) => (
  <Box display="flex" alignItems="center" justifyContent="center" gap={2} my={2}>
    <Tooltip title="Number of times to repeat the simulation (more trials = more accuracy)">
      <TextField
        label="Trials"
        type="number"
        value={trials}
        onChange={e => setTrials(Number(e.target.value))}
        inputProps={{ min: 1, max: 100000 }}
        size="small"
        style={{ width: 120 }}
      />
    </Tooltip>
    <Tooltip title="Probability of choosing 'a' (p)">
      <TextField
        label="P(a)"
        type="number"
        value={probability}
        onChange={e => setProbability(Math.max(0, Math.min(1, Number(e.target.value))))}
        inputProps={{ min: 0, max: 1, step: 0.01 }}
        size="small"
        style={{ width: 100 }}
      />
    </Tooltip>
    <Tooltip title="Run the simulation and update results">
      <Button variant="contained" color="primary" onClick={runSimulation} disabled={running}>
        {running ? 'Running...' : 'Run Simulation'}
      </Button>
    </Tooltip>
    {onReset && (
      <Tooltip title="Reset trials and results">
        <Button variant="outlined" color="secondary" onClick={onReset} disabled={running}>
          Reset
        </Button>
      </Tooltip>
    )}
  </Box>
);
export default SimulationControls;
