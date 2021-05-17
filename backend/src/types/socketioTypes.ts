declare interface Socket{
    emit: (type: string, data: socketData) => void;
    on: (type: string, callback: (data: socketData) => void) => void;
    disconnect: () => void;
    join: (room: string) => void;
    leave: (room: string) => void;
    id: string;
    handshake: Handshake;
    userId: number;
}


declare type socketData = {[name: string]: string | number | boolean | socketData};

declare interface Handshake{
    query: {[name: string]: string | number | boolean};
}

