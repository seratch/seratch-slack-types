export interface DndUpdatedEvent {
    type?:       string;
    user?:       string;
    dnd_status?: DndStatus;
    event_ts?:   string;
}

export interface DndStatus {
    dnd_enabled?:       boolean;
    snooze_remaining?:  number;
    next_dnd_start_ts?: number;
    next_dnd_end_ts?:   number;
    snooze_enabled?:    boolean;
    snooze_endtime?:    number;
}
