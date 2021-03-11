export interface CallRejectedPayload {
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
    type?:               string;
    call_id?:            string;
    user_id?:            string;
    channel_id?:         string;
    external_unique_id?: string;
}