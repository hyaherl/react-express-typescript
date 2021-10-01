import React, { useState } from 'react';
import BoardEdit from '../../components/board/BoardEdit';
import { Axios } from '../../util/Axios';

function BoardCreateContainer({ linkPage }: any) {
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

    const createBoard = () => {
        Axios.post('/board/add', {
            title: title,
            content: content,
        }).then(res => {
            console.log(res.data);
            linkPage('/board');
        });
    };

    return (
        <div>
            <BoardEdit formChange={formChange} saveBoard={createBoard} type={'Create'} boardForm={boardForm} />
        </div>
    );
}

export default BoardCreateContainer;
