export interface SchemasResponse {
    schemas?:  Schema[];
    ok?:       boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Schema {
    type?:       string;
    workspace?:  Enterprise;
    enterprise?: Enterprise;
    user?:       User;
    file?:       File;
    channel?:    Channel;
    app?:        App;
    workflow?:   Workflow;
    message?:    Message;
}

export interface App {
    id?:                    string;
    name?:                  string;
    is_distributed?:        string;
    is_directory_approved?: string;
    is_workflow_app?:       string;
    scopes?:                string;
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

export interface User {
    id?:    string;
    name?:  string;
    email?: string;
    team?:  string;
}

export interface Workflow {
    id?:   string;
    name?: string;
}
