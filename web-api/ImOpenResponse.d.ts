export interface ImOpenResponse {
    ok?:                boolean;
    channel?:           Channel;
    warning?:           string;
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Channel {
    id?: string;
}

export interface ResponseMetadata {
    messages?: string[];
    warnings?: string[];
}
