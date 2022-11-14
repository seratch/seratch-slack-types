export interface AdminAppsClearResolutionResponse {
    ok?:       boolean;
    warning?:  string;
    error?:    string;
    needed?:   string;
    provided?: string;
}
