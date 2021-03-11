export interface AuthTeamsListResponse {
    ok?:                boolean;
    teams?:             Team[];
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}

export interface Team {
    id?:   string;
    name?: string;
}
