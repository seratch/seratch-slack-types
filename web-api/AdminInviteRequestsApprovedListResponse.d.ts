export interface AdminInviteRequestsApprovedListResponse {
    ok?:                boolean;
    approved_requests?: ApprovedRequest[];
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface ApprovedRequest {
    invite_request?: InviteRequest;
    approved_by?:    ApprovedBy;
    invite?:         Invite;
}

export interface ApprovedBy {
    actor_type?: string;
    actor_id?:   string;
}

export interface Invite {
    id?:                 string;
    email?:              string;
    inviter_id?:         string;
    date_created?:       number;
    is_bouncing?:        boolean;
    invite_preferences?: InvitePreferences;
}

export interface InvitePreferences {
    is_restricted?:       boolean;
    is_ultra_restricted?: boolean;
    channel_ids?:         string[];
    is_domain_matched?:   boolean;
}

export interface InviteRequest {
    id?:            string;
    email?:         string;
    date_created?:  number;
    requester_ids?: string[];
    channel_ids?:   string[];
    invite_type?:   string;
}
