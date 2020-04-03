export interface MessagePayload {
    token?:         string;
    team_id?:       string;
    enterprise_id?: string;
    api_app_id?:    string;
    event?:         Event;
    type?:          string;
    event_id?:      string;
    event_time?:    number;
    authed_users?:  string[];
    authed_teams?:  string[];
}

export interface Event {
    bot_id?:       string;
    type?:         string;
    text?:         string;
    user?:         string;
    ts?:           string;
    team?:         string;
    bot_profile?:  BotProfile;
    channel?:      string;
    event_ts?:     string;
    channel_type?: string;
}

export interface BotProfile {
    id?:      string;
    deleted?: boolean;
    name?:    string;
    updated?: number;
    app_id?:  string;
    icons?:   Icons;
    team_id?: string;
}

export interface Icons {
    image_36?: string;
    image_48?: string;
    image_72?: string;
}
