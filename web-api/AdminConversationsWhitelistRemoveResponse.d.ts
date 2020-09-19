export interface AdminConversationsWhitelistRemoveResponse {
    ok?:                boolean;
    error?:             string;
    response_metadata?: ResponseMetadata;
    warning?:           string;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    messages?: string[];
    warnings?: string[];
}
