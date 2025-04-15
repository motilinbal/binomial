import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

/**
 * SummaryPage component
 * Summarizes the user's journey and key binomial theorem insights.
 */
const SummaryPage: React.FC<{ onRestart?: () => void; onMain?: () => void }> = ({ onRestart, onMain }) => {
  return (
    <Box maxWidth={600} mx="auto" my={4} p={3} borderRadius={2} boxShadow={2} bgcolor="#fafafa">
      <Typography variant="h4" gutterBottom textAlign="center">Summary & Reflection</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="h6" gutterBottom>What you explored:</Typography>
      <ul>
        <li>Visualized the binomial expansion for different values of <b>n</b>.</li>
        <li>Practiced finding all combinations for a target term in Challenge Mode.</li>
        <li>Ran simulations to see how randomness matches theory in Simulation Mode.</li>
      </ul>
      <Typography variant="h6" gutterBottom>Key Insights:</Typography>
      <ul>
        <li>The number of ways to get a<sup>k</sup>b<sup>n-k</sup> is given by the binomial coefficient C(n, k).</li>
        <li>As you increase the number of trials in Simulation Mode, the frequencies approach the theoretical probabilities.</li>
        <li>Pascal's Triangle visualizes all possible combinations for each n.</li>
      </ul>
      <Typography variant="subtitle1" color="textSecondary" my={2}>
        <b>Did you notice?</b> The most probable term is usually in the middle (when n is even), and the distribution is symmetric!
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={3}>
        {onMain && <Button variant="contained" onClick={onMain}>Back to Main</Button>}
        {onRestart && <Button variant="outlined" color="secondary" onClick={onRestart}>Restart App</Button>}
      </Box>
    </Box>
  );
};

export default SummaryPage;
