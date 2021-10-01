import { Box, Button, Paper } from '@mui/material';
import React from 'react';
import { Board } from '../../interface';

interface BoardDetailProps {
    board: Board;
    editBoard: () => void;
    removeBoard: () => void;
}

function BoardDetail({ board, editBoard, removeBoard }: BoardDetailProps) {
    return (
        <Box>
            <h1>Board Detail</h1>
            <Paper>
                <p>{board.id}</p>
                <p>{board.title}</p>
                <p>{board.content}</p>
                <Button onClick={editBoard}>Edit</Button>
                <Button onClick={removeBoard}>Delete</Button>
            </Paper>
        </Box>
    );
}

export default BoardDetail;
