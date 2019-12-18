export interface AdminConversationsSetTeamsResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    response_metadata?: ResponseMetadata;
    channel?:           string;
}

export interface ResponseMetadata {
    messages?: string[];
}
