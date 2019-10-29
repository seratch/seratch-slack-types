export interface AdminTeamsAdminsListResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    admin_ids?:         string[];
    response_metadata?: ResponseMetadata;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
