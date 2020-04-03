export interface GroupRenamePayload {
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
    name?:            string;
    name_normalized?: string;
    is_group?:        boolean;
    created?:         number;
}
