export interface AdminAppsRequestsListResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    app_requests?:      AppRequest[];
    response_metadata?: ResponseMetadata;
}

export interface AppRequest {
    id?:           string;
    app?:          App;
    user?:         User;
    team?:         Team;
    scopes?:       Scope[];
    message?:      string;
    date_created?: number;
}

export interface App {
    id?:                        string;
    name?:                      string;
    description?:               string;
    help_url?:                  string;
    privacy_policy_url?:        string;
    app_homepage_url?:          string;
    app_directory_url?:         string;
    is_app_directory_approved?: boolean;
    is_internal?:               boolean;
    additional_info?:           string;
}

export interface Scope {
    name?:         string;
    description?:  string;
    is_sensitive?: boolean;
    token_type?:   string;
}

export interface Team {
    id?:     string;
    name?:   string;
    domain?: string;
}

export interface User {
    id?:    string;
    name?:  string;
    email?: string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
