export interface AdminWorkflowsPermissionsLookupResponse {
    ok?:          boolean;
    permissions?: { [key: string]: Permission };
    error?:       string;
    needed?:      string;
    provided?:    string;
}

export interface Permission {
    complete?:    boolean;
    who_can_run?: WhoCanRun;
}

export interface WhoCanRun {
    permission_type?: string;
    user_ids?:        string[];
    channel_ids?:     string[];
    team_ids?:        string[];
    org_ids?:         string[];
}
