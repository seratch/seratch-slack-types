export interface OauthTokenResponse {
    ok?:         boolean;
    error?:      string;
    req_method?: string;
    needed?:     string;
    provided?:   string;
}
