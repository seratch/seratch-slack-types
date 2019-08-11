export interface ChannelUnsharedPayload {
    token?:        string;
    team_id?:      string;
    api_app_id?:   string;
    event?:        Event;
    type?:         string;
    authed_users?: string[];
    event_id?:     string;
    event_time?:   number;
}

export interface Event {
    type?:                         string;
    previously_connected_team_id?: string;
    channel?:                      string;
    is_ext_shared?:                boolean;
    event_ts?:                     string;
}
