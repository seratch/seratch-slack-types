export interface LinkSharedPayload {
    token?:                 string;
    enterprise_id?:         string;
    team_id?:               string;
    api_app_id?:            string;
    type?:                  string;
    authed_users?:          string[];
    authed_teams?:          string[];
    is_ext_shared_channel?: boolean;
    event_id?:              string;
    event_time?:            number;
    event_context?:         string;
    event?:                 Event;
}

export interface Event {
    type?:       string;
    channel?:    string;
    user?:       string;
    message_ts?: string;
    thread_ts?:  string;
    links?:      Link[];
    event_ts?:   string;
}

export interface Link {
    domain?: string;
    url?:    string;
}
