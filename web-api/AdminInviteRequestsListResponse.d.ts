export interface AdminInviteRequestsListResponse {
    ok?:              boolean;
    invite_requests?: InviteRequest[];
    error?:           string;
    needed?:          string;
    provided?:        string;
}

export interface InviteRequest {
    id?:             string;
    email?:          string;
    date_created?:   number;
    requester_ids?:  string[];
    channel_ids?:    string[];
    invite_type?:    string;
    request_reason?: string;
    date_expire?:    number;
}
