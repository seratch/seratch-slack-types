export interface ActionsResponse {
    actions?:  Actions;
    ok?:       boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Actions {
    workspace_or_org?: string[];
    user?:             string[];
    file?:             string[];
    channel?:          string[];
    app?:              string[];
}
