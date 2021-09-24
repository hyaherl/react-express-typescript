import { User } from '../model/User';

const createUser = (email: string, password: string, nickname: string) => {
    const user = new User();
    user.email = email;
    user.password = password;
    user.nickname = nickname;
    user.save();
};

const getUserByEmail = async (email: string) => {
    const user = await User.findOne({ email: email });
    return user;
};

const getUserById = async (id: number) => {
    const user = await User.findOne({ id: id });
    return user;
};

const updateUser = async (id: number, password: string, nickname: string) => {
    const user = await User.findOne({ id: id });
    user.password = password;
    user.nickname = nickname;
    user.save();
};

const removeUser = async (id: number) => {
    const user = await User.findOne({ id: id });
    user.remove();
};

export default {
    createUser,
    getUserByEmail,
    getUserById,
    updateUser,
    removeUser,
};
