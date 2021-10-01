import React, { useCallback, useEffect, useState } from 'react';
import BoardList from '../../components/board/BoardList';
import { Board } from '../../interface';
import { Axios } from '../../util/Axios';

function BoardListContainer({ linkPage }: any) {
    const [boardList, setBoardList] = useState<Board[]>([]);

    const getBoardList = useCallback(() => {
        Axios.get('/board/list')
            .then(res => {
                setBoardList(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        getBoardList();
    }, [getBoardList]);
    return (
        <div>
            <BoardList boardList={boardList} linkPage={linkPage} />
        </div>
    );
}

export default BoardListContainer;
