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
    workflow_builder?: string[];
    message?:          string[];
    barrier?:          string[];
    huddle?:           string[];
    anomaly?:          string[];
    slack_cli?:        string[];
}
