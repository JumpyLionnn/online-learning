function templateHTML (htmlSrc: string, variables: {[name: string]: string}): string{
    return htmlSrc.replace(/<server>\s*[a-zA-Z\-]+\s*<\/server>/g, (serverTag: string): string => {
        const variableName = serverTag.substring(8, serverTag.length - 9).trim();
        if(variables[variableName]){
            return variables[variableName];
        }
        else{
            return "";
        }
    });
}