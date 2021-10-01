import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';

function BoardEdit({ formChange, saveBoard, type, boardForm }: any) {
    const { title, content } = boardForm;
    return (
        <Box>
            <h1>Board {type}</h1>
            <Grid container direction="column" alignItems="flex-start">
                <TextField id="title" name="title" label="Title" value={title} onChange={formChange} />
                <TextField id="content" name="content" label="content" value={content} onChange={formChange} />
                <Button onClick={saveBoard}>Save</Button>
            </Grid>
        </Box>
    );
}

export default BoardEdit;
