export interface AdminInviteRequestsListResponse {
    ok?:              boolean;
    error?:           string;
    needed?:          string;
    provided?:        string;
    invite_requests?: string[];
}
