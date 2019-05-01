export interface AppRateLimitedPayload {
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
    type?:                string;
    token?:               string;
    team_id?:             string;
    minute_rate_limited?: number;
    api_app_id?:          string;
}
