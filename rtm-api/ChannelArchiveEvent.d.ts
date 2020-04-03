export interface ChannelArchiveEvent {
    type?:     string;
    channel?:  string;
    user?:     string;
    is_moved?: number;
    event_ts?: string;
}
