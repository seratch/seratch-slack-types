export interface AdminUsersSessionInvalidateResponse {
    ok?:                boolean;
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    messages?: string[];
}
