export interface AdminConversationsBulkMoveResponse {
    ok?:                boolean;
    bulk_action_id?:    string;
    not_added?:         NotAdded[];
    error?:             string;
    needed?:            string;
    provided?:          string;
    response_metadata?: ResponseMetadata;
}

export interface NotAdded {
    channel_id?: string;
    errors?:     string[];
}

export interface ResponseMetadata {
    messages?: string[];
}
