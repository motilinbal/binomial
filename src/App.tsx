import React, { useState } from 'react';
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
  const [n, setN] = useState(4);

  const handleStart = (newN: number) => {
    setN(newN);
    setScreen(Screen.Main);
  };

  const handleRestart = () => {
    setN(4);
    setScreen(Screen.Landing);
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
        {/* Simple navigation buttons for demonstration */}
        <div style={{ position: 'fixed', bottom: 10, left: 10 }}>
          {screen !== Screen.Landing && (
            <button onClick={() => setScreen(Screen.Landing)}>Landing</button>
          )}
          {screen !== Screen.Main && (
            <button onClick={() => setScreen(Screen.Main)}>Main</button>
          )}
          {screen !== Screen.Challenge && (
            <button onClick={() => setScreen(Screen.Challenge)}>Challenge</button>
          )}
          {screen !== Screen.Simulation && (
            <button onClick={() => setScreen(Screen.Simulation)}>Simulation</button>
          )}
          {screen !== Screen.Summary && (
            <button onClick={() => setScreen(Screen.Summary)}>Summary</button>
          )}
        </div>
      </GlobalStateProvider>
    </ThemeProvider>
  );
}

export default App;
