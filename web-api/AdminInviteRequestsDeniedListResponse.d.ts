export interface AdminInviteRequestsDeniedListResponse {
    ok?:              boolean;
    denied_requests?: string[];
    error?:           string;
    needed?:          string;
    provided?:        string;
}
