export interface SubteamCreatedPayload {
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
    type?:    string;
    subteam?: Subteam;
}

export interface Subteam {
    id?:           string;
    team_id?:      string;
    is_usergroup?: boolean;
    name?:         string;
    description?:  string;
    handle?:       string;
    is_external?:  boolean;
    date_create?:  number;
    date_update?:  number;
    date_delete?:  number;
    auto_type?:    string;
    created_by?:   string;
    updated_by?:   string;
    deleted_by?:   string;
    prefs?:        Prefs;
    user_count?:   string;
}

export interface Prefs {
    channels?: string[];
    groups?:   string[];
}
