import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface TopAppBarProps {
  label: string
  onMenuClick?: () => void
}

export function TopAppBar({ label, onMenuClick }: TopAppBarProps) {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default TopAppBar;