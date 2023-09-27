export interface AdminWorkflowsCollaboratorsAddResponse {
    ok?:                boolean;
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
    errors?:            Error[];
}

export interface Error {
    message?:  string;
    user?:     string;
    workflow?: string;
}

export interface ResponseMetadata {
    messages?: string[];
}
