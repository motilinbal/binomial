import React from 'react';
import SimulationControls from './SimulationControls';
import HistogramChart from './HistogramChart';
import ProbabilityComparison from './ProbabilityComparison';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { Button, Box, Tooltip, Typography, Slider } from '@mui/material';
import MathDisplay from '../shared/MathDisplay';

// Helper for binomial coefficient
function binomialCoeff(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (n - i + 1)) / i;
  }
  return res;
}

/**
 * SimulationMode component
 * Provides the simulation interface for running random trials and viewing results.
 */
const SimulationMode: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const { n, setN } = useGlobalState();
  const [trials, setTrials] = React.useState(1000);
  const [results, setResults] = React.useState<number[]>(Array(n + 1).fill(0)); // results[k] = count of a^k b^{n-k}
  const [running, setRunning] = React.useState(false);

  // Run simulation
  const runSimulation = () => {
    setRunning(true);
    const counts = Array(n + 1).fill(0);
    for (let t = 0; t < trials; t++) {
      // Randomly select a/b for each box
      let aCount = 0;
      for (let i = 0; i < n; i++) {
        if (Math.random() < 0.5) aCount++;
      }
      counts[aCount]++;
    }
    setResults(counts);
    setRunning(false);
  };

  // Reset simulation
  const handleReset = () => {
    setResults(Array(n + 1).fill(0));
    setTrials(1000);
  };

  // Theoretical probabilities
  const theoretical = Array.from({ length: n + 1 }, (_, k) => binomialCoeff(n, k) / Math.pow(2, n));

  // When n changes, reset results immediately to avoid out-of-bounds errors
  React.useEffect(() => {
    setResults(Array(n + 1).fill(0));
  }, [n]);

  // Defensive: do not render children until results.length matches n+1
  const safeToRender = results.length === n + 1;

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h5" textAlign="center">Simulation Mode</Typography>
        {onBack && <Button variant="outlined" onClick={onBack}>Back to Main</Button>}
      </Box>
      <Tooltip
        title={<span><MathDisplay latex={'a^k b^{n-k}'} fontSize={14} /> histogram for simulation results.</span>}
        placement="top"
        enterTouchDelay={0}
        leaveTouchDelay={2000}
      >
        <Box display="flex" alignItems="center" gap={2} my={2}>
          <Typography>n:</Typography>
          <Slider
            value={n}
            min={2}
            max={10}
            step={1}
            marks
            valueLabelDisplay="auto"
            onChange={(_, value) => typeof value === 'number' && setN && setN(value)}
            style={{ width: 180 }}
          />
        </Box>
      </Tooltip>
      {safeToRender && (
        <>
          <SimulationControls
            trials={trials}
            setTrials={setTrials}
            runSimulation={runSimulation}
            running={running}
            onReset={handleReset}
          />
          <Tooltip
            title={<span>Histogram of simulation results for each term <MathDisplay latex={'a^k b^{n-k}'} fontSize={14} /></span>}
            placement="top"
            enterTouchDelay={0}
            leaveTouchDelay={2000}
          >
            <Box my={2}>
              <HistogramChart results={results} n={n} />
            </Box>
          </Tooltip>
          <Tooltip
            title={<span>Compare the simulated (empirical) probabilities to the theoretical probabilities from the binomial theorem.</span>}
            placement="top"
            enterTouchDelay={0}
            leaveTouchDelay={2000}
          >
            <Box my={2}>
              <ProbabilityComparison results={results} trials={trials} theoretical={theoretical} />
            </Box>
          </Tooltip>
        </>
      )}
      <Box mt={2}>
        <Typography variant="body2" color="textSecondary">
          <b>How does this work?</b> For each trial, the app randomly selects "a" or "b" for each box. The histogram shows how often each term appears. The theoretical probability is given by the binomial coefficient divided by 2<sup>n</sup>.
        </Typography>
      </Box>
    </Box>
  );
};

export default SimulationMode;
