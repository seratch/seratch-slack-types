export interface AppMentionEvent {
    type?:      string;
    user?:      string;
    subtype?:   string;
    text?:      string;
    ts?:        string;
    channel?:   string;
    event_ts?:  string;
    thread_ts?: string;
}
