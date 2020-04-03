export interface DndUpdatedPayload {
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
    type?:       string;
    user?:       string;
    dnd_status?: DndStatus;
    event_ts?:   string;
}

export interface DndStatus {
    dnd_enabled?:       boolean;
    next_dnd_start_ts?: number;
    next_dnd_end_ts?:   number;
    snooze_enabled?:    boolean;
    snooze_endtime?:    number;
    snooze_remaining?:  number;
}
