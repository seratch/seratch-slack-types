export interface MemberLeftChannelPayload {
    token?:         string;
    team_id?:       string;
    enterprise_id?: string;
    api_app_id?:    string;
    event?:         Event;
    type?:          string;
    event_id?:      string;
    event_time?:    number;
    authed_users?:  string[];
    authed_teams?:  string[];
}

export interface Event {
    type?:         string;
    user?:         string;
    channel?:      string;
    channel_type?: string;
    team?:         string;
    event_ts?:     string;
}
