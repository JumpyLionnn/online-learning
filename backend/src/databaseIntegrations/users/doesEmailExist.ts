async function doesEmailExist (email: string): Promise<boolean>{
    return await db.get("SELECT email FROM users WHERE email = ?", [email]) !== undefined;
}