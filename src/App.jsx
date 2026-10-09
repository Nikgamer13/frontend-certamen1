import GuerrerosContainer from './containers/GuerrerosContainer';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function App() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1D4ED8' }}>
        <Toolbar>
          <Typography variant="h6">
            Anillo Único
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography variant="subtitle1">
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
      <GuerrerosContainer />
    </>
  );
}
export default App;




