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
    entity?:      Actor;
    context?:     Context;
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

export interface ResponseMetadata {
    next_cursor?: string;
}
