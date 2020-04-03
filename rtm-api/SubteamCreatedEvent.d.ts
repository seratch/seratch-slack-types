export interface SubteamCreatedEvent {
    type?:     string;
    subteam?:  Subteam;
    event_ts?: string;
}

export interface Subteam {
    id?:                    string;
    enterprise_subteam_id?: string;
    team_id?:               string;
    is_subteam?:            boolean;
    is_usergroup?:          boolean;
    auto_provision?:        boolean;
    name?:                  string;
    description?:           string;
    handle?:                string;
    is_external?:           boolean;
    date_create?:           number;
    date_update?:           number;
    date_delete?:           number;
    auto_type?:             string;
    created_by?:            string;
    updated_by?:            string;
    deleted_by?:            string;
    prefs?:                 Prefs;
    user_count?:            string;
}

export interface Prefs {
    channels?: string[];
    groups?:   string[];
}
