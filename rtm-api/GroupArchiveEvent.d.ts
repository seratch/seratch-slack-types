export interface GroupArchiveEvent {
    type?:     string;
    channel?:  string;
    is_moved?: number;
    actor_id?: string;
    event_ts?: string;
}
