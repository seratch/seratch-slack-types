export interface AdminAppsRequestsCancelResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    response_metadata?: ResponseMetadata;
}

export interface ResponseMetadata {
    messages?: string[];
}
