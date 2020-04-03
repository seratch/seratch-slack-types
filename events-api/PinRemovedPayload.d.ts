export interface PinRemovedPayload {
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
    type?:        string;
    user?:        string;
    channel_id?:  string;
    item?:        Item;
    item_user?:   string;
    pin_count?:   number;
    pinned_info?: PinnedInfo;
    has_pins?:    boolean;
    event_ts?:    string;
}

export interface Item {
    type?:       string;
    created?:    number;
    created_by?: string;
    channel?:    string;
    message?:    Message;
}

export interface Message {
    bot_id?:      string;
    type?:        string;
    text?:        string;
    user?:        string;
    ts?:          string;
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

export interface PinnedInfo {
    channel?:   string;
    pinned_by?: string;
    pinned_ts?: number;
}
