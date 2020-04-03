export interface LinkSharedPayload {
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
    type?:       string;
    user?:       string;
    channel?:    string;
    message_ts?: string;
    links?:      Link[];
}

export interface Link {
    url?:    string;
    domain?: string;
}
