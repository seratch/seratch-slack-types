export interface AdminUsersSessionListResponse {
    ok?:                boolean;
    error?:             string;
    active_sessions?:   ActiveSession[];
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface ActiveSession {
    user_id?:    string;
    session_id?: number;
    team_id?:    string;
    created?:    Created;
}

export interface Created {
    device_hardware?:      string;
    os?:                   string;
    os_version?:           string;
    slack_client_version?: string;
    ip?:                   string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
