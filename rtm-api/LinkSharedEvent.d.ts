export interface LinkSharedEvent {
    type?:       string;
    channel?:    string;
    user?:       string;
    message_ts?: string;
    thread_ts?:  string;
    links?:      Link[];
}

export interface Link {
    domain?: string;
    url?:    string;
}
