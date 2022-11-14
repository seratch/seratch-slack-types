export interface FileDeletedEvent {
    type?:        string;
    file_id?:     string;
    channel_ids?: any[];
    event_ts?:    string;
}
