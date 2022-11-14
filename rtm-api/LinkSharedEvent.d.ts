export interface LinkSharedEvent {
    type?:               string;
    channel?:            string;
    user?:               string;
    message_ts?:         string;
    thread_ts?:          string;
    links?:              Link[];
    is_bot_user_member?: boolean;
    unfurl_id?:          string;
    source?:             string;
    event_ts?:           string;
}

export interface Link {
    domain?: string;
    url?:    string;
}
