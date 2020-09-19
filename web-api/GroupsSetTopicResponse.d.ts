export interface GroupsSetTopicResponse {
    topic?:             string;
    ok?:                boolean;
    warning?:           string;
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    messages?: string[];
    warnings?: string[];
}
