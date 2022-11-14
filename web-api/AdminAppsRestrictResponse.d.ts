export interface AdminAppsRestrictResponse {
    ok?:       boolean;
    warning?:  string;
    error?:    string;
    needed?:   string;
    provided?: string;
}
