export interface GroupDeletedEvent {
    type?:         string;
    channel?:      string;
    date_deleted?: number;
    actor_id?:     string;
    event_ts?:     string;
}
