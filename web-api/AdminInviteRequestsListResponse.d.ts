export interface AdminInviteRequestsListResponse {
    ok?:              boolean;
    invite_requests?: string[];
    error?:           string;
    needed?:          string;
    provided?:        string;
}
