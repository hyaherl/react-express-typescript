import { Board } from '../model/Board';
import { User } from '../model/User';

const createBoard = async (title: string, content: string, userId: number) => {
    const user = await User.findOne({ id: userId });
    const board = new Board();
    board.title = title;
    board.content = content;
    board.hit = 0;
    board.user = user;
    board.save();
};

const updateBoard = async (id: number, title: string, content: string) => {
    const board = await Board.findOne({ id: id });
    board.title = title;
    board.content = content;
    board.save();
};

const getBoardList = async () => {
    const boardList = await Board.find();
    return boardList;
};

const getBoardById = async (id: number) => {
    const board = await Board.findOne({ id: id });
    return board;
};

const removeBoard = async (id: number) => {
    const board = await Board.findOne({ id: id });
    board.remove();
};

export default {
    createBoard,
    updateBoard,
    getBoardList,
    getBoardById,
    removeBoard,
};
