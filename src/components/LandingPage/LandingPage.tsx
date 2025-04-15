import React from 'react';
import { Button, Typography, Box, Select, FormControl, InputLabel, MenuItem } from '@mui/material';

/**
 * LandingPage component
 * Allows user to select n (number of factors) and start the app.
 */
const LandingPage: React.FC<{ onStart: (n: number) => void }> = ({ onStart }) => {
  const [n, setN] = React.useState(4);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Typography variant="h3" gutterBottom>Binomial Theorem Interactive Visualization</Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2, maxWidth: 400, textAlign: 'center' }}>
        Explore the binomial theorem visually. Choose the number of factors and start your journey!
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-n-label">n</InputLabel>
        <Select
          labelId="select-n-label"
          value={n}
          label="n"
          onChange={e => setN(Number(e.target.value))}
        >
          {[2,3,4,5,6,7,8,9,10].map(val => (
            <MenuItem key={val} value={val}>{val}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => onStart(n)}>
        Start
      </Button>
    </Box>
  );
};

export default LandingPage;
