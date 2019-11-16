export interface AdminInviteRequestsApprovedListResponse {
    ok?:                boolean;
    approved_requests?: string[];
    error?:             string;
    needed?:            string;
    provided?:          string;
}
