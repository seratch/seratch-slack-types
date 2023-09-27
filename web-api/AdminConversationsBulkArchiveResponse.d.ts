export interface AdminConversationsBulkArchiveResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    bulk_action_id?:    string;
    not_added?:         NotAdded[];
    response_metadata?: ResponseMetadata;
}

export interface NotAdded {
    channel_id?: string;
    errors?:     string[];
}

export interface ResponseMetadata {
    messages?: string[];
}
