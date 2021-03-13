export class InvalidLoginException extends Error {
    constructor() { super("Password does not match given username"); }
}