import jwt from "jsonwebtoken";

export const verifyAuth = async (token: string) => {
    try {
        return jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!);
    } catch (e) {
        return null;
    }
};
