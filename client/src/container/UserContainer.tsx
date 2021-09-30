import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Token, User } from '../interface';
import AuthRoute from '../util/AuthRoute';
import { Axios } from '../util/Axios';
import EditProfileContainer from './user/EditProfileContainer';
import ProfileContainer from './user/ProfileContainer';

function UserContainer({ match, token }: any) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    const [profile, setProfile] = useState<User>();
    const jwt: Token = jwtDecode(token);
    const { email } = jwt;

    const getUserProfile = () => {
        Axios.get('/user/profile', { params: { email: email } })
            .then(res => {
                setProfile(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserProfile();
    }, [token]);

    return (
        <div>
            <AuthRoute
                path={`${match.path}/profile`}
                exact
                render={(props: any) => <ProfileContainer {...props} profile={profile} linkPage={linkPage} />}
            />
            <AuthRoute
                path={`${match.path}/editProfile`}
                exact
                render={(props: any) => <EditProfileContainer {...props} profile={profile} linkPage={linkPage} />}
            />
        </div>
    );
}

export default UserContainer;
