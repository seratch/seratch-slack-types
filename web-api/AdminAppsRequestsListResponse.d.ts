export interface AdminAppsRequestsListResponse {
    ok?:                boolean;
    warning?:           string;
    error?:             string;
    needed?:            string;
    provided?:          string;
    app_requests?:      AppRequest[];
    response_metadata?: ResponseMetadata;
}

export interface AppRequest {
    id?:                       string;
    app?:                      App;
    user?:                     User;
    team?:                     Team;
    scopes?:                   any[];
    previous_resolution?:      PreviousResolution;
    is_user_app_collaborator?: boolean;
    message?:                  string;
    date_created?:             number;
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
    icons?:                     Icons;
}

export interface Icons {
    image_32?:       string;
    image_36?:       string;
    image_48?:       string;
    image_64?:       string;
    image_72?:       string;
    image_96?:       string;
    image_128?:      string;
    image_192?:      string;
    image_512?:      string;
    image_1024?:     string;
    image_original?: string;
}

export interface PreviousResolution {
    status?: string;
    scopes?: any[];
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
    messages?:    string[];
    warnings?:    string[];
}
