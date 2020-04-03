export interface ImHistoryResponse {
    ok?:                    boolean;
    messages?:              Message[];
    has_more?:              boolean;
    channel_actions_count?: number;
    error?:                 string;
    needed?:                string;
    provided?:              string;
}

export interface Message {
    type?:              string;
    subtype?:           string;
    text?:              string;
    ts?:                string;
    username?:          string;
    bot_id?:            string;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Reply[];
    subscribed?:        boolean;
    user?:              string;
    bot_link?:          string;
}

export interface Reply {
    user?: string;
    ts?:   string;
}
