import React from 'react';
/**
 * BadgeDisplay component
 * Displays badges/achievements earned in challenges.
 */
const BadgeDisplay: React.FC<{ found: number; total: number }> = ({ found, total }) => {
  const allFound = found === total && total > 0;
  return (
    <div style={{ margin: '16px 0', textAlign: 'center' }}>
      Badges: {allFound ? '🏅 All combinations found!' : `[${'★'.repeat(found)}${' '.repeat(total - found)}]`}
    </div>
  );
};
export default BadgeDisplay;
