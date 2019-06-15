export interface PinsListResponse {
    ok?:       boolean;
    items?:    string[];
    error?:    string;
    needed?:   string;
    provided?: string;
}
