import { Box, AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface NavigationBarProps {
    user: any;
    logout: () => void;
}

function NavigationBar({ user, logout }: NavigationBarProps) {
    const history = useHistory();

    const linkPage = (path: string) => {
        history.push(path);
    };

    const signOut = () => {
        logout();
        linkPage('/');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => linkPage('/')}>
                        Hello World
                    </Typography>
                    <Button color="inherit" onClick={() => linkPage('/profile')}>
                        Profile
                    </Button>
                    {user ? (
                        <Button color="inherit" onClick={() => signOut()}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={() => linkPage('/logIn')}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar;
