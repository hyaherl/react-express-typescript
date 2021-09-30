export interface Token {
    email: string;
    exp: number;
    iat: number;
}

export interface User {
    email: string;
    nickname: string;
}
