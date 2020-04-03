export interface GroupArchivePayload {
    token?:         string;
    team_id?:       string;
    enterprise_id?: string;
    api_app_id?:    string;
    event?:         Event;
    type?:          string;
    event_id?:      string;
    event_time?:    number;
    authed_users?:  string[];
}

export interface Event {
    type?:     string;
    channel?:  string;
    is_moved?: number;
    actor_id?: string;
    event_ts?: string;
}
