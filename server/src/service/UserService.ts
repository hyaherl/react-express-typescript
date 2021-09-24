import { User } from '../model/User';

const createUser = (email: string, password: string) => {
    const user = new User();
    user.email = email;
    user.password = password;
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

const updateUser = async (id: number, password: string) => {
    const user = await User.findOne({ id: id });
    user.password = password;
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
