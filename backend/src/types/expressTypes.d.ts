declare interface ExpressApp{
    get: (route: string, callback: (req, res) => void) => void;
}