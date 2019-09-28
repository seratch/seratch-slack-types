export interface ReactionAddedPayload {
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
    type?:      string;
    user?:      string;
    reaction?:  string;
    item_user?: string;
    item?:      Item;
    event_ts?:  string;
}

export interface Item {
    type?:         string;
    channel?:      string;
    ts?:           string;
    file?:         string;
    file_comment?: string;
}
