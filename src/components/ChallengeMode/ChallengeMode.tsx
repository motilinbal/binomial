import React from 'react';
import TargetTermDisplay from './TargetTermDisplay';
import ChallengeBoxRow from './ChallengeBoxRow';
import ProgressTracker from './ProgressTracker';
import FeedbackPanel from './FeedbackPanel';
import BadgeDisplay from './BadgeDisplay';
import { useGlobalState } from '../../context/GlobalStateProvider';
import Box from '../MainVisualization/Box';

// Helper to compute binomial coefficient
function binomialCoeff(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (n - i + 1)) / i;
  }
  return res;
}

/**
 * ChallengeMode component
 * Provides the challenge interface for finding all combinations for a target term.
 */
const ChallengeMode: React.FC = () => {
  const { n } = useGlobalState();
  // Pick random k for a^k b^{n-k}
  const [targetK, setTargetK] = React.useState(() => Math.floor(Math.random() * (n + 1)));
  const [selections, setSelections] = React.useState<("a"|"b")[]>(Array(n).fill(null));
  const [foundCombos, setFoundCombos] = React.useState<Set<string>>(new Set());
  const [feedback, setFeedback] = React.useState<string>("");

  // Reset challenge if n changes
  React.useEffect(() => {
    setTargetK(Math.floor(Math.random() * (n + 1)));
    setSelections(Array(n).fill(null));
    setFoundCombos(new Set());
    setFeedback("");
  }, [n]);

  // Helper to count 'a's
  const countA = selections.filter(x => x === 'a').length;

  // When user submits (all selected)
  const handleSubmit = () => {
    if (selections.includes(null)) {
      setFeedback('Please make a selection for each box.');
      return;
    }
    if (countA !== targetK) {
      setFeedback(`Incorrect: You need exactly ${targetK} a's.`);
      return;
    }
    // Canonical string for combination
    const comboStr = selections.join('');
    if (foundCombos.has(comboStr)) {
      setFeedback('Already found this combination! Try another.');
      return;
    }
    const newFound = new Set(foundCombos);
    newFound.add(comboStr);
    setFoundCombos(newFound);
    setFeedback('Correct!');
  };

  // Number of total valid combos
  const totalCombos = binomialCoeff(n, targetK);

  // Handler to reset selections
  const handleResetSelections = () => {
    setSelections(Array(n).fill(null));
    setFeedback("");
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Challenge Mode</h2>
      <TargetTermDisplay targetK={targetK} n={n} />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
        {[...Array(n)].map((_, i) => (
          <Box
            key={i}
            index={i}
            value={selections[i]}
            onSelect={val => {
              const newSelections = [...selections];
              newSelections[i] = val;
              setSelections(newSelections);
            }}
          />
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginRight: 8 }}>Submit</button>
      <button onClick={handleResetSelections}>Reset Selection</button>
      <ProgressTracker found={foundCombos.size} total={totalCombos} />
      <FeedbackPanel feedback={feedback} />
      <BadgeDisplay found={foundCombos.size} total={totalCombos} />
    </div>
  );
};

export default ChallengeMode;
