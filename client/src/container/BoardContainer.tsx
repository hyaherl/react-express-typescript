import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import BoardDetailContainer from './board/BoardDetailContainer';
import BoardListContainer from './board/BoardListContainer';

function BoardContainer({ match }: any) {
    const history = useHistory();
    const linkPage = (path: string) => {
        history.push(path);
    };

    return (
        <div>
            <Route
                path={`${match.path}`}
                exact
                render={props => <BoardListContainer {...props} linkPage={linkPage} />}
            />
            <Route
                path={`${match.path}/:id`}
                exact
                render={props => <BoardDetailContainer {...props} linkPage={linkPage} />}
            />
        </div>
    );
}

export default BoardContainer;
