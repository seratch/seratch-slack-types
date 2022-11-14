export interface OpenidConnectTokenResponse {
    ok?:            boolean;
    warning?:       string;
    error?:         string;
    needed?:        string;
    provided?:      string;
    access_token?:  string;
    token_type?:    string;
    id_token?:      string;
    refresh_token?: string;
    expires_in?:    number;
}
