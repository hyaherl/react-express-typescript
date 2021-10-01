import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import BoardCreateContainer from './board/BoardCreateContainer';
import BoardDetailContainer from './board/BoardDetailContainer';
import BoardEditContainer from './board/BoardEditContainer';
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
                path={`${match.path}/detail/:id`}
                exact
                render={props => <BoardDetailContainer {...props} linkPage={linkPage} />}
            />
            <Route
                path={`${match.path}/edit`}
                exact
                render={props => <BoardCreateContainer {...props} linkPage={linkPage} />}
            />
            <Route
                path={`${match.path}/edit/:id`}
                exact
                render={props => <BoardEditContainer {...props} linkPage={linkPage} />}
            />
        </div>
    );
}

export default BoardContainer;
