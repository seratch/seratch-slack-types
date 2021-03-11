export interface MessageChannelTopicPayload {
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
    type?:         string;
    subtype?:      string;
    user?:         string;
    channel?:      string;
    channel_type?: string;
    text?:         string;
    topic?:        string;
    ts?:           string;
    event_ts?:     string;
}
