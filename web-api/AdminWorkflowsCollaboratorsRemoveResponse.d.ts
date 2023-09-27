export interface AdminWorkflowsCollaboratorsRemoveResponse {
    ok?:       boolean;
    error?:    string;
    errors?:   Error[];
    needed?:   string;
    provided?: string;
}

export interface Error {
    user?:     string;
    workflow?: string;
    message?:  string;
}
