declare interface Socket{
    emit: (type: string, data: socketData) => void;
    on: (type: string, callback: (data: socketData) => void) => void;
}


declare type socketData = {[name: string]: string | number | boolean | socketData};
