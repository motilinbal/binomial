import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import MathDisplay from '../shared/MathDisplay';
import { TooltipProps } from 'recharts';

/**
 * CustomTooltip for histogram chart
 */
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div style={{ background: '#23272A', color: '#F3F6F9', padding: 8, borderRadius: 6, border: '1px solid #444' }}>
        <div style={{ fontSize: 14 }}>
          <MathDisplay latex={payload[0].payload.term.replace('a^', 'a^{').replace('b^', '} b^{') + '}'} fontSize={14} />
        </div>
        <div>Count: {payload[0].payload.count}</div>
      </div>
    );
  }
  return null;
};

/**
 * HistogramChart component
 * Displays histogram of simulation results.
 */
const HistogramChart: React.FC<{ results: number[]; n: number }> = ({ results, n }) => {
  // Prepare data for recharts
  const data = results.map((count, k) => ({
    k,
    // Provide both plain and LaTeX for possible future legend
    term: `a^${k}b^{${n - k}}`,
    termLatex: `a^{${k}} b^{${n - k}}`,
    count
  }));

  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="term">
            <Label value="Term" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis allowDecimals={false} label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="count" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistogramChart;
