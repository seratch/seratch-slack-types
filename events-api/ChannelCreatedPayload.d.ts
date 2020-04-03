export interface ChannelCreatedPayload {
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
    channel?:  Channel;
    event_ts?: string;
}

export interface Channel {
    id?:              string;
    is_channel?:      boolean;
    name?:            string;
    name_normalized?: string;
    created?:         number;
    creator?:         string;
    is_shared?:       boolean;
    is_org_shared?:   boolean;
}
