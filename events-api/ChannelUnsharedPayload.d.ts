export interface ChannelUnsharedPayload {
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
    type?:                         string;
    previously_connected_team_id?: string;
    channel?:                      string;
    is_ext_shared?:                boolean;
    event_ts?:                     string;
}
