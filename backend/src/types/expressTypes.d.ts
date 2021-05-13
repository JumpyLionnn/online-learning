declare interface ExpressApp{
    use: (arg1: string, arg2: string) => void;
    get: (route: string, callback: (req: ExpressRequest, res: ExpressResponse) => void) => void;
    post: (route: string, callback: (req: ExpressRequest, res: ExpressResponse, next: () => void) => void,callback2?: (req: ExpressRequest, res: ExpressResponse, next: () => void) => void,callback3?: (req: ExpressRequest, res: ExpressResponse) => void) => void;
}

declare interface ExpressRequest{
    headers: {[name: string]: number | string | boolean};
    body: {[name: string]: number | string | boolean};
    [name: string]: {[name: string]: number | string | boolean};
}

declare interface ExpressResponse{
    sendFile: (path: string) => void;
    send: (text: string) => void;
    status: (status: number) => ExpressResponseStatus;
    json: (data?: {[name: string]: string | number | boolean}) => void;
}

declare interface ExpressResponseStatus{
    json: (data: {[name: string]: string | number | boolean}) => void;
    send: (text?: string) => void;
}