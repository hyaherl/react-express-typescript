import { Box, AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../interface';

interface NavigationBarProps {
    user: User | null;
    setUser: any;
}

function NavigationBar({ user, setUser }: NavigationBarProps) {
    const history = useHistory();

    const linkPage = (path: string) => {
        history.push(path);
    };

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('jwt');
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
                    <Button color="inherit" onClick={() => linkPage('/user/profile')}>
                        Profile
                    </Button>
                    {user ? (
                        <Button color="inherit" onClick={() => logout()}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={() => linkPage('/user/login')}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar;
