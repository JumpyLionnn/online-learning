function isValidPassword (password: string): boolean{
    return /[0-9a-zA-Z]/.test(password);
}