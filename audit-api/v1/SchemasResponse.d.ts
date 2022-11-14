export interface SchemasResponse {
    schemas?:  Schema[];
    ok?:       boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Schema {
    type?:              string;
    workspace?:         Enterprise;
    enterprise?:        Enterprise;
    user?:              User;
    file?:              File;
    channel?:           Channel;
    app?:               App;
    workflow?:          AccountTypeRole;
    barrier?:           Barrier;
    message?:           Message;
    usergroup?:         AccountTypeRole;
    role?:              Role;
    account_type_role?: AccountTypeRole;
}

export interface AccountTypeRole {
    id?:   string;
    name?: string;
}

export interface App {
    id?:                    string;
    name?:                  string;
    is_distributed?:        string;
    is_directory_approved?: string;
    is_workflow_app?:       string;
    scopes?:                string;
}

export interface Barrier {
    id?:                       string;
    primary_usergroup?:        string;
    barriered_from_usergroup?: string;
}

export interface Channel {
    id?:                string;
    name?:              string;
    privacy?:           string;
    is_shared?:         string;
    is_org_shared?:     string;
    teams_shared_with?: string;
}

export interface Enterprise {
    id?:     string;
    name?:   string;
    domain?: string;
}

export interface File {
    id?:       string;
    name?:     string;
    filetype?: string;
    title?:    string;
}

export interface Message {
    team?:      string;
    channel?:   string;
    timestamp?: string;
}

export interface Role {
    id?:   string;
    name?: string;
    type?: string;
}

export interface User {
    id?:    string;
    name?:  string;
    email?: string;
    team?:  string;
}
