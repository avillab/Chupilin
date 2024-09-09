import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormPage from './pages/FormPage';
import AboutPage from './pages/AboutPage';
import CertificatePage from './pages/CertificatePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CertificateIcon from '@mui/icons-material/VerifiedUser';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(68, 117, 74)', // Custom color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <Divider />
      <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
        <ListItemIcon><InfoIcon /></ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <Divider />
      <ListItem button component={Link} to="/certificate" onClick={toggleDrawer(false)}>
        <ListItemIcon><CertificateIcon /></ListItemIcon>
        <ListItemText primary="Certificate" />
      </ListItem>
    </List>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static" sx={{ width: '100%' }}>
          <Toolbar sx={{ minHeight: '56px', padding: '0 16px', display: 'flex', justifyContent: 'space-between' }}>
            {/* Keep Toolbar flex and remove any extra space */}
            <Typography variant="h6" component="div" sx={{ padding: 0, margin: 0 }}>
              ComiCuestionario
            </Typography>
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{
                padding: '8px', // Control padding to reduce size
                margin: '0', // Remove any additional margin
                width: '40px', // Set fixed width
                height: '40px', // Set fixed height
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
          >
            {drawerList}
          </div>
        </Drawer>
        <Container maxWidth="md" style={{ marginTop: '20px', padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
