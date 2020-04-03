export interface SubteamMembersChangedEvent {
    type?:                 string;
    subteam_id?:           string;
    team_id?:              string;
    date_previous_update?: number;
    date_update?:          number;
    added_users?:          string[];
    added_users_count?:    number;
    removed_users?:        string[];
    removed_users_count?:  number;
    event_ts?:             string;
}
