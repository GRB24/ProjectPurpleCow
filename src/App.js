import './App.css';
import Box from '@mui/material/Box';
import { CountButton } from './components/CountButton';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Box 
        style={{
          border: '1px solid #cdc3d5',
          borderRadius: '15px',
          padding: '10px', 
          backgroundColor: 'white',
          width: '580px'
        }}
      >
        <Header />
        <CountButton />
      </Box>
    </div>
  );
}

export default App;
