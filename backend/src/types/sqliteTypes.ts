declare interface DataBase{
    run: (script: string, parameters?: (string | number | boolean)[]) => void;
    get: (script: string, parameters?: (string | number | boolean)[]) => {[name: string]: number | string | boolean} | undefined;
    getAll: (script: string, parameters?: (string | number | boolean)[]) => {[name: string]: number | string | boolean}[] | [];
}