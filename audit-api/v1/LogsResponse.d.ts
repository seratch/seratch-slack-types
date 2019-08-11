export interface LogsResponse {
    entries?:           Entry[];
    response_metadata?: ResponseMetadata;
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Entry {
    id?:          string;
    date_create?: number;
    action?:      string;
    actor?:       Actor;
    entity?:      Entity;
    context?:     Context;
    details?:     Details;
}

export interface Actor {
    type?: string;
    user?: User;
}

export interface User {
    id?:    string;
    name?:  string;
    email?: string;
    team?:  string;
}

export interface Context {
    location?:   Location;
    ua?:         string;
    ip_address?: string;
}

export interface Location {
    type?:   string;
    id?:     string;
    name?:   string;
    domain?: string;
}

export interface Details {
    is_internal_integration?: boolean;
    app_owner_id?:            string;
    new_scopes?:              string[];
    previous_scopes?:         string[];
    type?:                    string;
    inviter?:                 Inviter;
    new_value?:               string;
    previous_value?:          string;
    kicker?:                  User;
    installer_user_id?:       string;
    app_previously_approved?: boolean;
    old_scopes?:              string[];
    name?:                    string;
    bot_id?:                  string;
    permissions?:             Permission[];
}

export interface Inviter {
    type?:  string;
    user?:  User;
    id?:    string;
    name?:  string;
    email?: string;
}

export interface Permission {
    resource?: Resource;
    scopes?:   string[];
}

export interface Resource {
    type?:  string;
    grant?: Grant;
}

export interface Grant {
    type?:        string;
    resource_id?: string;
    wildcard?:    Wildcard;
}

export interface Wildcard {
    type?: string;
}

export interface Entity {
    type?:       string;
    app?:        App;
    user?:       User;
    usergroup?:  Usergroup;
    workspace?:  Location;
    enterprise?: Location;
    file?:       File;
    channel?:    Channel;
}

export interface App {
    id?:                    string;
    name?:                  string;
    is_distributed?:        boolean;
    is_directory_approved?: boolean;
    scopes?:                string[];
}

export interface Channel {
    id?:                string;
    privacy?:           string;
    name?:              string;
    is_shared?:         boolean;
    is_org_shared?:     boolean;
    teams_shared_with?: string[];
}

export interface File {
    id?:       string;
    name?:     string;
    filetype?: string;
    title?:    string;
}

export interface Usergroup {
    id?:   string;
    name?: string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
