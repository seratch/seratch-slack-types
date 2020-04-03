export interface AdminTeamsAdminsListResponse {
    ok?:                boolean;
    admin_ids?:         string[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
