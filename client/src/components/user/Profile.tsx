import React from 'react';

function Profile({ user }: any) {
    const { email, nickname } = user || {};
    return (
        <div>
            <h1>Profile</h1>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Nickname</h3>
            <p>{nickname}</p>
        </div>
    );
}

export default Profile;
