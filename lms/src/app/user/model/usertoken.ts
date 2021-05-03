export interface UserToken
{
    id: Int16Array;
    username: string;
    email: string;
    roles:[string];
    tokenType: string;
    accessToken: string;
}