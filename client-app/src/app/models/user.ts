export interface User {
    username: string;
    displayName: string;
    tempRole: string;
    token: string;
    image?: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayName?: string;
    username?: string;
}