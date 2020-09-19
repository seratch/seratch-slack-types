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
    name?:                    string;
    new_value?:               Value;
    previous_value?:          Value;
    expires_on?:              number;
    mobile_only?:             boolean;
    web_only?:                boolean;
    type?:                    string;
    is_workflow?:             boolean;
    inviter?:                 User;
    kicker?:                  User;
    shared_to?:               string;
    reason?:                  string;
    origin_team?:             string;
    target_team?:             string;
    is_internal_integration?: boolean;
    app_owner_id?:            string;
    bot_scopes?:              string[];
    new_scopes?:              string[];
    previous_scopes?:         string[];
    granular_bot_token?:      boolean;
    scopes?:                  string[];
    resolution?:              string;
    app_previously_resolved?: boolean;
    admin_app_id?:            string;
    bot_id?:                  string;
}

export interface Value {
    type?: string[];
}

export interface Entity {
    type?:       string;
    user?:       User;
    workspace?:  Location;
    enterprise?: Location;
    channel?:    Channel;
    file?:       File;
    app?:        App;
}

export interface App {
    id?:                    string;
    name?:                  string;
    is_distributed?:        boolean;
    is_directory_approved?: boolean;
    is_workflow_app?:       boolean;
    scopes?:                string[];
}

export interface Channel {
    id?:                            string;
    privacy?:                       string;
    name?:                          string;
    is_shared?:                     boolean;
    is_org_shared?:                 boolean;
    teams_shared_with?:             string[];
    original_connected_channel_id?: string;
}

export interface File {
    id?:       string;
    name?:     string;
    filetype?: string;
    title?:    string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
