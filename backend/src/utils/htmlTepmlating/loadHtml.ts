function loadHtml (path: string, variables: {[name: string]: string} = {}): string{
    return templateHTML(fs.readFileSync(path).toString(), variables);
}