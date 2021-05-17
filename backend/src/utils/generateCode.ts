function generateCode (length: number): string{
    let code = "";
    for(let  i = 0; i < length; i++){
        code += codeString.charAt(Random.randint(codeString.length));
    }
    return code;
}