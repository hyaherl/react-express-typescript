import { Box } from '@mui/material';
import React from 'react';
import { Board } from '../../interface';

interface BoardDetailProps {
    board: Board;
}

function BoardDetail({ board }: BoardDetailProps) {
    return (
        <Box>
            <h1>Board Detail</h1>
            <p>{board.id}</p>
            <p>{board.title}</p>
            <p>{board.content}</p>
        </Box>
    );
}

export default BoardDetail;
