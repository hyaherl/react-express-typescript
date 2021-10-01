export interface Token {
    email: string;
    exp: number;
    iat: number;
}

export interface User {
    email: string;
    nickname: string;
}

export interface Board {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    hit: number;
    userId: number;
}
