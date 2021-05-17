declare interface DatabaseUserColumn{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    type: string;
}

declare interface DatabaseSchoolColumn{
    id: number;
    name: string;
    managerId: number;
    private: number;
    join_code: string;
}