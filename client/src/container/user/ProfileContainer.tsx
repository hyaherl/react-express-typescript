import React from 'react';
import Profile from '../../components/user/Profile';

function ProfileContainer({ user }: any) {
    return (
        <div>
            <Profile user={user} />
        </div>
    );
}

export default ProfileContainer;
