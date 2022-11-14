export interface AdminAppsUninstallResponse {
    ok?:       boolean;
    warning?:  string;
    error?:    string;
    needed?:   string;
    provided?: string;
}
