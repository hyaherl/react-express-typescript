import { Box, AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface NavigationBarProps {
    token: string | null;
    setToken: any;
}

function NavigationBar({ token, setToken }: NavigationBarProps) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    const logout = () => {
        setToken(null);
        window.localStorage.removeItem('jwt');
        linkPage('/');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => linkPage('/')}>
                        Hello World
                    </Typography>
                    <Button color="inherit" onClick={() => linkPage('/board')}>
                        Board
                    </Button>
                    <Button color="inherit" onClick={() => linkPage('/user/profile')}>
                        Profile
                    </Button>
                    {token ? (
                        <Button color="inherit" onClick={() => logout()}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={() => linkPage('/auth/login')}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar;
