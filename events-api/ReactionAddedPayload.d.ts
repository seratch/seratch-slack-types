export interface ReactionAddedPayload {
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
    type?:      string;
    user?:      string;
    item?:      Item;
    reaction?:  string;
    item_user?: string;
    event_ts?:  string;
}

export interface Item {
    type?:    string;
    channel?: string;
    ts?:      string;
}
