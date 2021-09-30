import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Board } from '../../interface';

interface BoardListProps {
    boardList: Board[];
    linkPage: any;
}

function BoardList({ boardList, linkPage }: BoardListProps) {
    return (
        <Box>
            <h1>Board List</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Hit</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Create At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {boardList.map(boardList => (
                            <TableRow
                                key={boardList.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => linkPage(`/board/${boardList.id}`)}
                            >
                                <TableCell component="th" scope="row">
                                    {boardList.id}
                                </TableCell>
                                <TableCell>{boardList.title}</TableCell>
                                <TableCell>{boardList.hit}</TableCell>
                                <TableCell>{boardList.userId}</TableCell>
                                <TableCell>{boardList.createdAt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default BoardList;
