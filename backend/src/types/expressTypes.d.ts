declare interface ExpressApp{
    get: (route: string, callback: (req: ExpressRequest, res: ExpressResponse) => void) => void;
    post: (route: string, callback: (req: ExpressRequest, res: ExpressResponse) => void, callback2: (req: ExpressRequest, res: ExpressResponse) => void) => void;
}

declare interface ExpressRequest{
    body: {[name: string]: number | string | boolean}
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