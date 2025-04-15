import React from 'react';
import BoxRow from './BoxRow';
import TermDisplay from './TermDisplay';
import PascalTriangle from './PascalTriangle';
import ControlPanel from './ControlPanel';
import { useGlobalState } from '../../context/GlobalStateProvider';

/**
 * MainVisualization component
 * Displays the core binomial visualization: n boxes, term display, Pascal's Triangle, and controls.
 */
const MainVisualization: React.FC<{ onChallengeMode?: () => void; onSimulationMode?: () => void }> = ({ onChallengeMode, onSimulationMode }) => {
  const { n, theme } = useGlobalState();
  const [selections, setSelections] = React.useState<("a"|"b")[]>(Array(n).fill(null));

  // When n changes, reset selections
  React.useEffect(() => {
    setSelections(Array(n).fill(null));
  }, [n]);

  const handleReset = () => {
    setSelections(Array(n).fill(null));
  };

  const handleRandomize = () => {
    setSelections(Array.from({ length: n }, () => (Math.random() < 0.5 ? "a" : "b")));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{theme} Mode</h2>
      <BoxRow n={n} selections={selections} setSelections={setSelections} />
      <TermDisplay selections={selections} />
      <PascalTriangle n={n} selections={selections} />
      <ControlPanel onReset={handleReset} onRandomize={handleRandomize} onChallengeMode={onChallengeMode} onSimulationMode={onSimulationMode} />
    </div>
  );
};

export default MainVisualization;
