export interface MessageMePayload {
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
    type?:         string;
    subtype?:      string;
    channel?:      string;
    username?:     string;
    bot_id?:       string;
    text?:         string;
    event_ts?:     string;
    ts?:           string;
    channel_type?: string;
}
