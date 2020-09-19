export interface AdminConversationsWhitelistListGroupsLinkedToChannelResponse {
    ok?:                boolean;
    error?:             string;
    group_ids?:         string[];
    response_metadata?: ResponseMetadata;
    warning?:           string;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    messages?: string[];
    warnings?: string[];
}
