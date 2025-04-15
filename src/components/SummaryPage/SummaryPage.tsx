import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

/**
 * SummaryPage component
 * Summarizes the user's journey and key binomial theorem insights.
 */
const SummaryPage: React.FC<{ onRestart?: () => void; onMain?: () => void }> = ({ onRestart, onMain }) => {
  return (
    <Box
      maxWidth={600}
      mx="auto"
      my={4}
      p={3}
      borderRadius={3}
      boxShadow={4}
      sx={{
        background: 'linear-gradient(135deg, #23272A 0%, #3a3f47 100%)',
        color: '#F3F6F9',
        border: '2px solid #5e81ac',
        boxShadow: '0 4px 24px 0 rgba(30,40,60,0.15)',
        overflow: 'hidden',
        textAlign: 'left', 
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: '#88c0d0', letterSpacing: 1, fontWeight: 700 }}>
        Summary & Reflection
      </Typography>
      <Divider sx={{ mb: 2, borderColor: '#5e81ac' }} />
      <Typography variant="h6" gutterBottom sx={{ color: '#b48ead', textAlign: 'left' }}>
        What you explored:
      </Typography>
      <ul style={{ marginLeft: 20, color: '#eceff4', fontSize: 17, textAlign: 'left' }}>
        <li>Visualized the binomial expansion for different values of <b>n</b>.</li>
        <li>Practiced finding all combinations for a target term in Challenge Mode.</li>
        <li>Ran simulations to see how randomness matches theory in Simulation Mode.</li>
      </ul>
      <Typography variant="h6" gutterBottom sx={{ color: '#b48ead', textAlign: 'left' }}>
        Key Insights:
      </Typography>
      <ul style={{ marginLeft: 20, color: '#eceff4', fontSize: 17, textAlign: 'left' }}>
        <li>The number of ways to get a<sup>k</sup>b<sup>n-k</sup> is given by the binomial coefficient C(n, k).</li>
        <li>As you increase the number of trials in Simulation Mode, the frequencies approach the theoretical probabilities.</li>
        <li>Pascal's Triangle visualizes all possible combinations for each n.</li>
      </ul>
      <Typography variant="subtitle1" my={2} sx={{ color: '#ebcb8b', background: 'rgba(76,86,106,0.2)', borderRadius: 2, px: 2, py: 1, fontWeight: 500, textAlign: 'left' }}>
        <b>Did you notice?</b> When the probability of "a" and "b" is equal (p = 0.5), the binomial distribution is symmetric and the most probable term(s) are in the middle. When p is not 0.5, the distribution becomes skewed!
      </Typography>
      <Box display="flex" justifyContent="flex-start" gap={2} mt={3}>
        {onMain && <Button variant="contained" sx={{ background: '#81a1c1', color: '#23272A', fontWeight: 600, '&:hover': { background: '#5e81ac' } }} onClick={onMain}>Back to Main</Button>}
        {onRestart && <Button variant="outlined" color="secondary" sx={{ borderColor: '#b48ead', color: '#b48ead', fontWeight: 600, '&:hover': { borderColor: '#a3be8c', color: '#a3be8c' } }} onClick={onRestart}>Restart App</Button>}
      </Box>
    </Box>
  );
};

export default SummaryPage;
