import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { id: 'anasayfa', label: 'Ana Sayfa' },
    { id: 'hakkimda', label: 'Hakkımda' },
    { id: 'projeler', label: 'Projeler' },
    { id: 'yetenekler', label: 'Yetenekler' },
    { id: 'iletisim', label: 'İletişim' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // AppBar yüksekliği
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          sx={{ cursor: 'pointer' }}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolyo
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {menuItems.map((item) => (
                <Button
                  color="inherit"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Bu boşluk fixed navbar'ın altındaki içeriğin görünmesini sağlar */}
    </>
  );
};

export default Navbar;
