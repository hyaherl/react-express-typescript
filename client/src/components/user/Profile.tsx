import { Box, Button } from '@mui/material';
import React from 'react';

function Profile({ user, editProfile }: any) {
    const { email, nickname } = user || {};
    return (
        <Box>
            <h1>Profile</h1>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Nickname</h3>
            <p>{nickname}</p>
            <Button onClick={editProfile}>Edit Profile</Button>
        </Box>
    );
}

export default Profile;
