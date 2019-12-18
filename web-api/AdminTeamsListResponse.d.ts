export interface AdminTeamsListResponse {
    ok?:                boolean;
    teams?:             Team[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}

export interface Team {
    id?:              string;
    name?:            string;
    discoverability?: string;
    primary_owner?:   PrimaryOwner;
}

export interface PrimaryOwner {
    user_id?: string;
    email?:   string;
}
