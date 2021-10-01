import React, { useCallback, useEffect, useState } from 'react';
import BoardEdit from '../../components/board/BoardEdit';
import { Axios } from '../../util/Axios';

function BoardEditContainer({ match, linkPage }: any) {
    const [boardForm, setBoardForm] = useState({
        title: '',
        content: '',
    });
    const { title, content } = boardForm;

    const formChange = (e: any) => {
        const { name, value } = e.target;
        setBoardForm({
            ...boardForm,
            [name]: value,
        });
    };

    const getBoard = useCallback(() => {
        Axios.get('/board/board', {
            params: {
                id: match.params.id,
            },
        })
            .then(res => {
                setBoardForm({
                    title: res.data.title,
                    content: res.data.content,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [match]);

    const editBoard = () => {
        Axios.put('/board/modify', {
            id: match.params.id,
            title: title,
            content: content,
        }).then(res => {
            console.log(res.data);
            linkPage(`/board/detail/${match.params.id}`);
        });
    };

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    return (
        <div>
            <BoardEdit formChange={formChange} saveBoard={editBoard} type={'Edit'} boardForm={boardForm} />
        </div>
    );
}

export default BoardEditContainer;
