import { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import MainVisualization from './components/MainVisualization/MainVisualization';
import ChallengeMode from './components/ChallengeMode/ChallengeMode';
import SimulationMode from './components/SimulationMode/SimulationMode';
import SummaryPage from './components/SummaryPage/SummaryPage';
import { GlobalStateProvider } from './context/GlobalStateProvider';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import './App.css';

// Simple navigation enum
enum Screen {
  Landing,
  Main,
  Challenge,
  Simulation,
  Summary
}

// Define a custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#181A1B',
      paper: '#23272A',
    },
    text: {
      primary: '#F3F6F9',
      secondary: '#B0B8C1',
    },
    divider: '#333843',
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(24,26,27,0.85)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#23272A',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#23272A',
          color: '#F3F6F9',
        },
      },
    },
  },
});

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.Landing);

  const handleRestart = () => {
    setScreen(Screen.Landing);
  };

  const handleStart = () => {
    setScreen(Screen.Main);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStateProvider>
        {screen === Screen.Landing && (
          <LandingPage onStart={handleStart} />
        )}
        {screen === Screen.Main && (
          <MainVisualization
            onChallengeMode={() => setScreen(Screen.Challenge)}
            onSimulationMode={() => setScreen(Screen.Simulation)}
          />
        )}
        {screen === Screen.Challenge && (
          <ChallengeMode />
        )}
        {screen === Screen.Simulation && (
          <SimulationMode onBack={() => setScreen(Screen.Main)} />
        )}
        {screen === Screen.Summary && (
          <SummaryPage
            onRestart={handleRestart}
            onMain={() => setScreen(Screen.Main)}
          />
        )}
        {/* Consistent navigation buttons */}
        <div style={{ position: 'fixed', bottom: 10, left: 10, display: 'flex', gap: '8px' }}>
          <button onClick={() => setScreen(Screen.Landing)} disabled={screen === Screen.Landing}>Landing</button>
          <button onClick={() => setScreen(Screen.Main)} disabled={screen === Screen.Main}>Main</button>
          <button onClick={() => setScreen(Screen.Challenge)} disabled={screen === Screen.Challenge}>Challenge</button>
          <button onClick={() => setScreen(Screen.Simulation)} disabled={screen === Screen.Simulation}>Simulation</button>
          <button onClick={() => setScreen(Screen.Summary)} disabled={screen === Screen.Summary}>Summary</button>
        </div>
      </GlobalStateProvider>
    </ThemeProvider>
  );
}

export default App;
