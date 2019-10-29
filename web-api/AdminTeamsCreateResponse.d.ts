export interface AdminTeamsCreateResponse {
    ok?:                boolean;
    error?:             string;
    response_metadata?: ResponseMetadata;
    team?:              string;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    messages?: string[];
}
