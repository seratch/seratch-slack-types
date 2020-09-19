export interface GroupsSetPurposeResponse {
    ok?:                boolean;
    purpose?:           string;
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
