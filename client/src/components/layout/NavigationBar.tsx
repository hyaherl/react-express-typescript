import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

interface NavigationBarProps {
    user: any;
    logout: () => void;
}

function NavigationBar({ user, logout }: NavigationBarProps) {
    const classes = useStyles();
    const history = useHistory();

    const linkPage = (path: string) => {
        history.push(path);
    };

    const signOut = () => {
        logout();
        linkPage('/');
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} onClick={() => linkPage('/')}>
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
        </div>
    );
}

export default NavigationBar;
