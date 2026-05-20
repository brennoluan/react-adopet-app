declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.css' {
    const content: string;
    export default content;
}

declare module 'simple-auth-storage' {
    import type {User} from "./src/types";
    export const generateToken: () => string;
    export const saveUser: (user: User, token: string) => void;
    export const getUser: () => User | null;
    export const isLoggedIn: () => boolean;
}