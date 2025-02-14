export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
}

export interface UserServiceError {
    code: string;
    message: string;
}