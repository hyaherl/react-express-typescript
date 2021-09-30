import React from 'react';
import Profile from '../../components/user/Profile';

function ProfileContainer({ profile, linkPage }: any) {
    return (
        <div>
            <Profile profile={profile} editProfile={() => linkPage('/user/editProfile')} />
        </div>
    );
}

export default ProfileContainer;
