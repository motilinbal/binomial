import React from 'react';
/**
 * FeedbackPanel component
 * Gives feedback for challenge attempts.
 */
const FeedbackPanel: React.FC<{ feedback: string }> = ({ feedback }) => (
  <div style={{ margin: '12px 0', color: feedback.startsWith('Correct') ? 'green' : 'red', textAlign: 'center' }}>
    {feedback}
  </div>
);
export default FeedbackPanel;
