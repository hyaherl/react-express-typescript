import { NextFunction, Request, Response } from 'express';
import { BoardService, UserService } from '../service';

const addBoard = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: create board :::');
    const title: string = req.body.title;
    const content: string = req.body.content;
    const userId: number = req.body.userId;

    try {
        await BoardService.createBoard(title, content, userId);
        return res.json({ message: 'success' });
    } catch (e) {
        console.log(e);
    }
};

const modifyBoard = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: edit board :::');
    const id: number = req.body.id;
    const title: string = req.body.title;
    const content: string = req.body.content;

    try {
        await BoardService.updateBoard(id, title, content);
        return res.json({ message: 'success' });
    } catch (e) {
        console.log(e);
    }
};

const getBoardList = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: get board list :::');

    try {
        const boardList = await BoardService.getBoardList();
        return res.json(boardList);
    } catch (e) {
        console.log(e);
    }
};

const getBoard = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: get board :::');
    const id: number = +req.query.id;

    try {
        const board = await BoardService.getBoardById(id);
        return res.json(board);
    } catch (e) {
        console.log(e);
    }
};

const removeBoard = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: remove board :::');
    const id: number = +req.query.id;

    try {
        await BoardService.removeBoard(id);
        return res.json({ message: 'success' });
    } catch (e) {
        console.log(e);
    }
};

export default {
    addBoard,
    modifyBoard,
    getBoardList,
    getBoard,
    removeBoard,
};
