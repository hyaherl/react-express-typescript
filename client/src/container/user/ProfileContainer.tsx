import React from 'react';
import { useHistory } from 'react-router';
import Profile from '../../components/user/Profile';

function ProfileContainer({ user }: any) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    return (
        <div>
            <Profile user={user} editProfile={() => linkPage('/user/editProfile')} />
        </div>
    );
}

export default ProfileContainer;
