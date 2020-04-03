export interface InviteRequestedPayload {
    token?:         string;
    enterprise_id?: string;
    team_id?:       string;
    api_app_id?:    string;
    type?:          string;
    authed_users?:  string[];
    authed_teams?:  string[];
    event_id?:      string;
    event_time?:    number;
    event?:         Event;
}

export interface Event {
    type?:           string;
    invite_request?: InviteRequest;
}

export interface InviteRequest {
    id?:             string;
    email?:          string;
    date_created?:   number;
    requester_ids?:  string[];
    channel_ids?:    string[];
    invite_type?:    string;
    real_name?:      string;
    date_expire?:    number;
    request_reason?: string;
    team?:           Team;
}

export interface Team {
    id?:     string;
    name?:   string;
    domain?: string;
}
