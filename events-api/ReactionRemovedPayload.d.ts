export interface ReactionRemovedPayload {
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
