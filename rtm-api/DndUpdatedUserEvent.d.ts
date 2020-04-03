export interface DndUpdatedUserEvent {
    type?:       string;
    user?:       string;
    dnd_status?: DndStatus;
    event_ts?:   string;
}

export interface DndStatus {
    dnd_enabled?:       boolean;
    next_dnd_start_ts?: number;
    next_dnd_end_ts?:   number;
}
