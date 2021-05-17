declare interface DatabaseUserRow{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    type: string;
}

declare interface DatabaseSchoolRow{
    id: number;
    name: string;
    manager_id: number;
    private: number;
    join_code: string;
}

declare interface DatabaseSchoolMember{
    school_id: number;
    user_id: number;
    time_joined: number;
}