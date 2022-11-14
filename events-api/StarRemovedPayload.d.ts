export interface StarRemovedPayload {
    token?:                 string;
    team_id?:               string;
    enterprise_id?:         string;
    api_app_id?:            string;
    event?:                 Event;
    type?:                  string;
    event_id?:              string;
    event_time?:            number;
    authorizations?:        Authorization[];
    is_ext_shared_channel?: boolean;
    event_context?:         string;
}

export interface Authorization {
    enterprise_id?:         string;
    team_id?:               string;
    user_id?:               string;
    is_bot?:                boolean;
    is_enterprise_install?: boolean;
}

export interface Event {
    type?:     string;
    user?:     string;
    item?:     Item;
    event_ts?: string;
}

export interface Item {
    type?:        string;
    channel?:     string;
    message?:     Message;
    date_create?: number;
}

export interface Message {
    bot_id?:      string;
    type?:        string;
    text?:        string;
    user?:        string;
    ts?:          string;
    app_id?:      string;
    team?:        string;
    bot_profile?: BotProfile;
    permalink?:   string;
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
