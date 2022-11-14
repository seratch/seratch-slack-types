export interface AdminAppsApproveResponse {
    ok?:       boolean;
    warning?:  string;
    error?:    string;
    needed?:   string;
    provided?: string;
}
