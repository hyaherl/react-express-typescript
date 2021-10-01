import React, { useCallback, useEffect, useState } from 'react';
import BoardDetail from '../../components/board/BoardDetail';
import { Board } from '../../interface';
import { Axios } from '../../util/Axios';

function BoardDetailContainer({ match, linkPage }: any) {
    const [board, setBoard] = useState<Board>({
        id: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        title: '',
        content: '',
        hit: 0,
        userId: 0,
    });

    const getBoard = useCallback(() => {
        Axios.get('/board/board', {
            params: {
                id: match.params.id,
            },
        })
            .then(res => {
                setBoard(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [match]);

    const editBoard = () => {
        linkPage(`/board/edit/${match.params.id}`);
    };

    const removeBoard = () => {
        Axios.delete('/board/board', {
            params: {
                id: match.params.id,
            },
        })
            .then(res => {
                console.log(res.data);
                linkPage('/board');
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    return (
        <div>
            <BoardDetail board={board} editBoard={editBoard} removeBoard={removeBoard} />
        </div>
    );
}

export default BoardDetailContainer;
