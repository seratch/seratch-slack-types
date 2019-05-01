export interface DndUpdatedEvent {
    type?:       string;
    user?:       string;
    dnd_status?: DndStatus;
}

export interface DndStatus {
    dnd_enabled?:       boolean;
    next_dnd_start_ts?: number;
    next_dnd_end_ts?:   number;
    snooze_enabled?:    boolean;
    snooze_endtime?:    number;
}
