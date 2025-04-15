import React from 'react';
/**
 * ProgressTracker component
 * Shows progress and timer for challenges.
 */
const ProgressTracker: React.FC<{ found: number; total: number }> = ({ found, total }) => (
  <div style={{ margin: '16px 0', textAlign: 'center' }}>
    Progress: {found} / {total} combinations found
  </div>
);
export default ProgressTracker;
