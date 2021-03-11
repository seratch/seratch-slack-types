export interface SubteamUpdatedPayload {
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
    subteam?:  Subteam;
    event_ts?: string;
}

export interface Subteam {
    id?:                    string;
    team_id?:               string;
    is_usergroup?:          boolean;
    is_subteam?:            boolean;
    name?:                  string;
    description?:           string;
    handle?:                string;
    is_external?:           boolean;
    date_create?:           number;
    date_update?:           number;
    date_delete?:           number;
    auto_provision?:        boolean;
    enterprise_subteam_id?: string;
    created_by?:            string;
    updated_by?:            string;
    prefs?:                 Prefs;
    users?:                 string[];
    channel_count?:         number;
    user_count?:            number;
    deleted_by?:            string;
}

export interface Prefs {
    channels?: string[];
    groups?:   string[];
}
